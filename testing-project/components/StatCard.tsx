export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-8 text-center sm:py-10">
      <strong className="font-heading text-4xl font-bold text-[var(--color-coffee-brown)] sm:text-5xl">
        {value}
      </strong>
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-dark-brown)]/65">
        {label}
      </span>
    </div>
  );
}
