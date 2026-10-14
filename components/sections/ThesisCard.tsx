import {
  TiltCard,
  TiltCardTag,
  TiltCardHeading,
  TiltCardBody,
} from "@/components/ui/tilt-card";

export function ThesisCard() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-24 items-center justify-center px-6 py-20"
    >
      <TiltCard className="max-w-[680px]">
        <TiltCardTag>The thesis</TiltCardTag>
        <TiltCardHeading>Technology is for everyone.</TiltCardHeading>
        <TiltCardBody>
          Most Eastern Shore businesses have been told, directly or not,
          that real technology belongs to someone else: bigger companies,
          bigger budgets, bigger cities. The same goes for people. Access to
          technology shouldn&apos;t depend on your age, your credentials or
          where you started. We exist to prove that, one build at a time.
        </TiltCardBody>
      </TiltCard>
    </section>
  );
}
