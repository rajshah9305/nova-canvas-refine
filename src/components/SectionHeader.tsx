import type { ReactNode } from "react";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  caption?: ReactNode;
  align?: "left" | "split";
};

export function SectionHeader({ index, kicker, title, caption, align = "split" }: Props) {
  return (
    <header className="mb-8 sm:mb-10 md:mb-14">
      <div className="flex items-baseline gap-3 sm:gap-4 mb-4 sm:mb-5">
        <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-primary">
          // {index} / {kicker}
        </span>
        <span className="flex-1 h-px bg-foreground/20" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground hidden sm:inline">
          [SECTION]
        </span>
      </div>
      <div
        className={
          align === "split"
            ? "flex items-end justify-between flex-wrap gap-4 sm:gap-6"
            : ""
        }
      >
        <h2 className="font-display font-black text-[2.25rem] sm:text-5xl md:text-7xl tracking-[-0.035em] leading-[0.9] sm:leading-[0.88]">
          {title}
        </h2>
        {caption && (
          <p className="font-mono text-[11px] sm:text-xs text-muted-foreground max-w-xs leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </header>
  );
}
