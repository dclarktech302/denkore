"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The observer's first callback reports whatever the element's
    // intersection state already is at observe()-time — it isn't
    // necessarily the result of a user scroll. That happens whenever the
    // page mounts with this element already on-screen (browser scroll
    // restoration on reload, or loading directly at a section anchor).
    // Treat that first report as a snapshot, not a scroll event: reveal
    // instantly with no transition instead of running the tilt-rise
    // animation for a scroll that never happened. Any later callback is a
    // real crossing triggered by the user scrolling, so it animates as usual.
    let isInitialReport = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isInitialReport) {
              el.style.transitionDuration = "0s";
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  el.style.transitionDuration = "";
                });
              });
            }
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
        isInitialReport = false;
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
