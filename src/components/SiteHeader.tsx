import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "EXPERTISE", href: "#expertise" },
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b-2 border-foreground"
          : "border-b-2 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 md:gap-3 group">
          <div className="h-9 w-9 md:h-10 md:w-10 bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-xs md:text-sm brutal-border group-hover:rotate-3 transition-transform">
            RS
          </div>
          <span className="font-display font-extrabold tracking-tight text-base md:text-lg">
            RAJ SHAH
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 brutal-border bg-card/60 backdrop-blur-sm px-1.5 py-1.5">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-mono text-[11px] tracking-[0.2em] text-foreground hover:text-primary-foreground hover:bg-primary px-3.5 py-2 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex brutal-border bg-foreground text-background font-mono text-[11px] tracking-[0.2em] px-4 py-2.5 md:px-5 md:py-3 brutal-shadow-primary-sm hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            HIRE ME
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center brutal-border bg-background"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-foreground bg-background"
          >
            <nav className="flex flex-col px-5 py-4">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-[0.2em] py-3 border-b border-border last:border-0"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center brutal-border bg-foreground text-background font-mono text-xs tracking-[0.2em] px-5 py-3"
              >
                HIRE ME
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
