  "use client";

  import Link from "next/link";

  const NAVY_DEEP = "#0f2340";
  const TERRACOTTA = "#c1603f";
  const TERRACOTTA_LIGHT = "#e08a68";
  const IVORY = "#f6f2e9";

  export default function AboutUs() {
    return (
      <div className="min-h-screen font-[Inter,ui-sans-serif,system-ui] pt-20" style={{ backgroundColor: IVORY, color: NAVY_DEEP }}>
        
       {/* 🌟 HERO SECTION */}
      <section className="relative py-28 md:py-40 px-6 sm:px-14 lg:px-20 overflow-hidden">
        
        {/* Background Image with Blur & Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/wheatfarming.png"
            alt="Farm Background"
            className="w-full h-full object-cover filter blur-[2px] scale-105"
          />
          {/* Deep Navy Gradient Overlay for Readability */}
          <div className="absolute inset-0" style={{ backgroundColor: NAVY_DEEP, opacity: 0.58 }} />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT SIDE: Text Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
                <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: TERRACOTTA_LIGHT }}>
                  Amir Farms of Agriculture
                </span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1]" style={{ color: IVORY }}>
                Amir Farms of Agriculture <br />
                <span className="italic font-light text-3xl sm:text-4xl" style={{ color: TERRACOTTA_LIGHT }}>Advanced & Sustainable Agriculture_</span>
              </h1>
              
              <p className="mt-6 max-w-xl text-sm sm:text-lg font-light leading-relaxed" style={{ color: `${IVORY}99` }}>
                Established: 2022. Experience the true essence of rural life combined with modern farming excellence. From lush green crops and organic dairy to serene spaces and our traditional Dera.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-wider transition rounded-full shadow-lg hover:scale-105"
                  style={{ backgroundColor: TERRACOTTA, color: NAVY_DEEP }}
                >
                  Plan a Visit
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-wider transition rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
                  style={{ color: IVORY }}
                >
                  Explore Sectors
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: Single Best Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/dairy-farming.jpg"
                  alt="Amir Farms Dera & Setup"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Inner Gradient Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2340]/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md shadow-2xl hidden sm:block">
                <p className="font-serif text-2xl font-normal" style={{ color: IVORY }}>2022</p>
                <p className="text-[0.65rem] uppercase tracking-widest mt-1 font-medium" style={{ color: TERRACOTTA_LIGHT }}>Established</p>
              </div>

            </div>

          </div>
        </div>
      </section>

       {/* 📊 STATS STRIP */}
<section className="border-b border-slate-200/80 bg-white shadow-sm relative z-20">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10">
    
    <div className="
      grid 
      grid-cols-2 
      sm:grid-cols-2 
      md:grid-cols-4 
      gap-6 sm:gap-8 
      text-center md:text-left
      divide-y md:divide-y-0 md:divide-x 
      divide-slate-100
    ">
      
      {/* Item 1 */}
      <div className="px-2 sm:px-4">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: NAVY_DEEP }}>
          2022
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
          Established
        </p>
      </div>

      {/* Item 2 */}
      <div className="px-2 sm:px-4 pt-4 md:pt-0">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: NAVY_DEEP }}>
          Advanced
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
          & Sustainable
        </p>
      </div>

      {/* Item 3 */}
      <div className="px-2 sm:px-4 pt-4 md:pt-0">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: NAVY_DEEP }}>
          Agriculture
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
          Core Domain
        </p>
      </div>

      {/* Item 4 */}
      <div className="px-2 sm:px-4 pt-4 md:pt-0">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold" style={{ color: NAVY_DEEP }}>
          Traditional
        </h3>
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">
          & Cultural Dera Vibe
        </p>
      </div>

    </div>
  </div>
</section>

  {/* 📖 STORY SECTION */}
