"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGE_MS = 850;

/**
 * Two-stage greeting shown once per session before the homepage reveals —
 * "Oh, hello!" then "You found me!", mirroring the reference site's intro.
 */
export default function IntroSplash() {
  const [stage, setStage] = useState<"hello" | "found" | "done">("hello");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("intro-seen")) {
      setStage("done");
      return;
    }
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setStage("found"), STAGE_MS);
    const t2 = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("intro-seen", "1");
      document.body.style.overflow = "";
    }, STAGE_MS * 2);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          key="intro-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface grid-pattern"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={stage}
              initial={{ opacity: 0, y: 14, rotate: -4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.9 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-[26px] sm:text-[36px] font-bold shadow-xl border-2"
              style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)", borderColor: "var(--ca-ink)" }}
            >
              {stage === "hello" ? "Oh, hello!" : "You found me!"}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
