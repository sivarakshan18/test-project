export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-light-brown)]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-[var(--color-dark-brown)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-[var(--color-dark-brown)]/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
