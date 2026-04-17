import { motion } from "framer-motion";

const STACKS = [
  { title: "Languages", items: ["TypeScript", "Python", "Rust", "SQL", "HTML/CSS"] },
  { title: "Frontend", items: ["React", "Next.js 14", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { title: "Backend & AI", items: ["Node.js", "Django", "FastAPI", "LangChain", "PyTorch", "OpenAI API"] },
  { title: "Infrastructure", items: ["AWS", "Docker", "PostgreSQL", "Vercel", "CI/CD"] },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-t-2 border-foreground py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary mb-3">
              // 01 / EXPERTISE
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-7xl tracking-[-0.03em] leading-[0.9]">
              THE TOOLKIT
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs leading-relaxed">
            A curated arsenal of languages, frameworks, and infrastructure I deploy daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {STACKS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="brutal-border bg-card p-6 hover:brutal-shadow-primary-sm transition-all hover:-translate-y-1"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-primary mb-4">
                // {s.title.toUpperCase()}
              </div>
              <ul className="space-y-2.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="font-display font-semibold text-base md:text-lg flex items-center gap-2.5 text-foreground"
                  >
                    <span className="h-1.5 w-1.5 bg-foreground shrink-0" />
                    {it}
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
