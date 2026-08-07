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
  const [openSubmenu, setOpenSubmenu] = useState(null);
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
    { 
      name: "Our Sectors", 
      path: "/sectors",
      submenu: [
        { name: "Qutab Bandi", path: "/sectors/qutab-bandi" },
        { name: "Attock Khurd", path: "/sectors/attock-khurd" },
        { name: "Khunda", path: "/sectors/khunda" }
      ]
    },
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
          
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"   
              alt="Amir Farms"
              width={140}
              height={80}
              className="object-contain h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              
              return (
                <div key={index} className="relative group">
                  <Link
                    href={link.path}
                    className="relative px-4 py-2 font-medium group/link overflow-hidden text-sm uppercase tracking-wider flex items-center gap-2"
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span 
                        className={`rounded-full bg-[#c1603f]/10 transition-all duration-300 ease-out ${
                          isActive ? "w-38 h-38" : "w-0 h-0 group-hover/link:w-38 group-hover/link:h-38"
                        }`}
                      />
                    </span>

                    <span 
                      className={`relative z-10 transition-colors ${
                        isActive ? "text-[#c1603f] font-semibold" : "text-[#17325a] group-hover/link:text-[#c1603f]"
                      }`}
                    >
                      {link.name}
                    </span>

                    {hasSubmenu && (
                      <svg
                        className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                          isActive ? "text-[#c1603f]" : "text-[#17325a] group-hover/link:text-[#c1603f]"
                        } group-hover:rotate-180`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#c1603f] rounded-full"
                    />
                  )}

                  {hasSubmenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-[#17325a]/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2 pb-2 z-50"
                    >
                      {link.submenu.map((sublink, subindex) => {
                        const isSubActive = pathname === sublink.path;
                        return (
                          <Link
                            key={subindex}
                            href={sublink.path}
                            className={`block px-6 py-3 text-sm font-medium uppercase tracking-wide transition-all duration-200 relative group/submenu ${
                              isSubActive
                                ? "text-[#c1603f] bg-[#c1603f]/5"
                                : "text-[#17325a] hover:text-[#c1603f] hover:bg-[#c1603f]/5"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isSubActive ? "bg-[#c1603f]" : "bg-[#17325a] group-hover/submenu:bg-[#c1603f]"
                              }`} />
                              {sublink.name}
                            </span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-block bg-gradient-to-r from-[#17325a] to-[#c1603f] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>

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

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col p-6 z-10"
            >
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

              <nav className="flex flex-col space-y-6 pt-8 overflow-y-auto">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  const hasSubmenu = link.submenu && link.submenu.length > 0;
                  
                  return (
                    <div key={index}>
                      <button
                        onClick={() => {
                          if (hasSubmenu) {
                            // setOpenSubmenu(openSubmenu === link.name ? null : link.name);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className={`text-lg font-semibold transition-colors uppercase tracking-wider w-full text-left flex items-center justify-between ${
                          isActive ? "text-[#c1603f] pl-2 border-l-4 border-[#c1603f]" : "text-[#17325a] hover:text-[#c1603f]"
                        }`}
                      >
                        <Link href={link.path} onClick={() => setIsOpen(false)} className="flex-1">
                          {link.name}
                        </Link>
                        {hasSubmenu && (
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openSubmenu === link.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </button>

                      {hasSubmenu && (
                        <AnimatePresence>
                          {openSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3 space-y-3 pl-4"
                            >
                              {link.submenu.map((sublink, subindex) => {
                                const isSubActive = pathname === sublink.path;
                                return (
                                  <Link
                                    key={subindex}
                                    href={sublink.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium uppercase tracking-wider transition-colors flex items-center gap-2 ${
                                      isSubActive 
                                        ? "text-[#c1603f] pl-2 border-l-4 border-[#c1603f]" 
                                        : "text-[#17325a] hover:text-[#c1603f]"
                                    }`}
                                  >
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                      isSubActive ? "bg-[#c1603f]" : "bg-[#17325a]"
                                    }`} />
                                    {sublink.name}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </nav>

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