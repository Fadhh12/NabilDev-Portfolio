"use client";

import ShapeGrid from "./ShapeGrid";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-auto opacity-70">
      <ShapeGrid
        speed={0.15}
        squareSize={120}
        direction="diagonal"
        borderColor="rgba(163, 230, 53, 0.08)"
        hoverFillColor="rgba(163, 230, 53, 0.15)"
        shape="square"
        hoverTrailAmount={0}
      />
    </div>
  );
}
