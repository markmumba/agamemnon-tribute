import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The Man — Agamemnon, Son of Atreus",
};

const curseLine = [
  { name: "Tantalus", sin: "Served his son to the gods" },
  { name: "Pelops", sin: "Betrayed and murdered his benefactor" },
  { name: "Atreus", sin: "Fed his brother\u2019s children to him" },
  { name: "Agamemnon", sin: "Sacrificed his daughter for war" },
];

const relationships = [
  { role: "Wife", name: "Clytemnestra", detail: "Daughter of Tyndareus, sister of Helen" },
  { role: "Brother", name: "Menelaus", detail: "King of Sparta, husband of Helen" },
  { role: "Children", name: "Iphigenia, Electra, Chrysothemis, Orestes", detail: "Legacy and ruin" },
  { role: "Nemesis", name: "Aegisthus", detail: "Son of Thyestes, lover of Clytemnestra" },
];

export default function TheManPage() {
  return (
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
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
          <h1 className="font-serif text-fluid-chapter text-marble tracking-wide">
            Son of Atreus
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-2xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Cursed Bloodline
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The House of Atreus was stained with blood long before Agamemnon
              drew his first breath. His grandfather <CharName name="Tantalus" /> slaughtered his own
              son <CharName name="Pelops" /> and served him as a feast to the gods — a transgression
              that cursed every generation to follow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              His father <CharName name="Atreus" /> continued the cycle, murdering his brother
              <CharName name="Thyestes" />&apos; children and serving them at a banquet. Vengeance
              begat vengeance. Into this legacy of horror, Agamemnon was born — a
              prince destined for greatness and destruction in equal measure.
            </p>
          </ScrollReveal>

          {/* Curse Genealogy */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <div className="flex flex-col items-center gap-0 my-12">
            {curseLine.map((ancestor, i) => (
              <ScrollReveal key={ancestor.name} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  {i > 0 && (
                    <div className="w-[1px] h-8 bg-gold/30" />
                  )}
                  <div className="border border-gold/20 px-6 py-4 text-center min-w-[220px]">
                    <p className="font-serif text-xl text-marble/90">{ancestor.name}</p>
                    <p className="text-parchment/40 text-sm italic mt-1">{ancestor.sin}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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

          {/* How He Seized the Throne */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Path to the Throne
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The path to Mycenae was violent. After Atreus&apos;s death, Thyestes
              briefly held the throne. The young Agamemnon and <CharName name="Menelaus" /> were
              driven into exile, taking refuge with King Tyndareus of Sparta. In
              some versions, <CharName name="Clytemnestra" /> was already married to Tantalus, son of
              Thyestes — Agamemnon&apos;s own cousin. Agamemnon killed Tantalus
              and Clytemnestra&apos;s infant son, then married her by force.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In Euripides&apos; <em>Iphigenia at Aulis</em>, Clytemnestra throws
              this history in Agamemnon&apos;s face: &ldquo;You took me by force
              — you killed my first husband and my baby, torn from my
              breast.&rdquo; He then marched on Mycenae and drove out Thyestes,
              installing himself as king. Through the city&apos;s existing wealth,
              strategic marriages, and military power, he made himself the most
              powerful king in Greece.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* His Political Skills */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Politician
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Homer portrays Agamemnon as a deeply political figure. He holds the
              <em> skeptron</em> — the scepter — which Homer traces through a
              divine lineage: forged by Hephaestus, given to Zeus, passed through
              Hermes, Pelops, Atreus, Thyestes, and finally to Agamemnon. It is
              not decorative. It is the symbol of divinely sanctioned authority.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              His political skills are visible in how he managed the coalition. In
              Book 2 of the <em>Iliad</em>, he tested the army&apos;s morale by
              suggesting they all sail home — the army stampeded for the ships,
              and only Odysseus stopped them. He conducted councils, heeded Nestor,
              and maintained his coalition of twenty-nine independent kings for ten
              years — a feat of extraordinary political stamina.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In the embassy to Achilles, Agamemnon offered staggering gifts: seven
              tripods, ten talents of gold, twenty cauldrons, twelve prize-winning
              horses, seven women of Lesbos, the return of Briseis unsworn that he
              had not touched her, and the hand of any of his three daughters in
              marriage with seven cities as dowry. Achilles rejected all of it. But
              the sheer scale reveals both Agamemnon&apos;s wealth and his
              understanding that Achilles&apos; return required appeasement, not
              command.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* His Wealth */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              Rich in Gold
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Homer repeatedly calls Mycenae <em>polychrysos</em> — &ldquo;rich in
              gold.&rdquo; Agamemnon&apos;s armor is described in extraordinary
              detail: a corselet with bands of dark blue enamel, gold, and tin;
              ten bands of lapis lazuli on its front; a shield with a Gorgon&apos;s
              head; a sword with gold studs and a silver scabbard hung on gold
              chains. His brother Menelaus&apos;s palace in Sparta gleamed
              &ldquo;like the light of the sun or the moon&rdquo; — and Menelaus
              was the <em>poorer</em> brother.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* Comparison to Other Kings */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              Among the Kings
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Achilles surpassed him in martial prowess but commanded only fifty
              ships. Odysseus surpassed him in cunning but ruled rocky Ithaca with
              twelve. Ajax was the wall that never broke but had no political
              authority. Nestor surpassed him in wisdom but wielded only advisory
              power. Diomedes wounded gods but deferred to Agamemnon&apos;s
              command.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon alone combined sufficient wealth, military resources,
              political legitimacy, and dynastic prestige to unite them all. He
              was the <em>anax andron</em> — &ldquo;lord of men&rdquo; —
              Homer&apos;s epithet for him, used for no other Greek king. The
              title may preserve a memory of the Mycenaean <em>wanax</em>, the
              actual title of the paramount king in Bronze Age palatial society.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Family
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He married Clytemnestra, daughter of Tyndareus and sister to <CharName name="Helen" /> —
              the woman whose face would launch a thousand ships. Together they had
              four children: <CharName name="Iphigenia" />, <CharName name="Electra" />, Chrysothemis, and <CharName name="Orestes" />.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              His brother Menelaus married Helen and became King of Sparta. The two
              brothers formed the axis around which all of Greece would turn when
              Paris of Troy disrupted the fragile peace of the ancient world.
            </p>
          </ScrollReveal>

          {/* Relationship Cards */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
            {relationships.map((rel, i) => (
              <ScrollReveal key={rel.role} delay={i * 0.08}>
                <div className="border border-gold/10 p-5 h-full hover:border-gold/25 transition-colors duration-300">
                  <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/40 mb-2">{rel.role}</p>
                  <p className="font-serif text-xl text-marble/90 mb-1">{rel.name}</p>
                  <p className="text-parchment/40 text-sm italic">{rel.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl my-12">
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
    </article></ChapterEntrance>
  );
}
