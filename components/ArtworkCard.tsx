import Image from 'next/image';
import type { ArtworkCardProps } from '@/lib/types';

interface ArtworkCardWithClickProps extends ArtworkCardProps {
  onClick?: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardWithClickProps) {
  return (
    <article className="artwork-card mb-20 md:mb-artwork-gap">
      <div
        className="artwork-container group cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
      >
        <Image
          src={`/artworks/${artwork.filename}`}
          alt={`${artwork.title} by ${artwork.artistName}`}
          width={artwork.width}
          height={artwork.height}
          quality={80}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 700px, 800px"
          className="w-full h-auto"
          priority={parseInt(artwork.id) <= 3}
          loading={parseInt(artwork.id) <= 3 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="artwork-label mt-6 md:mt-8 text-center max-w-[600px] mx-auto px-6">
        <h2 className="font-serif text-base md:text-lg text-gray-200 tracking-wide">
          {artwork.title}
        </h2>
        <p className="font-sans text-xs md:text-sm text-gray-500 mt-2">
          {artwork.medium}
        </p>
      </div>
    </article>
  );
}
