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
          ? "bg-soil-black/80 backdrop-blur-xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-growth-green/15 text-growth-green">
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
                "nav-link-underline rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-carbon-teal",
                pathname === link.href ? "text-carbon-teal" : "text-text-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://carbon-nex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-harvest-amber transition-colors hover:text-leaf-light"
          >
            CarbonNex <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-primary lg:hidden"
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
            className="fixed inset-0 top-[65px] z-40 flex flex-col gap-2 overflow-y-auto bg-soil-black px-6 py-8 lg:hidden"
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
                    pathname === link.href ? "text-carbon-teal" : "text-text-primary"
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
              className="mt-2 flex items-center gap-1 rounded-lg px-4 py-3 text-lg font-medium text-harvest-amber"
            >
              CarbonNex <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
