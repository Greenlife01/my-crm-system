/* ===== State ===== */
let leads = [];
let currentLeadId = null;

const STATUSES = ['New', 'Contacted', 'Proposal Sent', 'Meeting Booked', 'Closed'];

const STATUS_COLORS = {
  'New':           { fill: '#9ca3af', badge: 'badge-New' },
  'Contacted':     { fill: '#2563eb', badge: 'badge-Contacted' },
  'Proposal Sent': { fill: '#d97706', badge: 'badge-Proposal' },
  'Meeting Booked':{ fill: '#7c3aed', badge: 'badge-Meeting' },
  'Closed':        { fill: '#16a34a', badge: 'badge-Closed' },
};

/* ===== API helpers ===== */
async function api(method, path, body) {
  const res = await fetch(path, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

/* ===== Toast ===== */
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = 'none'; }, duration);
}

/* ===== Navigation ===== */
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${view}`).classList.add('active');
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});

/* ===== Formatting helpers ===== */
function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso.endsWith('Z') ? iso : iso + 'Z');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function badgeHtml(status) {
  const c = STATUS_COLORS[status] || STATUS_COLORS['New'];
  return `<span class="badge ${c.badge}">${status}</span>`;
}

function emailDotsHtml(lead) {
  const intro = lead.intro_email_sent ? 'sent' : '';
  const followup = lead.followup_email_sent ? 'sent' : '';
  return `
    <div class="email-dots">
      <span class="email-dot ${intro}" title="Intro email${intro ? ' sent' : ' pending'}"></span>
      <span class="email-dot ${followup}" title="Follow-up email${followup ? ' sent' : ' pending'}"></span>
    </div>`;
}

/* ===== Dashboard ===== */
async function loadDashboard() {
  try {
    const stats = await api('GET', '/api/stats');
    document.getElementById('statTotal').textContent = stats.total;
    document.getElementById('statEmails').textContent = stats.emailsSent;

    const statusMap = {};
    STATUSES.forEach(s => { statusMap[s] = 0; });
    stats.byStatus.forEach(r => { statusMap[r.status] = r.count; });

    document.getElementById('statNew').textContent = statusMap['New'] || 0;
    document.getElementById('statContacted').textContent = statusMap['Contacted'] || 0;

    const max = Math.max(...Object.values(statusMap), 1);
    const barsEl = document.getElementById('statusBars');
    barsEl.innerHTML = STATUSES.map(s => {
      const count = statusMap[s] || 0;
      const pct = Math.round((count / max) * 100);
      const color = STATUS_COLORS[s].fill;
      return `
        <div class="status-bar-row">
          <div class="status-bar-label">${s}</div>
          <div class="status-bar-track">
            <div class="status-bar-fill" style="width:${pct}%;background:${color}"></div>
          </div>
          <div class="status-bar-count">${count}</div>
        </div>`;
    }).join('');

    const tbody = document.getElementById('recentLeadsBody');
    tbody.innerHTML = stats.recentLeads.map(l => `
      <tr>
        <td class="name-cell">${esc(l.name)}</td>
        <td>${esc(l.company || '—')}</td>
        <td class="email-cell">${esc(l.email)}</td>
        <td>${badgeHtml(l.status)}</td>
        <td>${formatDate(l.created_at)}</td>
        <td>${emailDotsHtml(l)}</td>
      </tr>`).join('');
  } catch (e) {
    console.error('Dashboard load failed:', e);
  }
}

/* ===== Leads Table ===== */
function renderLeadsTable(data) {
  const tbody = document.getElementById('leadsTableBody');
  const noLeads = document.getElementById('noLeads');

  if (data.length === 0) {
    tbody.innerHTML = '';
    noLeads.style.display = 'block';
    return;
  }
  noLeads.style.display = 'none';

  tbody.innerHTML = data.map(l => `
    <tr>
      <td class="name-cell">${esc(l.name)}</td>
      <td>${esc(l.company || '—')}</td>
      <td class="email-cell">${esc(l.email)}</td>
      <td>${esc(l.phone || '—')}</td>
      <td>${badgeHtml(l.status)}</td>
      <td>${formatDate(l.created_at)}</td>
      <td>${emailDotsHtml(l)}</td>
      <td class="actions-cell">
        <button class="btn btn-ghost btn-sm" onclick="openLeadDetail(${l.id})">View</button>
      </td>
    </tr>`).join('');
}

function filterLeads() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const s = document.getElementById('statusFilter').value;
  const filtered = leads.filter(l => {
    const matchQ = !q || [l.name, l.email, l.company, l.phone].some(v => v && v.toLowerCase().includes(q));
    const matchS = !s || l.status === s;
    return matchQ && matchS;
  });
  renderLeadsTable(filtered);
}

document.getElementById('searchInput').addEventListener('input', filterLeads);
document.getElementById('statusFilter').addEventListener('change', filterLeads);

/* ===== Pipeline ===== */
function renderPipeline(data) {
  const pipeline = document.getElementById('pipeline');
  pipeline.innerHTML = STATUSES.map(status => {
    const colLeads = data.filter(l => l.status === status);
    return `
      <div class="pipeline-col">
        <div class="pipeline-col-header">
          <div class="pipeline-col-title">${status}</div>
          <div class="pipeline-col-count">${colLeads.length}</div>
        </div>
        ${colLeads.map(l => `
          <div class="pipeline-card" onclick="openLeadDetail(${l.id})">
            <div class="pipeline-card-name">${esc(l.name)}</div>
            <div class="pipeline-card-company">${esc(l.company || l.email)}</div>
            <div class="pipeline-card-meta">
              <div class="pipeline-card-date">${formatDate(l.created_at)}</div>
              ${emailDotsHtml(l)}
            </div>
          </div>`).join('')}
        ${colLeads.length === 0 ? '<div style="text-align:center;padding:20px;color:#9ca3af;font-size:12px;">Empty</div>' : ''}
      </div>`;
  }).join('');
}

/* ===== Load all leads ===== */
async function loadLeads() {
  try {
    leads = await api('GET', '/api/leads');
    renderLeadsTable(leads);
    renderPipeline(leads);
    await loadDashboard();
  } catch (e) {
    showToast('Failed to load leads');
    console.error(e);
  }
}

/* ===== Add Lead Modal ===== */
document.getElementById('addLeadBtn').addEventListener('click', () => {
  document.getElementById('addLeadModal').style.display = 'flex';
  document.getElementById('leadName').focus();
});

function closeAddModal() {
  document.getElementById('addLeadModal').style.display = 'none';
  document.getElementById('addLeadForm').reset();
  document.getElementById('formError').style.display = 'none';
}

document.getElementById('closeModal').addEventListener('click', closeAddModal);
document.getElementById('cancelModal').addEventListener('click', closeAddModal);
document.getElementById('addLeadModal').addEventListener('click', e => {
  if (e.target === document.getElementById('addLeadModal')) closeAddModal();
});

document.getElementById('addLeadForm').addEventListener('submit', async e => {
  e.preventDefault();
  const submitBtn = document.getElementById('submitLead');
  const errorEl = document.getElementById('formError');
  errorEl.style.display = 'none';

  const body = {
    name: document.getElementById('leadName').value.trim(),
    email: document.getElementById('leadEmail').value.trim(),
    phone: document.getElementById('leadPhone').value.trim() || undefined,
    company: document.getElementById('leadCompany').value.trim() || undefined,
  };

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Adding…';

  try {
    await api('POST', '/api/leads', body);
    closeAddModal();
    showToast(`Lead added! Intro email sent to ${body.email}`);
    await loadLeads();
  } catch (err) {
    errorEl.textContent = err.message;
    errorEl.style.display = 'block';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Add Lead';
  }
});

/* ===== Lead Detail Modal ===== */
async function openLeadDetail(id) {
  currentLeadId = id;
  const lead = leads.find(l => l.id === id);
  if (!lead) return;

  document.getElementById('detailName').textContent = lead.name;
  document.getElementById('detailEmail').textContent = lead.email;
  document.getElementById('detailPhone').textContent = lead.phone || '—';
  document.getElementById('detailCompany').textContent = lead.company || '—';
  document.getElementById('detailCreated').textContent = formatDate(lead.created_at);

  renderStatusStepper(lead.status);

  const emails = lead.email_history || [];
  const historyEl = document.getElementById('emailHistory');
  if (emails.length === 0) {
    historyEl.innerHTML = '<div class="no-emails">No emails sent yet</div>';
  } else {
    historyEl.innerHTML = emails.map(e => `
      <div class="email-item">
        <div class="email-icon">✉</div>
        <div class="email-item-body">
          <div class="email-item-type">${e.type} email</div>
          <div class="email-item-subject">${esc(e.subject || '')}</div>
          <div class="email-item-date">${formatDate(e.sent_at)}</div>
          ${e.preview_url ? `<a class="email-preview-link" href="${esc(e.preview_url)}" target="_blank" rel="noopener">View email preview →</a>` : ''}
        </div>
      </div>`).join('');
  }

  document.getElementById('leadDetailModal').style.display = 'flex';
}

function renderStatusStepper(currentStatus) {
  const stepper = document.getElementById('statusStepper');
  const currentIdx = STATUSES.indexOf(currentStatus);
  stepper.innerHTML = STATUSES.map((s, i) => {
    let cls = 'step-btn';
    if (i < currentIdx) cls += ' past';
    else if (i === currentIdx) cls += ' current';
    return `<button class="${cls}" onclick="updateStatus('${s}')">${s}</button>`;
  }).join('');
}

async function updateStatus(newStatus) {
  if (!currentLeadId) return;
  try {
    const updated = await api('PATCH', `/api/leads/${currentLeadId}/status`, { status: newStatus });
    const idx = leads.findIndex(l => l.id === currentLeadId);
    if (idx !== -1) leads[idx] = { ...leads[idx], ...updated };
    renderStatusStepper(newStatus);
    renderLeadsTable(leads);
    renderPipeline(leads);
    loadDashboard();
    showToast(`Status updated to "${newStatus}"`);
  } catch (e) {
    showToast('Failed to update status');
  }
}

function closeDetailModal() {
  document.getElementById('leadDetailModal').style.display = 'none';
  currentLeadId = null;
}

document.getElementById('closeDetailModal').addEventListener('click', closeDetailModal);
document.getElementById('closeDetailBtn').addEventListener('click', closeDetailModal);
document.getElementById('leadDetailModal').addEventListener('click', e => {
  if (e.target === document.getElementById('leadDetailModal')) closeDetailModal();
});

document.getElementById('deleteLeadBtn').addEventListener('click', async () => {
  if (!currentLeadId) return;
  const lead = leads.find(l => l.id === currentLeadId);
  if (!confirm(`Delete lead "${lead?.name}"? This cannot be undone.`)) return;
  try {
    await api('DELETE', `/api/leads/${currentLeadId}`);
    closeDetailModal();
    showToast('Lead deleted');
    await loadLeads();
  } catch {
    showToast('Failed to delete lead');
  }
});

/* ===== Escape helper ===== */
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ===== Init ===== */
loadLeads();
