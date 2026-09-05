"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.playsInline = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-obsidian">
      {!videoLoaded && (
        <div className="absolute inset-0 z-[5] flex items-center justify-center">
          <div className="h-8 w-8 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        suppressHydrationWarning
        onCanPlay={() => setVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover scale-[1.35] transition-opacity duration-700"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="mb-8 h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
          className="font-serif text-sm tracking-[0.4em] uppercase text-gold/80 mb-4"
        >
          High King of Mycenae
        </motion.p>

        <motion.h1
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.6 }}
          className="text-shimmer font-serif text-fluid-hero font-bold tracking-wider"
        >
          AGAMEMNON
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.0 }}
          className="font-body mt-6 max-w-xl text-lg sm:text-xl text-parchment/70 leading-relaxed font-light"
        >
          Commander of a thousand ships. Conqueror of Troy.
          <br />
          His glory echoes through the ages.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, delay: 1.3 }}
          className="mt-8 h-[2px] w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <a
            href="#the-man"
            className="group relative inline-block font-serif text-sm tracking-[0.3em] uppercase text-gold border border-gold/40 px-8 py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
          >
            Explore His Legacy
            <span className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-gold transition-all duration-500 group-hover:left-0 group-hover:w-full" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-gold/50">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
