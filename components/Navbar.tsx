import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Experience", href: "#experience" },
  { label: "Purpose", href: "#purpose" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[98px] items-center justify-between bg-black/50 px-6 backdrop-blur-[2px] lg:px-16">
      <Link href="#home" className="relative h-[66px] w-[129px] shrink-0">
        <Image src="/images/logo.png" alt="MatchPoint" fill className="object-contain" priority />
      </Link>
      <nav className="hidden items-center gap-7 text-base text-neutral-200 md:flex">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="transition-colors hover:text-primary-500">
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="#apply"
        className="rounded-xl bg-primary-500 px-6 py-4 text-base text-black transition-colors hover:bg-amber-accent"
      >
        Start Your Journey
      </Link>
    </header>
  );
}
