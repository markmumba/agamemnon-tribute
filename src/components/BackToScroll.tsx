import Link from "next/link";

export default function BackToScroll() {
  return (
    <Link
      href="/"
      className="fixed top-8 left-8 z-50 font-serif text-[10px] tracking-[0.4em] uppercase text-gold hover:text-marble transition-colors duration-300 bg-obsidian/60 backdrop-blur-sm px-4 py-2 border border-gold/20"
    >
      &larr; Back
    </Link>
  );
}
