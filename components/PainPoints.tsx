import Image from "next/image";

const painPoints = [
  {
    icon: "/icons/calendar-x.svg",
    title: "No Consistent Games",
    body: "You are qualified, but organizers cannot find you. Weekends go empty while games are filled by officials with less experience.",
  },
  {
    icon: "/icons/wallet-outline.svg",
    title: "Chasing Your Pay",
    body: "After every game, the wait begins. Following up on payments takes more time than the game itself — and some never arrive.",
  },
  {
    icon: "/icons/chat-outline.svg",
    title: "No Central Inbox",
    body: "Assignments arrive through personal messages, group chats, and phone calls. No record, no confirmation, no accountability.",
  },
  {
    icon: "/icons/people.svg",
    title: "No Way to Stand Out",
    body: "Your certifications and experience exist only on paper. There is no digital profile to show leagues who you are and what you have achieved.",
  },
];

export default function PainPoints() {
  return (
    <section id="problem" className="bg-black px-6 py-20 lg:px-16">
      <div className="mx-auto flex max-w-[1340px] flex-col overflow-hidden rounded-2xl lg:flex-row">
        <div className="relative min-h-[320px] lg:min-h-[690px] lg:w-[48%]">
          <Image src="/images/grind-photo.png" alt="The daily grind of a basketball official" fill className="object-cover" />
        </div>
        <div className="bg-panel p-10 lg:w-[52%]">
          <h2 className="text-3xl font-bold leading-[52px] text-white md:text-4xl">
            THE STRUGGLE IS REAL
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-card p-6">
                <Image src={point.icon} alt="" width={40} height={40} />
                <h3 className="mt-3 text-lg font-semibold leading-8 text-white">{point.title}</h3>
                <p className="mt-2 text-base leading-6 text-white/80">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
