"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Small dark "window/card" decoration that endlessly wanders around the
 * hero name box, weaving in front of and behind the name text.
 * Pure GSAP loop — cheap, transform/opacity only, killed on unmount.
 */
export default function AmbientNameBox({ active }: { active: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || !active) return;

    const wander = () => {
      const x = gsap.utils.random(-150, 150);
      const y = gsap.utils.random(-55, 55);
      const rotate = gsap.utils.random(-8, 8);
      const behind = Math.random() > 0.5;

      gsap.set(el, { zIndex: behind ? 5 : 15 });
      gsap.to(el, {
        x,
        y,
        rotate,
        duration: gsap.utils.random(1.5, 2.5),
        ease: "elastic.out(1, 0.65)",
        onComplete: wander,
      });
    };

    gsap.set(el, { x: -80, y: -30, opacity: 0, scale: 0.6 });
    gsap.to(el, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" });
    const id = requestAnimationFrame(wander);

    return () => {
      cancelAnimationFrame(id);
      gsap.killTweensOf(el);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={boxRef}
      aria-hidden
      data-testid="ambient-name-box"
      className="absolute left-1/2 top-1/2 w-[15%] min-w-[46px] max-w-[76px] aspect-[4/3] rounded-lg pointer-events-none select-none"
      style={{
        background: "#191510",
        boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
        willChange: "transform",
      }}
    >
      <div className="flex items-center gap-1 p-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0]" />
      </div>
    </div>
  );
}
