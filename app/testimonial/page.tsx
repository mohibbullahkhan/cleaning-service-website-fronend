"use client";

import React, { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Image from "next/image";

const testimonials = [
  { name: "Sarah Johnson", loc: "Jenangan, Ponorogo", text: "OmahResik changed my life. I come home to a sanctuary every week. The attention to detail is truly unmatched.", rating: 5, date: "May 2024", type: "Home", img: "3" },
  { name: "Mike Thompson", loc: "Surakarta", text: "Best office cleaning we've ever had. Reliable and professional. Our team loves the fresh environment.", rating: 5, date: "Apr 2024", type: "Office", img: "12" },
  { name: "Emily Davis", loc: "Madiun", text: "The deep clean was incredibly thorough. Every corner was spotless! I didn't even know some of these spots could be so clean.", rating: 5, date: "Mar 2024", type: "Deep Clean", img: "5" },
  { name: "David Wilson", loc: "Ponorogo", text: "Moving is stressful, but OmahResik made the move-out cleaning effortless. Highly recommend!", rating: 5, date: "Feb 2024", type: "Home", img: "8" },
  { name: "Jessica Alba", loc: "Magetan", text: "Exceptional service every time. They are always on time and very professional.", rating: 4, date: "Jan 2024", type: "Home", img: "15" },
  { name: "Chris Evans", loc: "Semarang", text: "My office has never looked better. Professional team and great communication.", rating: 5, date: "Dec 2023", type: "Office", img: "22" },
  { name: "Anna Kendrick", loc: "Yogyakarta", text: "Truly detailed deep clean. Worth every penny. I will definitely book them again.", rating: 5, date: "Nov 2023", type: "Deep Clean", img: "33" },
  { name: "Robert Downey", loc: "Kediri", text: "Great service and friendly staff. They did an amazing job with my kitchen.", rating: 5, date: "Oct 2023", type: "Home", img: "44" },
  { name: "Scarlett Joh", loc: "Sidoarjo", text: "I'm very picky with cleaning, but they exceeded my expectations. Fantastic!", rating: 5, date: "Sep 2023", type: "Deep Clean", img: "48" },
];

export default function TestimonialPage() {
  const [filter, setFilter] = useState("All");
  
  const filteredTestimonials = filter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.type === filter);

  return (
    <main className="bg-white">
      <PageHero 
        title="Client Stories"
        subtitle="Discover why hundreds of families and businesses trust OmahResik for their cleaning needs."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
      />

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111] rounded-[60px] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-around text-center gap-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8521A]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div>
                <p className="text-5xl md:text-8xl font-black mb-2" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>4.9</p>
                <div className="flex justify-center text-[#F59E0B] text-2xl mb-4">★★★★★</div>
                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">Verified Rating</p>
             </div>

             <div className="w-px h-32 bg-white/10 hidden md:block" />

             <div>
                <p className="text-5xl md:text-8xl font-black mb-2" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>2K+</p>
                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">Elite Clients</p>
             </div>

             <div className="w-px h-32 bg-white/10 hidden md:block" />

             <div>
                <p className="text-5xl md:text-8xl font-black mb-2" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>98%</p>
                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">Client Loyalty</p>
             </div>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-24">
            {["All", "Home", "Office", "Deep Clean"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-10 py-4 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-300 ${
                  filter === f
                    ? "bg-[#E8521A] text-white shadow-2xl shadow-orange-900/20 scale-105"
                    : "bg-[#EFEFED] text-[#666] hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
            {filteredTestimonials.map((t, i) => (
              <div 
                key={i} 
                className="break-inside-avoid bg-white p-12 rounded-[48px] border border-gray-50 shadow-2xl hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-10">
                   <div className="flex text-[#F59E0B] text-lg">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className={j < t.rating ? "text-[#F59E0B]" : "text-gray-200"}>★</span>
                      ))}
                   </div>
                   <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">{t.date}</span>
                </div>

                <p className="text-2xl text-[#111] font-bold leading-relaxed mb-12 group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                   &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-gray-50">
                  <div className="w-14 h-14 rounded-full overflow-hidden relative border-4 border-white shadow-lg">
                    <Image src={`https://i.pravatar.cc/100?img=${t.img}`} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-black text-[#111] leading-none mb-1 uppercase tracking-tight">{t.name}</p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Placeholder */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-[60px] overflow-hidden group cursor-pointer shadow-3xl">
             <Image 
               src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80"
               alt="Video Testimonial"
               fill
               className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-3xl group-hover:scale-110 transition-all">
                   <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-[#E8521A] border-b-[14px] border-b-transparent ml-2" />
                </div>
             </div>
             <div className="absolute bottom-16 left-16 right-16">
                <p className="text-[12px] font-black text-[#E8521A] uppercase tracking-[0.4em] mb-4">WATCH OUR STORY</p>
                <h2 className="text-white text-4xl md:text-6xl font-black max-w-2xl" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                  Behind the scenes of every pristine space.
                </h2>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Section */}
      <section className="py-32 px-6 bg-[#EEF5E0] relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-[#111] mb-10 tracking-tight" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
               Be our next <br /> <span className="text-[#E8521A]">happy sanctuary.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto">
               Join the community of thousands who have upgraded their living standard with OmahResik.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Button href="/contact" variant="primary" size="lg" className="px-12 py-6 rounded-full text-lg shadow-2xl">
                  Book Your Visit
               </Button>
               <button className="bg-white text-[#111] font-black px-12 py-6 rounded-full border-2 border-transparent hover:border-[#111] transition-all text-lg shadow-xl">
                  Submit a Review
               </button>
            </div>
         </div>
      </section>
    </main>
  );
}
