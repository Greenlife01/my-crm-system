"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function useVideoLightbox() {
  const [activeId, setActiveId] = useState<string | null>(null);
  return {
    activeId,
    open: (id: string) => setActiveId(id),
    close: () => setActiveId(null),
  };
}

export function VideoLightbox({ id, onClose }: { id: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onClick={onClose}
        >
          <div className="relative aspect-video w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              className="h-full w-full rounded-xl"
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
