"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AttockKhurdPage() {
  const sectorData = {
    title: "Forestry & Nursery Farming",
    subtitle: "Amir Farm Nursery Attock Khurd",
    locationName: "Amir Farm Nursery, Attock Khurd, Pakistan",
    description: "Dedicated to comprehensive plant propagation and commercial nursery management at Attock Khurd. We produce top-grade fruit saplings, ornamental greenery, and forest plants using advanced greenhouse infrastructure.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.753389824634!2d72.2758816!3d33.8969185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df21fc8a2f19ef%3A0xeb14d3879ea84e8d!2sAmir%20farm%20nersury%20attock%20khurd!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk",
  };

  const nurseryOperations = [
    { title: "Greenhouse Propagation", desc: "Advanced climate-controlled environment for sensitive plant breeding.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80" },
    { title: "Tunnel Farming", desc: "Off-season production technology to ensure consistent supply year-round.", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80" },
    { title: "Fruit Plant Nurseries", desc: "Top-grade fruit saplings cultivation for commercial and domestic orchards.", img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { title: "Forestry & Horticulture", desc: "Large-scale forest plant production and commercial landscape development.", img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 bg-[#c1603f]/10 text-[#c1603f] font-semibold rounded-full">{sectorData.subtitle}</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#17325a] font-serif">{sectorData.title}</h1>
          <p className="text-slate-600 mt-4 flex items-center justify-center gap-2">📍 {sectorData.locationName}</p>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="max-w-[1000px] mx-auto px-6 mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#17325a]/5 text-center">
          <p className="text-slate-600 leading-relaxed">{sectorData.description}</p>
        </div>
      </section>

      {/* 2x2 Operations Grid */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-[#17325a] text-center mb-10">Our Nursery Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nurseryOperations.map((op, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center p-6 gap-6"
            >
              <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <Image src={op.img} alt={op.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17325a] mb-2">{op.title}</h3>
                <p className="text-slate-600 text-sm">{op.desc}</p>
                <Link href="/contact" className="text-[#c1603f] font-semibold text-sm mt-4 inline-block hover:underline">
                  Inquire Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20">
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#17325a]/5">
          <h3 className="text-xl font-bold text-[#17325a] mb-4">Location Map</h3>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src={sectorData.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Attock Khurd Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}