import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    role: "Senior Software Engineer",
    org: "Nexus AI Systems",
    period: "2023 — PRESENT",
    tag: "FULL-TIME",
    body: "Led the transition from monolithic architecture to a microservices ecosystem, improving deployment speed by 40%. Spearheaded enterprise AI integration using LLMs for internal automation pipelines.",
  },
  {
    role: "Full-Stack Developer",
    org: "Elevate Digital Labs",
    period: "2021 — 2023",
    tag: "FULL-TIME",
    body: "Architected and maintained 15+ high-traffic Next.js applications serving millions of global requests. Optimized PostgreSQL queries to reduce core database load times by 60%.",
  },
  {
    role: "B.S. Computer Science",
    org: "Georgia Institute of Technology",
    period: "2017 — 2021",
    tag: "EDUCATION",
    body: "Concentration in Intelligence (AI) and Systems/Architecture. Contributed to open-source distributed computing research and graduated with High Honors.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t-2 border-foreground py-16 sm:py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        <SectionHeader
          index="IV"
          kicker="EXPERIENCE · CHAPTER FOUR"
          title={
            <>
              THE <span className="font-editorial text-primary">timeline</span>
              <span className="text-primary">.</span>
            </>
          }
          caption="Roles, milestones, and the systems shipped along the way."
        />

        <div className="relative">
          <div className="absolute left-[7px] md:left-[calc(28%-1px)] top-2 bottom-2 w-0.5 bg-foreground/20" />

          <div className="space-y-8 sm:space-y-10 md:space-y-14">
            {ITEMS.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid md:grid-cols-[28%_1fr] gap-2.5 md:gap-10 relative pl-7 sm:pl-8 md:pl-0"
              >
                <div className="md:text-right md:pr-10 flex md:block items-center gap-3 flex-wrap">
                  <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-primary">
                    {it.period}
                  </div>
                  <div className="md:mt-2 inline-block font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-muted-foreground border border-foreground/20 px-1.5 py-0.5">
                    {it.tag}
                  </div>
                </div>

                <span className="absolute left-0 md:left-[calc(28%-7px)] top-1.5 h-3.5 w-3.5 bg-primary brutal-border" />

                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl md:text-3xl tracking-[-0.02em] text-foreground">
                    {it.role}
                  </h3>
                  <div className="font-editorial text-primary text-[15px] sm:text-base md:text-xl mt-1 sm:mt-1.5 mb-2.5 sm:mb-3">
                    {it.org}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[13px] sm:text-sm md:text-base max-w-2xl">
                    {it.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
