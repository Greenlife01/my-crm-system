"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sprout, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_20px_rgba(10,46,26,0.05)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-text-dark">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-primary/12 text-green-primary">
            <Sprout className="h-5 w-5" />
          </span>
          Terrasols
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:text-green-mid",
                pathname === link.href ? "text-green-mid" : "text-text-mid"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://carbon-nex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-blue-mid transition-colors hover:text-blue-accent"
          >
            CarbonNex <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-green-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-green-mid hover:shadow-[0_8px_24px_rgba(29,158,117,0.3)]"
          >
            Get in touch
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-dark lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[65px] z-40 flex flex-col gap-2 overflow-y-auto bg-cream px-6 py-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-lg font-medium",
                    pathname === link.href ? "text-green-mid" : "text-text-dark"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              href="https://carbon-nex.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-1 rounded-lg px-4 py-3 text-lg font-medium text-blue-mid"
            >
              CarbonNex <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