<section className="py-28 px-6 sm:px-14 lg:px-20 max-w-[1600px] mx-auto">
  
  {/* TOP CENTER: About Us Header */}
  <div className="text-center max-w-2xl mx-auto mb-16">
    <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-[#c1603f]/20 bg-[#c1603f]/5 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
      <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: TERRACOTTA }}>
        About Us
      </span>
    </div>
    
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
    
    <div className="lg:col-span-6">
      
    <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight" style={{ color: NAVY_DEEP }}>
      Amir Farms of Agriculture
    </h2>
      <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
        Amir Farms of Agriculture has been working on advanced agriculture since 2022.
      </p>

      <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-light">
        We believe in modern agricultural solutions and sustainable farming systems.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition rounded-full shadow-md hover:scale-105"
          style={{ backgroundColor: TERRACOTTA, color: NAVY_DEEP }}
        >
          Plan a Visit &rarr;
        </Link>
      </div>
    </div>

    <div className="lg:col-span-6 grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/sheepfarming.png"
            alt="Farm Landscape"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/goatfarming.png"
            alt="Fish Farming"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
      <div className="space-y-4 pt-10">
        <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/farmhouse.png"
            alt="Dairy Farming"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow-xl">
          <img
             src="/farmchairs.jpg"
              alt="Dera and Rest Area"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>

  </div>
</section>

