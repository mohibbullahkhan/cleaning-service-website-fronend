"use client";

import React from "react";
import Image from "next/image";

const testimonialsRow1 = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    text: "OmahResik transformed my home into a sanctuary. Their attention to detail is truly unparalleled and I love it.",
    img: "https://i.pravatar.cc/100?img=32"
  },
  {
    name: "Mark Evans",
    role: "Business Owner",
    text: "The most reliable cleaning service we've ever used. Professional, timely, and thorough every single time.",
    img: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Elena Rodriguez",
    role: "Property Manager",
    text: "Their move-out cleaning service is a lifesaver. Spotless results every single time for our tenants.",
    img: "https://i.pravatar.cc/100?img=48"
  },
  {
    name: "James Wilson",
    role: "Tech Executive",
    text: "Exceptional service. They understand high-end properties and treat them with absolute care and respect.",
    img: "https://i.pravatar.cc/100?img=68"
  }
];

const testimonialsRow2 = [
  {
    name: "Sophia Chen",
    role: "Interior Designer",
    text: "I always recommend OmahResik to my clients. They maintain the aesthetic integrity of every single space.",
    img: "https://i.pravatar.cc/100?img=45"
  },
  {
    name: "David Miller",
    role: "Real Estate Agent",
    text: "The presentation is everything in my business, and OmahResik ensures every property looks its absolute best.",
    img: "https://i.pravatar.cc/100?img=11"
  },
  {
    name: "Lisa Thompson",
    role: "Busy Professional",
    text: "Coming home to a clean house is the best feeling. Their subscription service is a game changer for me.",
    img: "https://i.pravatar.cc/100?img=22"
  },
  {
    name: "Robert Garcia",
    role: "Restaurant Owner",
    text: "Hygiene is our top priority. OmahResik helps us maintain the highest standards of cleanliness daily.",
    img: "https://i.pravatar.cc/100?img=15"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-100 px-5 py-2.5 rounded-full shadow-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-[#111] font-medium leading-[0.95] tracking-[-0.05em] text-4xl md:text-7xl lg:text-[100px]" style={{ fontFamily: 'var(--font-space-mono), monospace' }}>
              Trusted by those <br /> who value detail.
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-[20px] shadow-sm border border-gray-100">
            <span className="text-[#E8521A] font-bold text-lg">4.9/5.0</span>
            <div className="flex text-[#F59E0B] text-sm">★★★★★</div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Container - Constrained to max-width */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="relative space-y-8 rounded-[48px] overflow-hidden border border-gray-100 bg-white/30 p-8">
          {/* Row 1 */}
          <div className="relative flex overflow-hidden group">
            <div className="flex py-4 gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...testimonialsRow1, ...testimonialsRow1].map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative flex overflow-hidden group">
            <div className="flex py-4 gap-8 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
              {[...testimonialsRow2, ...testimonialsRow2].map((item, idx) => (
                <TestimonialCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="w-[450px] h-[280px] shrink-0 bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:-translate-y-1">
      <div>
        <div className="flex text-[#F59E0B] text-xs mb-6">★★★★★</div>
        <p className="text-[17px] text-[#111] font-normal leading-relaxed whitespace-normal line-clamp-3">
          "{item.text}"
        </p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 relative border border-gray-50">
          <Image src={item.img} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold text-[#111] text-[13px] mb-0.5">{item.name}</p>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.role}</p>
        </div>
      </div>
    </div>
  );
}
