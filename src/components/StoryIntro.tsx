import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  "> booting narrative kernel ...",
  "> loading chapters [I—V] ✓",
  "> calibrating reader",
  "> story ready.",
];

/**
 * Full-screen typewriter intro that plays once per session.
 * Establishes the "interactive story" tone immediately.
 */
export function StoryIntro() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("story-intro-played")) return;
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible || step >= LINES.length) return;
    const line = LINES[step];
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(line.slice(0, i));
      if (i >= line.length) {
        clearInterval(t);
        setTimeout(() => {
          if (step < LINES.length - 1) setStep((s) => s + 1);
          else setDone(true);
        }, 350);
      }
    }, 28);
    return () => clearInterval(t);
  }, [visible, step]);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("story-intro-played", "1");
      setVisible(false);
    }, 700);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[100] bg-background grid place-items-center"
          onClick={() => {
            sessionStorage.setItem("story-intro-played", "1");
            setVisible(false);
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="absolute inset-0 noise-bg pointer-events-none" />
          <div className="relative w-full max-w-2xl px-6">
            <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-primary mb-6">
              // CHAPTER 0 — PROLOGUE
            </div>
            <div className="space-y-2 font-mono text-sm sm:text-base text-foreground min-h-[10rem]">
              {LINES.slice(0, step).map((l) => (
                <div key={l} className="text-muted-foreground">
                  {l}
                </div>
              ))}
              <div className="text-foreground">
                {typed}
                <span className="cursor-blink text-primary">█</span>
              </div>
            </div>
            <div className="mt-10 font-mono text-[9px] tracking-[0.3em] text-muted-foreground">
              [CLICK TO SKIP]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
