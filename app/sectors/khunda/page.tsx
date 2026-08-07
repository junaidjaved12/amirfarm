"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function KhundaPage() {
  const sectorData = {
    title: "Livestock, Fish Farming & Peanuts Cultivation",
    subtitle: "Amir Farms Khunda Attock",
    locationName: "Khunda, Pakistan (Coordinates: 33.5364° N, 72.3413° E)",
    description: "Our Khunda facility is a diverse agricultural and livestock hub specializing in intensive cattle farming, commercial fish farming operations, and expansive peanuts cultivation, managed with modern practices.",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d72.3372744!3d33.5385573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMyJzEn12IiTiA3MsKwMjAnMjguNiJF!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk",
  };

  const khundaOperations = [
    { title: "Cattle Farming Operations", desc: "Intensive livestock management with premium herd health protocols.", img: "/cattlefarming.jpg" },
    { title: "Commercial Fish Farming", desc: "Sustainable aquatic farming with controlled environments for high yield.", img: "/fishfarming.jpg" },
    { title: "Peanuts Cultivation", desc: "Expansive cultivation and advanced harvesting techniques for quality produce.", img: "/peanuts.jpg" },
    { title: "Herd Health & Security", desc: "Rigorous biosecurity measures and 24/7 health monitoring for all livestock.", img: "/security.jpg" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest px-4 py-1.5 bg-[#c1603f]/10 text-[#c1603f] font-semibold rounded-full">{sectorData.subtitle}</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#17325a] font-serif">{sectorData.title}</h1>
          <p className="text-slate-600 mt-4 flex items-center justify-center gap-2 text-sm">📍 {sectorData.locationName}</p>
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
        <h2 className="text-3xl font-bold text-[#17325a] text-center mb-10">Khunda Agricultural Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {khundaOperations.map((op, index) => (
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
          <h3 className="text-xl font-bold text-[#17325a] mb-9">Location Map</h3>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src={sectorData.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Khunda Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}