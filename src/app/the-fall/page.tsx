import type { Metadata } from "next";
import Image from "next/image";
import BackToScroll from "@/components/BackToScroll";
import ReadingProgress from "@/components/ReadingProgress";
import ScrollReveal from "@/components/ScrollReveal";
import ChapterEntrance from "@/components/ChapterEntrance";
import ChapterNav from "@/components/ChapterNav";
import CharName from "@/components/CharName";

export const metadata: Metadata = {
  title: "The Fall — The Homecoming of Agamemnon",
};

const murderSequence = [
  { numeral: "I", step: "The Greeting", detail: "Clytemnestra welcomes Agamemnon as a loyal wife" },
  { numeral: "II", step: "The Purple Tapestries", detail: "She lays out royal cloth — hubris made visible" },
  { numeral: "III", step: "The Bath", detail: "She draws a bath for the weary king" },
  { numeral: "IV", step: "The Net", detail: "A robe with no openings — he is trapped" },
  { numeral: "V", step: "Three Strikes", detail: "She strikes three times with the axe" },
  { numeral: "VI", step: "Death", detail: "The conqueror of Troy dies helpless in his bath" },
];

const curseCycle = [
  { actor: "Tantalus", act: "Murders his son Pelops" },
  { actor: "Atreus", act: "Feeds Thyestes\u2019 children to him" },
  { actor: "Agamemnon", act: "Sacrifices Iphigenia" },
  { actor: "Clytemnestra", act: "Murders Agamemnon" },
  { actor: "Orestes", act: "Kills Clytemnestra — tried and acquitted by Athena" },
];

