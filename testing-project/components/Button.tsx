import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:text-base";
  const variants = {
    primary: "bg-[var(--color-coffee-brown)] text-white hover:bg-[var(--color-dark-brown)]",
    secondary:
      "border-2 border-[var(--color-coffee-brown)] text-[var(--color-coffee-brown)] hover:bg-[var(--color-coffee-brown)] hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
