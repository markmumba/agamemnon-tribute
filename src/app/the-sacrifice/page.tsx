import type { Metadata } from "next";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The Sacrifice — Iphigenia at Aulis",
};

const consequences = [
  "Agamemnon offends Artemis — the winds die",
  "Calchas demands the sacrifice of Iphigenia",
  "Agamemnon kills his daughter for the fleet",
  "Clytemnestra vows vengeance against her husband",
  "Ten years of war — a kingdom ruled by rage",
  "Agamemnon returns home to his own murder",
  "Orestes kills Clytemnestra — the cycle breaks at Athena\u2019s court",
];

export default function TheSacrificePage() {
  return (
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
      <ReadingProgress />
      <BackToScroll />

      <div className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.2)_0%,_transparent_70%)]" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-12">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-blood mb-3">
            The Sacrifice
          </p>
          <h1 className="font-serif text-fluid-chapter text-marble/90 tracking-wide">
            Iphigenia at Aulis
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-blood/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-2xl leading-relaxed font-body">
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Winds Would Not Blow
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The fleet was assembled. A thousand ships sat in the harbor at Aulis,
              ready to sail for Troy. But the sea was still as glass, the air
              heavy and unmoving. Days passed. Then weeks. The army grew restless,
              tempers frayed, and whispers of mutiny began to spread.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The seer <CharName name="Calchas" /> delivered the terrible verdict: <CharName name="Artemis" /> was angry.
              Agamemnon had offended her — some say by killing a sacred deer in
              her grove and boasting he was a better hunter than the goddess
              herself. Her price for favorable winds was unspeakable.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          {/* Artemis's Grievance */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Goddess&apos;s Wrath
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The sources disagree on what exactly provoked Artemis. The most
              common version holds that Agamemnon killed a deer in her sacred
              grove and boasted that not even Artemis could have made the shot.
              Others say he had once vowed to sacrifice to Artemis the most
              beautiful thing born in the year of Iphigenia&apos;s birth — and
              when Iphigenia herself proved to be that most beautiful thing, he
              reneged on the vow.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In still other traditions, the offense traces back to his father
              <CharName name="Atreus" />, who had promised Artemis the finest lamb of his flock. When
              a golden lamb was born — a divine sign — Atreus kept it. The
              goddess&apos;s anger carried forward to the next generation. In the
              broadest theological reading, Artemis&apos;s wrath was simply the
              mechanism <CharName name="Zeus" /> used to test Agamemnon and set the chain of blood
              in motion.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Impossible Choice
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Sacrifice his firstborn daughter, <CharName name="Iphigenia" />, on the altar of
              Artemis. Only then would the winds return.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon was torn apart. As a father, every fiber of his being
              screamed against it. As a commander, he knew that a hundred thousand
              men were counting on him. The alliance would crumble. The war would
              end before it began. Troy would stand. Helen would remain captive.
              And Greece would be humiliated.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He sent word to <CharName name="Clytemnestra" /> in Mycenae: bring Iphigenia to Aulis
              for her marriage to <CharName name="Achilles" />. A lie — the cruelest kind, wrapped in
              celebration.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Altar
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Iphigenia arrived at Aulis radiant with joy, dressed in wedding
              garments. When she discovered the truth, accounts differ — some say
              she wept and pleaded, others that she accepted her fate with a
              courage that shamed the warriors around her.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              In Euripides&apos; telling, she chose to die willingly, declaring:
              &ldquo;I give my body for Greece. Sacrifice me — this is my
              monument, my children, my wedding.&rdquo; In other versions, she
              was dragged to the altar screaming while her father looked away.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          {/* Achilles' Reaction */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              Achilles&apos; Fury
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Achilles was furious when he discovered his name had been used to
              lure Iphigenia. He had no part in the deception. When Clytemnestra
              confronted him, Achilles pledged to defend Iphigenia with his life:
              &ldquo;I will not let your daughter die — if she dies, it is over
              my body.&rdquo; He armed himself and prepared to face the entire
              Greek army alone if necessary.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              But when Iphigenia herself chose to accept the sacrifice, Achilles
              was moved and stunned. He declared he would have been honored to
              marry her, and that Greece was losing something precious. This
              moment established Achilles&apos; sense of honor as operating on a
              personal, almost romantic register — entirely different from
              Agamemnon&apos;s political calculus.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          {/* The Different Tellings */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              How Each Poet Told It
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Aeschylus was the harshest. In his <em>Agamemnon</em>, she is
              gagged so her cries cannot curse the army — &ldquo;her saffron
              robes flowing to the ground, she struck each sacrificer with a
              piteous dart from her eyes.&rdquo; The blade falls. There is no
              rescue. Agamemnon is fully culpable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Euripides was the most psychologically complex. Agamemnon writes a
              second letter to cancel the summons, wracked with guilt — but
              Menelaus intercepts it. Iphigenia initially pleads: &ldquo;The
              light of day is sweet; do not send me to the world below before
              my time.&rdquo; Then she transforms, volunteering her own death.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The Roman poet Lucretius used the sacrifice as his primary example
              of the evils of religion: <em>&ldquo;Tantum religio potuit suadere
              malorum&rdquo;</em> — &ldquo;So great is the power of religion to
              persuade to evil.&rdquo;
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-blood/30 pl-6 italic text-blood/50 text-2xl my-12">
              &ldquo;The blade fell. The winds rose. And the fleet sailed at last
              — leaving behind a father who would never be whole again, and a
              mother who would never forgive.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Aftermath
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Some myths hold that Artemis took pity at the last moment, spiriting
              Iphigenia away to Tauris and substituting a deer on the altar. But
              even in these gentler versions, Agamemnon believed he had killed
              his daughter. Clytemnestra knew he had given the order.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              This moment fractured everything. It fractured Agamemnon&apos;s
              marriage beyond repair. It planted the seed of vengeance in
              Clytemnestra&apos;s heart — a vengeance that would wait ten long
              years to bloom. And it revealed the central tragedy of Agamemnon:
              a man who chose duty over love, power over family, and the crown
              over the father.
            </p>
          </ScrollReveal>

          {/* Consequences Chain */}
          <div className="h-[1px] w-24 bg-blood/30 my-12" />
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-8">
              The Chain of Consequence
            </h2>
          </ScrollReveal>
          <div className="relative ml-4">
            <div className="absolute left-1.5 top-0 h-full w-[1px] bg-gradient-to-b from-blood/40 via-blood/25 to-transparent" />
            {consequences.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="relative pl-10 pb-8 last:pb-0">
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border border-blood/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blood/60" />
                    </div>
                  </div>
                  <p className="text-blood/50 text-xl font-body leading-relaxed">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <ChapterNav current="/the-sacrifice" />
    </article></ChapterEntrance>
  );
}
