import Image from 'next/image';
import type { ArtworkCardProps } from '@/lib/types';

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <article className="artwork-card mb-20 md:mb-artwork-gap">
      <div className="artwork-container group cursor-default">
        <Image
          src={`/artworks/${artwork.filename}`}
          alt={`${artwork.title} by ${artwork.artistName}`}
          width={artwork.width}
          height={artwork.height}
          quality={90}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 700px, 800px"
          className="w-full h-auto"
          priority={parseInt(artwork.id) <= 3}
        />
      </div>

      <div className="artwork-label mt-6 md:mt-8 text-center max-w-[600px] mx-auto px-6">
        <h2 className="font-serif text-base md:text-lg text-soft-black tracking-wide">
          {artwork.title}
        </h2>
        <p className="font-sans text-xs md:text-sm text-light-gray mt-2">
          {artwork.medium}
        </p>
      </div>
    </article>
  );
}
