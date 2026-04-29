import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "INDEX" },
  { id: "expertise", label: "EXPERTISE" },
  { id: "work", label: "WORK" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contact", label: "CONTACT" },
];

export function SideRail() {
  const [active, setActive] = useState("hero");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC",
      }) + " UTC";
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Left rail — section index */}
      <aside className="hidden xl:flex fixed left-0 top-0 bottom-0 w-10 z-30 flex-col items-center justify-center pointer-events-none">
        <div className="brutal-border bg-background/90 backdrop-blur-sm py-6 px-1.5 flex flex-col items-center gap-5 pointer-events-auto">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex flex-col items-center gap-2"
              aria-label={s.label}
            >
              <span
                className={`font-mono text-[9px] tracking-[0.3em] vertical-rl transition-colors ${
                  active === s.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {String(i).padStart(2, "0")} · {s.label}
              </span>
              <span
                className={`h-1.5 w-1.5 transition-all ${
                  active === s.id ? "bg-primary scale-125" : "bg-foreground/30"
                }`}
              />
            </a>
          ))}
        </div>
      </aside>

      {/* Right rail — coords + clock */}
      <aside className="hidden xl:flex fixed right-0 top-0 bottom-0 w-10 z-30 flex-col items-center justify-between py-40 pointer-events-none">
        <div className="vertical-rl font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
          LAT 40.7128° N / LON 74.0060° W
        </div>
        <div className="vertical-rl font-mono text-[10px] tracking-[0.3em] text-foreground">
          {time}
        </div>
      </aside>
    </>
  );
}
