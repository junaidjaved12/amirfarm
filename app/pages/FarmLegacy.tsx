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

export default function FarmLegacy() {
  return (
    <div>
    <section className="relative w-full px-6 py-24 sm:px-14 sm:py-28 lg:px-20" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left image container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative h-[24rem] sm:h-[32rem] w-full overflow-hidden rounded-2xl shadow-xl bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop"
                alt="Amir Farms Legacy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 sm:bottom-8 sm:-right-8 p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xs border backdrop-blur-md hidden sm:block"
              style={{ backgroundColor: NAVY_DEEP, borderColor: `${IVORY}26` }}
            >
              <div className="font-serif text-3xl font-medium mb-1" style={{ color: TERRACOTTA_LIGHT }}>
                100%
              </div>
              <p className="text-xs uppercase tracking-widest" style={{ color: `${IVORY}cc` }}>
                Commitment to Quality & Sustainable Farming
              </p>
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: TERRACOTTA }} />
              <span className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: TERRACOTTA }}>
                The Amir Farms Legacy
              </span>
            </div>

            <h2
              className="font-serif text-3xl font-medium leading-[1.1] sm:text-4xl lg:text-5xl mb-6"
              style={{ color: NAVY_DEEP }}
            >
              Cultivating Tradition, <br />
              <span className="italic" style={{ color: TERRACOTTA }}>Harvesting Trust_</span>
            </h2>

            <p className="text-base font-light leading-relaxed mb-6" style={{ color: `${NAVY}b3` }}>
              For over two decades, Amir Farms has stood as a beacon of dedication in modern agriculture and livestock management. What started as a modest vision has grown into a comprehensive ecosystem of sustainable farming.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition rounded-lg"
                style={{ backgroundColor: TERRACOTTA, color: NAVY_DEEP }}
              >
                Discover Our Story &rarr;
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
    
        <section className="py-24 px-6 sm:px-14 lg:px-20 text-center">
          <div className="max-w-5xl mx-auto p-12 sm:p-20 rounded-3xl relative overflow-hidden text-white shadow-2xl" style={{ backgroundColor: NAVY_DEEP }}>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f6f2e9_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">Plan Your Visit to Amir Farms</h2>
              <p className="mt-4 text-sm sm:text-base font-light" style={{ color: `${IVORY}99` }}>
                Come experience our peaceful Dera, scenic fish ponds, and lush green fields in person. Get in touch with us today!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-wider transition rounded-full shadow-lg hover:scale-105"
                  style={{ backgroundColor: TERRACOTTA, color: NAVY_DEEP }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
  );
}