import React from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";

const pricingPlans = [
  {
    name: "Essentials",
    price: "49",
    period: "per visit",
    features: ["Kitchen Surface Cleaning", "Bathroom Sanitizing", "Dusting Common Areas", "Floor Mopping", "Trash Removal"],
    buttonText: "Start with Essentials",
    popular: false
  },
  {
    name: "Standard",
    price: "89",
    period: "per visit",
    features: ["All Essentials Features", "Inside Microwave Cleaning", "Deep Vacuuming", "Bed Making", "Cabinet Exterior Wiping", "Window Sills Cleaning"],
    buttonText: "Choose Standard",
    popular: true
  },
  {
    name: "Premium",
    price: "159",
    period: "per visit",
    features: ["All Standard Features", "Inside Oven Cleaning", "Baseboard Washing", "Interior Window Cleaning", "Upholstery Vacuuming", "Wall Spot Cleaning"],
    buttonText: "Go Premium",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageHero 
        title="Transparent Pricing"
        subtitle="Premium cleaning shouldn't be a mystery. Choose a plan that fits your space and your standards."
        image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1600&q=80"
      />

      {/* Pricing Cards */}
      <section className="py-24 px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative rounded-[48px] p-12 flex flex-col h-full transition-all duration-500 hover:-translate-y-4 ${
                plan.popular 
                  ? "bg-[#111] text-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] scale-105 z-10 border border-white/10" 
                  : "bg-white text-[#111] border border-gray-100 shadow-2xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E8521A] text-white text-[10px] font-black tracking-[0.3em] uppercase py-3 px-8 rounded-full shadow-xl">
                  Most Popular
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black">${plan.price}</span>
                  <span className={`text-sm font-bold uppercase tracking-widest ${plan.popular ? "text-gray-500" : "text-gray-400"}`}>{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <p className={`text-[10px] font-black tracking-[0.2em] uppercase ${plan.popular ? "text-[#E8521A]" : "text-gray-300"}`}>
                  Service Inclusions
                </p>
                <ul className="space-y-6 mb-12">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-4">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${plan.popular ? "bg-[#E8521A] text-white" : "bg-[#EEF5E0] text-[#111]"}`}>
                        ✓
                      </div>
                      <span className={`text-[15px] font-bold leading-tight ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                href="/contact" 
                variant={plan.popular ? "primary" : "outline"} 
                className="w-full"
                showArrow
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison section placeholder */}
      <section className="py-24 px-6 bg-[#EFEFED]">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-black mb-8" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Need a custom solution?</h2>
           <p className="text-xl text-gray-500 font-medium mb-12">For spaces larger than 3,000 sq ft or specialized commercial needs, we offer bespoke pricing packages.</p>
           <Button href="/contact" variant="outline" size="lg" showArrow>Request Custom Quote</Button>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
              Premium Enhancements
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">A-la-carte service upgrades</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Inside Window Detailing", price: "+ $45" },
              { name: "Professional Pet Hair Removal", price: "+ $30" },
              { name: "Interior Fridge Sanitization", price: "+ $35" },
              { name: "Kitchen Dish Valet", price: "+ $25" },
              { name: "Premium Laundry Care", price: "+ $40" },
              { name: "Balcony & Terrace Scrub", price: "+ $55" }
            ].map((addon, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] flex items-center justify-between border border-gray-100 shadow-xl hover:bg-[#EEF5E0] transition-colors group cursor-pointer">
                <span className="font-bold text-[#111] group-hover:text-[#E8521A]">{addon.name}</span>
                <span className="bg-[#111] text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white text-[#111] border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-20 text-center" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            {[
              { q: "Are professional supplies included?", a: "Absolutely. We bring clinical-grade, eco-friendly products and cutting-edge equipment for every assignment." },
              { q: "What is your rescheduling policy?", a: "We value your time. You can reschedule or cancel with zero penalty up to 24 hours prior to your visit." },
              { q: "Are your specialists fully insured?", a: "Yes. Every OmahResik professional is rigorously background-checked, insured, and certified." },
              { q: "How is billing handled?", a: "Secure digital payments are processed post-service. We accept all major credit cards and digital wallets." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-10 group cursor-pointer">
                <h3 className="text-xl font-bold mb-6 flex justify-between items-center group-hover:text-[#E8521A] transition-colors">
                  {faq.q}
                  <span className="text-3xl text-gray-200 group-hover:text-[#E8521A] group-hover:rotate-45 transition-all">+</span>
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed hidden group-hover:block transition-all animate-slide-up">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
