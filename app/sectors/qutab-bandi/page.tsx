"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QutabBandiPage() {
  const sectorData = {
    title: "Comprehensive Farm Operations & Tunnel Farming",
    subtitle: "Main Agricultural Hub",
    locationName: "Hill Top Qutab Bandi Village, Hazro, 43440, Pakistan",
    description:
      "Our primary hub at Hill Top Qutab Bandi Village, Hazro integrates a wide spectrum of agricultural and animal husbandry operations. We specialize in advanced farming practices, including modern Tunnel Farming to yield off-season crops seamlessly, alongside full-scale livestock and plantation management.",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2!2d72.6344506!3d33.9310482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df01aa983d4159%3A0x7dcd0df8367e5ee8!2sAmir%20farms!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk",
  };

  // Ye rahe aapke 4 specialized cards
  const operations = [
    { title: "Cattle Farming Operations", desc: "Advanced dairy and beef cattle management with modern nutrition plans.", img: "/cattlefarming.jpg" },
    { title: "Goat Farming & Breeding", desc: "Specialized breeding programs focusing on elite bloodlines and growth.", img: "/goat farming.jpg" },
    { title: "Poultry Farming Systems", desc: "Climate-controlled housing with automated feeding and high bio-security.", img: "/poultryfarming.jpg" },
    { title: "Forestry & Plantation", desc: "Green belt development and commercial forestry for ecological balance.", img: "/forestryimage.jpg" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 py-12 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#17325a] font-serif">{sectorData.title}</h1>
        <p className="text-slate-600 mt-4">{sectorData.locationName}</p>
      </section>

      {/* Overview Section */}
      <section className="max-w-[1000px] mx-auto px-6 mb-16">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#17325a]/5 text-center">
          <p className="text-slate-600 leading-relaxed">{sectorData.description}</p>
        </div>
      </section>

      {/* OPERATIONS CARDS (2x2 Grid) */}
      <section className="max-w-[1200px] mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-[#17325a] text-center mb-10">Our  Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((op, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row items-center p-6 gap-6"
            >
              <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <Image src={op.img} alt={op.title} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#17325a] mb-2">{op.title}</h3>
                <p className="text-slate-600 text-sm">{op.desc}</p>
                <Link href="/contact" className="text-[#c1603f] font-semibold text-sm mt-4 inline-block hover:underline">Learn More →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20">
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src={sectorData.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location"
          />
        </div>
      </section>
    </div>
  );
}