import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "The Legacy — Agamemnon Through the Ages",
};

const themes = [
  {
    title: "Power",
    text: "He commanded the greatest alliance in the ancient world. But power demanded sacrifices no father should make.",
  },
  {
    title: "Hubris",
    text: "He walked on purple tapestries meant for gods. He took Achilles' prize. He believed victory made him invincible.",
  },
  {
    title: "Duty",
    text: "He chose the mission over his daughter, the army over his family, the crown over his humanity.",
  },
  {
    title: "Tragedy",
    text: "He conquered Troy and was murdered in his bathtub. The greatest king of Greece, undone by the consequences of his own choices.",
  },
];

export default function TheLegacyPage() {
  return (
    <article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/legacy-hero.webp"
            alt="The legacy of Agamemnon"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/20 to-obsidian" />
        <div className="absolute bottom-12 left-8 sm:left-16 lg:left-24 z-10">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-3">
            The Legacy
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble tracking-wide">
            Eternal in Memory
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              In Literature
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon appears in the two foundational texts of Western
              literature. In Homer&apos;s <em>Iliad</em>, he is the flawed
              commander whose pride causes a catastrophic rift with Achilles. In
              the <em>Odyssey</em>, his ghost warns Odysseus from the underworld
              about the dangers of trusting too deeply, even those closest to you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Aeschylus immortalized his death in the <em>Oresteia</em> trilogy —
              perhaps the greatest work of ancient Greek drama. The first play,
              <em> Agamemnon</em>, portrays his murder with unflinching intensity.
              The trilogy explores justice, vengeance, and the birth of democratic
              law through the lens of his family&apos;s destruction.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Mask of Agamemnon
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In 1876, Heinrich Schliemann excavated the ancient citadel of
              Mycenae and discovered a gold funeral mask in one of the shaft
              graves. He reportedly telegraphed the King of Greece: &ldquo;I have
              gazed upon the face of Agamemnon.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Modern archaeology dates the mask to roughly 1550 BCE — centuries
              before the traditional date of the Trojan War. It almost certainly
              does not depict Agamemnon. Yet the name stuck, and the &ldquo;Mask
              of Agamemnon&rdquo; remains one of the most famous archaeological
              artifacts in history, housed in the National Archaeological Museum
              of Athens.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative my-16">
              <Image
                src="/agamemnon-armor.jpg"
                alt="Corinthian helmet artifact"
                width={794}
                height={781}
                className="w-full max-w-md mx-auto"
              />
              <p className="text-center text-parchment/30 text-sm mt-4 font-serif tracking-wider">
                A Corinthian helmet — symbol of the warrior age
              </p>
            </div>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              What He Represents
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon is not a hero in the modern sense. He is not admirable in
              the way Achilles is brave or Odysseus is clever. He is something
              more complex — a man who embodies the terrible cost of leadership.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 my-12">
            {themes.map((theme, i) => (
              <ScrollReveal key={theme.title} delay={i * 0.1}>
                <div className="border border-gold/10 p-6 h-full">
                  <h3 className="font-serif text-lg text-gold/60 mb-3 tracking-wider">
                    {theme.title}
                  </h3>
                  <p className="text-parchment/60 text-lg leading-relaxed">
                    {theme.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl my-12">
              &ldquo;Three thousand years later, we still speak his name. Not
              because he was good — but because he was unforgettable.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      <ChapterNav current="/the-legacy" />
    </article>
  );
}
