import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-light-brown)]/25 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)] transition-colors group-hover:bg-[var(--color-coffee-brown)] group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-[var(--color-dark-brown)]">
        {title}
      </h3>
      <p className="text-sm leading-6 text-[var(--color-dark-brown)]/70">
        {description}
      </p>
    </article>
  );
}
