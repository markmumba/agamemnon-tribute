import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "The Siege — Ten Years at Troy",
};

const timeline = [
  {
    year: "Year 1",
    title: "The Landing",
    text: "The Achaean fleet reached the shores of Troy. A prophecy declared the first Greek to touch Trojan soil would die — Protesilaus leaped from his ship regardless and was struck down by Hector. The war had its first martyr. The Greeks established their camp on the beach and began the siege.",
  },
  {
    year: "Years 2–4",
    title: "The Raids",
    text: "Troy's walls — built by Poseidon and Apollo — proved impenetrable by direct assault. The war shifted to attrition. Achilles led raids on surrounding cities, plundering twelve cities by sea and eleven by land, bringing back treasure and captives to sustain the Greek army.",
  },
  {
    year: "Years 5–8",
    title: "The Long Grind",
    text: "Morale wavered. Soldiers far from home, years stretching into an eternity of skirmishes and stalemates. Agamemnon held the alliance together through force of will, political maneuvering, and the promise that Troy would eventually fall. It was leadership through endurance.",
  },
  {
    year: "Year 9",
    title: "The Wrath of Achilles",
    text: "The event that nearly destroyed the Greek cause. When Agamemnon was forced to return Chryseis to her father (a priest of Apollo who had sent a plague on the camp), he demanded Achilles' war prize Briseis as compensation. Achilles, dishonored, withdrew from battle entirely. Without him, the Trojans pushed the Greeks back to their ships. Hector nearly burned the fleet. Only Patroclus' death — and Achilles' devastating return — turned the tide.",
  },
  {
    year: "Year 10",
    title: "The Fall of Troy",
    text: "Achilles killed Hector but fell to Paris' arrow guided by Apollo. Ajax and Odysseus fought over Achilles' armor — Ajax lost and took his own life. Finally, Odysseus conceived the stratagem of the wooden horse. The Greeks feigned retreat, leaving behind the great hollow structure. The Trojans, believing it a sacred offering, wheeled it through their gates. That night, Greek warriors emerged from inside. The gates were opened. Troy burned.",
  },
];

export default function TheSiegePage() {
  return (
    <article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/troy-siege.png"
            alt="The siege of Troy"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
        <div className="absolute bottom-12 left-8 sm:left-16 lg:left-24 z-10">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-3">
            The Siege
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble tracking-wide">
            Ten Years at Troy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <ScrollReveal>
          <p className="text-parchment/70 text-xl leading-relaxed font-body mb-16">
            The Trojan War was not a swift campaign. It was a decade of blood,
            politics, divine intervention, and human endurance. Here is how it
            unfolded under Agamemnon&apos;s command.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          {timeline.map((event, i) => (
            <ScrollReveal key={event.year} delay={i * 0.05}>
              <div className="relative pl-14 pb-16 last:pb-0">
                <div className="absolute left-4 top-2 w-2 h-2 -translate-x-[3.5px] rounded-full bg-gold/60" />
                <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/50 mb-3">
                  {event.year}
                </p>
                <h3 className="font-serif text-2xl text-marble/90 mb-4">
                  {event.title}
                </h3>
                <p className="text-parchment/60 text-lg leading-relaxed font-body">
                  {event.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl mt-16">
            &ldquo;Agamemnon stood in the ashes of Priam&apos;s palace. Troy was
            his. But victory, he would learn, was not the same as peace.&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>

      <ChapterNav current="/the-siege" />
    </article>
  );
}
