import Section from "@/app/components/layout/Section";
import { MARQUEE_ITEM_COUNT } from "@/app/lib/constants";

export default function MarqueeSection() {
  const items = Array.from({ length: MARQUEE_ITEM_COUNT });

  return (
    <Section bgColor="bg-primary-500" className="overflow-hidden py-6">
      <div className="animate-marquee flex w-max items-center gap-12">
        {items.map((_, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-6xl font-bold uppercase tracking-widest text-black/80 md:text-8xl"
          >
            MatchPoint
          </span>
        ))}
      </div>
    </Section>
  );
}
