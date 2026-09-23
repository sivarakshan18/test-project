"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { GalleryImage } from "@/data/gallery";

export default function ImageModal({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-dark-brown)]/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-[var(--color-cream)] shadow-2xl">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-dark-brown)] text-white shadow-lg transition hover:scale-105 hover:bg-[var(--color-coffee-brown)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-dark-brown)]"
          aria-label="Close image preview"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <div className="px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-coffee-brown)]">
            Brew &amp; Bean
          </p>
          <h2 id="gallery-modal-title" className="mt-1 font-heading text-2xl font-bold text-[var(--color-dark-brown)]">
            {image.title}
          </h2>
          <p className="mt-1 text-sm text-[var(--color-dark-brown)]/65">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
}
