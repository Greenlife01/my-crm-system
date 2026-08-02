"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionWrapper({
  children,
  className,
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
}
