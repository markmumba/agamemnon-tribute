"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

export default function TheWar() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-obsidian">
      {/* Full-bleed video background — ships at sea */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        suppressHydrationWarning
        className="absolute inset-0 h-full w-full object-cover scale-[1.35]"
      >
        <source src="/ships-at-sea.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />

      {/* Content at bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-screen px-8 sm:px-16 lg:px-24 pb-24 pt-48">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-gold/60 mb-4"
        >
          The War
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-marble tracking-wide mb-6"
        >
          A Thousand Ships
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl space-y-5 text-parchment/80 text-xl leading-relaxed"
        >
          <p>
            By the Oath of Tyndareus, every king of Greece was bound to defend
            Helen&apos;s marriage. Agamemnon called upon that oath — and all of
            Greece answered.
          </p>
        </motion.div>

        {/* Ship count stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex gap-12 sm:gap-20"
        >
          {[
            { number: "1,186", label: "Ships Assembled" },
            { number: "100,000+", label: "Warriors" },
            { number: "29", label: "Kings United" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl sm:text-4xl text-gold tracking-wider">
                {stat.number}
              </p>
              <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-parchment/40 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <ReadMoreLink href="/the-war" delay={1.3} />
      </div>
    </section>
  );
}
