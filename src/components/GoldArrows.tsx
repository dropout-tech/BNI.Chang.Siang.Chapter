"use client";

export default function GoldArrows({
  direction = "right",
  className = "",
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  const arrows = direction === "right" ? ">>>" : "<<<";
  return (
    <span
      className={`inline-block font-bold tracking-widest gold-gradient-text ${className}`}
      aria-hidden="true"
    >
      {arrows}
    </span>
  );
}
