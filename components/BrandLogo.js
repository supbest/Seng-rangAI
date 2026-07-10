import Link from 'next/link';

export default function BrandLogo({ className = '', imageClassName = '' }) {
  return (
    <Link
      aria-label="Astrodog Store for Rent home"
      href="/"
      className={className}
    >
      <img
        alt="Astrodog Store for Rent"
        className={imageClassName}
        src="/logo/long.png"
      />
    </Link>
  );
}
