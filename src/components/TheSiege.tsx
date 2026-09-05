"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

const events = [
  {
    year: "Year 1",
    title: "Landing at Troy",
    text: "The Achaeans storm the beaches. Protesilaus falls first — as the prophecy foretold.",
  },
  {
    year: "Year 9",
    title: "The Wrath of Achilles",
    text: "Agamemnon seizes Briseis. Achilles withdraws from battle. The Greeks begin to falter.",
  },
  {
    year: "Year 10",
    title: "The Fall of Troy",
    text: "Odysseus devises the wooden horse. Troy opens its gates. The city burns.",
  },
];

export default function TheSiege() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-obsidian">
      <div className="absolute inset-0 film-grain">
        <Image
          src="/troy-siege.webp"
          alt="The siege of Troy"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/70 to-obsidian" />

      <div className="relative z-10 px-8 sm:px-16 lg:px-24 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-4"
        >
          The Siege
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.15 }}
          className="font-serif text-fluid-section text-marble tracking-wide mb-16"
        >
          Ten Years at Troy
        </motion.h2>

        <div className="relative max-w-4xl">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
            className="absolute left-0 sm:left-8 top-0 h-full w-[1px] bg-gradient-to-b from-gold/50 via-gold/20 to-transparent origin-top"
          />

          {events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 + i * 0.05 }}
              className="relative pl-12 sm:pl-20 pb-14 last:pb-0"
            >
              <div className="absolute left-0 sm:left-8 top-1 w-2 h-2 -translate-x-[3.5px] rounded-full bg-gold/70" />
              <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-gold/50 mb-2">
                {event.year}
              </p>
              <h3 className="font-serif text-2xl text-marble/90 mb-3">
                {event.title}
              </h3>
              <p className="text-parchment/60 text-lg leading-relaxed max-w-xl">
                {event.text}
              </p>
            </motion.div>
          ))}
        </div>

        <ReadMoreLink href="/the-siege" delay={0.35} />
      </div>
    </section>
  );
}
