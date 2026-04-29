import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { StaggerGroup } from "./Reveal";
import { item } from "@/lib/motion";

type Project = {
  num: string;
  title: string;
  description: string;
  stack: string[];
  stat: string;
  live?: string;
  source?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  { num: "01", title: "RAJ_AI PLATFORM", description: "Flagship Generative AI platform integrating multi-modal LLMs. Real-time RAG, custom agent workflows, and a brutalist highly-responsive UI.", stack: ["Next.js", "Python", "LangChain", "Pinecone"], stat: "10K+ INFERENCES", live: "https://www.rajai.org/", source: "https://github.com/rajshah9305/raj-ai-platform", featured: true },
  { num: "02", title: "AI AGENT ORCHESTRATOR", description: "Ultra-fast agent management platform with Cerebras integration. Real-time 3D dashboard, multi-framework support, WebSocket live updates, Bull + Redis jobs.", stack: ["TypeScript", "Next.js", "Three.js", "Cerebras", "Redis", "WebSockets"], stat: "5 AI FRAMEWORKS", source: "https://github.com/rajshah9305/AIAgentOrchestrationPlatform", featured: true },
  { num: "03", title: "AI APP BUILDER", description: "No-code AI application builder generating complete React apps from natural-language prompts using Cerebras Llama-4. Monaco Editor, JWT auth, one-click deploy.", stack: ["Next.js", "Cerebras", "Llama-4", "Prisma", "PostgreSQL"], stat: "ZERO-CODE DEPLOY", source: "https://github.com/rajshah9305/AIAppBuilder-CerebrasAI-llama-4", featured: true },
  { num: "04", title: "AUTONOMOUS_AGENT_GPT", description: "Autonomous recursive agent orchestrator capable of self-prompting, task decomposition, and multi-agent coordination for complex software tasks.", stack: ["TypeScript", "OpenAI API", "WebSockets"], stat: "99.9% UPTIME", source: "https://github.com/rajshah9305/autonomous-agent-gpt" },
  { num: "05", title: "SCIVIZ DESIGN SYSTEM", description: "Production-ready design system for scientific visualization apps. Themed UI components, dark/light theming, high-performance React + TS library.", stack: ["React", "TypeScript", "Tailwind CSS", "PostgreSQL"], stat: "FULL DESIGN SYSTEM", source: "https://github.com/rajshah9305/SciViz-Design-System" },
  { num: "06", title: "DISTRIBUTED_SYSTEMS_API", description: "High-throughput microservices architecture engineered for real-time data streaming with sub-millisecond latency.", stack: ["Rust", "gRPC", "PostgreSQL", "Kafka"], stat: "<1MS LATENCY", source: "https://github.com/rajshah9305/distributed-systems-api" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      variants={item}
      data-cursor={p.live ? "VIEW" : "OPEN"}
      className="group sheen relative brutal-border bg-card flex flex-col hover:brutal-shadow-primary-sm transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-10 font-display font-black text-[8rem] sm:text-[10rem] leading-none tracking-tighter text-foreground/[0.04] group-hover:text-primary/15 transition-colors duration-500 select-none"
      >
        {p.num}
      </span>

      <div className="relative p-5 sm:p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {p.featured && (
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] bg-primary text-primary-foreground px-1.5 sm:px-2 py-0.5 sm:py-1">
                FEATURED
              </span>
            )}
            <span className="font-mono text-[11px] sm:text-xs text-muted-foreground">PROJECT — {p.num}</span>
          </div>
          <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 text-primary" />
        </div>

        <h3 className="t-h4 mb-3 text-foreground break-words uppercase">
          {p.title}
        </h3>
        <p className="t-body text-muted-foreground mb-4 sm:mb-5">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] border border-foreground/30 px-1.5 sm:px-2 py-0.5 sm:py-1 text-foreground/80 group-hover:border-primary/60 transition-colors duration-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t-2 border-foreground/15 pt-3.5 sm:pt-4">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-primary">
            ◆ {p.stat}
          </span>
          <div className="flex items-center gap-3">
            {p.source && (
              <a href={p.source} target="_blank" rel="noreferrer" aria-label="Source" className="hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live" className="hover:text-primary transition-colors">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="border-t-2 border-foreground py-16 sm:py-20 md:py-32 grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        <SectionHeader
          index="III"
          kicker="WORK · CHAPTER THREE"
          title={
            <>
              SELECTED <span className="font-editorial text-primary">builds</span>
              <span className="text-primary">.</span>
            </>
          }
          caption={
            <a
              href="https://github.com/rajshah9305"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              ALL REPOSITORIES <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          }
        />

        <StaggerGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          gap={0.09}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
