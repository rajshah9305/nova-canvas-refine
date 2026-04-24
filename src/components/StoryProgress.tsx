import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const CHAPTERS = [
  { id: "hero", num: "I", title: "The Origin" },
  { id: "expertise", num: "II", title: "The Toolkit" },
  { id: "work", num: "III", title: "The Builds" },
  { id: "experience", num: "IV", title: "The Journey" },
  { id: "contact", num: "V", title: "The Invitation" },
];

export function StoryProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = CHAPTERS.findIndex((c) => c.id === e.target.id);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Top progress rail */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-foreground/10">
        <motion.div className="h-full bg-primary origin-left" style={{ scaleX }} />
      </div>

      {/* Chapter card — top right under header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="fixed top-[72px] md:top-[88px] right-3 md:right-12 z-40 brutal-border bg-background/90 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 pointer-events-none"
      >
        <div className="flex items-center gap-2.5 md:gap-3">
          <span className="font-editorial text-primary text-base md:text-lg leading-none">
            CH. {CHAPTERS[active].num}
          </span>
          <span className="h-3 w-px bg-foreground/30" />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em]">
            {CHAPTERS[active].title.toUpperCase()}
          </span>
          <span className="font-mono text-[9px] md:text-[10px] text-muted-foreground">
            {String(active + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </>
  );
}
