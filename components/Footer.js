import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 w-full pt-20 pb-10 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>store</span>
            </div>
            <span className="font-headline-lg text-xl font-bold text-slate-900 dark:text-white">Storefront AI</span>
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
      <div className="border-t border-slate-200 dark:border-slate-900 pt-8 px-margin-desktop text-center">
        <p className="text-sm text-slate-400 dark:text-slate-500">© {currentYear} Storefront AI. Smart Solutions for Smart Businesses.</p>
      </div>
    </footer>
  );
}
