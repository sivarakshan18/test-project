"use client";

import { useEffect, useState } from "react";

type AddToOrderButtonProps = {
  disabled?: boolean;
  className?: string;
};

export default function AddToOrderButton({ disabled = false, className = "" }: AddToOrderButtonProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => setAdded(false), 2000);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setAdded(true)}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-coffee-brown)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-dark-brown)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[var(--color-coffee-brown)] sm:text-base"
      >
        {disabled ? "Currently Unavailable" : "Add to Order"}
      </button>

      <span
        aria-live="polite"
        className={`text-sm font-medium text-[var(--color-coffee-brown)] transition-opacity ${
          added ? "opacity-100" : "opacity-0"
        }`}
      >
        Added to your order ☕
      </span>
    </div>
  );
}
