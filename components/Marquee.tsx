const items = Array.from({ length: 8 });

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-primary-500 py-6">
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
    </div>
  );
}
