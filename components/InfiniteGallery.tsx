'use client';

import { useState } from 'react';
import Image from 'next/image';
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
          {displayedArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => setSelectedArtwork(artwork)}
            />
          ))}

          {/* End of collection */}
          <div className="text-center py-16">
            <p className="font-sans text-sm text-light-gray">
              End of collection
            </p>
          </div>

          {/* Old School Image */}
          <div className="w-full max-w-[800px] mb-16">
            <Image
              src="/old_school.jpeg"
              alt="Old School"
              width={2430}
              height={1712}
              className="w-full h-auto"
            />
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
