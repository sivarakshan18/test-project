import { Clock } from "lucide-react";
import { openingHours, openingHoursNote } from "@/data/contact";

export default function OpeningHours() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--color-light-brown)]/30 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)]">
          <Clock className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-[var(--color-dark-brown)]">
          Opening Hours
        </h3>
      </div>

      <dl className="flex flex-col">
        {openingHours.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col gap-1 border-b border-[var(--color-light-brown)]/25 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          >
            <dt className="text-sm font-medium text-[var(--color-dark-brown)] sm:text-base">
              {entry.days}
            </dt>
            <dd className="text-sm font-semibold text-[var(--color-coffee-brown)] sm:text-base">
              {entry.hours}
            </dd>
          </div>
        ))}
      </dl>

      <p className="text-sm text-[var(--color-dark-brown)]/70">{openingHoursNote}</p>
    </div>
  );
}
