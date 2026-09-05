import HeroSection from "@/components/HeroSection";
import TheMan from "@/components/TheMan";
import TheWar from "@/components/TheWar";
import TheSacrifice from "@/components/TheSacrifice";
import TheSiege from "@/components/TheSiege";
import TheFall from "@/components/TheFall";
import TheLegacy from "@/components/TheLegacy";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-[1]">
        <HeroSection />
      </div>
      <div className="sticky top-0 z-[2] stack-shadow">
        <TheMan />
      </div>
      <div className="sticky top-0 z-[3] stack-shadow">
        <TheWar />
      </div>
      <div className="sticky top-0 z-[4] stack-shadow">
        <TheSacrifice />
      </div>
      <div className="sticky top-0 z-[5] stack-shadow">
        <TheSiege />
      </div>
      <div className="sticky top-0 z-[6] stack-shadow">
        <TheFall />
      </div>
      <div className="relative z-[7] stack-shadow">
        <TheLegacy />
      </div>
    </main>
  );
}
