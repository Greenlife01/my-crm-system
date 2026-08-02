import type { Metadata } from "next";
import { Truck, Tractor, FlaskConical, Coins, Stethoscope, ClipboardList, MapPin, FileSignature, Sprout } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import FarmerVideoGrid from "@/components/farmers/FarmerVideoGrid";
import FarmerRegisterForm from "@/components/forms/FarmerRegisterForm";

export const metadata: Metadata = {
  title: "For Farmers",
  description:
    "Free basalt rock powder, spreading, lab testing, and carbon income for Indian smallholder farmers — at zero cost, with no change to your existing farming practices.",
};

const offerings = [
  { icon: Truck, title: "Basalt Rock Powder", body: "Delivered to your farm, free of cost." },
  { icon: Tractor, title: "Spreading Equipment & Labour", body: "We do the spreading — free, always." },
  { icon: FlaskConical, title: "Soil & Crop Testing", body: "Full lab analysis at no cost to you." },
  { icon: Coins, title: "Carbon Income", body: "You receive a share of verified credit sales." },
  { icon: Stethoscope, title: "Ongoing Soil Health Monitoring", body: "Free, always." },
];

const benefits = [
  { stat: "Soil pH", detail: "Measurable improvement across treated fields" },
  { stat: "+8–13%", detail: "Crop yield increase observed in field data" },
  { stat: "Potash", detail: "Natural supplementation reduces fertiliser spend" },
  { stat: "New Income", detail: "An additional revenue stream from carbon credits" },
];

const steps = [
  { icon: ClipboardList, title: "Register", body: "Submit your details below." },
  { icon: MapPin, title: "Site Visit", body: "Our field team visits your land." },
  { icon: FileSignature, title: "Agreement", body: "We sign a simple, farmer-friendly agreement." },
  { icon: Sprout, title: "We Start", body: "Basalt is delivered and spread — free." },
];

const faqs = [
  {
    question: "Does this cost me anything?",
    answer: "No. Basalt, transport, spreading labour, and all lab testing are covered entirely by Terrasols.",
  },
  {
    question: "Will I need to change how I farm?",
    answer: "No. Your existing crops, irrigation, and farming practices stay exactly the same.",
  },
  {
    question: "How much income can I expect?",
    answer: "You receive a share of revenue from verified carbon credit sales, on top of soil health benefits.",
  },
  {
    question: "How long does the process take?",
    answer: "From registration to first basalt application is typically a few months, depending on your season and location.",
  },
];

export default function FarmersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Farmers"
        title="आपकी ज़मीन, आपकी कमाई"
        description="Your land, your earnings — zero-cost basalt, soil health, and carbon income for Indian smallholder farmers."
        tone="amber"
      />

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            What We Offer — Zero Cost, Always
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {offerings.map((o) => (
              <Card key={o.title} className="text-center">
                <o.icon className="mx-auto h-6 w-6 text-harvest-amber" />
                <p className="mt-4 font-display font-semibold text-text-primary">{o.title}</p>
                <p className="mt-2 text-sm text-text-muted">{o.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">Benefits</h2>
          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.stat} className="text-center">
                <p className="font-data text-2xl font-bold text-carbon-teal sm:text-3xl">{b.stat}</p>
                <p className="mt-2 text-xs text-text-muted sm:text-sm">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">How to Join</h2>
          <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-10 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-harvest-amber/50 to-transparent lg:block" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border-subtle bg-earth-dark p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-harvest-amber/15 text-harvest-amber">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display font-semibold text-text-primary">
                  {i + 1}. {s.title}
                </p>
                <p className="mt-2 text-sm text-text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-earth-dark py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Farmer Testimonials
          </h2>
          <div className="mt-14">
            <FarmerVideoGrid />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-soil-black py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">FAQ</h2>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="register" className="bg-earth-dark py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-medium text-text-primary">
            Register Your Land
          </h2>
          <p className="mt-3 text-center text-text-muted">
            Fill in your details and our field team will reach out.
          </p>
          <div className="mt-10">
            <FarmerRegisterForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
