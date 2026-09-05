import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The Legacy — Agamemnon Through the Ages",
};

const literaryTimeline = [
  { date: "~800 BC", title: "Homer", text: "The Iliad and Odyssey establish Agamemnon as the flawed commander and warning ghost" },
  { date: "458 BC", title: "Aeschylus", text: "The Oresteia trilogy — Agamemnon\u2019s murder, Orestes\u2019 vengeance, and Athena\u2019s verdict" },
  { date: "~414 BC", title: "Euripides", text: "Iphigenia at Aulis — the sacrifice retold with devastating humanity" },
  { date: "1876 AD", title: "Schliemann", text: "Excavates Mycenae and discovers the golden \u201CMask of Agamemnon\u201D" },
  { date: "Modern", title: "Enduring Legacy", text: "Opera, film, novels, and scholarship continue to reinterpret the myth" },
];

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
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
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
          <h1 className="font-serif text-fluid-chapter text-marble tracking-wide">
            Eternal in Memory
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-2xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              In Literature
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon appears in the two foundational texts of Western
              literature. In Homer&apos;s <em>Iliad</em>, he is the flawed
              commander whose pride causes a catastrophic rift with <CharName name="Achilles" />. In
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

          {/* Literary Timeline */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <div className="relative ml-4">
            <div className="absolute left-1.5 top-0 h-full w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
            {literaryTimeline.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.06}>
                <div className="relative pl-12 pb-10 last:pb-0">
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-gold/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                    </div>
                  </div>
                  <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/40 mb-1">{event.date}</p>
                  <p className="font-serif text-xl text-marble/90 mb-1">{event.title}</p>
                  <p className="text-parchment/50 text-base leading-relaxed">{event.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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

          {/* Archaeological Discoveries */}
          <div className="h-[1px] w-16 bg-gold/20 my-12" />
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Ruins of Mycenae
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Schliemann uncovered Grave Circle A — six shaft graves dating to
              the 16th century BC. The graves held extraordinary wealth: gold
              diadems, bronze swords with gold hilts, inlaid daggers depicting
              lion hunts in gold, silver, and niello. Five gold death masks were
              found. The total gold weighed approximately fifteen kilograms — an
              astonishing concentration of wealth for any Bronze Age site.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The Lion Gate, built around 1250 BC, remains the main entrance to
              the citadel. Its lintel weighs twenty tons, crowned by a carved
              relief of two lions flanking a central column — the oldest
              monumental sculpture in Europe. It was never buried; it stood
              visible throughout antiquity and into the modern era.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The Treasury of Atreus — the great tholos tomb — features a
              corbelled dome 13.5 meters in diameter and 13.2 meters high. It
              was the largest dome in the world until the construction of the
              Pantheon in Rome, over a thousand years later. Its entrance lintel
              alone weighs over 120 tons. Linear B tablets found at the site,
              deciphered by Michael Ventris in 1952, confirmed the Mycenaeans
              spoke an early form of Greek and used the title <em>wa-na-ka</em>
              — the word for king — corresponding to Homer&apos;s <em>anax</em>
              in his epithet for Agamemnon.
            </p>
          </ScrollReveal>

          {/* Mask Fact Card */}
          <ScrollReveal>
            <div className="border border-gold/15 p-6 my-12">
              <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/40 mb-4">The Mask — Fact vs. Legend</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-1">Claimed Date</p>
                  <p className="font-serif text-2xl text-marble/80">~1200 BC</p>
                  <p className="text-parchment/40 text-sm mt-1">Traditional Trojan War era</p>
                </div>
                <div>
                  <p className="text-gold/50 text-xs tracking-[0.2em] uppercase mb-1">Actual Date</p>
                  <p className="font-serif text-2xl text-marble/80">~1550 BC</p>
                  <p className="text-parchment/40 text-sm mt-1">Centuries earlier than the myth</p>
                </div>
              </div>
              <p className="text-parchment/30 text-xs mt-4 italic">
                National Archaeological Museum of Athens — Artifact NM 624
              </p>
            </div>
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
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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
                  <p className="text-parchment/60 text-xl leading-relaxed">
                    {theme.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* The Oresteia and Justice */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Birth of Justice
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The <em>Oresteia</em> is not merely a drama about murder and
              revenge — it is a philosophical argument about the transition from
              vendetta justice to institutional law. In the final play,
              <em> Eumenides</em>, <CharName name="Orestes" /> is tried before the Areopagus court
              in Athens, with <CharName name="Athena" /> presiding. Apollo serves as his defense.
              The Furies prosecute. The jury of Athenian citizens splits evenly.
              Athena casts the deciding vote for acquittal — establishing the
              principle that the tie goes to the defendant.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The Furies are transformed into the Eumenides — the &ldquo;Kindly
              Ones&rdquo; — and given a place of honor beneath the Acropolis.
              Retributive justice is not destroyed but sublimated into the legal
              order. The trilogy was performed in Athens during a period when the
              Areopagus court was itself undergoing democratic reforms, making it
              simultaneously mythological drama and political commentary. Legal
              scholars from Hegel to Martha Nussbaum have traced the roots of
              Western jurisprudence — the presumption of innocence, trial by
              jury, the subordination of private vengeance to public justice —
              to this trilogy.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* Modern Adaptations */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Myth Lives On
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Eugene O&apos;Neill&apos;s <em>Mourning Becomes <CharName name="Electra" /></em>
              transposed the <em>Oresteia</em> to post-Civil War New England.
              Sartre&apos;s <em>The Flies</em> retold the Orestes story as an
              existentialist allegory of resistance under Nazi occupation.
              Richard Strauss&apos;s opera <em>Elektra</em>, with a libretto by
              Hugo von Hofmannsthal, remains one of the most psychologically
              intense works in the repertoire.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In recent literature, Colm T&oacute;ib&iacute;n&apos;s <em>House
              of Names</em> retells the <em>Oresteia</em> through <CharName name="Clytemnestra" />,
              Electra, and Orestes. Pat Barker&apos;s <em>The Silence of the
              Girls</em> recasts the <em>Iliad</em> from Briseis&apos;s
              perspective. Natalie Haynes&apos; <em>A Thousand Ships</em>
              narrates the entire war through its women. Madeline Miller&apos;s
              <em> The Song of Achilles</em> portrays Agamemnon as the
              embodiment of political authority grinding against individual honor.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The myth remains central to classics, feminist criticism,
              political theory, and archaeology. Excavations at Mycenae continue
              to reveal new structures and artifacts. Three thousand years have
              not diminished the questions Agamemnon forces us to ask: what does
              power cost? What does duty demand? And who pays the price when
              kings make their terrible choices?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl my-12">
              &ldquo;Three thousand years later, we still speak his name. Not
              because he was good — but because he was unforgettable.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </div>

      <ChapterNav current="/the-legacy" />
    </article></ChapterEntrance>
  );
}
