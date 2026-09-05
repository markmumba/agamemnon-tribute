import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "The War — A Thousand Ships Sail for Troy",
};

const kings = [
  { name: "Achilles", kingdom: "Phthia", ships: 50, note: "Greatest warrior of the age" },
  { name: "Odysseus", kingdom: "Ithaca", ships: 12, note: "The cunning strategist" },
  { name: "Ajax the Great", kingdom: "Salamis", ships: 12, note: "Unbreakable in battle" },
  { name: "Diomedes", kingdom: "Argos", ships: 80, note: "Wounded gods themselves" },
  { name: "Nestor", kingdom: "Pylos", ships: 90, note: "The elder voice of wisdom" },
  { name: "Menelaus", kingdom: "Sparta", ships: 60, note: "The wronged husband" },
];

export default function TheWarPage() {
  return (
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/agamemnon-war.jpg"
            alt="The Achaean army assembles"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
        <div className="absolute bottom-12 left-8 sm:left-16 lg:left-24 z-10">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-3">
            The War
          </p>
          <h1 className="font-serif text-fluid-chapter text-marble tracking-wide">
            A Thousand Ships
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Oath of Tyndareus
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Before Helen chose Menelaus as her husband, her father Tyndareus
              feared the rejected suitors would wage war. Odysseus devised a
              solution: every suitor must swear an oath to defend whoever Helen
              chose, against any man who would wrong him.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              They all swore. And when Paris violated that oath by stealing Helen
              away to Troy, every king in Greece was bound by sacred duty to
              march. Agamemnon — as the most powerful among them — was chosen to
              lead.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Gathering at Aulis
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              From every corner of Greece, they came. Warriors, kings, and heroes
              — men whose names would echo through three thousand years of human
              memory. They gathered at the port of Aulis with over one thousand
              ships, the greatest naval fleet the ancient world had ever assembled.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The logistics alone were staggering. Feeding, arming, and
              coordinating a hundred thousand men required the kind of political
              authority only Agamemnon possessed. He was not the strongest fighter
              — that title belonged to Achilles. He was not the wisest — Odysseus
              claimed that honor. But he was the king who could hold them all
              together.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Kings Who Answered
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 mt-8">
            {kings.map((king, i) => (
              <ScrollReveal key={king.name} delay={i * 0.1}>
                <div className="border border-gold/10 p-6 hover:border-gold/30 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-marble/90">
                      {king.name}
                    </h3>
                    <span className="font-serif text-sm text-gold/50">
                      {king.ships} ships
                    </span>
                  </div>
                  <p className="text-sm text-parchment/40 mb-1">{king.kingdom}</p>
                  <p className="text-parchment/60 italic">{king.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl my-12">
              &ldquo;Never before had so many sailed for a single cause. And
              perhaps never again.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      <ChapterNav current="/the-war" />
    </article></ChapterEntrance>
  );
}
