"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Prevent body scroll when side drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Sectors", path: "/sectors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-[#17325a]/10 shadow-sm"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-14 lg:px-20 h-20 flex items-center justify-between">
          
          {/* 🔥 LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"   
              alt="Amir Farms"
              width={140}
              height={80}
              className="object-contain h-10 w-auto"
            />
          </Link>

          {/* 🔥 DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="relative px-4 py-2 font-medium group overflow-hidden text-sm uppercase tracking-wider"
                >
                  {/* 🔵 CIRCLE BACKGROUND (Active or Hover) */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span 
                      className={`rounded-full bg-[#c1603f]/10 transition-all duration-300 ease-out ${
                        isActive ? "w-28 h-28" : "w-0 h-0 group-hover:w-28 group-hover:h-28"
                      }`}
                    />
                  </span>

                  {/* TEXT */}
                  <span 
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-[#c1603f] font-semibold" : "text-[#17325a] group-hover:text-[#c1603f]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* 🔥 DESKTOP BUTTON & MOBILE HAMBURGER */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-gradient-to-r from-[#17325a] to-[#c1603f] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-[#17325a] focus:outline-none"
              aria-label="Open Menu"
            >
              <span className="block w-6 h-0.5 bg-[#17325a] mb-1.5" />
              <span className="block w-6 h-0.5 bg-[#17325a] mb-1.5" />
              <span className="block w-6 h-0.5 bg-[#17325a]" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* 🔥 MOBILE SIDE DRAWER & BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Sliding Drawer from Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col p-6 z-10"
            >
              {/* Drawer Header / Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <span className="font-serif text-lg font-medium text-[#17325a]">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-[#17325a] hover:bg-[#c1603f] hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  &times;
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col space-y-6 pt-8">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={index}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold transition-colors uppercase tracking-wider ${
                        isActive ? "text-[#c1603f] pl-2 border-l-4 border-[#c1603f]" : "text-[#17325a] hover:text-[#c1603f]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer Footer Button */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-gradient-to-r from-[#17325a] to-[#c1603f] text-white px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}