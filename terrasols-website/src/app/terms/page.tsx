import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="August 2025">
      <p>
        These Terms of Use govern your access to and use of www.terrasols.earth, operated by{" "}
        {company.name} (CIN: {company.cin}). By using this site, you agree to these terms.
      </p>

      <h2>Use of Content</h2>
      <p>
        All content on this site — including text, graphics, logos, and data — is the property of
        Terrasols or its licensors and may not be reproduced without prior written consent, except for
        personal, non-commercial use.
      </p>

      <h2>Forms and Submissions</h2>
      <p>
        Information submitted through our farmer registration, buyer, investor, and career forms is
        used solely to respond to your enquiry or facilitate the relevant programme, as described in
        our Privacy Policy.
      </p>

      <h2>No Warranty</h2>
      <p>
        This site is provided &ldquo;as is&rdquo; without warranties of any kind. Carbon removal
        figures, project statuses, and impact data are updated periodically and may not reflect
        real-time status.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Terrasols shall not be liable for any indirect, incidental, or consequential damages arising
        from your use of this site.
      </p>

      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of India.</p>
    </LegalPage>
  );
}
