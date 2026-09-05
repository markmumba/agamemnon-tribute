import type { Metadata } from "next";
import BackToScroll from "@/components/BackToScroll";

export const metadata: Metadata = {
  title: "The Sacrifice — Iphigenia at Aulis",
};

export default function TheSacrificePage() {
  return (
    <article className="min-h-screen bg-obsidian">
      <BackToScroll />

      {/* Dark hero — no image, atmosphere only */}
      <div className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.2)_0%,_transparent_70%)]" />
        <div className="relative z-10 px-8 sm:px-16 lg:px-24 pb-12">
          <p className="font-serif text-xs tracking-[0.5em] uppercase text-blood mb-3">
            The Sacrifice
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble/90 tracking-wide">
            Iphigenia at Aulis
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 sm:px-16 py-20">
        <div className="h-[1px] w-24 bg-blood/30 mb-12" />

        <div className="space-y-8 text-parchment/70 text-xl leading-relaxed font-body">
          <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
            The Winds Would Not Blow
          </h2>
          <p>
            The fleet was assembled. A thousand ships sat in the harbor at Aulis,
            ready to sail for Troy. But the sea was still as glass, the air
            heavy and unmoving. Days passed. Then weeks. The army grew restless,
            tempers frayed, and whispers of mutiny began to spread.
          </p>
          <p>
            The seer Calchas delivered the terrible verdict: Artemis was angry.
            Agamemnon had offended her — some say by killing a sacred deer in
            her grove and boasting he was a better hunter than the goddess
            herself. Her price for favorable winds was unspeakable.
          </p>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
            The Impossible Choice
          </h2>
          <p>
            Sacrifice his firstborn daughter, Iphigenia, on the altar of
            Artemis. Only then would the winds return.
          </p>
          <p>
            Agamemnon was torn apart. As a father, every fiber of his being
            screamed against it. As a commander, he knew that a hundred thousand
            men were counting on him. The alliance would crumble. The war would
            end before it began. Troy would stand. Helen would remain captive.
            And Greece would be humiliated.
          </p>
          <p>
            He sent word to Clytemnestra in Mycenae: bring Iphigenia to Aulis
            for her marriage to Achilles. A lie — the cruelest kind, wrapped in
            celebration.
          </p>

          <div className="h-[1px] w-16 bg-blood/20 my-12" />

          <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
            The Altar
          </h2>
          <p>
            Iphigenia arrived at Aulis radiant with joy, dressed in wedding
            garments. When she discovered the truth, accounts differ — some say
            she wept and pleaded, others that she accepted her fate with a
            courage that shamed the warriors around her.
          </p>
          <p>
            In Euripides&apos; telling, she chose to die willingly, declaring
            that her sacrifice would bring glory to all of Greece. In other
            versions, she was dragged to the altar screaming while her father
            looked away.
          </p>

          <blockquote className="border-l-2 border-blood/30 pl-6 italic text-blood/50 text-xl my-12">
            &ldquo;The blade fell. The winds rose. And the fleet sailed at last
            — leaving behind a father who would never be whole again, and a
            mother who would never forgive.&rdquo;
          </blockquote>

          <h2 className="font-serif text-3xl text-marble/90 tracking-wide">
            The Aftermath
          </h2>
          <p>
            Some myths hold that Artemis took pity at the last moment, spiriting
            Iphigenia away to Tauris and substituting a deer on the altar. But
            even in these gentler versions, Agamemnon believed he had killed
            his daughter. Clytemnestra knew he had given the order.
          </p>
          <p>
            This moment fractured everything. It fractured Agamemnon&apos;s
            marriage beyond repair. It planted the seed of vengeance in
            Clytemnestra&apos;s heart — a vengeance that would wait ten long
            years to bloom. And it revealed the central tragedy of Agamemnon:
            a man who chose duty over love, power over family, and the crown
            over the father.
          </p>
        </div>
      </div>
    </article>
  );
}
