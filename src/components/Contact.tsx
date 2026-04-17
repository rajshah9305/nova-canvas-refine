import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t-2 border-foreground bg-foreground text-background py-20 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute inset-0 noise-bg pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary">
            // 04 / INITIATE PROTOCOL
          </span>
          <span className="flex-1 h-px bg-background/20" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-background/55 hidden sm:inline">
            [TRANSMIT]
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-[-0.045em] leading-[0.82]"
        >
          LET&apos;S BUILD <br />
          <span className="font-editorial text-primary not-italic-none">something</span> <br />
          <span className="inline-flex items-center gap-4 flex-wrap">
            SCALABLE
            <span className="text-primary">.</span>
          </span>
        </motion.h2>

        <div className="mt-10 md:mt-12 grid md:grid-cols-12 gap-6 md:gap-10">
          <p className="md:col-span-7 text-background/80 text-base md:text-lg leading-relaxed max-w-xl">
            Currently accepting new opportunities. Whether it&apos;s an AI platform,
            a systems overhaul, or a zero-to-one product — let&apos;s talk.
          </p>

          <div className="md:col-span-5 md:text-right space-y-2 font-mono text-[11px] tracking-[0.25em] text-background/70">
            <div>RESPONSE — UNDER 24H</div>
            <div>BASED — REMOTE / GLOBAL</div>
            <div>STATUS — ACCEPTING Q1—Q2</div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
          <a
            href="mailto:contact@rajai.org"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-mono text-[11px] tracking-[0.2em] px-6 py-4 border-2 border-primary hover:bg-background hover:text-foreground hover:border-background transition-colors"
          >
            <Mail className="h-4 w-4" />
            EMAIL ME
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/rajshah9305"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border-2 border-background text-background font-mono text-[11px] tracking-[0.2em] px-6 py-4 hover:bg-background hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GITHUB
          </a>
        </div>

        <div className="mt-20 md:mt-28 pt-6 md:pt-8 border-t border-background/20 grid sm:grid-cols-3 gap-4 font-mono text-[10px] tracking-[0.3em] text-background/55">
          <span>© {new Date().getFullYear()} RAJ SHAH</span>
          <span className="sm:text-center">ALL SYSTEMS NOMINAL</span>
          <span className="sm:text-right">DEPLOYED ON THE EDGE</span>
        </div>
      </div>
    </section>
  );
}
