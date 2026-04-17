import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV = [
  { label: "EXPERTISE", href: "/#expertise" },
  { label: "WORK", href: "/#work" },
  { label: "EXPERIENCE", href: "/#experience" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 bg-primary text-primary-foreground grid place-items-center font-mono font-bold text-sm brutal-border group-hover:rotate-3 transition-transform">
            RS
          </div>
          <span className="font-display font-bold tracking-tight text-lg">RAJ SHAH</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-mono text-xs tracking-[0.2em] hover:text-primary transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="brutal-border bg-foreground text-background font-mono text-xs tracking-[0.2em] px-5 py-3 brutal-shadow-primary hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          HIRE ME
        </a>
      </div>
    </motion.header>
  );
}
