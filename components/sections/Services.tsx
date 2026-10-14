import {
  TiltCard,
  TiltCardTag,
  TiltCardHeading,
  TiltCardBody,
} from "@/components/ui/tilt-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section
      id="services"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-6 py-24"
    >
      <SectionHeading eyebrow="What we do" title="Two ways we help." className="mb-16" />

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
        <TiltCard className="flex flex-col">
          <TiltCardTag>Standard &amp; Premium</TiltCardTag>
          <TiltCardHeading>A site that actually works for you.</TiltCardHeading>
          <TiltCardBody className="mb-8 max-w-none">
            Fast, mobile-first websites for local businesses, restaurants,
            nonprofits, and creatives — built custom, not templated. Standard
            builds get you live and credible. Premium builds add motion,
            depth, and a look your competitors don&apos;t have.
          </TiltCardBody>
          <Button asChild variant="ghost" className="mt-auto self-start">
            <a href="#contact">Talk to us</a>
          </Button>
        </TiltCard>

        <TiltCard className="flex flex-col">
          <TiltCardTag>Entertainment &amp; Hospitality</TiltCardTag>
          <TiltCardHeading>
            Your whole digital operation, one partner.
          </TiltCardHeading>
          <TiltCardBody className="mb-8 max-w-none">
            Web presence, distribution, booking, royalty management, and
            marketing — built and connected as one system instead of five
            disconnected tools. Built for small entertainment and hospitality
            businesses that are tired of stitching vendors together.
          </TiltCardBody>
          <Button asChild variant="ghost" className="mt-auto self-start">
            <a href="#contact">Let&apos;s talk</a>
          </Button>
        </TiltCard>
      </div>
    </section>
  );
}
