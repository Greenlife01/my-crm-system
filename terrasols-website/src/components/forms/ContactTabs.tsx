"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FarmerRegisterForm from "@/components/forms/FarmerRegisterForm";
import BuyerEnquiryForm from "@/components/forms/BuyerEnquiryForm";
import InvestorDeckForm from "@/components/forms/InvestorDeckForm";

const tabs = [
  { id: "farmer", label: "I'm a Farmer" },
  { id: "buyer", label: "I'm a Buyer / Partner" },
  { id: "investor", label: "I'm an Investor" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ContactTabs() {
  const [active, setActive] = useState<TabId>("farmer");

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 rounded-xl border border-border-subtle bg-white p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
              active === tab.id ? "bg-green-primary text-dark-green" : "text-text-mid hover:text-text-dark"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-10"
      >
        {active === "farmer" && <FarmerRegisterForm />}
        {active === "buyer" && <BuyerEnquiryForm />}
        {active === "investor" && <InvestorDeckForm />}
      </motion.div>
    </div>
  );
}
