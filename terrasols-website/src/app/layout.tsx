import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terrasols.earth"),
  title: {
    default: "Terrasols — Healing Earth, One Farm at a Time",
    template: "%s | Terrasols",
  },
  description:
    "Terrasols Solutions Private Limited is India's leading Enhanced Rock Weathering (ERW) carbon removal startup — spreading basalt rock powder on smallholder farms at zero cost to farmers, capturing carbon permanently from the atmosphere.",
  keywords: [
    "Terrasols",
    "Enhanced Rock Weathering",
    "ERW",
    "carbon removal",
    "basalt",
    "Project Nirmatva",
    "climate tech India",
    "carbon credits",
  ],
  authors: [{ name: "Terrasols Solutions Private Limited" }],
  openGraph: {
    type: "website",
    url: "https://www.terrasols.earth",
    siteName: "Terrasols",
    title: "Terrasols — Healing Earth, One Farm at a Time",
    description:
      "India's leading Enhanced Rock Weathering carbon removal startup. Zero cost to farmers. Permanent carbon removal, verified.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terrasols — Healing Earth, One Farm at a Time",
    description:
      "India's leading Enhanced Rock Weathering carbon removal startup. Zero cost to farmers. Permanent carbon removal, verified.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-text-dark">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
