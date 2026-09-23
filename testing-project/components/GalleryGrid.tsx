"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { useCallback, useState } from "react";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import ImageModal from "./ImageModal";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const closeModal = useCallback(() => setSelectedImage(null), []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-2xl border border-[var(--color-light-brown)]/25 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(image)}
              className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[var(--color-coffee-brown)]"
              aria-label={`Open larger view of ${image.title}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-dark-brown)]/80 text-white opacity-100 shadow-lg backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="px-5 py-4">
              <h2 className="font-heading text-xl font-semibold text-[var(--color-dark-brown)]">
                {image.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-dark-brown)]/65">
                {image.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
}
