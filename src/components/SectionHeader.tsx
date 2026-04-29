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
        <span className="t-mono-sm text-primary normal-case tracking-[0.3em]">
          // {index} / {kicker}
        </span>
        <span className="flex-1 h-px bg-foreground/20" />
        <span className="t-mono-sm text-muted-foreground hidden sm:inline">
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
        <h2 className="t-h2">
          {title}
        </h2>
        {caption && (
          <p className="t-mono normal-case tracking-[0.18em] text-muted-foreground max-w-xs leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </header>
  );
}
