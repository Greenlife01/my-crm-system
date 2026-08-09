import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { company } from "@/lib/site-data";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="August 2025">
      <p>
        This Cookie Policy explains how {company.name} uses cookies and similar technologies on
        www.terrasols.earth.
      </p>

      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device that help websites function and collect
        basic usage information.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>Essential cookies required for the site to function correctly</li>
        <li>Analytics cookies to understand how visitors use our site and improve it</li>
        <li>Embedded content cookies from services such as YouTube and Google Maps</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling cookies may affect
        the functionality of certain features on this site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to{" "}
        <a href={`mailto:${company.emailInfo}`} className="text-green-mid">
          {company.emailInfo}
        </a>
        .
      </p>
    </LegalPage>
  );
}
