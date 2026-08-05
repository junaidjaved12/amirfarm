"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NAVY_DEEP = "#0f2340";
const NAVY = "#17325a";
const TERRACOTTA = "#c1603f";
const TERRACOTTA_LIGHT = "#e08a68";
const IVORY = "#f6f2e9";
const CREAM = "#faf7f2";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutUs() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-14 sm:py-32 lg:px-20" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <div className="overflow-hidden rounded-2xl shadow-xl h-64 sm:h-80 bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Agriculture & Crops"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div 
                className="p-6 sm:p-8 rounded-2xl text-white shadow-xl flex flex-col justify-center"
                style={{ backgroundColor: NAVY_DEEP }}
              >
                <div className="font-serif text-3xl sm:text-4xl font-medium mb-1" style={{ color: TERRACOTTA_LIGHT }}>
                  20+
                </div>
                <p className="text-xs uppercase tracking-widest" style={{ color: `${IVORY}cc` }}>
                  Years of Agricultural Excellence
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <div 
                className="p-6 sm:p-8 rounded-2xl border shadow-sm"
                style={{ backgroundColor: 'white', borderColor: `${NAVY}1a` }}
              >
                <div className="font-serif text-2xl font-medium mb-2" style={{ color: NAVY_DEEP }}>
                  Our Mission
                </div>
                <p className="text-xs sm:text-sm font-light leading-relaxed" style={{ color: `${NAVY}99` }}>
                  To pioneer sustainable farming practices that honor nature while delivering unmatched quality across every division.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl h-64 sm:h-80 bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop"
                  alt="Smart Farming Field"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
            className="lg:col-span-6 lg:pl-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: TERRACOTTA }} />
              <span className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: TERRACOTTA }}>
                About Amir Farms
              </span>
            </div>

            <h2
              className="font-serif text-3xl font-medium leading-[1.1] sm:text-4xl lg:text-5xl mb-6"
              style={{ color: NAVY_DEEP }}
            >
              Rooted in Heritage, <br />
              <span className="italic" style={{ color: TERRACOTTA }}>Driven by Innovation_</span>
            </h2>

            <p className="text-base font-light leading-relaxed mb-6" style={{ color: `${NAVY}b3` }}>
              Founded with a deep-seated passion for responsible agriculture, Amir Farms has grown into a comprehensive ecosystem encompassing modern crop cultivation, livestock management, and specialized farming divisions.
            </p>

            <p className="text-base font-light leading-relaxed mb-8" style={{ color: `${NAVY}b3` }}>
              We believe that true agricultural success relies on a harmonious balance between traditional stewardship and modern scientific methods. Every acre we manage and every practice we implement reflects our uncompromising dedication to environmental sustainability and long-term quality.
            </p>

            {/* Bullet points / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                <span className="text-sm font-medium" style={{ color: NAVY_DEEP }}>Sustainable Land Management</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                <span className="text-sm font-medium" style={{ color: NAVY_DEEP }}>Ethical Livestock Care</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                <span className="text-sm font-medium" style={{ color: NAVY_DEEP }}>Advanced Farming Technology</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                <span className="text-sm font-medium" style={{ color: NAVY_DEEP }}>Generational Expertise</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition rounded-lg shadow-sm hover:opacity-95"
                style={{ backgroundColor: TERRACOTTA, color: IVORY }}
              >
                More About Us &rarr;
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}