import Link from "next/link";
import { chapters } from "@/lib/chapters";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-obsidian border-t border-gold/10">
      <div className="max-w-5xl mx-auto px-8 sm:px-16 py-16">
        <nav aria-label="Chapter navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
          {chapters.map((ch) => (
            <Link
              key={ch.slug}
              href={ch.slug}
              className="font-serif text-xs tracking-[0.3em] uppercase text-parchment/40 hover:text-gold transition-colors duration-300"
            >
              {ch.title}
            </Link>
          ))}
        </nav>

        <div className="h-[1px] w-24 bg-gold/20 mx-auto mb-10" />

        <div className="text-center space-y-3">
          <p className="font-serif text-lg tracking-wider text-gold/50">
            AGAMEMNON
          </p>
          <p className="font-serif text-[10px] tracking-[0.5em] uppercase text-parchment/30">
            A tribute to the King of Kings — from Homer&apos;s Iliad to eternity
          </p>
          <p className="text-[10px] text-parchment/20 mt-6">
            Built with reverence. Not affiliated with any film or production.
          </p>
        </div>
      </div>
    </footer>
  );
}
