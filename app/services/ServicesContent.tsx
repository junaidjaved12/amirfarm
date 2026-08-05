'use client';

import Link from 'next/link';

export default function ServicesContent() {
  const TERRACOTTA = "#c1603f";
  const NAVY_DEEP = "#0f2340";

  const servicesList = [
    {
      id: "forestry",
      title: "Forestry & Plantation Management",
      subtitle: "Sustainable Forest Operations",
      description: "Expert tree plantation programs and forest conservation initiatives designed to enhance ecological balance while ensuring sustainable resource management and environmental stewardship.",
      features: ["Reforestation Programs", "Conservation Strategy", "Sustainable Harvesting"],
      img: "/forestry.jpg"
    },
    {
      id: "cattle",
      title: "Cattle Farming Operations",
      subtitle: "Premium Livestock Production",
      description: "State-of-the-art dairy and beef production with a focus on animal welfare, herd health management, and breed improvement programs utilizing modern veterinary practices.",
      features: ["Dairy Production", "Herd Management", "Breed Improvement"],
      img: "/cattlefarming.jpg"
    },
    {
      id: "poultry",
      title: "Poultry Farming Systems",
      subtitle: "Advanced Egg & Meat Production",
      description: "Modern poultry operations meeting international standards with advanced biosecurity protocols, optimized nutrition programs, and sustainable farming practices for consistent quality output.",
      features: ["Biosecurity Systems", "Quality Control", "International Standards"],
      img: "/poultryfarming.jpg"
    },
    {
      id: "goat",
      title: "Goat Farming Excellence",
      subtitle: "Specialized Livestock Breeding",
      description: "Premium goat breeding programs combining superior genetic lines with expert husbandry practices, delivering high profitability with efficient resource management.",
      features: ["Superior Genetics", "Specialized Care", "Economic Growth"],
      img: "/goatfarming.png"
    },
    {
      id: "rabbit",
      title: "Rabbit Farming Operations",
      subtitle: "Commercial & Specialized Breeding",
      description: "High-yield commercial rabbit farming management focusing on healthy breeding lines, optimal nutrition, and disease-free environment for maximum production output.",
      features: ["Healthy Breeding Lines", "Disease Control", "Commercial Production"],
      img: "/rabitfarming.jpg"
    },
    {
      id: "nursery",
      title: "Nursery Farming & Horticulture",
      subtitle: "Plant Propagation & Seedlings",
      description: "Advanced nursery operations producing high-quality ornamental, fruit, and forestry plant seedlings using modern horticultural techniques and controlled greenhouse environments.",
      features: ["Plant Propagation", "Greenhouse Management", "Quality Seedlings"],
      img: "/nurseryfarming.jpg"
    },
    {
      id: "crops",
      title: "Crop & Fruit Cultivation",
      subtitle: "Modern Agricultural Methods",
      description: "Advanced cultivation techniques maximizing yield efficiency through precision farming, soil optimization, and sustainable agricultural practices tailored to regional climates.",
      features: ["Precision Farming", "Soil Management", "Yield Optimization"],
      img: "/fruitsfarming.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* ✨ HERO SECTION */}
      <section className="relative py-32 px-6 sm:px-14 lg:px-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(135deg, rgba(15, 35, 64, 0.90) 0%, rgba(26, 53, 87, 0.85) 100%), url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80")' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c1603f]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7a9e8f]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: TERRACOTTA }} />
            <span className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: TERRACOTTA }}>
              Our Services
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-tight mb-6 text-white drop-shadow-md">
            Agricultural Excellence
          </h1>

          <p className="max-w-3xl mx-auto text-slate-100 text-base sm:text-lg font-light leading-relaxed mb-8 drop-shadow">
            Comprehensive agricultural and livestock solutions combining modern farming practices with sustainable resource management. We deliver quality, productivity, and profitability across all sectors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#services-start"
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: TERRACOTTA, boxShadow: `0 10px 30px ${TERRACOTTA}40` }}
            >
              Explore Services
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 rounded-lg font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="py-16 px-6 sm:px-14 lg:px-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "5000+", label: "Active Livestock Units" },
              { number: "98%", label: "Quality Assurance Rate" },
              { number: "50+", label: "Farming Operations" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center py-8 px-6 rounded-2xl border border-slate-100 bg-white hover:border-[#c1603f]/20 transition-all duration-300 shadow-sm">
                <div className="font-serif text-4xl sm:text-5xl font-normal mb-2" style={{ color: NAVY_DEEP }}>
                  {stat.number}
                </div>
                <p className="text-slate-600 text-sm font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 SEPARATE ONE BY ONE SERVICE SECTIONS */}
      <div id="services-start" className="w-full">
        {servicesList.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={service.id} 
              id={service.id}
              className={`py-24 px-6 sm:px-14 lg:px-20 ${isEven ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100 last:border-b-0`}
            >
              <div className="max-w-[1400px] mx-auto">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-200 h-[350px] sm:h-[450px]">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2340]/60 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md" style={{ backgroundColor: TERRACOTTA }}>
                          {service.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    {/* <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-[#c1603f]/20 bg-[#c1603f]/5 w-fit">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TERRACOTTA }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: TERRACOTTA }}>
                        Service 0{index + 1}
                      </span>
                    </div> */}

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal mb-6" style={{ color: NAVY_DEEP }}>
                      {service.title}
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: TERRACOTTA }} />
                          <span className="text-xs font-semibold text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" 
                        style={{ backgroundColor: TERRACOTTA }}
                      >
                        <span>Request Service Details</span>
                        <span className="text-base">→</span>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 💡 BENEFITS SECTION */}
      <section className="py-28 px-6 sm:px-14 lg:px-20 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal mb-4" style={{ color: NAVY_DEEP }}>
              Why Choose Us
            </h2>
            <p className="text-slate-600 text-base font-light max-w-2xl mx-auto">
              We combine decades of agricultural expertise with modern farming technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Expert Expertise", 
                description: "25+ years of proven experience in sustainable agriculture and livestock management across diverse farming operations."
              },
              { 
                title: "Modern Technology", 
                description: "State-of-the-art facilities and equipment combined with advanced farming practices and data-driven decision making."
              },
              { 
                title: "Quality Assurance", 
                description: "Rigorous quality control protocols ensuring international standards for all products and services delivered."
              },
              { 
                title: "Sustainable Practices", 
                description: "Environment-conscious farming methods that maximize productivity while protecting natural resources for future generations."
              },
              { 
                title: "Professional Support", 
                description: "Dedicated team of agricultural specialists providing consulting, training, and ongoing operational support."
              },
              { 
                title: "Market Integration", 
                description: "Strong market connections and distribution networks ensuring optimal pricing and market access for our partners."
              }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-[#c1603f]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: `${TERRACOTTA}15` }}>
                  <span className="text-xl font-bold" style={{ color: TERRACOTTA }}>✓</span>
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: NAVY_DEEP }}>
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 sm:px-14 lg:px-20 bg-gradient-to-r from-[#0f2340] to-[#1a3557] text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-normal mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-slate-200 text-base font-light mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive agricultural solutions can enhance your farming operations and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ backgroundColor: TERRACOTTA }}
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/services"
              className="px-8 py-4 rounded-lg font-semibold border-2 border-white/40 hover:border-white/70 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}