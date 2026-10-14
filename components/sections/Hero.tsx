import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-6 py-32 text-center"
    >
      <div
        className="animate-fade-up mb-6 text-[11px] tracking-[0.3em] text-violet-light uppercase [animation-delay:0.1s]"
      >
        Denkore Group LLC — Eastern Shore
      </div>

      <h1 className="animate-fade-up mb-6 max-w-4xl font-display text-[clamp(36px,7vw,76px)] leading-[1.05] font-light tracking-[-0.02em] [animation-delay:0.3s]">
        Tech that&apos;s{" "}
        <span className="text-gradient-accent">not confusing.</span>
      </h1>

      <p className="animate-fade-up mb-10 max-w-[520px] text-[clamp(15px,2vw,18px)] leading-[1.6] text-white/55 [animation-delay:0.5s]">
        Enterprise-grade infrastructure, delivered like a conversation — not a
        contract. We build for the businesses everyone else overlooks.
      </p>

      <div className="animate-fade-up flex flex-wrap items-center justify-center gap-4 [animation-delay:0.7s]">
        <Button asChild variant="primary">
          <a href="#contact">Start a conversation</a>
        </Button>
        <Button asChild variant="ghost">
          <a href="#work">See the work</a>
        </Button>
      </div>

      <div className="animate-fade-up absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 [animation-delay:1s]">
        <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">
          Scroll
        </span>
        <div className="animate-pulse-line h-7 w-px bg-white/30" />
      </div>
    </section>
  );
}
