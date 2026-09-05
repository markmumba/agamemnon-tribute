import Link from "next/link";
import { chapters } from "@/lib/chapters";

export default function ChapterNav({ current }: { current: string }) {
  const currentIndex = chapters.findIndex((c) => c.slug === current);
  const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <nav className="max-w-3xl mx-auto px-8 sm:px-16 py-16">
      <div className="h-[1px] w-full bg-gold/10 mb-12" />

      <div className="flex justify-between items-start">
        {prev ? (
          <Link href={prev.slug} className="group text-left">
            <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-parchment/30 mb-2">
              &larr; Previous
            </p>
            <p className="font-serif text-lg text-gold/60 group-hover:text-gold transition-colors duration-300">
              {prev.subtitle}
            </p>
            <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-parchment/20 mt-1">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={next.slug} className="group text-right">
            <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-parchment/30 mb-2">
              Next &rarr;
            </p>
            <p className="font-serif text-lg text-gold/60 group-hover:text-gold transition-colors duration-300">
              {next.subtitle}
            </p>
            <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-parchment/20 mt-1">
              {next.title}
            </p>
          </Link>
        ) : (
          <Link href="/" className="group text-right">
            <p className="font-serif text-[10px] tracking-[0.4em] uppercase text-parchment/30 mb-2">
              Return &rarr;
            </p>
            <p className="font-serif text-lg text-gold/60 group-hover:text-gold transition-colors duration-300">
              Home
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
