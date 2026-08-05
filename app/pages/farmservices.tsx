"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NAVY_DEEP = "#0f2340";
const NAVY = "#17325a";
const TERRACOTTA = "#c1603f";
const TERRACOTTA_LIGHT = "#e08a68";
const CREAM = "#faf7f2";

const stats = [
  { value: "20+", label: "Years Farming" },
  { value: "500+", label: "Acres Managed" },
  { value: "5", label: "Farm Divisions" },
  { value: "100%", label: "Organic Practices" },
];

const services = [
  {
    tag: "Poultry Farming",
    title: "Healthy Hens, Naturally Raised",
    desc: "Free-range flocks raised on natural feed, with daily hands-on care and no shortcuts.",
    img: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop",
    // href: "/services/poultry",
  },
  {
    tag: "Dairy Farming",
    title: "Fresh Milk, Open Pasture",
    desc: "Premium cattle grazing freely, producing fresh organic milk delivered close to source.",
    img: "/cattlefarming.jpg",
    // href: "/services/dairy",
  },
  {
    tag: "Goat & Sheep Farming",
    title: "Quality Livestock, Raised Right",
    desc: "Livestock raised naturally for consistent, quality production across every season.",
    img: "goat farming.jpg",
    // href: "/services/livestock",
  },
  {
    tag: "Crop Harvest",
    title: "Organic Fields, Real Nutrition",
    desc: "Field crops grown and harvested with sustainable methods for genuine flavor.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    // href: "/services/crops",
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

export default function FarmServices() {
  return (
    <section className="relative w-full px-6 py-24 sm:px-14 sm:py-28 lg:px-20" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          // variants={fadeUp}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: TERRACOTTA }} />
            <span className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: TERRACOTTA }}>
              What We Do
            </span>
          </div>
          <h2
            className="font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
            style={{ color: NAVY_DEEP }}
          >
            Rooted in Every
            <br />
            Kind of <span className="italic" style={{ color: TERRACOTTA }}>Farming_</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          // variants={fadeUp}
          custom={1}
          className="max-w-md"
        >
          <p className="text-base font-light leading-relaxed" style={{ color: `${NAVY}b3` }}>
            From open pasture to open field, Amir Farms brings the same discipline and care to every division.
          </p>
          <Link
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition"
            style={{ color: NAVY_DEEP }}
          >
            View All Services <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </div>

      {/* Featured banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        // variants={fadeUp}
        custom={1}
        className="relative mx-auto mt-14 max-w-[1600px] overflow-hidden rounded-xl shadow-lg"
      >
        <div className="relative h-[26rem] w-full sm:h-[22rem]">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
            alt="Modern Agriculture"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(110deg, ${NAVY_DEEP}e6 0%, ${NAVY_DEEP}99 45%, ${NAVY_DEEP}33 100%)`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: TERRACOTTA_LIGHT }}>
                Modern Agriculture
              </span>
              <h3 className="mt-4 max-w-lg font-serif text-3xl font-medium leading-tight sm:text-4xl text-[#f6f2e9]">
                Technology-backed farming, without losing tradition
              </h3>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-2xl font-medium sm:text-3xl" style={{ color: TERRACOTTA_LIGHT }}>
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#f6f2e980]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto mt-8 grid max-w-[1600px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.tag}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            // variants={fadeUp}
            custom={i}
          >
           
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.tag}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="border border-t-0 p-6" style={{ borderColor: `${NAVY}1a` }}>
                <span className="text-[0.7rem] font-medium uppercase tracking-[0.22em]" style={{ color: TERRACOTTA }}>
                  {service.tag}
                </span>
                <h3 className="mt-3 font-serif text-xl font-medium leading-snug" style={{ color: NAVY_DEEP }}>
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: `${NAVY}99` }}>
                  {service.desc}
                </p>
              </div>
           
          </motion.div>
        ))}
      </div>
    </section>
  );
}