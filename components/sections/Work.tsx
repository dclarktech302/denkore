import { SectionHeading } from "@/components/ui/section-heading";
import { WorkCard, type WorkCardProps } from "@/components/ui/work-card";

const WORK_ITEMS: WorkCardProps[] = [
  {
    tag: "Web Development",
    title: "Coastal refresh, Rehoboth Beach",
    description:
      "A ground-up rebuild for a Rehoboth Beach venue — mobile-first, fast, and built to actually convert a Saturday night search into a customer through the door.",
    status: "in-progress",
  },
  {
    tag: "Web Development",
    title: "Next build.",
    description: "More work landing soon.",
    status: "coming-soon",
  },
  {
    tag: "Digital Infrastructure",
    title: "Next build.",
    description: "More work landing soon.",
    status: "coming-soon",
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
