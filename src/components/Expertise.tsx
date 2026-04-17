import { motion } from "framer-motion";

const STACKS = [
  { title: "Languages", items: ["TypeScript", "Python", "Rust", "SQL", "HTML/CSS"] },
  { title: "Frontend", items: ["React", "Next.js 14", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { title: "Backend & AI", items: ["Node.js", "Django", "FastAPI", "LangChain", "PyTorch", "OpenAI API"] },
  { title: "Infrastructure", items: ["AWS", "Docker", "PostgreSQL", "Vercel", "CI/CD"] },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-t-2 border-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-3">// 01 / EXPERTISE</div>
            <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter">
              THE TOOLKIT
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-xs">
            A curated arsenal of languages, frameworks, and infrastructure I deploy daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACKS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="brutal-border bg-card p-6 hover:brutal-shadow-primary transition-all hover:-translate-y-1"
            >
              <div className="font-mono text-xs tracking-[0.2em] text-primary mb-4">
                // {s.title.toUpperCase()}
              </div>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="font-display font-semibold text-lg flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-foreground" />
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
