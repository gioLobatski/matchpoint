import Image from "next/image";

const steps = [
  {
    icon: "/icons/user-plus.svg",
    number: "01",
    text: "Create your verified profile with certifications, experience, and game history",
  },
  {
    icon: "/icons/search.svg",
    number: "02",
    text: "Get discovered by leagues and tournaments actively looking for qualified referees",
  },
  {
    icon: "/icons/inbox.svg",
    number: "03",
    text: "Accept and manage game assignments from one unified inbox",
  },
  {
    icon: "/icons/trending-up.svg",
    number: "04",
    text: "Track your earnings, ratings, and build a reputation that gets you more games",
  },
];

export default function HowItWorks() {
  return (
    <section id="experience" className="flex flex-col items-center gap-16 bg-section px-6 py-24 lg:px-16">
      <div className="flex max-w-[960px] flex-col gap-4 text-center">
        <h2 className="text-3xl font-bold leading-[52px] text-white md:text-4xl">
          How MatchPoint Works for Officials
        </h2>
        <p className="text-base leading-6 text-white/80">
          Your step-by-step journey to a better officiating career.
        </p>
      </div>
      <div className="flex w-full max-w-[1340px] flex-col overflow-hidden rounded-2xl bg-card lg:flex-row">
        <div className="flex flex-1 flex-col justify-center p-10 lg:p-16">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold leading-[52px] text-white md:text-4xl">
              Grow Your Career.
              <br />
              Get Discovered. Get Paid.
            </h3>
            <p className="text-lg text-primary-500">Every call you make builds your reputation.</p>
            <div className="flex flex-col gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <Image src={step.icon} alt="" width={80} height={80} className="shrink-0" />
                  <div className="flex flex-col gap-2">
                    <p className="text-[28px] font-bold text-primary-500">{step.number}</p>
                    <p className="max-w-[480px] text-lg font-semibold leading-8 text-white">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[785px] lg:w-[600px]">
          <Image src="/images/photo-panel-officials.png" alt="Basketball officials" fill className="object-cover" />
        </div>
      </div>
      <div className="h-px w-full max-w-[1340px] bg-primary-500 opacity-35" />
    </section>
  );
}
