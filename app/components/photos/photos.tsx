"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
// import { ViewTransition } from "react"; // CHANGED: removed (this import isn't needed + may not exist)

export default function ImageGallery({ perPage = 12 }: { perPage?: number }) {
  const [files, setFiles] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  // NEW: fade state for smooth pagination
  const [isFading, setIsFading] = useState(false);

  // NEW: modal state
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // NEW: lightweight metadata map (replace with real data source later if you want)
  const photoMeta: Record<string, { caption: string; date: string }> = {
    // "img1.jpg": { caption: "First memory.", date: "2024-01-05" },
  };

  // NEW: helper to get caption/date with a fallback
  const getMeta = (name: string) => {
    const fallbackNumber = name.match(/\d+/)?.[0] ?? "";
    return (
      photoMeta[name] ?? {
        caption: `Photo ${fallbackNumber}`,
        date: "—",
      }
    );
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/photos");
      const data = await res.json();
      setFiles(data.files ?? []);
      setPage(1);
    })();
  }, []);

  const totalPages = Math.max(1, Math.ceil(files.length / perPage));

  const pageFiles = useMemo(() => {
    const start = (page - 1) * perPage;
    return files.slice(start, start + perPage);
  }, [files, page, perPage]);

  // NEW: placeholders to keep grid formatting consistent
  const placeholders = useMemo(() => {
    const missing = Math.max(0, perPage - pageFiles.length);
    return Array.from({ length: missing }, (_, i) => `placeholder-${page}-${i}`);
  }, [perPage, pageFiles.length, page]);

  // NEW: smooth page change (fade out, then change page, then fade in)
  const goToPage = (nextPage: number) => {
    if (nextPage === page) return;
    setIsFading(true);
    window.setTimeout(() => {
      setPage(nextPage);
      setIsFading(false);
    }, 120);
  };

  // NEW: close modal on ESC
  useEffect(() => {
    if (!selectedPhoto) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPhoto]);

  // NEW: prevent background scroll while modal is open
  useEffect(() => {
    if (!selectedPhoto) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedPhoto]);

  return (
    <div className="w-full">
      <div
        // NEW: fade transition on pagination
        className={`transition-opacity duration-150 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 min-h-[460px]">
          {pageFiles.map((name) => (
            <div
              key={name}
              className="hover:relative hover:bottom-1 cursor-pointer hover:shadow-md relative aspect-square overflow-hidden rounded-lg"
              // NEW: open modal on click
              onClick={() => setSelectedPhoto(name)}
            >
              <Image
                src={`/photos/${name}`}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, 25vw"
              />
            </div>
          ))}

          {/* NEW: placeholders (invisible tiles) so grid keeps same shape */}
          {placeholders.map((ph) => (
            <div
              key={ph}
              className="relative aspect-square overflow-hidden rounded-lg opacity-0 pointer-events-none"
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          className="font-larken disabled:opacity-40 cursor-pointer"
          // CHANGED: use goToPage for smooth fade
          onClick={() => goToPage(Math.max(1, page - 1))}
          disabled={page === 1}
        >
          prev
        </button>

        <div className="font-larken">
          page {page} / {totalPages}
        </div>

        <button
          className="font-larken disabled:opacity-40 cursor-pointer"
          // CHANGED: use goToPage for smooth fade
          onClick={() => goToPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          next
        </button>
      </div>

      {/* NEW: modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          // NEW: click outside closes modal
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg"
            // NEW: prevent closing when clicking inside the modal
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-square bg-black">
                <Image
                  src={`/photos/${selectedPhoto}`}
                  alt={selectedPhoto}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              {/* Caption/date side */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-larken text-lg">Photo</div>

                  {/* NEW: close button */}
                  <button
                    className="text-sm opacity-70 hover:opacity-100"
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-3 space-y-2">
                  {/* NEW: caption + date */}
                  <div className="text-base">{getMeta(selectedPhoto).caption}</div>
                  <div className="text-sm opacity-70">{getMeta(selectedPhoto).date}</div>

                  {/* NEW: show filename (optional; remove if you want) */}
                  <div className="text-xs opacity-40 mt-4">{selectedPhoto}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
