"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function ReadMoreLink({
  href,
  label = "Read More",
  delay = 1.5,
  variant = "gold",
}: {
  href: string;
  label?: string;
  delay?: number;
  variant?: "gold" | "blood";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const colors =
    variant === "blood"
      ? "text-marble border-blood bg-blood/20 hover:bg-blood/40 hover:border-blood"
      : "text-marble border-gold bg-gold/20 hover:bg-gold/40 hover:border-gold";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="mt-10"
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center gap-3 font-serif text-sm tracking-[0.25em] uppercase border px-8 py-3.5 transition-all duration-500 ${colors}`}
      >
        {label}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
}
