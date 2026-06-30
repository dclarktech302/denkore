import {
  TiltCard,
  TiltCardTag,
  TiltCardHeading,
  TiltCardBody,
} from "@/components/ui/tilt-card";

export function ProofCard() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-20">
      <TiltCard neon className="max-w-[680px]">
        <TiltCardTag neon>Proof, not pitch</TiltCardTag>
        <TiltCardHeading>The work is the argument.</TiltCardHeading>
        <TiltCardBody>
          Every site we ship, every system we build, is evidence. We
          don&apos;t explain the mission — we show up in rooms that
          don&apos;t expect us, and we belong there completely.
        </TiltCardBody>
      </TiltCard>
    </section>
  );
}
