'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ArtworkCard from './ArtworkCard';
import type { Artwork } from '@/lib/types';

interface InfiniteGalleryProps {
  initialArtworks: Artwork[];
  allArtworks: Artwork[];
}

export default function InfiniteGallery({ initialArtworks, allArtworks }: InfiniteGalleryProps) {
  const [displayedArtworks, setDisplayedArtworks] = useState<Artwork[]>(initialArtworks);
  const [hasMore, setHasMore] = useState(initialArtworks.length < allArtworks.length);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMoreArtworks = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate async loading (in real app, this would be an API call)
    setTimeout(() => {
      const currentLength = displayedArtworks.length;
      const nextBatch = allArtworks.slice(currentLength, currentLength + 5);

      if (nextBatch.length > 0) {
        setDisplayedArtworks((prev) => [...prev, ...nextBatch]);
        setHasMore(currentLength + nextBatch.length < allArtworks.length);
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    }, 300);
  }, [displayedArtworks.length, allArtworks, isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreArtworks();
        }
      },
      {
        rootMargin: '200px', // Load when user is 200px away from bottom
      }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, loadMoreArtworks]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-16">
      <div className="flex flex-col items-center">
        {displayedArtworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}

        {/* Loading skeleton */}
        {isLoading && (
          <div className="w-full max-w-[800px] mb-artwork-gap animate-pulse">
            <div className="aspect-square bg-pale-gray rounded-sm"></div>
            <div className="mt-8 text-center space-y-2">
              <div className="h-4 bg-pale-gray rounded w-32 mx-auto"></div>
              <div className="h-3 bg-pale-gray rounded w-48 mx-auto"></div>
              <div className="h-3 bg-pale-gray rounded w-40 mx-auto"></div>
            </div>
          </div>
        )}

        {/* Intersection observer target */}
        <div ref={observerTarget} className="h-10 w-full" />

        {/* End message */}
        {!hasMore && displayedArtworks.length > 0 && (
          <div className="text-center py-16">
            <p className="font-sans text-sm text-light-gray">
              End of collection
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
