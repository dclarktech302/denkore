"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

interface TiltCardProps extends React.ComponentProps<"div"> {
  neon?: boolean;
}

function TiltCard({ className, neon = false, children, ...props }: TiltCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      data-slot="tilt-card"
      className={cn(
        "tilt-card w-full rounded-[20px] border bg-white/[0.035] p-10 backdrop-blur-[8px] sm:p-14",
        neon ? "border-neon/18" : "border-white/8",
        inView && "in-view",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface TiltCardTagProps extends React.ComponentProps<"span"> {
  neon?: boolean;
}

function TiltCardTag({ className, neon = false, ...props }: TiltCardTagProps) {
  return (
    <span
      data-slot="tilt-card-tag"
      className={cn(
        "mb-5 inline-block rounded-full border px-3 py-[5px] text-[10px] tracking-[0.2em] uppercase",
        neon ? "border-neon/30 text-neon" : "border-violet-light/35 text-violet-light",
        className,
      )}
      {...props}
    />
  );
}

function TiltCardHeading({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="tilt-card-heading"
      className={cn(
        "mb-4 font-display text-[clamp(24px,4vw,36px)] leading-tight font-normal tracking-[-0.01em]",
        className,
      )}
      {...props}
    />
  );
}

function TiltCardBody({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="tilt-card-body"
      className={cn("max-w-[520px] text-[15px] leading-[1.7] text-white/60", className)}
      {...props}
    />
  );
}

export { TiltCard, TiltCardTag, TiltCardHeading, TiltCardBody, useInView };
