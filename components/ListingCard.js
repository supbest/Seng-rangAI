import Link from 'next/link';

const cardSurfaceClass = {
  default: 'bg-white dark:bg-slate-950',
  elevated: 'bg-white dark:bg-slate-900',
};

export default function ListingCard({ listing, variant = 'default', onDetailsClick }) {
  const surfaceClass = cardSurfaceClass[variant] || cardSurfaceClass.default;
  const tagDarkClass = variant === 'elevated' ? 'dark:bg-slate-950' : 'dark:bg-slate-900';
  const dividerClass = variant === 'elevated' ? 'border-slate-50 dark:border-slate-800' : 'border-slate-50 dark:border-slate-900';

  return (
    <div className={`group ${surfaceClass} rounded-2xl border border-slate-100 dark:border-slate-800/80 overflow-hidden hover:shadow-2xl dark:hover:shadow-none transition-all`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={listing.image}
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm">{listing.badge}</div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">AI Score</span>
            <span className="text-xs font-bold text-primary">{listing.aiScore}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline-md text-xl font-bold text-slate-900 dark:text-white">{listing.title}</h3>
        </div>
        <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-sm mb-4">
          <span className="material-symbols-outlined text-sm">location_on</span>
          {listing.location}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {listing.tags.map((tag) => (
            <span key={tag} className={`${tagDarkClass} bg-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-600 dark:text-slate-400`}>{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-primary text-2xl">{listing.price}</span>
        </div>
        <div className={`flex items-center justify-between pt-4 border-t ${dividerClass}`}>
          <div className="flex gap-4">
            <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" type="button">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
          <Link
            href={listing.href}
            className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-label-md hover:brightness-110 transition-all text-center"
            onClick={onDetailsClick}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
