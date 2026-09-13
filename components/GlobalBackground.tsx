export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none grid-pattern"
      style={{ backgroundColor: "var(--background)" }}
    />
  );
}
