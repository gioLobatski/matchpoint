import Image from "next/image";
import Section from "@/app/components/layout/Section";
import Row from "@/app/components/layout/Row";

export default function Footer() {
  return (
    <Section bgColor="bg-black" className="p-10 lg:p-20">
      <Row className="flex flex-col items-center gap-10">
        <div className="h-px w-full bg-primary-500/40" />
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="relative h-[79px] w-[180px]">
            <Image
              src="/images/logo.png"
              alt="MatchPoint"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} MatchPoint. Every Call Counts.
          </p>
        </div>
      </Row>
    </Section>
  );
}
