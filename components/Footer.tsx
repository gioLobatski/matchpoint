import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 bg-black p-10 lg:p-20">
      <div className="h-px w-full max-w-[1280px] bg-primary-500/40" />
      <div className="flex w-full max-w-[1280px] flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="relative h-[79px] w-[180px]">
          <Image src="/images/logo.png" alt="MatchPoint" fill className="object-contain" />
        </div>
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} MatchPoint. Every Call Counts.
        </p>
      </div>
    </footer>
  );
}
