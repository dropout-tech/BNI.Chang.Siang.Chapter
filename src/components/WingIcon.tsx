"use client";

export default function WingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <path
        d="M100 140 C85 120, 60 100, 20 60 C40 80, 70 90, 100 100"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 140 C82 115, 50 85, 10 40 C35 65, 65 80, 100 95"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 140 C78 108, 40 68, 5 20 C30 50, 60 70, 100 88"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M100 140 C75 100, 35 55, 15 10 C35 40, 62 62, 100 82"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Right wing */}
      <path
        d="M100 140 C115 120, 140 100, 180 60 C160 80, 130 90, 100 100"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 140 C118 115, 150 85, 190 40 C165 65, 135 80, 100 95"
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 140 C122 108, 160 68, 195 20 C170 50, 140 70, 100 88"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M100 140 C125 100, 165 55, 185 10 C165 40, 138 62, 100 82"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C547" />
          <stop offset="40%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B8960C" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}
