import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-pale-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif text-xl md:text-2xl text-soft-black tracking-[0.05em] hover:opacity-70 transition-opacity">
            HELMUT
          </Link>
          <Link href="/about" className="font-sans text-sm text-medium-gray hover:text-soft-black transition-colors">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
