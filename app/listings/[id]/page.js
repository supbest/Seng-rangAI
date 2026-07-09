import ListingDetailsClient from './ListingDetailsClient';

export async function generateStaticParams() {
  return [
    { id: 'specialtyCoffeeBar' },
    { id: 'shabuSukhumvit' },
    { id: 'coffeeShopThonglor' },
    { id: 'mkSiamSquare' }
  ];
}

export default function ListingPage({ params }) {
  return <ListingDetailsClient params={params} />;
}
