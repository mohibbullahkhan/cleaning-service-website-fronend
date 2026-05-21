"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BookButton from "../booking/BookButton";

const bgImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr9KCLp0o65V0Bx3FrAnQayh1eff2w90ulg&s",
    "https://images.unsplash.com/photo-1527515637462-cff94edd5be1?w=1600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
];

export default function OurService() {
    const [visible, setVisible] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % bgImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const fade = (delay: string) =>
        `transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`;

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="relative mb-20 grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-8 items-start">
                    <div className={`pt-4 ${fade("delay-0")}`}>
                        <div className="inline-flex items-center gap-3 bg-[#FAFAFA] border border-gray-100 px-5 py-2.5 rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Our Service</span>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className={`text-[#111] font-medium leading-[0.95] tracking-[-0.05em] text-4xl md:text-7xl lg:text-[100px] ${fade("delay-100")}`}>
                            Discover our home-cleaning services tailored to your space and schedule.
                        </h2>
                        <div className={`${fade("delay-200")}`}>
                            <BookButton showArrow>
                                Book
                            </BookButton>
                        </div>
                    </div>
                </div>

                {/* Dashboard Card - COMPACT PIXEL PERFECT */}
                <div className={`relative group ${fade("delay-400")}`}>
                    <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-[3/4.5] md:aspect-[16/9.5] shadow-[0_80px_140px_-30px_rgba(0,0,0,0.15)]">

                        {/* Background Carousel */}
                        <div className="absolute inset-0">
                            {bgImages.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-[3000ms] ${currentImg === idx ? "opacity-100" : "opacity-0"}`}
                                >
                                    <Image src={img} alt="Cleaning" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Top Right Index */}
                        <div className="absolute top-12 right-12 text-white/50 text-xl font-medium tracking-tight">(01)</div>

                        {/* UI Components Container */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col items-start z-[20]">

                            {/* Top Card Row - COMPACT & STANDALONE GAPS */}
                            <div className="flex flex-col md:flex-row items-stretch md:items-end gap-2 md:gap-3 w-full">

                                {/* Card 1: Branding (Merged with Dashboard) */}
                                <div className="bg-white/80 backdrop-blur-3xl rounded-t-[15px] md:rounded-t-[22px] pt-3 pl-3 pr-3 pb-6 md:pb-8 border-t border-x border-white/40 w-full md:w-[280px] h-auto md:h-[100px] flex items-center justify-center -mb-[1px] relative z-20">
                                    <div className="bg-[#0A0A0A] rounded-[10px] md:rounded-[12px] w-full h-full flex items-center justify-center text-white text-[13px] md:text-[16px] font-medium p-3 md:p-4 mt-1">
                                        Cleaning Services
                                    </div>

                                    {/* Inverted Corner - Right Side */}
                                    <div className="absolute bottom-0 -right-[32px] w-[32px] h-[32px] pointer-events-none hidden md:block">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 32 V0 C0 17.6731 14.3269 32 32 32 H0 Z" fill="rgba(255,255,255,0.8)" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Card 2: Standard (With Gap) */}
                                <div className="hidden md:flex bg-white/80 backdrop-blur-3xl rounded-[22px] p-3 items-center gap-4 shadow-2xl border border-white/50 w-[280px] h-[85px] mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative shrink-0">
                                        <Image src="https://i.pravatar.cc/100?img=1" alt="Standard" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-bold text-[#111] line-clamp-1">Standard</p >
                                        <p className="text-[9px] text-gray-400 font-medium line-clamp-1">from $1 per sq</p>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 text-xl font-light shrink-0">+</div>
                                </div>

                                {/* Card 3: Deep Cleaning (With Gap) */}
                                <div className="hidden md:flex bg-white/80 backdrop-blur-3xl rounded-[22px] p-3 items-center gap-4 shadow-2xl border border-white/50 w-[280px] h-[85px] mb-3">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl overflow-hidden relative shrink-0">
                                        <Image src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=100&q=80" alt="Deep" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[13px] font-bold text-[#111] line-clamp-1">Deep Cleaning</p>
                                        <p className="text-[9px] text-gray-400 font-medium line-clamp-1">from $1.15 per sq</p>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 text-xl font-light shrink-0">+</div>
                                </div>
                            </div>

                            {/* Main Dashboard Card (Merged with Card 1) */}
                            <div className="w-full bg-white/80 backdrop-blur-3xl rounded-b-[24px] md:rounded-b-[40px] rounded-t-none md:rounded-tr-[40px] md:rounded-tl-none p-4 md:p-8 border border-white/40 shadow-2xl relative z-10">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
                                    {[
                                        { time: "06.00", label: "GENERAL" },
                                        { time: "08.00", label: "KITCHEN" },
                                        { time: "09.00", label: "BATHROOM" },
                                        { time: "10.00", label: "BEDROOM" }
                                    ].map((item, i) => (
                                        <div key={i} className={`space-y-3 md:space-y-6 group/item ${i > 1 ? 'hidden sm:block md:block' : ''}`}>
                                            <p className="text-[8px] md:text-[10px] font-bold text-gray-400 tracking-wider">{item.time}</p>
                                            <div className="flex items-end gap-[2px] md:gap-[3px] h-6 md:h-10">
                                                {[...Array(12)].map((_, j) => (
                                                    <div key={j} className="w-[1.5px] md:w-[2.5px] rounded-full bg-gray-200 transition-all duration-700 group-hover/item:bg-[#E8521A]" style={{ height: `${30 + Math.random() * 70}%` }} />
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5 md:gap-2.5">
                                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E8521A]" />
                                                    <span className="text-[8px] md:text-[10px] font-bold text-[#111] tracking-widest uppercase">{item.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Progress */}
                            <div className="w-full mt-8 flex gap-4 px-4">
                                {bgImages.map((_, i) => (
                                    <div key={i} className={`h-[2px] flex-1 rounded-full transition-all duration-1000 ${currentImg === i ? "bg-white" : "bg-white/20"}`} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
