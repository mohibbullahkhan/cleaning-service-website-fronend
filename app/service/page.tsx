import React from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    title: "Residential Cleaning",
    subtitle: "PERFECT FOR HOMES",
    desc: "A meticulous cleaning of every room, ensuring your living space is a sanctuary of freshness.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94edd5be1?w=800&q=80",
    features: ["Kitchen Sanitization", "Dusting & Vacuuming", "Floor Mopping", "Bathroom Scrubbing"],
    price: "$120"
  },
  {
    title: "Deep Cleaning",
    subtitle: "INTENSIVE CARE",
    desc: "Going beyond the surface to eliminate hidden allergens, deep-seated grime, and tough stains.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    features: ["Wall & Baseboard Wash", "Inside Appliances", "Upholstery Cleaning", "Sanitized Vents"],
    price: "$250"
  },
  {
    title: "Office Cleaning",
    subtitle: "BUSINESS FRESHNESS",
    desc: "Maintaining a professional and hygienic environment that boosts productivity and morale.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    features: ["Desk & Surface Wiping", "Trash Management", "Common Area Care", "Floor Polishing"],
    price: "$180"
  },
  {
    title: "Move-In/Out",
    subtitle: "NEW BEGINNINGS",
    desc: "Ensuring a spotless transition whether you are moving into a new home or leaving one.",
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=800&q=80",
    features: ["Full Interior Wash", "Inside Cabinets", "Appliance Deep Clean", "Window Polishing"],
    price: "$300"
  }
];

export default function ServicePage() {
  return (
    <main className="bg-white">
      <PageHero 
        title="Premium Services"
        subtitle="Exceptional cleaning solutions tailored to your unique lifestyle and professional needs."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80"
      />

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid gap-24">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] rounded-[60px] overflow-hidden shadow-3xl group">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <p className="text-[12px] font-bold tracking-[0.3em] text-[#E8521A] uppercase">
                    {service.subtitle}
                  </p>
                  <h2 
                    className="text-4xl md:text-6xl font-black text-[#111] leading-tight"
                    style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
                  >
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#EEF5E0] flex items-center justify-center text-[#E8521A] text-xs">✓</div>
                      <span className="text-sm font-bold text-[#333]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex items-center gap-10 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Starting from</p>
                    <p className="text-4xl font-black text-[#111]">{service.price}</p>
                  </div>
                  <Button href="/contact" variant="primary" size="lg" className="rounded-full px-10 py-5">
                    Book Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Satisfaction Guarantee Bar */}
      <section className="bg-[#111] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
           <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>The OmahResik Guarantee</h3>
              <p className="text-gray-400 font-medium text-lg">If you're not 100% satisfied, we'll re-clean for free.</p>
           </div>
           <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-4xl border border-white/20">🛡️</div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-[#EFEFED]">
        <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
          Ready to experience the gold standard?
        </h2>
        <Button href="/contact" size="lg" className="px-12 rounded-full shadow-2xl">
          Get a Free Estimate
        </Button>
      </section>
    </main>
  );
}
