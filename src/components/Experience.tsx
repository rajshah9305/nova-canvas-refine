import { motion } from "framer-motion";

const ITEMS = [
  {
    role: "Senior Software Engineer",
    org: "Nexus AI Systems",
    period: "2023 — PRESENT",
    body: "Led the transition from monolithic architecture to a microservices ecosystem, improving deployment speed by 40%. Spearheaded enterprise AI integration using LLMs for internal automation pipelines.",
  },
  {
    role: "Full-Stack Developer",
    org: "Elevate Digital Labs",
    period: "2021 — 2023",
    body: "Architected and maintained 15+ high-traffic Next.js applications serving millions of global requests. Optimized PostgreSQL queries to reduce core database load times by 60%.",
  },
  {
    role: "B.S. Computer Science",
    org: "Georgia Institute of Technology",
    period: "2017 — 2021",
    body: "Concentration in Intelligence (AI) and Systems/Architecture. Contributed to open-source distributed computing research and graduated with High Honors.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t-2 border-foreground py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14">
          <div className="font-mono text-xs tracking-[0.3em] text-primary mb-3">// 03 / EXPERIENCE</div>
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter">
            TIMELINE
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[20%] top-0 bottom-0 w-0.5 bg-foreground/20" />
          <div className="space-y-12">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid md:grid-cols-[20%_1fr] gap-6 md:gap-12 relative pl-8 md:pl-0"
              >
                <div className="font-mono text-xs tracking-[0.2em] text-primary md:text-right md:pr-8">
                  {it.period}
                </div>
                <div className="relative">
                  <span className="absolute -left-8 md:-left-[calc(80%+8px+1.75rem)] top-2 h-3 w-3 bg-primary brutal-border" />
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight">
                    {it.role}
                  </h3>
                  <div className="font-mono text-sm text-muted-foreground mt-1 mb-3">
                    {it.org}
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{it.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
