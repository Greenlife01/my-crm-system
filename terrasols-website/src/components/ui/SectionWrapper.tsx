"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("relative", className)}
    >
      {children}
    </motion.section>
  );
}
