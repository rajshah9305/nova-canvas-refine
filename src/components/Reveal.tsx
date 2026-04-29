import { motion, type MotionProps, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { VIEWPORT, fadeUp, stagger, item } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variants?: Variants;
  delay?: number;
} & Omit<MotionProps, "variants" | "initial" | "whileInView" | "viewport">;

/**
 * Single reveal — fades + slides up on first scroll into view.
 * Drop-in replacement for one-off motion blocks.
 */
export function Reveal({
  children,
  as = "div",
  className,
  variants = fadeUp,
  delay = 0,
  ...rest
}: RevealProps) {
  const Comp = motion(as as ElementType);
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type GroupProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  gap?: number;
};

/**
 * Stagger container — children should be `<Stagger.Item>` or use the `item` variant.
 */
export function StaggerGroup({
  children,
  as = "div",
  className,
  delay = 0,
  gap = 0.08,
}: GroupProps) {
  const Comp = motion(as as ElementType);
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={stagger(delay, gap)}
    >
      {children}
    </Comp>
  );
}

type ItemProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variants?: Variants;
} & Omit<MotionProps, "variants">;

export function StaggerItem({
  children,
  as = "div",
  className,
  variants = item,
  ...rest
}: ItemProps) {
  const Comp = motion(as as ElementType);
  return (
    <Comp className={className} variants={variants} {...rest}>
      {children}
    </Comp>
  );
}
