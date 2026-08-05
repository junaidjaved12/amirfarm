"use client";

import { motion } from "framer-motion";

const NAVY_DEEP = "#0f2340";
const NAVY = "#17325a";
const TERRACOTTA = "#c1603f";
const TERRACOTTA_LIGHT = "#e08a68";
const IVORY = "#f6f2e9";

const values = [
  {
    number: "01",
    title: "Pure & Chemical-Free",
    desc: "We strictly avoid artificial growth hormones and synthetic chemicals in all our farming divisions.",
  },
  {
    number: "02",
    title: "Sustainable Methods",
    desc: "Advanced crop rotation and precision water management to preserve soil fertility for generations.",
  },
  {
    number: "03",
    title: "Direct From Source",
    desc: "Bridging the gap between our pastures and your table with absolute transparency and freshness.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CoreValues() {
  return (
    <section 
      className="relative w-full px-6 py-24 sm:px-14 sm:py-32 lg:px-20 text-white overflow-hidden bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')`,
        backgroundColor: NAVY_DEEP 
      }}
    >
      
      {/* Dark Navy Gradient Overlay for perfect text readability and depth */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(15, 35, 64, 0.56) 0%, rgba(23, 50, 90, 0.45) 10%, rgba(15, 35, 64, 0.976) 100%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Header content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10" style={{ backgroundColor: TERRACOTTA }} />
              <span className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: TERRACOTTA_LIGHT }}>
                Our Philosophy & Standards
              </span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl text-[#f6f2e9]">
              Built on Trust, <span className="italic" style={{ color: TERRACOTTA_LIGHT }}>Nurtured</span> by Nature
            </h2>
          </div>
          {/* <p className="mt-4 lg:mt-0 max-w-md text-sm font-light leading-relaxed" style={{ color: `${IVORY}b3` }}>
            Every process at Amir Farms adheres to uncompromising quality standards, ensuring complete nutritional value and sustainable growth.
          </p> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-md"
              style={{
                borderColor: `${IVORY}26`,
                backgroundColor: `${NAVY_DEEP}b3`,
              }}
            >
              {/* Subtle top accent line on hover */}
              <div 
                className="absolute top-0 left-8 right-8 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: TERRACOTTA }}
              />

              <div className="font-serif text-4xl font-medium mb-6" style={{ color: TERRACOTTA_LIGHT }}>
                {v.number}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4 text-[#f6f2e9]">{v.title}</h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: `${IVORY}b3` }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}