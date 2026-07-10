import ListingDetailsClient from './ListingDetailsClient';

export async function generateStaticParams() {
  return [
    { id: 'specialtyCoffeeBar' },
    { id: 'shabuSukhumvit' },
    { id: 'clothingSamYan' },
    { id: 'clinicSiam' },
    { id: 'coffeeShopThonglor' },
    { id: 'coffee2' },
    { id: 'milk-tea' },
    { id: 'mkSiamSquare' }
  ];
}

export default function ListingPage({ params }) {
  return <ListingDetailsClient params={params} />;
}
