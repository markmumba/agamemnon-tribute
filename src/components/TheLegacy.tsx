"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

export default function TheLegacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-obsidian">
      {/* Split background — full cover */}
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="relative film-grain">
          <Image
            src="/agamemnon-armor.jpg"
            alt="Corinthian helmet — relic of an age"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
        <div className="relative hidden lg:block film-grain">
          <Image
            src="/agamemnon-legacy.webp"
            alt="Agamemnon among his fleet"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 sm:px-16 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-6"
        >
          The Legacy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble tracking-wide mb-8"
        >
          Eternal in Memory
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1 }}
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

        <ReadMoreLink href="/the-legacy" delay={1.5} />

        {/* Themes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {["King", "Father", "Conqueror", "Mortal"].map((role, i) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 2 + i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-[1px] bg-gold/50 mb-4" />
              <span className="font-serif text-sm tracking-[0.3em] uppercase text-gold">
                {role}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-24 pt-8 border-t border-gold/10"
        >
          <p className="font-serif text-[10px] tracking-[0.5em] uppercase text-parchment/50">
            A tribute to the King of Kings — from Homer&apos;s Iliad to
            eternity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
