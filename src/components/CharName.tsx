"use client";

import { useState, useRef, useEffect, useId, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { characters, type CharacterId } from "@/lib/characters";

interface CharNameProps {
  name: CharacterId;
}

export default function CharName({ name }: CharNameProps) {
  const [open, setOpen] = useState(false);
  const [above, setAbove] = useState(true);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  const reposition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setAbove(rect.top > 120);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Tap-outside dismiss (mobile)
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const handleEnter = () => {
    reposition();
    setOpen(true);
  };

  return (
    <span
      ref={triggerRef}
      className="relative inline border-b border-dotted border-gold/40 hover:border-gold/80 transition-colors cursor-help"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setOpen(false)}
      onFocus={handleEnter}
      onBlur={() => setOpen(false)}
      onClick={() => {
        reposition();
        setOpen((v) => !v);
      }}
      role="button"
      tabIndex={0}
      aria-describedby={open ? tooltipId : undefined}
    >
      {name}

      <AnimatePresence>
        {open && (
          <motion.span
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, y: above ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: above ? 6 : -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`absolute z-50 w-64 p-3 border border-gold/30 bg-[#0a0a0a] shadow-xl pointer-events-none left-1/2 -translate-x-1/2 ${
              above ? "bottom-full mb-2" : "top-full mt-2"
            }`}
            style={{ lineHeight: "1.5" }}
          >
            {/* Arrow caret */}
            <span
              className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-gold/30 bg-[#0a0a0a] ${
                above
                  ? "bottom-0 translate-y-1/2 border-r border-b"
                  : "top-0 -translate-y-1/2 border-l border-t"
              }`}
            />
            <span className="block font-serif text-sm text-gold tracking-wide mb-1">
              {name}
            </span>
            <span className="block text-parchment/70 text-xs leading-relaxed font-body">
              {characters[name]}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
