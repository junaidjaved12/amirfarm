import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: "Amir Farms | Organic Farming & Fresh Products",
    template: "%s | Amir Farms",
  },
  description:
    "Amir Farms provides organic vegetables, dairy, poultry, and livestock farming services with a focus on sustainability and quality.",
  keywords: [
    "Amir Farms",
    "organic farming",
    "fresh vegetables",
    "dairy farm",
    "poultry farm",
    "livestock farming",
    "agriculture services",
  ],
  authors: [{ name: "Amir Farms" }],
  creator: "Amir Farms",
  metadataBase: new URL("https://amirfarms.com"),

  icons: {
    icon: "/favicon.ico", // ✅ favicon added
  },

  openGraph: {
    title: "Amir Farms | Organic Farming & Fresh Products",
    description:
      "Explore high-quality organic farm products including vegetables, dairy, and livestock services.",
    url: "https://amirfarms.com",
    siteName: "Amir Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  viewport: "width=device-width, initial-scale=1", // ✅ added
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased">

        {/* ✅ Structured Data (Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amir Farms",
              url: "https://amirfarms.com",
              logo: "https://amirfarms.com/logo.png",
              sameAs: [
                "https://www.facebook.com/amirmughalfarms"
                
              ],
            }),
          }}
        />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}