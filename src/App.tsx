/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Coffee, MapPin, Clock, Star, ArrowRight, Menu, X, ArrowDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { name: "The Passage", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Location", href: "#location" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-gold selection:text-white">
      {/* Search Engine Optimization: Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CoffeeShop",
          "name": "Hideaway Coffee House",
          "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "7 Farrier's Psge",
            "addressLocality": "London",
            "postalCode": "W1D 7DP",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5117,
            "longitude": -0.1341
          },
          "url": "https://hideawaycoffee.com",
          "telephone": "+44 20 XXXX XXXX",
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "17:00" }
          ],
          "priceRange": "££"
        })}
      </script>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 bg-paper/80 backdrop-blur-md border-b border-sage/10 transition-all duration-500">
        <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans font-semibold text-sage hidden sm:block">
          Farrier's Passage • London W1
        </div>

        <a href="#" className="flex flex-col items-center">
          <span className="font-display text-2xl md:text-3xl tracking-tighter leading-none italic font-medium">Hideaway</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] opacity-40 mt-1">Coffee House</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="text-xs tracking-[0.3em] uppercase font-sans font-semibold opacity-40">Est. 2012</div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-sage"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl italic hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 text-[10px] tracking-[0.4em] uppercase font-sans font-semibold text-sage opacity-40 border-t border-sage/10 pt-8 w-24 text-center">
            London
          </div>
        </motion.div>
      )}

      {/* Hero Section - Editorial Grid Influence */}
      <header 
        ref={heroRef}
        className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-sage/10 pt-20"
      >
        {/* Left Content Col */}
        <div className="col-span-1 md:col-span-5 p-8 md:p-20 flex flex-col justify-center border-r border-sage/10 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-gold mb-6 block">Soho's Best-Kept Secret</span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] font-display font-medium italic mb-10 tracking-tighter">
              Hideaway<br/>
              <span className="md:pl-16 font-light not-italic">Coffee</span><br/>
              <span className="font-light pl-4 md:pl-32">House</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-sage/80 mb-12 font-sans max-w-md">
              Your secret escape for exceptional specialty coffee and artisanal bites tucked away in the heart of the West End.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button onClick={() => window.location.href='#location'} className="px-10 py-5 bg-sage text-paper text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-sage/90 transition-all shadow-lg active:scale-95">
                Find the Passage
              </button>
              <button onClick={() => window.location.href='#menu'} className="px-10 py-5 border border-sage text-ink text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-sage/5 transition-all active:scale-95">
                View Our Menu
              </button>
            </div>
          </motion.div>

          <div className="hidden lg:block absolute bottom-12 right-0 translate-x-1/2 w-px h-32 bg-gold/30" />
        </div>

        {/* Center Visual Col */}
        <div className="col-span-1 md:col-span-4 bg-sage relative flex flex-col items-center justify-center p-8 md:p-12 text-paper overflow-hidden">
          <motion.div 
            style={{ 
              opacity: heroOpacity,
              backgroundImage: 'radial-gradient(#F5F5F0 1px, transparent 1px)', 
              backgroundSize: '30px 30px' 
            }}
            className="absolute inset-0 z-0 opacity-20"
          />
          
          <div className="relative z-10 w-full max-w-sm">
            <div className="border border-paper/20 p-2 mb-10">
              <div className="aspect-[3/4] bg-ink flex items-end p-8 relative overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2047" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5]"
                    alt="Hideaway Courtyard"
                 />
                 <div className="relative z-10">
                   <div className="text-[10px] uppercase tracking-widest mb-2 opacity-50 font-sans">Specialty Coffee W1D</div>
                   <div className="text-3xl font-display font-light italic">The Secluded Courtyard</div>
                 </div>
              </div>
            </div>
            
            <p className="text-center text-sm italic font-display leading-loose px-4 mb-4">
              "The perfect spot to read a book in Soho. A masterclass in minimalism and roast quality."
            </p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex text-gold text-xs">★★★★★</div>
              <span className="text-[10px] uppercase tracking-widest opacity-60 font-sans">4.9 Star Reputation</span>
            </div>
          </div>
        </div>

        {/* Right Details Col */}
        <div className="col-span-1 md:col-span-3 p-8 md:p-12 flex flex-col justify-between border-l border-sage/10">
           <div className="space-y-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-gold">Featured Cup</h2>
                <div className="flex justify-between items-baseline pt-2 border-b border-sage/5 pb-2">
                  <span className="text-xl italic font-display">V60 Pour-over</span>
                  <span className="text-xs font-sans opacity-40">£5.5</span>
                </div>
                <p className="text-[11px] font-sans uppercase tracking-wider opacity-60 mt-1">Single Origin Seasonal Roast</p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-gold">From the Oven</h2>
                <div className="flex justify-between items-baseline pt-2 border-b border-sage/5 pb-2">
                  <span className="text-xl italic font-display">Cinnamon Bun</span>
                  <span className="text-xs font-sans opacity-40">£4.8</span>
                </div>
                <p className="text-[11px] font-sans uppercase tracking-wider opacity-60 mt-1">Freshly baked, salted butter</p>
              </div>
           </div>

           <div className="pt-10 border-t border-sage/10">
             <h2 className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-gold mb-6">Service Hours</h2>
             <div className="text-[11px] font-sans space-y-3 opacity-80 uppercase tracking-widest">
                <div className="flex justify-between"><span>Mon – Fri</span> <span className="font-bold">08:00 – 18:00</span></div>
                <div className="flex justify-between"><span>Saturday</span> <span className="font-bold">09:00 – 18:00</span></div>
                <div className="flex justify-between text-gold"><span>Sunday</span> <span className="font-bold">10:00 – 17:00</span></div>
             </div>
           </div>
        </div>
      </header>

      {/* Detailed Menu Section */}
      <section id="menu" className="py-24 md:py-32 px-6 md:px-12 bg-paper relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-gold mb-4 block">The Full Selection</span>
            <h2 className="text-5xl md:text-7xl font-display italic tracking-tight">Our Curated Menu</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 w-full">
            <div className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.4em] text-sage font-bold border-b border-sage/10 pb-4">Coffee & Teas</h3>
              <div className="space-y-10">
                <MenuItem name="V60 Pour Over" price="£5.5" desc="Single Origin Seasonal Roast, rotating weekly" />
                <MenuItem name="Flat White" price="£4.2" desc="Double shot with silky micro-foam" />
                <MenuItem name="Batch Brew" price="£3.8" desc="Clean, balanced filter coffee" />
                <MenuItem name="Matcha Latte" price="£4.8" desc="Ceremonial grade Uji matcha" />
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-xs uppercase tracking-[0.4em] text-sage font-bold border-b border-sage/10 pb-4">Artisanal Bakery</h3>
              <div className="space-y-10">
                <MenuItem name="Cinnamon Bun" price="£4.8" desc="Cardamom spiced with pearl sugar" />
                <MenuItem name="Sourdough Toast" price="£6.5" desc="Whipped butter and sea salt" />
                <MenuItem name="Seasonal Pastry" price="£4.5" desc="Ask about today's Soho bake" />
                <MenuItem name="Mediterranean Bowl" price="£11.0" desc="Chickpeas, lemon tahini, fresh herbs" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 md:py-40 bg-paper border-t border-sage/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch border border-sage/10">
          <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-sage/10">
            <span className="text-[11px] uppercase tracking-[0.4em] font-sans text-gold mb-8 block">Find the Archway</span>
            <h2 className="text-4xl md:text-6xl font-display italic leading-tight mb-10">Located in the Heart of Soho.</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 pb-8 border-b border-sage/5">
                <MapPin className="text-gold shrink-0" size={24} />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-sage/40 block mb-2">Address</span>
                  <p className="text-xl font-display italic font-medium">
                    7 Farrier's Psge, London <br />
                    W1D 7DP, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="text-gold shrink-0" size={24} />
                <div className="w-full">
                  <span className="text-[10px] uppercase tracking-widest text-sage/40 block mb-4">Hours of Quiet</span>
                  <div className="space-y-3 font-sans text-[11px] uppercase tracking-[0.2em] opacity-70">
                    <div className="flex justify-between"><span>Mon – Fri</span> <span>08:00 – 18:00</span></div>
                    <div className="flex justify-between"><span>Saturday</span> <span>09:00 – 18:00</span></div>
                    <div className="flex justify-between text-gold"><span>Sunday</span> <span>10:00 – 17:00</span></div>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir//Hideaway+Coffee+House+Soho" 
              target="_blank" 
              rel="noreferrer"
              className="mt-12 group inline-flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-sans font-bold text-sage"
            >
              <span className="border-b border-sage/30 group-hover:border-sage transition-all pb-1">Get Directions</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7 h-[400px] lg:h-auto overflow-hidden grayscale contrast-[1.1] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.153920703816!2d-0.1366801233816654!3d51.51034077181344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d30e38634b%3A0xe543e595029e2f9d!2sHideaway!5e0!3m2!1sen!2suk!4v1715065401234!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 md:py-16 bg-ink text-paper flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-paper flex flex-col items-center md:items-start gap-2">
           <span>7 Farrier's Psge, London W1D 7DP</span>
           <span className="opacity-40">Soho District</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 text-[10px] tracking-[0.2em] uppercase font-sans">
          <span className="opacity-40 hover:opacity-100 cursor-default transition-all">Quiet Coffee London</span>
          <span className="opacity-40 hover:opacity-100 cursor-default transition-all">Independent Roasts</span>
          <span className="opacity-40 hover:opacity-100 cursor-default transition-all">Vegan Friendly</span>
        </div>

        <div className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">
          @hideawaysoho
        </div>
      </footer>
    </div>
  );
}

function MenuItem({ name, price, desc }: { name: string; price: string; desc: string }) {
  return (
    <div className="group cursor-default">
      <div className="flex justify-between items-baseline mb-2">
        <h4 className="text-2xl font-display italic font-medium group-hover:text-gold transition-all">{name}</h4>
        <div className="flex-1 border-b border-sage/5 mx-4 border-dashed relative top-[-6px]" />
        <span className="text-[11px] font-sans font-bold text-sage opacity-60">{price}</span>
      </div>
      <p className="text-[11px] font-sans uppercase tracking-widest text-sage opacity-60">{desc}</p>
    </div>
  );
}
