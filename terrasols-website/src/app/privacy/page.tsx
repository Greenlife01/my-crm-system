import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2025">
      <p>
        {company.name} (&ldquo;Terrasols&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This policy explains what information we collect through www.terrasols.earth, how we
        use it, and the choices you have.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, including through our farmer registration,
        buyer enquiry, investor deck request, and career application forms — such as your name, contact
        details, location, and any message you submit.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to your enquiries and process registrations or applications</li>
        <li>To operate and improve Project Nirmatva and our other programmes</li>
        <li>To communicate updates relevant to farmers, buyers, partners, and investors</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with verification bodies, lab
        partners, and registries (such as Isometric) strictly as required to operate our carbon removal
        and MRV programmes.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data by contacting us at{" "}
        <a href={`mailto:${company.emailInfo}`} className="text-carbon-teal">
          {company.emailInfo}
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        {company.name}, {company.location}. CIN: {company.cin}.
      </p>
    </LegalPage>
  );
}