export default function TheFallPage() {
  return (
    <ChapterEntrance><article className="min-h-screen bg-obsidian">
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
          <h1 className="font-serif text-fluid-chapter text-marble/90 tracking-wide">
            The Homecoming
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-gold/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-2xl leading-relaxed font-body">
          {/* The Watchman */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Watchman on the Roof
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Aeschylus&apos;s <em>Agamemnon</em> opens with one of the most
              famous prologues in drama. A watchman lies on the palace roof,
              where he has been stationed for a full year, scanning the horizon
              for a beacon signal: &ldquo;I ask the gods for release from this
              weariness — this watch of a year&apos;s length, during which, lying
              on the roof of the house of Atreus like a dog, I have come to know
              the assembly of the night&apos;s stars.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He is exhausted, lonely, and afraid. He hints at dark secrets in
              the palace — &ldquo;the house itself, if it could speak, would tell
              the tale most clearly; I speak to those who know, and to those who
              do not know, I forget.&rdquo; The entire household knows about
              Clytemnestra and Aegisthus. No one dares speak.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* The Beacon Chain */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Beacon Chain
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              When the watchman finally sees the fire, Clytemnestra describes the
              chain of beacons that carried news of Troy&apos;s fall overnight —
              from Mount Ida above Troy, to the island of Lemnos, to Mount Athos,
              across the Saronic Gulf, through the peaks of Euboea and Boeotia,
              over Mount Cithaeron and the cliffs of Corinth, to Mount
              Arachnaeus — the final peak visible from Argos.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              She recounts this chain with pride — a dazzling display of her
              intelligence and control. She designed this signal system. She has
              been preparing for this night for years.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* The Return */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Return
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              After ten years at Troy and a harrowing journey home, Agamemnon
              finally returned to Mycenae. He brought with him the spoils of war
              and <CharName name="Cassandra" />, the Trojan princess cursed by <CharName name="Apollo" /> to speak true
              prophecies that no one would believe.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* Cassandra's Prophecies */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Prophecy of Cassandra
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Standing before the palace, Cassandra fell into prophetic frenzy.
              She smelled blood: &ldquo;The house reeks of blood and
              slaughter.&rdquo; She saw the ghosts of <CharName name="Thyestes" />&apos; murdered
              children — &ldquo;weeping for their own death, their flesh roasted
              and eaten by their father.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              She saw the net that would trap Agamemnon: &ldquo;A net — a net of
              Hades! And the snare is she who shares his bed, his
              murderess.&rdquo; She saw her own death: &ldquo;I too shall fall.
              She will kill me too, the wretched stranger.&rdquo; She even saw the
              avenger who would come — &ldquo;a son who kills his mother, a
              wanderer returning&rdquo; — a prophecy of <CharName name="Orestes" />.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The Chorus, true to Apollo&apos;s curse, could not understand or
              believe her. They admired her frenzied poetry but dismissed her
              warnings. Cassandra, knowing she went to her death, removed her
              prophetic garlands and entered the palace anyway.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* Clytemnestra's Ten-Year Wait */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              Clytemnestra&apos;s Revenge
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              For ten years, <CharName name="Clytemnestra" /> had nursed her rage. The Chorus
              describes her as having &ldquo;a man-counseling, expectant
              heart.&rdquo; She took <CharName name="Aegisthus" /> — son of Thyestes, sired through
              incest for the specific purpose of vengeance — as her lover and
              co-conspirator. She effectively ruled Mycenae as regent, managed the
              palace guard, and ensured no loyalist could warn Agamemnon. She sent
              Orestes away to Phocis, removing the one male heir who might
              challenge her.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Her patience itself becomes a theme: she waited ten years, and when
              the moment came, she was completely ready.
            </p>
          </ScrollReveal>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          {/* The Carpet Scene */}
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
              The Purple Tapestries
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              When Agamemnon arrived, Clytemnestra ordered servants to spread
              crimson-dyed tapestries from his chariot to the palace door. She
              invited him to walk upon them: &ldquo;Let not his foot, that has
              destroyed Troy, touch the common earth.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              Agamemnon hesitated: &ldquo;Such honors are for gods, not mortals.
              I am a mortal man; I cannot walk upon embroidered splendors without
              fear.&rdquo; To walk on such costly fabrics was <em>hybris</em> —
              the supreme transgression, a mortal presuming to live as a god.
              Clytemnestra pressed him: &ldquo;Would Priam have done it, had he
              conquered?&rdquo; He answered: &ldquo;He would indeed.&rdquo;
              &ldquo;Then do not fear the blame of men.&rdquo; He relented.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              The symbolism operates on multiple levels. The color — crimson,
              purple — is the color of blood and of royalty. He walks a path of
              blood into his own death. These fabrics were worth their weight in
              silver; destroying them underfoot is the same wasteful excess that
              led him to sacrifice his daughter. Clytemnestra tested whether he
              could be manipulated through vanity. He could. The moment he
              stepped onto the tapestries, he crossed symbolically from the world
              of the living into the realm of the dead.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p>
              He stepped on the purple cloth. He entered his palace. She drew him
              a bath.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl my-12">
              &ldquo;She cast a net over him — a robe with no openings for his
              arms or head — and struck three times. He fell in the bath, and the
              water turned red.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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
            <blockquote className="border-l-2 border-gold/30 pl-6 italic text-gold/50 text-2xl my-12">
              &ldquo;He fell, and as he gasped, his blood sprayed me with dark
              drops of crimson rain — and I rejoiced, as the sown earth rejoices
              in the glad rain of heaven.&rdquo;
            </blockquote>
          </ScrollReveal>

          {/* Murder Sequence */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-8">
              The Sequence
            </h2>
          </ScrollReveal>
          <div className="space-y-4 mb-12">
            {murderSequence.map((s, i) => (
              <ScrollReveal key={s.numeral} delay={i * 0.06}>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0">
                    <span className="font-serif text-sm text-gold/50">{s.numeral}</span>
                  </div>
                  <div>
                    <p className="font-serif text-xl text-marble/90">{s.step}</p>
                    <p className="text-parchment/40 text-sm mt-0.5">{s.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="h-[1px] w-16 bg-gold/20 my-12" />

          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide">
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
              was eventually tried before <CharName name="Athena" />&apos;s court in Athens. He was
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

          {/* Curse Cycle Diagram */}
          <div className="h-[1px] w-24 bg-gold/30 my-12" />
          <ScrollReveal>
            <h2 className="font-serif text-4xl text-marble/90 tracking-wide mb-8">
              The Curse of the House of Atreus
            </h2>
          </ScrollReveal>
          <div className="relative ml-4">
            <div className="absolute left-1.5 top-0 h-full w-[1px] bg-gradient-to-b from-gold/30 via-gold/20 to-gold/40" />
            {curseCycle.map((node, i) => {
              const isLast = i === curseCycle.length - 1;
              return (
                <ScrollReveal key={node.actor} delay={i * 0.08}>
                  <div className="relative pl-10 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1.5">
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${isLast ? "border-gold/60 bg-gold/10" : "border-gold/30"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isLast ? "bg-gold/80" : "bg-gold/50"}`} />
                      </div>
                    </div>
                    <p className={`font-serif text-lg ${isLast ? "text-gold/70" : "text-marble/80"}`}>{node.actor}</p>
                    <p className="text-parchment/40 text-sm mt-0.5">{node.act}</p>
                    {isLast && (
                      <p className="text-gold/50 text-xs tracking-[0.3em] uppercase mt-2">Cycle Broken</p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      <ChapterNav current="/the-fall" />
    </article></ChapterEntrance>
  );
}
