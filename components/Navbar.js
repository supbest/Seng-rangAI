import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full top-0 sticky z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant/30">
      <nav className="flex justify-between items-center h-20 px-margin-desktop max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>store</span>
            </div>
            <span className="font-headline-lg text-2xl font-bold text-slate-900">Storefront AI</span>
          </Link>
          <div className="hidden lg:flex gap-6">
            <Link className="font-label-md text-slate-900 border-b-2 border-primary pb-1 transition-colors" href="/">
              Find Storefronts
            </Link>
            <Link className="font-label-md text-slate-500 hover:text-primary transition-colors" href="/ai-mockup">
              AI Mockup
            </Link>
            <Link className="font-label-md text-slate-500 hover:text-primary transition-colors" href="/">
              Post Listing
            </Link>
            <Link className="font-label-md text-slate-500 hover:text-primary transition-colors" href="/">
              Guide
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hidden md:block font-label-md text-slate-600 hover:text-primary transition-colors" href="/">
            Log In
          </Link>
          <button className="px-6 py-2.5 rounded-full bg-primary text-white font-label-md shadow-lg shadow-blue-200 hover:brightness-110 active:scale-95 transition-all">
            Post a Listing
          </button>
        </div>
      </nav>
    </header>
  );
}
