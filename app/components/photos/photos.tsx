"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";


// NEW: Photo type on the client (matches the API)
type Photo = {
  name: string;
  src: string;
  caption: string;
  date: string;
};

export default function ImageGallery({ perPage = 12 }: { perPage?: number }) {
  // CHANGED: files is now Photo[]
  const [files, setFiles] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);

  // NEW: fade state for smooth pagination
  const [isFading, setIsFading] = useState(false);

  // CHANGED: selected photo is now a Photo, not a string
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/photos");
      const data = await res.json();

      // CHANGED: read `photos` instead of `files`
      setFiles(data.photos ?? []);
      setPage(1);
    })();
  }, []);

  const totalPages = Math.max(1, Math.ceil(files.length / perPage));

  const pageFiles = useMemo(() => {
    const start = (page - 1) * perPage;
    return files.slice(start, start + perPage);
  }, [files, page, perPage]);

  // NEW: placeholders so the grid stays the same shape
  const placeholders = useMemo(() => {
    const missing = Math.max(0, perPage - pageFiles.length);
    return Array.from({ length: missing }, (_, i) => `placeholder-${page}-${i}`);
  }, [perPage, pageFiles.length, page]);

  // NEW: smooth page change
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

  // NEW: prevent background scroll when modal open
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
        // NEW: fade transition
        className={`transition-opacity duration-100 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 min-h-[460px]">
          {pageFiles.map((photo) => (
            <div
              key={photo.name} // CHANGED: key is photo.name
              className="hover:relative hover:bottom-1 cursor-pointer hover:shadow-md relative aspect-square overflow-hidden rounded-lg"
              // CHANGED: store the whole photo object
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src} // CHANGED
                alt={photo.name} // CHANGED
                fill
                className="object-cover "
                sizes="(max-width: 640px) 33vw, 25vw"
                style={{filter: "grayscale(100%)"}}
              />
            </div>
          ))}

          {/* NEW: placeholders */}
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
          // CHANGED: goToPage for smooth transition
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
          // CHANGED: goToPage for smooth transition
          onClick={() => goToPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
        >
          next
        </button>
      </div>

      {/* NEW: modal */}
      <AnimatePresence>
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedPhoto(null)}
          initial={{ opacity: 0 }} // NEW
          animate={{ opacity: 1 }} // NEW
          exit={{ opacity: 0 }} // NEW
          transition={{ duration: 0.18 }}
        >
          <motion.div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 12, scale: 0.98 }} // NEW
            animate={{ opacity: 1, y: 0, scale: 1 }} // NEW
            exit={{ opacity: 0, y: 12, scale: 0.98 }} // NEW
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-square bg-black">
                <Image
                  src={selectedPhoto.src} // CHANGED
                  alt={selectedPhoto.name} // CHANGED
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>

              <div className="p-4">
                <div className="flex align-bottom justify-end w-full gap-3">
                  {/* <div className="font-larken text-lg">Photo</div> */}
                  <button
                    className=" opacity-70 hover:opacity-100 cursor-pointer"
                    onClick={() => setSelectedPhoto(null)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-2 flex flex-col h-full">
                  {/* NEW: caption/date from Photo object */}
                  <div className="text-base"><b>@flechori says:</b> {selectedPhoto.caption}</div>
                  <div className="opacity-70">{selectedPhoto.date}</div>
                  {/* <div className="text-xs opacity-40 mt-4">{selectedPhoto.name}</div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
