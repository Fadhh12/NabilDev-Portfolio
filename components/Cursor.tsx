"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * Creative Artsy Marquee / Transform Box Cursor (as seen in Reference Photo 4)
 * Features:
 * - Follows the cursor with smooth spring physics
 * - Rectangular transform box with 4 corner handles (Figma / Photoshop style)
 * - Inverts underlying content (mix-blend-mode: difference) so paper turns dark, text turns white
 * - Expands when hovering clickable elements (links, buttons)
 */
export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 450, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted) return null;

  const boxSize = isHovered ? 88 : 64;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: boxSize,
        height: boxSize,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      {/* ── Outer Transform Box with Inversion ── */}
      <div className="relative w-full h-full bg-white border border-white">
        {/* Top-Left Handle */}
        <span className="absolute -top-1 -left-1 w-2 h-2 bg-black border border-white" />
        {/* Top-Right Handle */}
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-black border border-white" />
        {/* Bottom-Left Handle */}
        <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-black border border-white" />
        {/* Bottom-Right Handle */}
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-black border border-white" />

        {/* Center crosshair dot */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full" />
      </div>
    </motion.div>
  );
}
