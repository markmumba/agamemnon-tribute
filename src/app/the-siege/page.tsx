import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The Siege — Ten Years at Troy",
};

const warStats = [
  { label: "Years of Siege", value: "10" },
  { label: "Cities Raided by Sea", value: "12" },
  { label: "Cities Raided by Land", value: "11" },
  { label: "Ships in the Fleet", value: "1,186" },
];

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
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/troy-siege.webp"
            alt="The siege of Troy"
            fill
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
          <h1 className="font-serif text-fluid-chapter text-marble tracking-wide">
            Ten Years at Troy
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <ScrollReveal>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-8">
            The Trojan War was not a swift campaign. It was a decade of blood,
            politics, divine intervention, and human endurance. Here is how it
            unfolded under Agamemnon&apos;s command.
          </p>
        </ScrollReveal>

        {/* Diplomacy Before War */}
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-6">
            The Failed Embassy
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            Before a single spear was thrown, the Greeks attempted diplomacy.
            <CharName name="Menelaus" /> and <CharName name="Odysseus" /> traveled to Troy as ambassadors to demand
            Helen&apos;s return. They were hosted by the Trojan elder Antenor,
            who received them in his own home. Homer describes how Odysseus stood
            with his eyes fixed on the ground, clutching his staff without
            gesture — one might have thought him a man of no account. But when
            his great voice boomed forth, his words fell like winter snowflakes,
            and no mortal could rival him.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            The embassy failed. <CharName name="Paris" /> refused to return Helen. A faction led by
            Antimachus — bribed by Paris with Trojan gold — urged the assembly to
            kill the ambassadors on the spot. Only Antenor&apos;s intervention
            saved their lives. This is why, when Troy finally fell, the Greeks
            spared Antenor and his family. The failure of diplomacy was the formal
            justification for war: the Greeks had offered peace, and Troy had
            chosen otherwise.
          </p>
        </ScrollReveal>

        <div className="h-[1px] w-16 bg-gold/20 my-12" />

        {/* The Gods at War */}
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-6">
            The Gods Choose Sides
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            The divine machinery of the Trojan War was vast. The war itself was
            Zeus&apos;s plan — the lost epic <em>Cypria</em> states he intended
            the conflict to relieve the earth of overpopulation. The gods divided
            along factional lines: <CharName name="Hera" />, <CharName name="Athena" />, and <CharName name="Poseidon" /> fought for the
            Greeks. <CharName name="Apollo" />, <CharName name="Aphrodite" />, and <CharName name="Ares" /> championed Troy. Zeus tried to
            remain neutral but was manipulated repeatedly.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            In Book 14 of the <em>Iliad</em>, Hera seduced Zeus on Mount Ida
            using an enchanted girdle borrowed from Aphrodite, putting him to
            sleep so Poseidon could openly aid the Greeks. Apollo personally
            shielded <CharName name="Hector" /> and guided Paris&apos;s arrow to <CharName name="Achilles" />&apos; heel.
            In Book 5, Athena guided <CharName name="Diomedes" />&apos; hand when he wounded both
            Aphrodite and Ares himself. Eventually Zeus lifted all restraints —
            and the gods went to war against each other directly. Athena punched
            Ares. Hera boxed Artemis&apos;s ears with her own quiver.
          </p>
        </ScrollReveal>

        <div className="h-[1px] w-16 bg-gold/20 my-12" />

        {/* Patroclus */}
        <ScrollReveal>
          <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-6">
            The Death of Patroclus
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            With Achilles withdrawn, Hector pushed the Greeks back to their
            ships. <CharName name="Patroclus" /> begged Achilles to let him fight, weeping. Achilles
            agreed — but set a strict limit: drive the Trojans from the ships,
            then return. Do not press on to the walls of Troy.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-6">
            Patroclus donned Achilles&apos; armor. The Trojans were terrified,
            believing Achilles had returned. He drove them from the ships and
            killed <CharName name="Sarpedon" />, Zeus&apos;s own son. Zeus wept tears of blood but
            Hera convinced him not to intervene — arguing it would unravel fate
            itself. But Patroclus, intoxicated by success, violated
            Achilles&apos; command and charged the walls. Apollo struck him from
            behind, shattering his spear and loosening his armor. Dazed and
            exposed, he was finished by Hector.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-parchment/70 text-2xl leading-relaxed font-body mb-16">
            Patroclus&apos;s death was the true turning point. It ended
            Achilles&apos; withdrawal — not loyalty to Agamemnon, not duty, not
            the oath, but grief and rage over his beloved companion. Achilles&apos;
            return, wearing divine armor forged by <CharName name="Hephaestus" />, led directly to
            the death of Hector and the fall of Troy. Agamemnon&apos;s quarrel
            had set the catastrophe in motion. Patroclus&apos;s death resolved it.
          </p>
        </ScrollReveal>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {warStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="border border-gold/15 p-5 text-center">
                <p className="font-serif text-3xl text-gold/80 mb-1">{stat.value}</p>
                <p className="text-parchment/40 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          {timeline.map((event, i) => (
            <ScrollReveal key={event.year} delay={i * 0.05}>
              <div className="relative pl-14 pb-16 last:pb-0">
                <div className="absolute left-4 top-2 -translate-x-[3.5px]">
                  <div className="w-3 h-3 rounded-full border border-gold/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
                  </div>
                </div>
                <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/50 mb-3">
                  {event.year}
                </p>
                <h3 className="font-serif text-3xl text-marble/90 mb-4">
                  {event.title}
                </h3>
                <p className="text-parchment/60 text-xl leading-relaxed font-body">
                  {event.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl mt-16">
            &ldquo;Agamemnon stood in the ashes of Priam&apos;s palace. Troy was
            his. But victory, he would learn, was not the same as peace.&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>

      <ChapterNav current="/the-siege" />
    </article></ChapterEntrance>
  );
}
