"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/components/ui/tilt-card";

export interface WorkCardProps {
  title: string;
  description: string;
  tag: string;
  link?: string;
  status: "live" | "in-progress" | "coming-soon";
}

const STATUS_LABEL: Record<WorkCardProps["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  "coming-soon": "Coming soon",
};

const STATUS_CLASS: Record<WorkCardProps["status"], string> = {
  live: "border-blue-light/30 text-blue-light",
  "in-progress": "border-violet-light/35 text-violet-light",
  "coming-soon": "border-white/15 text-white/35",
};

export function WorkCard({ title, description, tag, link, status }: WorkCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const muted = status === "coming-soon";

  const content = (
    <div
      ref={ref}
      className={cn(
        "tilt-card flex h-full flex-col rounded-[20px] border border-white/8 bg-white/[0.035] p-8 backdrop-blur-[8px]",
        inView && "in-view",
        muted && "border-white/5 bg-white/[0.015]",
      )}
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "inline-block rounded-full border px-3 py-[5px] text-[10px] tracking-[0.15em] whitespace-nowrap uppercase",
            muted ? "border-white/12 text-white/30" : "border-violet-light/35 text-violet-light",
          )}
        >
          {tag}
        </span>
        <span
          className={cn(
            "inline-block rounded-full border px-2.5 py-1 text-[10px] tracking-[0.1em] whitespace-nowrap uppercase",
            STATUS_CLASS[status],
          )}
        >
          {STATUS_LABEL[status]}
        </span>
      </div>
      <h3
        className={cn(
          "mb-3 font-display text-[20px] leading-tight font-normal tracking-[-0.01em]",
          muted && "text-white/45",
        )}
      >
        {title}
      </h3>
      <p className={cn("text-[14px] leading-[1.7]", muted ? "text-white/30" : "text-white/55")}>
        {description}
      </p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
