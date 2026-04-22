import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "p";
};

/**
 * Premium reveal — masks content and slides up on view.
 * Uses overflow-hidden parent + translateY child for crisp editorial feel.
 */
export function RevealText({ children, className = "", delay = 0, as = "div" }: Props) {
  const Tag = motion[as];
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <Tag
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
        className="inline-block will-change-transform"
      >
        {children}
      </Tag>
    </span>
  );
}
