import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  num: string;
  title: string;
  whisper?: string;
  narration: ReactNode;
};

/**
 * Cinematic chapter opener — appears between sections like a book turn.
 */
export function Chapter({ num, title, whisper, narration }: Props) {
  return (
    <div className="border-t-2 border-foreground bg-background relative overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16 py-14 md:py-24 relative">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Numeral side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 flex items-baseline gap-4 md:block"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary mb-2">
              CHAPTER
            </div>
            <div className="font-editorial text-primary text-[5rem] sm:text-[7rem] md:text-[10rem] leading-[0.85] not-italic md:not-italic italic">
              {num}
            </div>
          </motion.div>

          {/* Narration side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-8 md:pt-8"
          >
            {whisper && (
              <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-muted-foreground mb-4">
                — {whisper.toUpperCase()}
              </div>
            )}
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl tracking-[-0.035em] leading-[0.9] mb-6 md:mb-8">
              {title}
            </h2>
            <div className="font-editorial text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/85 max-w-2xl drop-cap">
              {narration}
            </div>

            {/* Page-turn cue */}
            <div className="mt-8 md:mt-12 flex items-center gap-3">
              <span className="h-px w-10 bg-foreground" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-foreground/60">
                TURN THE PAGE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
