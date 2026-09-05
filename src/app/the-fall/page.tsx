import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "The Fall — The Homecoming of Agamemnon",
};

export default function TheFallPage() {
  return (
    <article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/homecoming.webp"
            alt="The road to Mycenae"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-12">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-gold/70 mb-3">
            The Fall
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble/90 tracking-wide">
            The Homecoming
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Return
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              After ten years at Troy and a harrowing journey home, Agamemnon
              finally returned to Mycenae. He brought with him the spoils of war
              and Cassandra, the Trojan princess cursed by Apollo to speak true
              prophecies that no one would believe.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Cassandra saw what awaited them inside the palace. She screamed
              warnings of blood and death. No one listened. They never did.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              Clytemnestra&apos;s Revenge
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              For ten years, Clytemnestra had nursed her rage. Her daughter
              Iphigenia, lured to Aulis with the promise of a wedding, slaughtered
              on an altar so her husband could have his war. She had taken a
              lover — Aegisthus, son of Thyestes, Agamemnon&apos;s cousin and
              enemy by blood.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              When Agamemnon arrived, Clytemnestra greeted him with all the
              ceremony of a loyal wife. She laid out purple tapestries — the color
              of royalty and sacrifice — from his chariot to the palace door.
              Agamemnon hesitated, knowing that to walk on such finery was an act
              of hubris reserved for gods. She persuaded him.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He stepped on the purple cloth. He entered his palace. She drew him
              a bath.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl my-12">
              &ldquo;She cast a net over him — a robe with no openings for his
              arms or head — and struck three times. He fell in the bath, and the
              water turned red.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Death of a King
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Trapped in the net-like robe, unable to defend himself, Agamemnon —
              the man who had commanded the greatest army the world had ever seen
              — died helpless. Clytemnestra killed Cassandra as well. When the
              deed was done, she stood over the bodies and declared her justice to
              the people of Mycenae.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In Aeschylus&apos; telling, she showed no remorse:
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl my-12">
              &ldquo;He fell, and as he gasped, his blood sprayed me with dark
              drops of crimson rain — and I rejoiced, as the sown earth rejoices
              in the glad rain of heaven.&rdquo;
            </blockquote>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Cycle Continues
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              But the curse of the House of Atreus did not end with Agamemnon.
              His son Orestes, raised in exile, returned years later to avenge
              his father. He killed Clytemnestra and Aegisthus — matricide to
              avenge patricide.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Pursued by the Furies for the crime of killing his mother, Orestes
              was eventually tried before Athena&apos;s court in Athens. He was
              acquitted, and with that verdict, the cycle of blood vengeance that
              had consumed the House of Atreus for generations was finally broken.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              But Agamemnon was long dead by then — a king who conquered Troy and
              lost everything at home.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ChapterNav current="/the-fall" />
    </article>
  );
}
