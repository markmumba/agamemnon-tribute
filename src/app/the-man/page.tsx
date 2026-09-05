import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterNav from "@/components/ChapterNav";

export const metadata: Metadata = {
  title: "The Man — Agamemnon, Son of Atreus",
};

export default function TheManPage() {
  return (
    <article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 film-grain">
          <Image
            src="/atreus-king.webp"
            alt="Agamemnon, Son of Atreus"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
        <div className="absolute bottom-12 left-8 sm:left-16 lg:left-24 z-10">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-3">
            The Man
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble tracking-wide">
            Son of Atreus
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Cursed Bloodline
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The House of Atreus was stained with blood long before Agamemnon
              drew his first breath. His grandfather Tantalus slaughtered his own
              son Pelops and served him as a feast to the gods — a transgression
              that cursed every generation to follow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              His father Atreus continued the cycle, murdering his brother
              Thyestes&apos; children and serving them at a banquet. Vengeance
              begat vengeance. Into this legacy of horror, Agamemnon was born — a
              prince destined for greatness and destruction in equal measure.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              King of Mycenae
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Mycenae was the jewel of the ancient world — its walls built by
              Cyclopes, its treasury overflowing with gold, its Lion Gate standing
              as a monument to power. When Agamemnon claimed its throne, he
              inherited not just a kingdom but an empire.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He was recognized as the most powerful ruler among the Greek kings —
              not necessarily the bravest warrior or the wisest leader, but the one
              who commanded the most wealth, the largest army, and the deepest
              network of alliances. His authority was political as much as
              personal.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
              The Family
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He married Clytemnestra, daughter of Tyndareus and sister to Helen —
              the woman whose face would launch a thousand ships. Together they had
              four children: Iphigenia, Electra, Chrysothemis, and Orestes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              His brother Menelaus married Helen and became King of Sparta. The two
              brothers formed the axis around which all of Greece would turn when
              Paris of Troy disrupted the fragile peace of the ancient world.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-xl my-12">
              &ldquo;A king is not made by the crown he wears, but by the burdens
              he carries — and the choices those burdens demand.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p>
              When word reached Mycenae that Paris had abducted Helen, Agamemnon
              saw the moment he had been waiting for. Not merely a rescue mission
              — but a chance to unite all of Greece under his command and prove,
              once and for all, that the House of Atreus was destined to rule.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <ChapterNav current="/the-man" />
    </article>
  );
}
