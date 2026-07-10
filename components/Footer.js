import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 w-full pt-14 sm:pt-20 pb-8 sm:pb-10 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-6 h-14 w-[220px] sm:h-16 sm:w-[260px] overflow-hidden">
            <img
              alt="Astrodog Store for Rent"
              className="h-full w-full object-cover object-center mix-blend-multiply dark:invert dark:mix-blend-screen"
              src="/logo/long.png"
            />
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-body-md mb-6 leading-relaxed">
            Professional storefront rental platform that uses AI to analyze and evaluate spaces for your business success.
          </p>
          <div className="flex gap-3">
            <Link className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary shadow-sm transition-colors border border-slate-100 dark:border-slate-800" href="/">
              <span className="material-symbols-outlined">facebook</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary shadow-sm transition-colors border border-slate-100 dark:border-slate-800" href="/">
              <span className="material-symbols-outlined">alternate_email</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary shadow-sm transition-colors border border-slate-100 dark:border-slate-800" href="/">
              <span className="material-symbols-outlined">call</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white">Menu</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><Link className="hover:text-primary transition-colors" href="/">Find Storefronts</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">AI Mockup</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Post Listing</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Guide</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white">About</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><Link className="hover:text-primary transition-colors" href="/">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">FAQ</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Security</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 dark:text-white">Help</h4>
          <ul className="space-y-2 text-slate-500 dark:text-slate-400">
            <li><Link className="hover:text-primary transition-colors" href="/">Privacy Policy</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Terms of Service</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/">Help Center</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-900 pt-8 px-4 sm:px-6 lg:px-margin-desktop text-center">
        <p className="text-sm text-slate-400 dark:text-slate-500">© {currentYear} Storefront AI. Smart Solutions for Smart Businesses.</p>
      </div>
    </footer>
  );
}
