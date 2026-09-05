"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

const roles = ["King", "Father", "Conqueror", "Mortal"];

export default function TheLegacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-obsidian">
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="relative film-grain">
          <Image
            src="/agamemnon-armor.jpg"
            alt="Corinthian helmet"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        <div className="relative hidden lg:block film-grain">
          <Image
            src="/agamemnon-legacy.webp"
            alt="Agamemnon among his fleet"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-obsidian/80" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 sm:px-16 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-6"
        >
          The Legacy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.15 }}
          className="font-serif text-fluid-section text-marble tracking-wide mb-8"
        >
          Eternal in Memory
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
          className="max-w-2xl space-y-6 text-parchment/70 text-xl leading-relaxed"
        >
          <p>
            His name endures. Not because he was virtuous — but because he
            was monumental. He carried the weight of an entire civilization on
            his shoulders.
          </p>
          <p className="text-gold/60 font-serif text-xl italic">
            Power. Hubris. Duty. Tragedy.
          </p>
        </motion.div>

        <ReadMoreLink href="/the-legacy" delay={0.3} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {roles.map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 + i * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-[1px] bg-gold/50 mb-4" />
              <span className="font-serif text-sm tracking-[0.3em] uppercase text-gold">
                {role}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
