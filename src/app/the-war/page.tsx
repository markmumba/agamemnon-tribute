import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The War — A Thousand Ships Sail for Troy",
};

const shipData = [
  { name: "Agamemnon", ships: 100 },
  { name: "Nestor", ships: 90 },
  { name: "Diomedes", ships: 80 },
  { name: "Menelaus", ships: 60 },
  { name: "Achilles", ships: 50 },
  { name: "Ajax", ships: 12 },
  { name: "Odysseus", ships: 12 },
];

const maxShips = 100;

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

        <div className="space-y-8 text-parchment/70 text-2xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Oath of Tyndareus
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Before <CharName name="Helen" /> chose <CharName name="Menelaus" /> as her husband, her father Tyndareus
              feared the rejected suitors would wage war. <CharName name="Odysseus" /> devised a
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
          <ScrollReveal delay={0.1}>
            <p>
              This was no mere political agreement. The oath was sworn upon the
              dismembered parts of a horse sacrifice. In the ancient Greek world,
              oath-breaking was punished by the Erinyes — the Furies — who
              pursued transgressors across the earth. Zeus himself was the
              guarantor of oaths, <em>Zeus Horkios</em>, and his thunderbolt
              was the weapon against those who broke sacred bonds. Kings who had
              no personal stake in Helen&apos;s marriage, and some who actively
              did not want to fight, came regardless. To violate the oath was to
              invite divine destruction upon oneself and one&apos;s entire house.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* The Reluctant Kings */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Reluctant Heroes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Not every hero marched willingly. When the heralds came to summon
              Odysseus, he had no desire to leave Ithaca, his wife Penelope, and
              his infant son Telemachus. He feigned madness — yoking a donkey and
              an ox together and sowing salt into the furrows like a lunatic.
              Palamedes saw through the ruse: he placed the infant Telemachus
              directly in the path of the plow. Odysseus swerved to avoid killing
              his son, proving his sanity. He was compelled to join. According to
              some traditions, Odysseus never forgave Palamedes — later
              engineering his execution at Troy on a fabricated charge of treason.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              <CharName name="Achilles" />&apos; mother, the sea-goddess <CharName name="Thetis" />, knew from prophecy
              that her son would either live a long obscure life or die young and
              gloriously at Troy. She disguised young Achilles as a girl and hid
              him among the daughters of King Lycomedes on the island of Scyros,
              where he lived under the name Pyrrha. Odysseus arrived disguised as
              a merchant and laid out gifts — jewelry, fine cloth, and perfume,
              but also a sword and shield among the wares. When a trumpet was
              sounded, all the real women fled in terror. Achilles instinctively
              seized the weapons. His identity revealed, he joined willingly —
              choosing glory over long life.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* Mustering Problems */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The False Start
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The gathering at Aulis was plagued with difficulties beyond the
              famous windlessness. The fleet initially sailed to Mysia by mistake,
              believing it was the Troad, and fought a battle there against
              Telephus, king of Mysia and a son of Heracles. Achilles wounded
              Telephus with his spear. When the Greeks realized their error, they
              sailed back and had to reassemble entirely.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The wound of Telephus would not heal — an oracle told him &ldquo;he
              that wounded shall heal.&rdquo; So Telephus came to Argos to seek
              Achilles. Rust from Achilles&apos; spear was applied to the wound
              and it healed. In gratitude, Telephus guided the fleet to Troy on
              their second attempt. This false start meant the war required two
              separate muster-and-launch operations, stretching the patience and
              resources of the alliance to breaking point.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Kings Who Answered
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 mt-8">
            {kings.map((king, i) => (
              <ScrollReveal key={king.name} delay={i * 0.1}>
                <div className="border border-gold/10 p-6 hover:border-gold/30 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl text-marble/90">
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

          {/* Ship Bar Chart */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-8">
              Ships by Commander
            </h2>
          </ScrollReveal>
          <div className="space-y-4 mb-12">
            {shipData.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 0.06}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-sm text-parchment/50 w-28 text-right shrink-0">{d.name}</span>
                  <div className="flex-1 h-6 bg-gold/5 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold/60 to-gold/30"
                      style={{ width: `${(d.ships / maxShips) * 100}%` }}
                    />
                  </div>
                  <span className="font-serif text-sm text-gold/60 w-10 shrink-0">{d.ships}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Force Stat Banner */}
          <ScrollReveal>
            <div className="border border-gold/15 p-6 grid grid-cols-3 gap-4 text-center my-12">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold/80">1,186</p>
                <p className="text-parchment/40 text-xs tracking-[0.2em] uppercase mt-1">Ships</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold/80">~100,000</p>
                <p className="text-parchment/40 text-xs tracking-[0.2em] uppercase mt-1">Warriors</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-gold/80">29</p>
                <p className="text-parchment/40 text-xs tracking-[0.2em] uppercase mt-1">Kingdoms</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl my-12">
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
