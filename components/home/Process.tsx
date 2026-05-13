"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Instant Quote",
    desc: "Experience zero friction. Our AI-driven quote engine provides a precise estimate in seconds."
  },
  {
    number: "02",
    title: "Premium Match",
    desc: "We pair your space with an elite cleaning specialist who fits your exact requirements."
  },
  {
    number: "03",
    title: "Clinical Clean",
    desc: "Our team utilizes high-tech, eco-certified tools to ensure a scientifically superior result."
  },
  {
    number: "04",
    title: "Total Peace",
    desc: "Walk into a transformed sanctuary. Your satisfaction is not just promised—it's guaranteed."
  }
];

export default function Process() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fade = (delay: string) =>
    `transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;

  return (
    <section ref={sectionRef} className="py-32 bg-white text-[#111] relative overflow-hidden">
      {/* Premium Decorative Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EEF5E0]/40 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="space-y-6 max-w-3xl">
            <div className={`inline-flex items-center gap-3 bg-[#EEF5E0] px-6 py-2.5 rounded-full ${fade("delay-0")}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#E8521A] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">OUR WORKFLOW</span>
            </div>
            <h2
              className={`text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter ${fade("delay-100")}`}
              style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}
            >
              Efficiency <br /> meets <span className="text-[#E8521A]">perfection.</span>
            </h2>
          </div>
          <p className={`text-xl text-gray-500 font-medium leading-relaxed max-w-sm border-l-2 border-gray-100 pl-8 ${fade("delay-200")}`}>
            A streamlined, data-driven approach to maintaining your sanctuary.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative ${fade(`delay-${(idx + 3) * 100}`)}`}
            >
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-full w-full h-[1px] bg-[#EEEDE9] z-0" />
              )}

              <div className="relative z-10">
                {/* Step Circle */}
                <div className="w-24 h-24 rounded-[32px] bg-[#F8F9FA] border border-gray-100 flex items-center justify-center mb-10 group-hover:bg-[#111] group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <span className="text-3xl font-black" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                    {step.number}
                  </span>
                </div>

                <div className="space-y-4 pr-4">
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-[#E8521A] transition-colors">{step.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <div className="w-6 h-[1px] bg-[#E8521A]" />
                  <span className="text-[10px] font-black text-[#E8521A] uppercase tracking-widest">Phase {step.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <div className={`mt-32 p-10 rounded-[40px] bg-[#111] text-white flex flex-col md:flex-row items-center justify-between gap-8 ${fade("delay-800")}`}>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#E8521A] flex items-center justify-center text-xl shadow-lg shadow-orange-900/40">⚡</div>
            <p className="text-xl font-bold">Ready to start phase one?</p>
          </div>
          <button className="bg-white text-[#111] font-black px-10 py-5 rounded-full hover:bg-[#EEF5E0] transition-all uppercase tracking-widest text-xs">
            Get an instant quote →
          </button>
        </div>
      </div>
    </section>
  );
}
