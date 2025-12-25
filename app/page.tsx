import Header from '@/components/Header';
import InfiniteGallery from '@/components/InfiniteGallery';
import { getAllArtworks } from '@/lib/artworks';

export default function Home() {
  const allArtworks = getAllArtworks();
  // Load all artworks at once for zero scroll lag (only 26 images)
  const initialArtworks = allArtworks;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <InfiniteGallery
          initialArtworks={initialArtworks}
          allArtworks={allArtworks}
        />
      </main>
    </>
  );
}
