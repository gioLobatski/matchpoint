import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PainPoints from "@/components/PainPoints";
import MissionBanner from "@/components/MissionBanner";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyWeBuilt from "@/components/WhyWeBuilt";
import SocialProof from "@/components/SocialProof";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <PainPoints />
      <MissionBanner />
      <Features />
      <HowItWorks />
      <WhyWeBuilt />
      <SocialProof />
      <ApplyForm />
      <Footer />
    </main>
  );
}
