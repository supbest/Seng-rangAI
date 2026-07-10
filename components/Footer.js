import Link from 'next/link';
import BrandLogo from './BrandLogo';

const footerSections = [
  {
    title: 'Menu',
    links: [
      { label: 'Find Storefronts', href: '/' },
      { label: 'AI Mockup', href: '/ai-mockup' },
      { label: 'Post Listing', href: '/' },
      { label: 'Guide', href: '/' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '/' },
      { label: 'Contact Us', href: '/' },
      { label: 'FAQ', href: '/' },
      { label: 'Security', href: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Help Center', href: '/' },
    ],
  },
];

const socialLinks = [
  { icon: 'facebook', href: '/' },
  { icon: 'alternate_email', href: '/' },
  { icon: 'call', href: '/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 w-full pt-14 sm:pt-20 pb-8 sm:pb-10 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <BrandLogo
            className="mb-6 block h-14 w-[220px] overflow-hidden sm:h-16 sm:w-[260px]"
            imageClassName="h-full w-full object-cover object-center mix-blend-multiply dark:invert dark:mix-blend-screen"
          />
          <p className="text-slate-500 dark:text-slate-400 font-body-md mb-6 leading-relaxed">
            Professional storefront rental platform that uses AI to analyze and evaluate spaces for your business success.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.icon}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary shadow-sm transition-colors border border-slate-100 dark:border-slate-800"
                href={link.href}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        {footerSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white">{section.title}</h4>
            <ul className="space-y-2 text-slate-500 dark:text-slate-400">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 dark:border-slate-900 pt-8 px-4 sm:px-6 lg:px-margin-desktop text-center">
        <p className="text-sm text-slate-400 dark:text-slate-500">© {currentYear} Storefront AI. Smart Solutions for Smart Businesses.</p>
      </div>
    </footer>
  );
}
