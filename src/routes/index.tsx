import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Expertise } from "@/components/Expertise";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { SideRail } from "@/components/SideRail";
import { CustomCursor } from "@/components/CustomCursor";
import { StoryProgress } from "@/components/StoryProgress";
import { StoryIntro } from "@/components/StoryIntro";
import { Chapter } from "@/components/Chapter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Shah — An Interactive Story of an AI & Full-Stack Engineer" },
      {
        name: "description",
        content:
          "An interactive, chapter-driven portfolio of Raj Shah — AI & Full-Stack Engineer architecting intelligent agents and scalable systems.",
      },
      { property: "og:title", content: "Raj Shah — Interactive Portfolio" },
      {
        property: "og:description",
        content:
          "A five-chapter journey through the work, tools, and timeline of an AI & full-stack engineer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StoryIntro />
      <CustomCursor />
      <StoryProgress />
      <SideRail />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />

        <Chapter
          num="II"
          title="The Toolkit."
          whisper="In which the instruments are revealed"
          narration={
            <>
              Every craftsman has a quiet shelf of tools. Mine hum with electricity —
              languages, frameworks and infrastructure shaped by years of late nights
              and stubborn bugs. Read on, and meet the arsenal.
            </>
          }
        />
        <Expertise />

        <Chapter
          num="III"
          title="The Builds."
          whisper="A gallery of things that shipped"
          narration={
            <>
              Code is only theory until it meets users. What follows is a curated
              gallery of products and platforms that left the workbench, survived
              production, and earned their scars in the open.
            </>
          }
        />
        <Work />

        <Chapter
          num="IV"
          title="The Journey."
          whisper="A timeline, told in small stones"
          narration={
            <>
              Careers are not straight lines — they are footpaths through changing
              terrain. These are the rooms I&apos;ve worked in, the teams I&apos;ve
              shipped beside, and the lessons each chapter quietly handed back.
            </>
          }
        />
        <Experience />

        <Chapter
          num="V"
          title="The Invitation."
          whisper="Where the story turns to you"
          narration={
            <>
              Every good story leaves a door open. If anything here resonated — an
              idea, a project, a problem worth solving — step through. The next
              chapter is the one we write together.
            </>
          }
        />
        <Contact />
      </main>
    </div>
  );
}
