import Image from "next/image";

const features = [
  {
    icon: "/icons/calendar-x.svg",
    title: "Verified Profile",
    body: "Build credibility with a digital resume of your certifications, experience, and complete game history.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Availability Calendar",
    body: "Set your available dates and block-out times so leagues can only book you when you are ready.",
  },
  {
    icon: "/icons/calendar-x.svg",
    title: "Game Alerts",
    body: "Get notified instantly when leagues in your area are looking for officials — never miss an opportunity.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Payment Tracking",
    body: "Know exactly when you will get paid. Track every game fee with a dedicated earnings dashboard.",
  },
  {
    icon: "/icons/calendar-x.svg",
    title: "Rating System",
    body: "Earn ratings from organizers after every game and build a reputation that gets you more bookings.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Performance Analytics",
    body: "Track your growth — games officiated, total earnings, ratings over time, and booking trends.",
  },
];

export default function Features() {
  return (
    <section id="solutions" className="bg-black px-6 py-20 lg:px-16">
      <div className="mx-auto flex max-w-[1340px] flex-col-reverse overflow-hidden rounded-2xl lg:flex-row">
        <div className="bg-panel p-10 lg:w-[52%]">
          <h2 className="text-3xl font-bold leading-[52px] text-white md:text-4xl">
            Everything an Official Needs
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-card p-6">
                <Image src={feature.icon} alt="" width={40} height={40} />
                <h3 className="mt-3 text-lg font-semibold leading-8 text-white">{feature.title}</h3>
                <p className="mt-2 text-base leading-6 text-white/80">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[811px] lg:w-[48%]">
          <Image src="/images/tools-photo.png" alt="Tools of a basketball official" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
