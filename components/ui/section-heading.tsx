"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/tilt-card";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <div
      ref={ref}
      className={cn("scroll-fade-up text-center", inView && "in-view", className)}
    >
      <div className="mb-5 text-[11px] tracking-[0.3em] text-violet-light uppercase">
        {eyebrow}
      </div>
      <h2 className="font-display text-[clamp(28px,5vw,44px)] font-light tracking-[-0.02em]">
        {title}
      </h2>
    </div>
  );
}
