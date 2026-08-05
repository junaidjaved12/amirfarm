"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const AUTOPLAY_DELAY = 6500;

const NAVY_DEEP = "#0f2340";
const TERRACOTTA = "#c1603f";
const TERRACOTTA_LIGHT = "#e08a68";
const IVORY = "#f6f2e9";

const slides = [
   {
    tag: "Poultry Farming",
    title: "Raised",
    accent: "Naturally",
    desc: "Healthy hens raised on natural feed, with hands-on care every day.",
    img: "https://images.unsplash.com/photo-1683963373775-f186ccf2eeb0?q=80&w=1920&auto=format&fit=crop",
  },
  {
    tag: "Modern Agriculture",
    title: "Grow the",
    accent: "Future",
    desc: "Sustainable, high-yield farming solutions built for tomorrow's fields.",
    img: "https://images.unsplash.com/photo-1714588862918-1490f23f3e56?q=80&w=1920&auto=format&fit=crop",
  },
 
  {
    tag: "Dairy Farming",
    title: "Fresh From",
    accent: "the Source",
    desc: "Premium cattle producing fresh, organic milk on open pasture.",
    img: "https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?q=80&w=1920&auto=format&fit=crop",
  },
  {
    tag: "Goat & Sheep Farming",
    title: "Quality",
    accent: "Livestock",
    desc: "Livestock raised naturally for consistent, quality production.",
    img: "https://images.unsplash.com/photo-1622837699015-9a4cb8b7a94b?q=80&w=1920&auto=format&fit=crop",
  },
  {
    tag: "Crop Harvest",
    title: "Organic",
    accent: "Harvest",
    desc: "Field crops grown and harvested for rich taste and real nutrition.",
    img: "https://images.unsplash.com/photo-1564584812691-eab58e10a7f0?q=80&w=1920&auto=format&fit=crop",
  },
  {
    tag: "Fish Farming",
    title: "Peaceful",
    accent: "Waters",
    desc: "Explore our serene fish ponds, featuring beautiful aquatic setups and natural surroundings.",
    img: "./fishfarming.jpg",
  },
  {
    tag: "Farm House & Stay",
    title: "Relax &",
    accent: "Unwind",
    desc: "Beautiful visiting and rest areas equipped with comfortable spaces to stay and enjoy nature.",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format&fit=crop",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goTo = (i: number) => swiperRef.current?.slideToLoop(i);

  return (
    <section
      className="relative h-[85vh] md:h-screen w-full overflow-hidden font-[Inter,ui-sans-serif,system-ui]"
      style={{ backgroundColor: NAVY_DEEP }}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        speed={1100}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[85vh] md:h-screen w-full">
              <img
                src={slide.img}
                className="absolute inset-0 h-full w-full object-cover"
                alt={slide.tag}
              />

              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${NAVY_DEEP}f2 0%, ${NAVY_DEEP}73 55%, ${NAVY_DEEP}1a 100%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, ${NAVY_DEEP}bf 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex h-full w-full items-end">
                <div className="w-full px-6 pb-20 sm:px-14 sm:pb-32 lg:px-20 lg:pb-36">
                  <div key={active === index ? `active-${index}` : index} className="max-w-2xl animate-hero-in">
                    <div className="mb-4 sm:mb-6 flex items-center gap-3">
                      <span className="h-px w-10" style={{ backgroundColor: TERRACOTTA }} />
                      <span
                        className="text-xs font-medium uppercase tracking-[0.32em]"
                        style={{ color: TERRACOTTA_LIGHT }}
                      >
                        {slide.tag}
                      </span>
                    </div>

                    <h1
                      className="font-serif text-[2.5rem] font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
                      style={{ color: IVORY }}
                    >
                      {slide.title}
                      <br />
                      <span className="italic" style={{ color: TERRACOTTA_LIGHT }}>
                        {slide.accent}
                      </span>
                    </h1>

                    <p
                      className="mt-4 sm:mt-6 max-w-md text-sm font-light leading-relaxed sm:text-lg"
                      style={{ color: `${IVORY}99` }}
                    >
                      {slide.desc}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                      <Link
                        href="/services"
                        className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition"
                        style={{ backgroundColor: TERRACOTTA, color: NAVY_DEEP }}
                      >
                        Know More
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center border px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider transition"
                        style={{ borderColor: `${IVORY}40`, color: `${IVORY}d9` }}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom bar */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 hidden border-t backdrop-blur-md md:block"
        style={{ borderColor: `${IVORY}1a`, backgroundColor: `${NAVY_DEEP}80` }}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-14 lg:px-20">
          <span className="text-[0.65rem] uppercase tracking-[0.32em]" style={{ color: `${IVORY}66` }}>
            Our Farms
          </span>

          <div className="flex items-center gap-8 lg:gap-10">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] transition"
                style={{ color: active === i ? IVORY : `${IVORY}66` }}
              >
                <span>{slide.tag}</span>
                <span className="absolute -bottom-px left-0 block h-px w-full" style={{ backgroundColor: `${IVORY}1a` }}>
                  {active === i && (
                    <span
                      key={`bar-${active}`}
                      className="block h-px"
                      style={{
                        backgroundColor: TERRACOTTA,
                        animation: `hero-progress ${AUTOPLAY_DELAY}ms linear forwards`,
                      }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-8 w-8 items-center justify-center transition"
              style={{ color: `${IVORY}80` }}
            >
              &larr;
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-8 w-8 items-center justify-center transition"
              style={{ color: `${IVORY}80` }}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}