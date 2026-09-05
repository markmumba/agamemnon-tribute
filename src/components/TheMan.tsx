"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

export default function TheMan() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian"
    >
      {/* Full-bleed background — high-res image */}
      <div className="absolute inset-0 film-grain">
        <Image
          src="/atreus-king.png"
          alt="Agamemnon, Son of Atreus"
          fill
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
      <div className="absolute inset-0 w-1/2 bg-obsidian/60" />

      {/* Text side */}
      <div className="relative z-10 w-full lg:w-1/2 px-8 sm:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-[1px] w-24 bg-gold origin-left mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-4"
        >
          The Man
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-marble tracking-wide mb-8"
        >
          Son of Atreus
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6 text-parchment/70 text-xl leading-relaxed max-w-lg"
        >
          <p>
            Born into the cursed House of Atreus, Agamemnon rose to claim the
            throne of Mycenae — the wealthiest and most powerful kingdom in all
            of Greece.
          </p>
          <p>
            Brother to Menelaus, husband to Clytemnestra, father to Iphigenia,
            Electra, and Orestes. A king forged not in peace, but in the fires
            of ambition and divine will.
          </p>
        </motion.div>

        <ReadMoreLink href="/the-man" delay={1} />
      </div>
    </section>
  );
}
