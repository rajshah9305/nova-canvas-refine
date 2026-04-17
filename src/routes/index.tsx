import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Expertise } from "@/components/Expertise";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SideRail } from "@/components/SideRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Shah — AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Raj Shah — AI & Full-Stack Engineer architecting high-performance digital ecosystems, intelligent agents, and scalable AI infrastructure.",
      },
      { property: "og:title", content: "Raj Shah — AI & Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "AI platforms, agent orchestration, and scalable systems. Built with Next.js, Python, Rust and modern AI infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SideRail />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
