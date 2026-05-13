"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AboutUs() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const fade = (delay: string) =>
        `transition-all duration-[1400ms] cubic-bezier(0.16, 1, 0.3, 1) ${delay} ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`;

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white overflow-hidden py-24 md:py-32"
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

                {/* Top Row: Badge, Mission Text, and Floating Card */}
                <div className="relative mb-20 md:mb-32 flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Badge */}
                    <div className={`mt-4 ${fade("delay-0")}`}>
                        <div className="inline-flex items-center gap-3 bg-[#FAFAFA] border border-gray-100 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
                            <span className="text-[11px] font-bold text-[#111] uppercase tracking-[0.2em]">
                                About Us
                            </span>
                        </div>
                    </div>

                    {/* Main Mission Text */}
                    <div className="flex-1 lg:max-w-[800px]">
                        <h2
                            className={`text-[#111] leading-[1.2] tracking-[-0.03em] ${fade("delay-100")}`}
                            style={{
                                fontFamily: "var(--font-roboto), Roboto, sans-serif",
                                fontSize: "clamp(32px, 5vw, 64px)",
                                fontWeight: 400,
                            }}
                        >
                            At OmahResik, we believe a clean home is happy. Our mission is to <span className="bg-[#CBDDFF] px-2 rounded-md">provide top notch</span> cleaning service
                        </h2>
                    </div>

                    {/* Top Right Floating Card */}
                    <div className={`hidden lg:block w-[180px] bg-white border border-gray-100 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] p-3 ${fade("delay-200")}`}>
                        <div className="bg-[#EEF5E0]/50 rounded-[18px] p-4 relative mb-3 overflow-hidden">
                            <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-1">Advanced Tools</p>
                            <p className="text-[10px] font-bold text-[#111] mb-4">Vacuum cleaner</p>
                            <div className="relative h-24 flex justify-center items-center">
                                <Image
                                    src="https://i.ibb.co.com/Kjrp7q01/Screenshot-2026-05-13-224231.png"
                                    alt="AeroClean"
                                    width={100}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-1">
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                </div>
                                <p className="text-[8px] font-bold text-[#111]">AeroClean 3000</p>
                            </div>
                            <button className="bg-[#FF7A1A] text-white text-[8px] font-bold px-3 py-1.5 rounded-full hover:bg-[#111] transition-colors">
                                View
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: 5-Column Grid with Uniform Sizing */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">

                    {/* Card 1 & 2 Wrapper with Overlay */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-6 relative">
                        {/* Background Card 1 */}
                        <div className={`relative rounded-[40px] bg-[#EFEFED] aspect-[4/5] flex items-center justify-center p-4 ${fade("delay-300")}`}>
                            <Image
                                src="/1.webp"
                                alt="Device 1"
                                width={320}
                                height={320}
                                className="object-contain scale-125"
                            />
                        </div>
                        {/* Background Card 2 */}
                        <div className={`relative rounded-[40px] bg-[#EFEFED] aspect-[4/5] flex items-center justify-center p-4 ${fade("delay-400")}`}>
                            <Image
                                src="/2.jpeg"
                                alt="Device 2"
                                width={320}
                                height={320}
                                className="object-contain scale-125"
                            />
                        </div>

                        {/* Floating Overlay Card (Centered between the two) */}
                        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[75%] bg-white/95 backdrop-blur-md rounded-[20px] p-3 shadow-2xl border border-white/50 z-10 ${fade("delay-500")}`}>
                            <p className="text-[10px] font-bold text-[#111] mb-2 text-center">Advanced Technology</p>
                            <div className="space-y-1.5">
                                <div className="flex justify-between items-end px-1">
                                    <div>
                                        <p className="text-[13px] font-bold text-[#111] leading-tight">33% Faster</p>
                                        <p className="text-[7px] text-gray-400">Germ removal</p>
                                    </div>
                                    <p className="text-[8px] font-bold text-gray-400">99%</p>
                                </div>
                                <div className="bg-[#111] rounded-full px-2.5 py-1 flex items-center justify-between">
                                    <p className="text-white text-[7px] font-medium">70% Less Water</p>
                                    <div className="w-3 h-3 rounded-full bg-[#FF7A1A] flex items-center justify-center">
                                        <span className="text-white text-[7px]">✓</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Small Text Block (Aligned to Top) */}
                    <div className={`pt-8 ${fade("delay-600")}`}>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                            At OmahResik, we use advanced cleaning tech to enhance your home with tailored services.
                        </p>
                    </div>

                    {/* Card 4: Air Purifier (Uniform Aspect Ratio) */}
                    <div className={`relative rounded-[40px] bg-[#EFEFED] overflow-hidden aspect-[4/5] flex items-center justify-center p-6 ${fade("delay-700")}`}>
                        <Image
                            src="/3.jpeg"
                            alt="Purifier"
                            width={320}
                            height={320}
                            className="object-contain scale-110"
                        />
                    </div>

                    {/* Card 5: Cleaning Device (Uniform Aspect Ratio) */}
                    <div className={`relative rounded-[40px] bg-[#EFEFED] overflow-hidden aspect-[4/5] flex items-center justify-center p-6 ${fade("delay-800")}`}>
                        <Image
                            src="/4.png"
                            alt="Cleaning Device"
                            width={350}
                            height={350}
                            className="object-contain scale-110"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
