import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 md:py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif text-xl md:text-2xl text-white tracking-[0.05em] hover:opacity-70 transition-opacity">
            HELMUT
          </Link>
          <Link href="/about" className="font-sans text-sm text-gray-400 hover:text-white transition-colors">
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
