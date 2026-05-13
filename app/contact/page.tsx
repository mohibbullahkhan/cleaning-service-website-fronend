"use client";

import React, { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Home Cleaning",
    date: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    { q: "How quickly can I get a booking?", a: "We typically respond to inquiries within 2 hours during business hours and can often schedule same-week service." },
    { q: "Do I need to be home for the cleaning?", a: "It's entirely up to you! Most of our clients provide us with a key or entry code, but we're happy to clean while you're home too." },
    { q: "What is your cancellation policy?", a: "We offer free cancellation up to 24 hours before your scheduled appointment." }
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Contact OmahResik"
        subtitle="Experience the gold standard of professional cleaning. Send us a message and we'll handle the rest."
        image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80"
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 lg:gap-24">

            {/* Left Column: Premium Info & Trust */}
            <div className="space-y-16">
              <div className="animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                  Connect with us
                </h2>
                <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm">
                  Whether you have a question or are ready to schedule your first cleaning, our team is here for you.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: "📍", label: "Studio Location", value: "Ponorogo, East Java" },
                  { icon: "📞", label: "Priority Hotline", value: "+62 812-3456-7890" },
                  { icon: "✉️", label: "Business Inquiry", value: "hello@omahresik.com" }
                ].map((item, i) => (
                  <div key={i} className="group p-8 rounded-[32px] bg-[#EFEFED] hover:bg-[#111] transition-all duration-500 cursor-pointer">
                    <div className="flex items-center gap-6">
                      <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-gray-500">{item.label}</p>
                        <p className="text-xl font-bold text-[#111] group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="pt-12 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.3em] mb-8">Our Quality Guarantee</p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF5E0] flex items-center justify-center text-[#E8521A]">✓</div>
                    <span className="font-bold text-sm text-[#111]">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EEF5E0] flex items-center justify-center text-[#E8521A]">✓</div>
                    <span className="font-bold text-sm text-[#111]">100% Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Interactive Form */}
            <div className="relative animate-slide-up">
              <div className="bg-white rounded-[56px] p-10 md:p-16 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EEF5E0]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {isSubmitted ? (
                  <div className="text-center py-20 relative z-10">
                    <div className="w-24 h-24 bg-[#111] text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-10 shadow-3xl">✓</div>
                    <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Thank You!</h2>
                    <p className="text-gray-500 font-medium text-lg max-w-xs mx-auto">We've received your message and will reach out shortly.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-12 bg-[#EFEFED] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#111] hover:text-white transition-all"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group relative">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10 transition-colors group-focus-within:text-[#E8521A]">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-white border-2 border-gray-100 focus:border-[#E8521A] rounded-[24px] px-8 py-5 text-[#111] font-semibold outline-none transition-all placeholder:text-gray-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group relative">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10 transition-colors group-focus-within:text-[#E8521A]">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-white border-2 border-gray-100 focus:border-[#E8521A] rounded-[24px] px-8 py-5 text-[#111] font-semibold outline-none transition-all placeholder:text-gray-200"
                          placeholder="john@omahresik.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="group relative">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10 transition-colors group-focus-within:text-[#E8521A]">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full bg-white border-2 border-gray-100 focus:border-[#E8521A] rounded-[24px] px-8 py-5 text-[#111] font-semibold outline-none transition-all placeholder:text-gray-200"
                          placeholder="+62 812..."
                        />
                      </div>
                      <div className="group relative">
                        <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10 transition-colors group-focus-within:text-[#E8521A]">Service</label>
                        <select
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="w-full bg-white border-2 border-gray-100 focus:border-[#E8521A] rounded-[24px] px-8 py-5 text-[#111] font-semibold outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option>Home Cleaning</option>
                          <option>Deep Cleaning</option>
                          <option>Office Cleaning</option>
                          <option>Move-In/Out</option>
                        </select>
                      </div>
                    </div>

                    <div className="group relative">
                      <label className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest z-10 transition-colors group-focus-within:text-[#E8521A]">Your Message</label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-white border-2 border-gray-100 focus:border-[#E8521A] rounded-[28px] px-8 py-5 text-[#111] font-semibold outline-none transition-all resize-none placeholder:text-gray-200"
                        placeholder="Tell us what you need..."
                      />
                    </div>

                    <Button
                      onClick={() => handleSubmit}
                      className="w-full py-6 rounded-[28px] text-lg font-bold shadow-2xl bg-[#E8521A] hover:bg-[#111] transition-all duration-300"
                      variant="primary"
                    >
                      Request a Quote
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-24 px-6 bg-[#EFEFED]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>Quick Help & FAQ</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[24px] overflow-hidden transition-all duration-300 shadow-sm">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="font-bold text-[#111]">{faq.q}</span>
                  <span className={`text-2xl transition-transform ${activeAccordion === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeAccordion === idx && (
                  <div className="px-8 pb-6 text-gray-500 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
