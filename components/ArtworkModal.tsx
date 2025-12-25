'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Artwork } from '@/lib/types';

interface ArtworkModalProps {
  artwork: Artwork;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ArtworkModal({ artwork, onClose, onNext, onPrev }: ArtworkModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Previous button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Previous artwork"
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Next artwork"
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={`/artworks/${artwork.filename}`}
            alt={`${artwork.title} by ${artwork.artistName}`}
            width={artwork.width}
            height={artwork.height}
            quality={95}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            priority
          />
        </div>

        {/* Artwork info */}
        <div className="mt-6 text-center">
          <h2 className="font-serif text-lg md:text-xl text-white tracking-wide">
            {artwork.title}
          </h2>
          <p className="font-sans text-sm text-gray-300 mt-2">
            {artwork.medium}
          </p>
        </div>
      </div>
    </div>
  );
}
