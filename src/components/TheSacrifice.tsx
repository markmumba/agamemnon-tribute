"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ReadMoreLink from "./ReadMoreLink";

export default function TheSacrifice() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-obsidian overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.15)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-3xl px-8 sm:px-16 py-24 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="font-serif text-xs tracking-[0.5em] uppercase text-blood mb-6"
        >
          The Sacrifice
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.15 }}
          className="font-serif text-fluid-section text-marble/90 tracking-wide mb-4"
        >
          Iphigenia at Aulis
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
          className="mx-auto h-[1px] w-32 bg-gradient-to-r from-transparent via-blood to-transparent mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.25 }}
          className="space-y-6 text-parchment/60 text-xl leading-relaxed"
        >
          <p>
            The winds refused to blow. A thousand ships sat motionless in the
            harbor at Aulis, their sails hanging limp beneath an unforgiving sky.
            Artemis demanded a price.
          </p>
          <p className="text-marble/70 text-xl italic font-body">
            His own daughter.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="mt-14 text-blood/60 font-body text-2xl italic leading-relaxed"
        >
          &ldquo;The winds blew again. But something in him never
          returned.&rdquo;
        </motion.blockquote>

        <ReadMoreLink href="/the-sacrifice" delay={0.35} variant="blood" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.1 } : {}}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blood/20 pointer-events-none"
        />
      </div>
    </section>
  );
}
