"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

export default function TheFall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-obsidian overflow-hidden"
    >
      <div className="absolute inset-0 film-grain">
        <Image
          src="/homecoming.webp"
          alt="The road to Mycenae"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />

      <div className="relative z-10 max-w-4xl px-8 sm:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="font-serif text-xs tracking-[0.5em] uppercase text-gold mb-4"
            >
              The Fall
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
              className="font-serif text-fluid-section text-marble/90 tracking-wide mb-8"
            >
              The Homecoming
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="space-y-5 text-parchment/80 text-xl leading-relaxed"
            >
              <p>
                After ten years of war and triumph at Troy, Agamemnon sailed
                home to Mycenae — a conqueror expecting glory.
              </p>
              <p>
                But the palace that awaited him was no longer his. Clytemnestra
                had not forgiven. She had not forgotten Iphigenia.
              </p>
            </motion.div>

            <ReadMoreLink href="/the-fall" delay={0.3} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.25 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-48 h-48 rounded-full border border-gold/30 flex items-center justify-center mb-8 bg-obsidian/40 backdrop-blur-sm">
              <div className="w-32 h-32 rounded-full border border-gold/40 flex items-center justify-center">
                <span className="font-serif text-6xl text-gold/60">†</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="text-marble/80 font-body text-xl italic leading-relaxed max-w-sm bg-obsidian/50 backdrop-blur-sm p-4"
            >
              &ldquo;Murdered not by an enemy on the battlefield, but by his own
              queen, in his own halls.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
