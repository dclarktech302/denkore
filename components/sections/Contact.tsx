import { ContactForm } from "@/components/features/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-6 py-24"
    >
      <div className="mb-12 max-w-[560px] text-center">
        <h2 className="mb-4 font-display text-[clamp(28px,5vw,44px)] font-light tracking-[-0.02em]">
          Let&apos;s build something <span className="text-gradient-accent">real.</span>
        </h2>
        <p className="text-[15px] leading-[1.6] text-white/55">
          No jargon. No overcomplication. Just a conversation about what your
          business actually needs.
        </p>
      </div>

      <div className="w-full max-w-[560px] rounded-[20px] border border-white/8 bg-white/[0.035] p-8 backdrop-blur-[8px] sm:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
