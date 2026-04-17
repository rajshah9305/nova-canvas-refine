import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t-2 border-foreground bg-foreground text-background py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="font-mono text-xs tracking-[0.3em] text-primary mb-6">// 04 / INITIATE PROTOCOL</div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black text-6xl md:text-9xl tracking-tighter leading-[0.85]"
        >
          LET'S BUILD <br />
          <span className="text-primary">SOMETHING</span> <br />
          SCALABLE.
        </motion.h2>

        <p className="mt-10 max-w-xl text-background/70 text-lg">
          Currently accepting new opportunities. Whether it's an AI platform, a
          systems overhaul, or a zero-to-one product — let's talk.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="mailto:contact@rajai.org"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] px-7 py-4 border-2 border-primary hover:bg-background hover:text-foreground hover:border-background transition-colors"
          >
            <Mail className="h-4 w-4" />
            EMAIL ME
          </a>
          <a
            href="https://github.com/rajshah9305"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border-2 border-background text-background font-mono text-xs tracking-[0.2em] px-7 py-4 hover:bg-background hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            GITHUB
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-background/20 flex items-center justify-between flex-wrap gap-4 font-mono text-[10px] tracking-[0.3em] text-background/50">
          <span>© {new Date().getFullYear()} RAJ SHAH / ALL SYSTEMS NOMINAL</span>
          <span>BUILT WITH PRECISION / DEPLOYED ON THE EDGE</span>
        </div>
      </div>
    </section>
  );
}
