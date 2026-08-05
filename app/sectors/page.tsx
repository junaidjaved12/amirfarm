import SectorsContent from './SectorsContent';

export const metadata = {
  title: 'Our Farms & Operating Locations | Amir Farms Attock & Hazro',
  description: 'Explore Amir Farms locations including Hill Top Qutab Bandi Village Hazro, Attock Khurd Nursery, and our comprehensive farming operations in Pakistan.',
  keywords: 'Amir Farms, Attock Khurd, Qutab Bandi Hazro, farm locations, cattle farming, goat farming, poultry farming, rabbit farming, forestry, Pakistan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yourdomain.com/sectors',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com/sectors',
    siteName: 'Amir Farms',
    title: 'Our Farms & Operating Locations | Amir Farms',
    description: 'Explore our farm locations across Hazro and Attock Khurd.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Amir Farms Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Farms & Operating Locations | Amir Farms',
    description: 'Explore our farm locations across Hazro and Attock Khurd.',
    images: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Our Farms & Operating Locations",
            "description": "Explore Amir Farms locations in Hazro and Attock Khurd.",
            "url": "https://yourdomain.com/sectors",
            "publisher": {
              "@type": "Organization",
              "name": "Amir Farms",
              "logo": "https://yourdomain.com/logo.png"
            }
          })
        }}
      />
      <SectorsContent />
    </>
  );
}