{/* 🌾 OUR KEY SECTORS SECTION */}
<section className="py-28 px-6 sm:px-14 lg:px-20 border-t border-slate-200/60 bg-gradient-to-b from-white/80 via-[#f6f2e9]/40 to-white/80 relative overflow-hidden">
  
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c1603f]/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-[1600px] mx-auto relative z-10">
    
    <div className="text-center max-w-2xl mx-auto mb-20">
      <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-[#c1603f]/20 bg-[#c1603f]/5 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
        <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: TERRACOTTA }}>
          Our Key Sectors
        </span>
      </div>
      
      <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight" style={{ color: NAVY_DEEP }}>
        Our Core Departments & Sectors
      </h2>
      
      <p className="mt-4 text-slate-600 text-sm sm:text-base font-light leading-relaxed">
        Explore our primary operational domains, dedicated to sustainable growth, excellence, and modern agricultural practices.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Sector 1: Forestry & Shajarkari */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🌲
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Forestry & Shajarkari
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Dedicated tree plantation and forestry initiatives to foster an eco-friendly green environment and sustainable landscape.
          </p>
        </div>
      </div>

      {/* Sector 2: Cattle Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🐄
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Cattle Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Expertly managed cattle breeding and dairy production facilities ensuring top-grade organic nutrition and care.
          </p>
        </div>
      </div>

      {/* Sector 3: Poultry Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🐓
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Poultry Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Naturally raised poultry maintained in clean, healthy conditions with premium standards of feed and safety.
          </p>
        </div>
      </div>

      {/* Sector 4: Goat & Sheep Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🐐
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Goat & Sheep Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Robust and healthy livestock bred across sprawling pastures for high-quality production and consistent growth.
          </p>
        </div>
      </div>

      {/* Sector 5: Tunnel Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🏡
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Tunnel Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Modern off-season crop production using high-tech tunnel structures to maximize yield and protect against weather variations.
          </p>
        </div>
      </div>

      {/* Sector 6: Rabbit Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🐇
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Rabbit Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Specialized rabbit breeding operations managed under hygienic and carefully monitored environmental systems.
          </p>
        </div>
      </div>

      {/* Sector 7: Advanced Greenhouse Propagation */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🌿
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Greenhouse Propagation
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            State-of-the-art greenhouse infrastructure dedicated to premium plant propagation, sapling growth, and horticulture.
          </p>
        </div>
      </div>

      {/* Sector 8: Commercial Fish Farming */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🐟
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Commercial Fish Farming
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Controlled aquatic environments and ponds designed for high-quality commercial fish breeding and harvesting.
          </p>
        </div>
      </div>

      {/* Sector 9: Peanuts Cultivation */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🥜
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Peanuts Cultivation
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Expansive field cultivation focused on high-yield, premium-grade peanut crop production and harvesting.
          </p>
        </div>
      </div>

      {/* Sector 10: General Plantation (Span 2 cols on large screens) */}
      <div className="group relative bg-white p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(15,35,64,0.04)] border border-slate-100 hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden md:col-span-2 lg:col-span-3">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1603f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🌱
          </div>
          <h3 className="font-serif text-2xl font-normal mb-4 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
            Plantation & Horticulture
          </h3>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Comprehensive crop plantation and botanical expansion efforts ensuring rich soil fertility, abundance, and sustainable agricultural yields across all regional farms.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

       {/* 🎯 OUR MISSION SECTION */}
<section className="py-28 px-6 sm:px-14 lg:px-20 bg-[#0f2340] text-[#f6f2e9] relative overflow-hidden">
  
  {/* Background Glow Effect */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c1603f]/10 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-[1600px] mx-auto relative z-10">
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* LEFT SIDE: Heading & Intro */}
      <div className="lg:col-span-5">
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
          <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: TERRACOTTA_LIGHT }}>
            Our Mission
          </span>
        </div>
        
        <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-white">
          Driving Agriculture Forward
        </h2>
        
        <p className="mt-6 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          We are committed to transforming traditional farming into a powerhouse of modern productivity, ensuring sustainable growth and uncompromised quality.
        </p>
      </div>

      {/* RIGHT SIDE: Horizontal Timeline / Row Layout (Different from cards) */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Mission Item 1 */}
        <div className="flex items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#c1603f]/50 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-serif text-white shadow-inner" style={{ backgroundColor: TERRACOTTA }}>
            01
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">Increase Yield via Technology</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Enhancing agricultural production and efficiency through modern technology and advanced farming practices.
            </p>
          </div>
        </div>

        {/* Mission Item 2 */}
        <div className="flex items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#c1603f]/50 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-serif text-white shadow-inner" style={{ backgroundColor: TERRACOTTA }}>
            02
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">Farmer-Friendly & Profitable</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Promoting farmer-friendly environments and highly profitable, sustainable farming models for long-term success.
            </p>
          </div>
        </div>

        {/* Mission Item 3 */}
        <div className="flex items-start gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#c1603f]/50 transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl font-serif text-white shadow-inner" style={{ backgroundColor: TERRACOTTA }}>
            03
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-2">Top-Tier Quality Output</h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Delivering premium, high-standard agricultural produce and uncompromised organic harvest consistently.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* 🌟 OUR VISION SECTION */}
<section className="py-28 px-6 sm:px-14 lg:px-20 bg-gradient-to-b from-[#f6f2e9]/50 via-white to-[#f6f2e9]/50 relative overflow-hidden">
  
  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#0f2340]/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-[1600px] mx-auto relative z-10">
    
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-[#0f2340]/10 bg-[#0f2340]/5 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: NAVY_DEEP }} />
        <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: NAVY_DEEP }}>
          Our Vision
        </span>
      </div>
      
      <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight mb-6" style={{ color: NAVY_DEEP }}>
        Our Vision & Future Outlook
      </h2>
      
      <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
        Shaping a sustainable, eco-friendly, and self-reliant future for agriculture and food security.
      </p>
    </div>

    {/* Unique Asymmetric Layout (Split Column + Stacked Cards) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Left Big Highlight Box */}
      <div className="lg:col-span-5 relative bg-[#0f2340] text-white p-10 sm:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[420px]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c1603f]/20 rounded-full blur-2xl pointer-events-none" />
        
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] px-3.5 py-1.5 rounded-full bg-white/10 text-white inline-block mb-6">
            Core Vision
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-snug mb-4">
            Modern & Sustainable Agriculture
          </h3>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Promoting advanced techniques and sustainable agriculture practices across Pakistan to build a resilient farming ecosystem.
          </p>
        </div>

        <div className="pt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest" style={{ color: TERRACOTTA_LIGHT }}>
          <span>Amir Farms Vision</span>
          <span>&rarr;</span>
        </div>
      </div>

      {/* Right Stacked Modern Cards */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Vision Item 2 */}
        <div className="group bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(15,35,64,0.04)] hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🌍
          </div>
          <div>
            <h3 className="font-serif text-2xl font-normal mb-2 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
              Eco-Friendly System
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Establishing environment-friendly farming systems that preserve natural resources, biodiversity, and soil health.
            </p>
          </div>
        </div>

        {/* Vision Item 3 */}
        <div className="group bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(15,35,64,0.04)] hover:border-[#c1603f]/30 hover:shadow-[0_20px_40px_rgba(193,96,63,0.08)] transition-all duration-500 flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl shadow-inner transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${TERRACOTTA}12`, color: TERRACOTTA }}>
            🛡️
          </div>
          <div>
            <h3 className="font-serif text-2xl font-normal mb-2 transition-colors duration-300 group-hover:text-[#c1603f]" style={{ color: NAVY_DEEP }}>
              Food Self-Reliance
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Achieving complete self-sufficiency and independence in food production through robust, organic, and reliable methods.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>  

        {/* 🚀 CALL TO ACTION */}
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