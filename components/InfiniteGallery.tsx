'use client';

import { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import type { Artwork } from '@/lib/types';

interface InfiniteGalleryProps {
  initialArtworks: Artwork[];
  allArtworks: Artwork[];
}

export default function InfiniteGallery({ initialArtworks, allArtworks }: InfiniteGalleryProps) {
  const [displayedArtworks] = useState<Artwork[]>(initialArtworks);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const handleNext = () => {
    if (!selectedArtwork) return;
    const currentIndex = allArtworks.findIndex((a) => a.id === selectedArtwork.id);
    if (currentIndex < allArtworks.length - 1) {
      setSelectedArtwork(allArtworks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (!selectedArtwork) return;
    const currentIndex = allArtworks.findIndex((a) => a.id === selectedArtwork.id);
    if (currentIndex > 0) {
      setSelectedArtwork(allArtworks[currentIndex - 1]);
    }
  };

  const currentIndex = selectedArtwork ? allArtworks.findIndex((a) => a.id === selectedArtwork.id) : -1;
  const hasNext = currentIndex < allArtworks.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-16">
        <div className="flex flex-col items-center">
          {/* Gallery Title */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
              &ldquo;Art is Fantasy and Fantasy is Art&rdquo;
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 mt-2">
              by Helmut
            </p>
          </div>

          {displayedArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))}

          {/* Separator line */}
          <div className="w-full max-w-[600px] my-16">
            <div className="h-px bg-gray-800"></div>
          </div>

          {/* End of collection */}
          <div className="text-center py-8 mb-16">
            <p className="font-sans text-sm text-gray-500">
              End of collection
            </p>
          </div>
        </div>
      </div>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onNext={hasNext ? handleNext : undefined}
          onPrev={hasPrev ? handlePrev : undefined}
        />
      )}
    </>
  );
}
