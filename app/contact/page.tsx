'use client';

import { useState } from 'react';

export default function Contact() {
  const TERRACOTTA = "#c1603f";
  const NAVY_DEEP = "#0f2340";

  // Form State with First Name, Last Name, Phone, Email & Message
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "+923025674338"; 

    const text = `*New Inquiry from Website Contact Form*%0A%0A*First Name:* ${encodeURIComponent(formData.firstName)}%0A*Last Name:* ${encodeURIComponent(formData.lastName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50/60 selection:bg-[#c1603f]/20 selection:text-[#0f2340] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Updated to match reference layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-2xs">
            <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Get in Touch
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight mb-4" style={{ color: NAVY_DEEP }}>
            We'd Love to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0f2340] via-[#c1603f] to-[#0f2340] bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you have a question about our farm products, need support, or want to explore a partnership — our team is ready to help.
          </p>

          {/* Meta Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🕒</span>
              <span>Typically replies in 2 hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🎧</span>
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm">🌐</span>
              <span>Serving Pakistan & Global</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Info Cards & Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Cards Stack */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visit Office Card */}
            <div className="rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between" style={{ backgroundColor: NAVY_DEEP }}>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#c1603f]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-xl backdrop-blur-md">
                  🏢
                </div>
                <h3 className="font-serif text-2xl font-normal mb-2">Visit Our Office</h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light mb-6 leading-relaxed">
                  Amir Farms Near Burhan Police Station Dhok Mooliyan, Burhan, Pakistan
                </p>
                <a 
                  href="https://www.google.com/maps/place/Amir+Farms+Burhan+Office/@33.8195015,72.6100958,17z/data=!4m15!1m8!3m7!1s0x38df0500360b6dcb:0xd06a2218dc855d19!2sAmir+Farms+Burhan+Office!8m2!3d33.8199348!4d72.6101087!10e5!16s%2Fg%2F11ylpfgds1!3m5!1s0x38df0500360b6dcb:0xd06a2218dc855d19!8m2!3d33.8199348!4d72.6101087!16s%2Fg%2F11ylpfgds1?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:underline"
                  style={{ color: '#ff8a65' }}
                >
                  <span>Get Directions</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0 border border-emerald-100">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Phone & WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">+92 302 5674338</p>
                  <span className="text-[11px] text-slate-400">Available 7 days a week</span>
                </div>
              </div>
              <a 
                href="https://wa.me/923025674338" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 flex-shrink-0"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#c1603f] flex items-center justify-center text-xl flex-shrink-0 border border-orange-100">
                ✉️
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">info@amirfarms.com</p>
                <span className="text-[11px] text-slate-400">For inquiries and partnerships</span>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200/80">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl flex-shrink-0 border border-blue-100">
                  🕒
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Business Hours</h4>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online support available 24/7
                  </span>
                </div>
              </div>
              <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="font-medium text-slate-800">11:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-slate-800">Closed</span>
                </div>
              </div>
            </div>

          </div>

       <div className="
  lg:col-span-7 
  w-full 
  aspect-[16/9] 
  lg:aspect-auto 
  lg:h-full 
  rounded-3xl 
  overflow-hidden 
  shadow-xl 
  border 
  border-slate-200 
  bg-white
">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d72.6100958!3d33.8195015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df0500360b6dcb%3A0xd06a2218dc855d19!2sAmir%20Farms%20Burhan%20Office!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
    className="w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
    title="Amir Farms Burhan Office Map"
  />
</div>

        </div>

        {/* WhatsApp Integrated Contact Form Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-slate-200/80 relative overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: `linear-gradient(to right, ${NAVY_DEEP}, ${TERRACOTTA})` }} />
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-3" style={{ color: NAVY_DEEP }}>
              Send Us a Message via WhatsApp
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Fill out the form below. Once submitted, it will directly open WhatsApp with your pre-filled message ready to send!
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="max-w-2xl mx-auto space-y-6">
            
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#c1603f]/20 focus:border-[#c1603f] text-slate-800 text-sm transition-all" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#c1603f]/20 focus:border-[#c1603f] text-slate-800 text-sm transition-all" 
                />
              </div>
            </div>

            {/* Contact Number & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Contact Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03001234567" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#c1603f]/20 focus:border-[#c1603f] text-slate-800 text-sm transition-all" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="mail@example.com" 
                  required 
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#c1603f]/20 focus:border-[#c1603f] text-slate-800 text-sm transition-all" 
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message or inquiry regarding farm visits..." 
                required 
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#c1603f]/20 focus:border-[#c1603f] text-slate-800 text-sm transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button with WhatsApp Logo */}
            <button 
              type="submit" 
              className="w-full font-bold text-white text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Send Message to WhatsApp</span>
            </button>
          </form>
        </div>

        

      </div>
    </div>
  );
}