import { motion } from "framer-motion";
import { Mail, Github, ArrowDown } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      {/* signal-orange corner ticks */}
      <span className="absolute top-24 left-5 md:left-12 h-3 w-3 border-t-2 border-l-2 border-primary pointer-events-none" />
      <span className="absolute top-24 right-5 md:right-12 h-3 w-3 border-t-2 border-r-2 border-primary pointer-events-none" />

      {/* Top meta strip */}
      <div className="relative mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-foreground/70 mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span
                className="absolute inset-0 rounded-full pulse-ring"
                style={{ background: "var(--signal)" }}
              />
              <span
                className="relative rounded-full h-2.5 w-2.5"
                style={{ background: "var(--signal)" }}
              />
            </span>
            AVAILABLE / Q1—Q2 ENGAGEMENTS
          </div>
          <span className="hidden sm:inline">PORTFOLIO · V.04 · 2026</span>
        </motion.div>

        {/* Editorial label */}
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
            ENGINEER · BUILDER · OPERATOR
          </span>
        </div>

        <h1 className="font-display font-black leading-[0.82] tracking-[-0.045em]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="block text-[clamp(4.5rem,16vw,12rem)]"
          >
            RAJ
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block text-outline text-[clamp(4.5rem,16vw,12rem)] relative"
          >
            SHAH
            <span className="absolute -right-2 top-2 font-editorial text-primary text-2xl md:text-4xl not-italic">
              ®
            </span>
          </motion.span>
        </h1>

        {/* Role line — split editorial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 md:mt-8 grid md:grid-cols-[auto_1fr] items-end gap-x-6 gap-y-3"
        >
          <div className="font-display font-bold text-2xl sm:text-3xl md:text-5xl tracking-tight flex items-center gap-3 flex-wrap">
            <span>AI</span>
            <span className="font-editorial text-primary text-3xl md:text-6xl">&amp;</span>
            <span>FULL-STACK</span>
            <span className="text-primary font-mono text-xl md:text-3xl">&gt;</span>
            <span className="text-primary font-mono text-xl md:text-3xl cursor-blink">_</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground md:text-right md:pb-2">
            ENGINEER / EST. 2017
          </div>
        </motion.div>

        {/* Description — two-column editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 md:mt-12 grid md:grid-cols-12 gap-6 md:gap-10 max-w-5xl"
        >
          <div className="md:col-span-1 hidden md:block">
            <span className="font-editorial text-primary text-4xl leading-none">§</span>
          </div>
          <p className="md:col-span-11 text-[15px] md:text-lg text-foreground/85 leading-relaxed max-w-2xl">
            I architect high-performance digital ecosystems and intelligent agents.
            Specializing in <span className="font-editorial text-primary">Next.js</span>,{" "}
            <span className="font-editorial text-primary">Python</span>, and scalable
            AI infrastructure to deliver software that is fault-tolerant, scalable,
            and aesthetically absolute.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5"
        >
          <a
            href="mailto:contact@rajai.org"
            className="group inline-flex items-center justify-center gap-3 brutal-border bg-foreground text-background font-mono text-[11px] tracking-[0.2em] px-6 py-4 brutal-shadow-primary hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:rotate-12" />
            INITIALIZE CONTACT
          </a>
          <a
            href="https://github.com/rajshah9305"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 brutal-border bg-background text-foreground font-mono text-[11px] tracking-[0.2em] px-6 py-4 brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
            VIEW GITHUB
          </a>
        </motion.div>

        {/* Stat ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 brutal-border bg-card divide-x-2 divide-foreground/15"
        >
          {[
            { k: "8+", v: "YEARS SHIPPING" },
            { k: "40+", v: "PRODUCTION SYSTEMS" },
            { k: "10K+", v: "AI INFERENCES/DAY" },
            { k: "99.9%", v: "UPTIME SLA" },
          ].map((s, i) => (
            <div
              key={s.v}
              className={`p-5 md:p-6 ${i >= 2 ? "border-t-2 md:border-t-0 border-foreground/15" : ""}`}
            >
              <div className="font-display font-black text-3xl md:text-5xl tracking-tight text-foreground">
                {s.k}
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mt-2">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        SCROLL
      </div>
    </section>
  );
}
