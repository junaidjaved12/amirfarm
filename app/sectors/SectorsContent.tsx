'use client';

import Link from 'next/link';

export default function SectorsContent() {
  const TERRACOTTA = "#c1603f";
  const NAVY_DEEP = "#0f2340";

  const sectorsList = [
    {
      id: "agricultural-farming",
      title: "Comprehensive Farm Operations & Tunnel Farming",
      subtitle: "Main Agricultural Hub",
      locationName: "Hill Top Qutab Bandi Village, Hazro, 43440, Pakistan",
      description: "Our primary hub at Hill Top Qutab Bandi Village, Hazro integrates a wide spectrum of agricultural and animal husbandry operations. We specialize in advanced farming practices, including modern Tunnel Farming to yield off-season crops seamlessly, alongside full-scale livestock and plantation management.",
      highlights: [ "Cattle Farming Operations", "Goat Farming & Breeding", "Poultry Farming Systems", "Forestry & Plantation Management",],
      // 3 to 4 specific relevant images for this sector
      images: [
        "/cattlefarming.jpg",
        "/goat farming.jpg",
        "/poultryfarming.jpg",
        "/forestryimage.jpg"
      ],
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2!2d72.6344506!3d33.9310482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df01aa983d4159%3A0x7dcd0df8367e5ee8!2sAmir%20farms!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
    },
    {
      id: "forestry-nursery",
      title: "Forestry & Nursery Farming",
      subtitle: "Amir Farm Nursery Attock Khurd",
      locationName: "Amir Farm Nursery, Attock Khurd, Pakistan",
      description: "Dedicated to comprehensive plant propagation and commercial nursery management at Attock Khurd. We produce top-grade fruit saplings, ornamental greenery, and forest plants using advanced greenhouse infrastructure.",
      highlights: ["Advanced Greenhouse Propagation", "Modern Tunnel Farming (Off-Season Production)", "Fruit Plant Nurseries", "Forestry & Seedling Management", "Commercial Horticulture"],
      // 3 to 4 specific relevant images for this sector
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80"
      ],
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.753389824634!2d72.2758816!3d33.8969185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df21fc8a2f19ef%3A0xeb14d3879ea84e8d!2sAmir%20farm%20nersury%20attock%20khurd!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
    },
    {
      id: "livestock-dairy",
      title: "Livestock, Fish Farming & Peanuts Cultivation",
      subtitle: "Amir Farms Khunda Attock",
      locationName: "Khunda, Pakistan (Coordinates: 33.5364° N, 72.3413° E)",
      description: "Our Khunda facility is a diverse agricultural and livestock hub specializing in intensive cattle farming, commercial fish farming operations, and expansive peanuts cultivation, managed with modern practices.",
      highlights: ["Cattle Farming Operations", "Commercial Fish Farming", "Peanuts Cultivation & Harvesting", "Herd Health & Biosecurity"],
      
      images: [
        "/cattlefarming.jpg",
        "/fishfarming.jpg",
        "/peanuts.jpg",
        "/security.jpg"
      ],
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d72.3372744!3d33.5385573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzEn12IiTiA3MsKwMjAnMjguNiJF!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 selection:bg-[#c1603f]/20 selection:text-[#0f2340]">
      
      {/* ✨ HERO SECTION */}
      <section className="relative pt-40 pb-28 px-6 sm:px-14 lg:px-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15, 35, 64, 0.94) 0%, rgba(26, 53, 87, 0.90) 100%), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80")' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c1603f]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-2 rounded-full border border-white/20 bg-white/15 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: TERRACOTTA }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
              Operational Sectors
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight mb-6 text-white tracking-tight">
            Our Farms & Locations
          </h1>

          <p className="max-w-2xl mx-auto text-slate-200 text-sm sm:text-base font-light leading-relaxed mb-10">
            Discover our state-of-the-art agricultural hubs, modern dairy units, and specialized nurseries established across Hazro, Attock Khurd, and Khunda.
          </p>

          {/* Quick Jump Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sectorsList.map((sector) => (
              <a
                key={sector.id}
                href={`#${sector.id}`}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white text-white hover:text-[#0f2340] border border-white/25 transition-all duration-300 shadow-sm backdrop-blur-sm"
              >
                {sector.subtitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 SECTORS CONTENT CONTAINER */}
      <div className="py-20 px-6 sm:px-14 lg:px-20 max-w-[1400px] mx-auto space-y-24">
        {sectorsList.map((sector) => {
          return (
            <div 
              key={sector.id} 
              id={sector.id}
              className="scroll-mt-32 bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 w-full h-1.5 z-10" 
                style={{ background: `linear-gradient(to right, ${NAVY_DEEP}, ${TERRACOTTA})` }}
              />

              <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                    <span className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm" style={{ backgroundColor: TERRACOTTA }}>
                      {sector.subtitle}
                    </span>
                    <span className="text-xs font-medium text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-md border border-slate-200">
                      📍 {sector.locationName}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-5 tracking-tight leading-snug" style={{ color: NAVY_DEEP }}>
                    {sector.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-4xl">
                    {sector.description}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Key Operations & Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sector.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-2xs">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                          <span className="text-xs font-semibold text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 🖼️ Sector Specific Image Gallery Grid (3 to 4 Images) */}
                  <div className="mb-10">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Facility Gallery & Highlights</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {sector.images.map((imgUrl, imgIdx) => (
                        <div key={imgIdx} className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[180px] sm:h-[200px] group/img">
                          <img 
                            src={imgUrl} 
                            alt={`${sector.title} gallery ${imgIdx + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2340]/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 🗺️ Specific Sector Location & Map Section */}
                  <div className="pt-8 border-t border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TERRACOTTA }}>
                          Location Map View
                        </span>
                        <h4 className="font-serif text-xl font-normal" style={{ color: NAVY_DEEP }}>
                          {sector.subtitle} Map & Direction
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Find exact routing and coordinates for {sector.locationName}. Click or explore directly via the embedded map.
                        </p>
                      </div>
                      <div className="lg:col-span-7 h-[450px] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                        <iframe 
                          src={sector.mapEmbedSrc} 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={false} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title={sector.locationName}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:scale-105" 
                    style={{ backgroundColor: NAVY_DEEP }}
                  >
                    <span>Book a Visit / Inquire</span>
                    <span className="text-base text-[#c1603f]">→</span>
                  </Link>
                  <span className="text-xs text-slate-400 italic">Open for guided professional tours</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🏢 DIRECT OFFICE & LOCATION SECTION */}
      <section className="py-24 px-6 sm:px-14 lg:px-20 bg-gradient-to-r from-[#0f2340] to-[#1a3557] text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#c1603f]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-[1000px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                Head Office Location
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal mb-5">
              Visit Our Main Office
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our management team directly at our Burhan Office or schedule a guided visit to our operational sites.
            </p>
          </div>

          {/* Direct Office Card & Map Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 text-slate-900 shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Office Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm mb-4" style={{ backgroundColor: TERRACOTTA }}>
                   Burhan Head Office
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-4" style={{ color: NAVY_DEEP }}>
                  Amir Farms Burhan Office
                </h3>

                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Our main office serves as the central coordination hub for all agricultural, livestock, and nursery operations. Drop by for consultations, business inquiries, or tour bookings.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    <span className="text-lg">📍</span>
                    <span> Address: Amir Farms Near Burhan Police Station Dhok Mooliyan, Burhan, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    <span className="text-lg">🕒</span>
                    <span>Working Hours: Monday – Friday (11:00 AM – 10:00 PM)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/maps/place/Amir+Farms+Burhan+Office/@33.8195015,72.6100958,17z/data=!4m15!1m8!3m7!1s0x38df0500360b6dcb:0xd06a2218dc855d19!2sAmir+Farms+Burhan+Office!8m2!3d33.8199348!4d72.6101087!10e5!16s%2Fg%2F11ylpfgds1!3m5!1s0x38df0500360b6dcb:0xd06a2218dc855d19!8m2!3d33.8199348!4d72.6101087!16s%2Fg%2F11ylpfgds1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl font-semibold text-white text-xs uppercase tracking-wider text-center transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: TERRACOTTA }}
                >
                  Open in Google Maps
                </a>
                <Link 
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-center border-2 border-slate-300 hover:border-[#0f2340] transition-all duration-300"
                  style={{ color: NAVY_DEEP }}
                >
                  Contact Management
                </Link>
              </div>
            </div>

            {/* Direct Map Embed */}
            <div className="lg:col-span-7 h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d72.6100958!3d33.8195015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df0500360b6dcb%3A0xd06a2218dc855d19!2sAmir%20Farms%20Burhan%20Office!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Amir Farms Burhan Office"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}