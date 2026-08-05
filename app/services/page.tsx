import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Professional Agricultural & Farming Services | Expert Solutions',
  description: 'Explore our specialized farming services including forestry, cattle, poultry, goat, rabbit, nursery farming, and crop cultivation with 25+ years of expertise.',
  keywords: 'agricultural services, forestry, cattle farming, poultry farming, goat farming, rabbit farming, nursery farming, crop cultivation, Pakistan',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://yourdomain.com/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com/services',
    siteName: 'Agricultural Services',
    title: 'Professional Agricultural & Farming Services',
    description: 'Explore our specialized farming and livestock solutions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Professional Agricultural Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Agricultural & Farming Services',
    description: 'Explore our specialized farming and livestock solutions.',
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
            "@type": "LocalBusiness",
            "name": "Agricultural Services",
            "description": "Professional agricultural and livestock farming solutions",
            "url": "https://yourdomain.com/services",
            "telephone": "+92-300-0000000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Farm Road",
              "addressLocality": "Islamabad",
              "addressRegion": "Islamabad",
              "postalCode": "44000",
              "addressCountry": "PK"
            },
            "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
            "priceRange": "$$$"
          })
        }}
      />
      <ServicesContent />
    </>
  );
}