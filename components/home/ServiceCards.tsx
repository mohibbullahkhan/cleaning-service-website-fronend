"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
    {
        badge: "Seamless Transitions",
        title: "Move-In / Move-Out Premium",
        description:
            "A comprehensive transformation of every surface, including deep cabinet sanitization and professional appliance detailing for a pristine new beginning.",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
        ],
    },
    {
        badge: "Architectural Precision",
        title: "Post-Renovation Detailing",
        description:
            "Eradicating fine construction dust from every crevice, vent, and fixture. We restore the architectural beauty of your space with clinical precision.",
        images: [
            "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80",
            "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80"
        ],
    },
];

export default function ServiceCards() {
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
        `transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`;

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white px-6 md:px-12 lg:px-24 py-24"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className={`group flex flex-col gap-8 ${fade(idx === 0 ? "delay-100" : "delay-300")}`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-[#EEF5E0] px-5 py-2.5 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#E8521A] shrink-0" />
                            <span className="text-xs font-bold text-[#111] uppercase tracking-[0.2em]">
                                {service.badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="text-[#111] font-medium leading-[0.95] tracking-[-0.05em] text-4xl md:text-5xl"
                        >
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg">
                            {service.description}
                        </p>

                        {/* Two images */}
                        <div className="grid grid-cols-2 gap-6 mt-4">
                            {service.images.map((src, imgIdx) => (
                                <div
                                    key={imgIdx}
                                    className={`relative rounded-[40px] overflow-hidden bg-[#EFEFED] aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-700 ${imgIdx === 1 ? 'mt-8' : ''}`}
                                >
                                    <Image
                                        src={src}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
