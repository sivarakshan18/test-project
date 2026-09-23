import { MapPin, Navigation } from "lucide-react";
import { cafeLocation } from "@/data/contact";

export default function LocationCard() {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--color-light-brown)]/30 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coffee-brown)]/10 text-[var(--color-coffee-brown)]">
          <Navigation className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-[var(--color-dark-brown)]">
          Find Us
        </h3>
      </div>

      {/* Static map placeholder — no external map service is used. */}
      <div
        className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[var(--color-cream)] sm:aspect-16/9"
        role="img"
        aria-label={`Map placeholder showing ${cafeLocation.name} in ${cafeLocation.area}, ${cafeLocation.city}`}
      >
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border border-[var(--color-light-brown)]/20" />
          ))}
        </div>

        <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coffee-brown)] text-white shadow-sm">
            <MapPin className="h-6 w-6" />
          </div>
          <p className="font-heading text-lg font-semibold text-[var(--color-dark-brown)]">
            {cafeLocation.name}
          </p>
          <p className="text-sm text-[var(--color-dark-brown)]/70">
            {cafeLocation.area}, {cafeLocation.city}
          </p>
        </div>
      </div>

      <address className="flex flex-col gap-1 not-italic">
        {cafeLocation.addressLines.map((line) => (
          <span key={line} className="text-sm text-[var(--color-dark-brown)] sm:text-base">
            {line}
          </span>
        ))}
      </address>

      <p className="text-sm text-[var(--color-dark-brown)]/70">{cafeLocation.landmark}</p>
    </div>
  );
}
