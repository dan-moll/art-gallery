import Header from '@/components/Header';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-20 py-16 md:py-24">
          <article className="prose prose-lg max-w-none">
            <h1 className="font-serif text-3xl md:text-4xl text-soft-black tracking-wide mb-8">
              About the Artist
            </h1>

            <div className="font-sans text-base md:text-lg text-soft-black leading-relaxed space-y-6">
              <p>
                Helmut Relinger lives in Berkeley, California, where he has maintained a psychology practice for over four decades. Throughout his career, he has used art as a parallel language—one that speaks in jarring color shifts, collaged textures, and geometric disruptions rather than words. His mixed media compositions fragment and reassemble visual space, mirroring the way consciousness itself operates: not in smooth transitions, but in sudden breaks, overlapping layers, and unexpected juxtapositions.
              </p>

              <p>
                His canvases refuse comfort. Neon greens collide with deep maroons. Smooth paint abuts rough canvas and metallic foil. Sharp diagonals slice through carefully constructed fields, creating tension that never fully resolves. Relinger's work doesn't guide the viewer toward clarity—it asks them to sit with dissonance, to find meaning in the collision of incompatible elements, and to recognize that sometimes the most honest representation of inner life is one that disrupts rather than soothes.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-pale-gray">
              <Link
                href="/"
                className="font-sans text-sm text-medium-gray hover:text-soft-black transition-colors"
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
