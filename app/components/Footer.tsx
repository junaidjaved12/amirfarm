"use client";

import Link from "next/link";

const NAVY = "#17325a";
const TERRACOTTA = "#c1603f";
const TEXT_DARK = "#0f2340";
const TEXT_MUTED = "#55657e";

export default function Footer() {
  return (
    
    <footer className="relative bg-white pt-24 pb-12 border-t-[3px]" style={{ borderColor: NAVY }}>
      <div className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        
        {/* Brand & Logo Section (Span 4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="Amir Farms Logo" className="h-11 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: TEXT_MUTED }}>
            Rooted in heritage and driven by sustainable agricultural excellence, bringing you advanced farming solutions and natural purity.
          </p>
          
          {/* Facebook Social Link */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://www.facebook.com/amirmughalfarms"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-[#c1603f] flex items-center justify-center text-[#17325a] hover:text-white transition-all duration-300 shadow-xs"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
              <span className="text-xs uppercase tracking-widest font-medium text-slate-500">
                Sustainable & Organic Operations
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links (Span 2 cols) */}
        <div className="lg:col-span-2 lg:pl-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: TEXT_DARK }}>
            Quick Links
          </h4>
          <ul className="space-y-3.5 text-sm" style={{ color: TEXT_MUTED }}>
            <li>
              <Link href="/" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/sectors" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Our Sectors
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Sectors Links (Span 3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: TEXT_DARK }}>
            Our Sectors
          </h4>
          <ul className="space-y-3.5 text-sm" style={{ color: TEXT_MUTED }}>
            <li>
              <Link href="/sectors#agricultural-farming" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Agricultural & Tunnel Farming
              </Link>
            </li>
            <li>
              <Link href="/sectors#forestry-nursery" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Forestry & Nursery Farming
              </Link>
            </li>
            <li>
              <Link href="/sectors#livestock-dairy" className="transition hover:text-[#c1603f] inline-block hover:translate-x-1 duration-200">
                Livestock & Fish Farming
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Info (Span 3 cols) */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: TEXT_DARK }}>
            Get in Touch
          </h4>
          <ul className="space-y-4 text-sm" style={{ color: TEXT_MUTED }}>
            <li>
              <span className="block text-[0.655rem] uppercase tracking-widest font-semibold mb-0.5" style={{ color: NAVY }}>
                Address
              </span>
              Hill Top Qutab Bandi Village, Hazro, District ATTOCK, 43440, Pakistan
            </li>
            <li>
              <span className="block text-[0.65rem] uppercase tracking-widest font-semibold mb-0.5" style={{ color: NAVY }}>
                Email Us
              </span>
              <a href="mailto:info@amirfarms.com" className="transition hover:underline text-slate-800 font-normal">
                info@amirfarms.com
              </a>
            </li>
            <li>
              <span className="block text-[0.65rem] uppercase tracking-widest font-semibold mb-0.5" style={{ color: NAVY }}>
                WhatsApp / Phone
              </span>
              <a href="https://wa.me/923025674338" target="_blank" rel="noopener noreferrer" className="transition hover:underline text-slate-800 font-normal">
                +92 302 5674338
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} Amir Farms. All rights reserved.</p>
      </div>
    </footer>
  );
}