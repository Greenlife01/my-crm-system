"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FLAG = "terrasols-loaded";

export default function PageLoader() {
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState<"logo" | "line" | "wipe" | "done">("logo");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(FLAG)) return;
    sessionStorage.setItem(FLAG, "1");

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Deferred so the first setState of this sequence happens inside a
    // callback rather than synchronously in the effect body.
    timers.push(
      setTimeout(() => {
        setShow(true);
        timers.push(setTimeout(() => setStage("line"), 500));
        timers.push(setTimeout(() => setStage("wipe"), 1300));
        timers.push(
          setTimeout(() => {
            setStage("done");
            setShow(false);
          }, 1900)
        );
      }, 0)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-soil-black"
          initial={{ opacity: 1 }}
          animate={{ clipPath: stage === "wipe" ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 font-display text-2xl font-semibold text-text-primary"
            >
              <Image src="/logo-mark.png" alt="" width={40} height={40} className="h-10 w-10" priority />
              Terrasols
            </motion.div>
            <motion.div
              className="h-px w-0 bg-growth-green"
              animate={{ width: stage === "logo" ? 0 : 160 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 12px rgba(29,158,117,0.8)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
