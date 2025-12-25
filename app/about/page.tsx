import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <div className="max-w-3xl mx-auto px-6 md:px-20 py-16 md:py-24">
          <article className="prose prose-lg max-w-none">
            <h1 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-8">
              About the Artist
            </h1>

            {/* Bio text */}
            <div className="font-sans text-base md:text-lg text-gray-300 leading-relaxed space-y-6 mb-10">
              <p>
                Dr. Relinger is a Clinical Psychologist practicing in Berkeley, California for over 40 years. He has been fascinated by unusual art, since 1969, when he met his college roommate, an art major, specializing in bizarre erotic art.
              </p>

              <p>
                Over the past 30 years, Dr. Relinger and his wife, Kathryn, have visited famous art museums in more than 35 countries.
              </p>

              <p>
                Having no formal training, or even any idea of what he was doing, Helmut has painted over 200 canvases, since 2015.
              </p>
            </div>

            {/* Young Helmut photo */}
            <div className="mb-10">
              <Image
                src="/old_school.jpeg"
                alt="Young Helmut Relinger"
                width={2430}
                height={1712}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Family photo */}
            <div className="mb-10">
              <Image
                src="/about_the_artist.jpeg"
                alt="Helmut Relinger with family"
                width={2592}
                height={1458}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
              <Link
                href="/"
                className="font-sans text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Gallery
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
