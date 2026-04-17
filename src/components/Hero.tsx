import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen grid-bg pt-32 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground mb-10"
        >
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-signal pulse-ring" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-signal" />
          </span>
          AVAILABLE FOR HIRE
        </motion.div>

        <h1 className="font-display font-black leading-[0.85] tracking-tighter">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="block text-[clamp(4rem,15vw,12rem)]"
          >
            RAJ
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="block text-outline text-[clamp(4rem,15vw,12rem)]"
          >
            SHAH
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex items-center gap-3 font-display text-2xl md:text-4xl font-bold"
        >
          AI &amp; FULL-STACK ENGINEER
          <span className="text-primary font-mono">&gt;</span>
          <span className="text-primary font-mono cursor-blink">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I architect high-performance digital ecosystems and intelligent agents.
          Specializing in Next.js, Python, and scalable AI infrastructure to
          deliver software that is fault-tolerant, scalable, and aesthetically absolute.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-5"
        >
          <a
            href="mailto:contact@rajai.org"
            className="group inline-flex items-center gap-3 brutal-border bg-foreground text-background font-mono text-xs tracking-[0.2em] px-7 py-4 brutal-shadow-primary hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Mail className="h-4 w-4" />
            INITIALIZE CONTACT
          </a>
          <a
            href="https://github.com/rajshah9305"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 brutal-border bg-background text-foreground font-mono text-xs tracking-[0.2em] px-7 py-4 brutal-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Github className="h-4 w-4" />
            VIEW GITHUB
          </a>
        </motion.div>
      </div>

      {/* Decorative corner mark */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
        <div className="h-px w-24 bg-foreground" />
        SCROLL/EXPLORE
      </div>
    </section>
  );
}
