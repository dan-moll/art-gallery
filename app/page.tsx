import Header from '@/components/Header';
import InfiniteGallery from '@/components/InfiniteGallery';
import { getAllArtworks } from '@/lib/artworks';

export default function Home() {
  const allArtworks = getAllArtworks();
  const initialArtworks = allArtworks.slice(0, 10);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <InfiniteGallery
          initialArtworks={initialArtworks}
          allArtworks={allArtworks}
        />
      </main>
    </>
  );
}
