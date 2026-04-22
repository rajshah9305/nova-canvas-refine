import { useEffect, useRef, useState } from "react";

/**
 * Premium magnetic cursor.
 * - Outer ring follows pointer with spring lag
 * - Inner dot tracks 1:1
 * - Expands and shows context label over interactive elements
 * - Auto-disabled on touch / coarse pointer devices
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string>("");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const targetSelector = "a, button, [role='button'], input, textarea, select, [data-cursor]";

    const onOver = (e: Event) => {
      const t = (e.target as HTMLElement)?.closest?.(targetSelector) as HTMLElement | null;
      if (!t) return;
      const ds = t.getAttribute("data-cursor");
      if (ds) setLabel(ds);
      else if (t.tagName === "A") {
        const href = (t as HTMLAnchorElement).getAttribute("href") || "";
        if (href.startsWith("mailto:")) setLabel("EMAIL");
        else if (t.getAttribute("target") === "_blank") setLabel("OPEN");
        else if (href.startsWith("#")) setLabel("JUMP");
        else setLabel("VIEW");
      } else if (t.tagName === "BUTTON") setLabel("TAP");
      else setLabel("");
      setHover(true);
    };
    const onOut = (e: Event) => {
      const t = (e.target as HTMLElement)?.closest?.(targetSelector);
      if (!t) return;
      setHover(false);
      setLabel("");
    };

    const onDown = () => {
      if (ringRef.current) ringRef.current.classList.add("is-down");
    };
    const onUp = () => {
      if (ringRef.current) ringRef.current.classList.remove("is-down");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, true);
    window.addEventListener("pointerout", onOut, true);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointerout", onOut, true);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[100] grid place-items-center transition-[width,height,background-color,border-color] duration-200 ease-out ${
          hover
            ? "h-14 w-14 bg-primary/10 border-primary"
            : "h-9 w-9 bg-transparent border-foreground/60"
        } border-2 rounded-full will-change-transform`}
        style={{ mixBlendMode: "difference" as const }}
      >
        {label && (
          <span className="font-mono text-[8px] tracking-[0.2em] text-foreground">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 rounded-full bg-primary will-change-transform"
      />
    </>
  );
}
