import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const STACKS = [
  { tag: "L01", title: "Languages", items: ["TypeScript", "Python", "Rust", "SQL", "HTML/CSS"] },
  { tag: "F02", title: "Frontend", items: ["React", "Next.js 14", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { tag: "B03", title: "Backend & AI", items: ["Node.js", "Django", "FastAPI", "LangChain", "PyTorch", "OpenAI API"] },
  { tag: "I04", title: "Infrastructure", items: ["AWS", "Docker", "PostgreSQL", "Vercel", "CI/CD"] },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-t-2 border-foreground py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-12 lg:px-16">
        <SectionHeader
          index="01"
          kicker="EXPERTISE"
          title={
            <>
              THE <span className="font-editorial text-primary">toolkit</span>
              <span className="text-primary">.</span>
            </>
          }
          caption="A curated arsenal of languages, frameworks, and infrastructure I deploy daily."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {STACKS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group brutal-border bg-card p-6 hover:brutal-shadow-primary-sm transition-all hover:-translate-y-1 relative"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="font-mono text-[11px] tracking-[0.2em] text-primary">
                  // {s.title.toUpperCase()}
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground border border-foreground/20 px-1.5 py-0.5">
                  {s.tag}
                </span>
              </div>
              <ul className="space-y-2.5">
                {s.items.map((it, idx) => (
                  <li
                    key={it}
                    className="font-display font-semibold text-base md:text-lg flex items-center gap-3 text-foreground"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground w-5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-foreground/15 group-hover:bg-primary transition-colors" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
