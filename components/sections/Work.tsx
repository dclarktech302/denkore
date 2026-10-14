import { SectionHeading } from "@/components/ui/section-heading";
import { WorkCard, type WorkCardProps } from "@/components/ui/work-card";

const WORK_ITEMS: WorkCardProps[] = [
  {
    tag: "Web Development",
    title: "GGR Music Group",
    description:
      "Site for an Eastern Shore music collective: show listings, email signup, and an image pipeline that keeps photo-heavy pages fast. Redesigned in October 2026.",
    status: "live",
    link: "https://ggrmusic.com",
  },
  {
    tag: "Digital Infrastructure",
    title: "Nightdeck",
    description:
      "A multi-tenant events platform for independent promoters: org-scoped data, PIN login, staff QR check-in and a public attendance survey.",
    status: "live",
    link: "https://nightdeck.live",
  },
  {
    tag: "Web Development",
    title: "StratAct Consulting & Research Group",
    description:
      "Redesign of the website for a consulting firm serving higher education institutions and nonprofits.",
    status: "in-progress",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center px-6 py-24"
    >
      <SectionHeading eyebrow="Recent work" title="What we've built." className="mb-16" />

      <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WORK_ITEMS.map((item) => (
          <WorkCard key={item.title + item.tag} {...item} />
        ))}
      </div>
    </section>
  );
}
