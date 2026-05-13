"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurCommitment() {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

                {/* ── Header Section with Journey Animation ── */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative mb-24"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">

                        {/* 04. Section Badge (Appears after title settles) */}
                        <motion.div
                            className="shrink-0"
                            variants={{
                                initial: { opacity: 0, x: -20 },
                                animate: { opacity: 1, x: 0, transition: { delay: 2.2, duration: 0.8 } }
                            }}
                        >
                            <div className="inline-flex items-center gap-3 bg-[#FAFAFA] border border-gray-100 px-5 py-2.5 rounded-full shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Our Commitment</span>
                            </div>
                        </motion.div>

                        {/* 01-03. The Title & Avatars Journey */}
                        <motion.div 
                            className="flex-1"
                            variants={{
                                initial: { y: 250 },
                                animate: { y: 0, transition: { delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
                            }}
                        >
                            <h2 className="text-4xl md:text-7xl lg:text-[100px] font-medium text-[#111] leading-[0.95] tracking-[-0.05em]">
                                <motion.span
                                    variants={{
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1, transition: { duration: 0.8 } }
                                    }}
                                >
                                    Not
                                </motion.span>

                                <motion.span
                                    className="inline-flex items-center mx-6 align-middle"
                                    variants={{
                                        initial: { opacity: 0, x: 40, scale: 0.9 },
                                        animate: { opacity: 1, x: 0, scale: 1, transition: { delay: 0.6, duration: 0.8 } }
                                    }}
                                >
                                    <div className="flex -space-x-4 mr-6">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-14 h-14 md:w-20 md:h-20 rounded-full border-[6px] border-white bg-gray-100 overflow-hidden relative shadow-sm">
                                                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" unoptimized />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-[#EFEFED] px-5 py-2.5 rounded-[12px] text-[8px] md:text-sm font-semibold text-gray-500 whitespace-nowrap">
                                        Over 2K people proved
                                    </div>
                                </motion.span>

                                <motion.span
                                    variants={{
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1, transition: { delay: 1, duration: 0.8 } }
                                    }}
                                >
                                    Your Average <br /> Cleaning Service
                                </motion.span>
                            </h2>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── Features Grid: Staggered Slide from Left ── */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        animate: { transition: { staggerChildren: 0.15, delayChildren: 2.6 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20"
                >
                    {/* Column 1: Trust & Safety */}
                    <FeatureColumn
                        badge="Trust & Safety"
                        title="Your Home, Our Responsibility"
                        desc="We respect your space, valuables, and routines. Staff are background-checked and monitored."
                        tags={["Transparency", "Accountability"]}
                    />

                    {/* Column 2: Professional */}
                    <FeatureColumn
                        badge="Professional"
                        title="Consistent Quality by Trained Experts"
                        desc="Every team member undergoes structured training to master both technique and etiquette."
                    />

                    {/* Column 3: Professional Image & Flexibility BELOW */}
                    <motion.div
                        variants={columnVariants}
                        className="flex flex-col gap-20"
                    >
                        <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] bg-[#EFEFED] shadow-[0_40px_80px_rgba(0,0,0,0.05)]">
                            <Image
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                                alt="Professional Cleaner"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-black rounded-[20px] p-4 flex items-center justify-between border border-white/10 shadow-2xl">
                                <p className="text-[11px] font-medium text-white">Book online or chat easily.</p>
                                <div className="w-6 h-6 rounded-full bg-[#E8521A] flex items-center justify-center text-white text-[10px]">✓</div>
                            </div>
                        </div>

                        {/* Flexibility (Under Image) */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2.5 bg-[#FAFAFA] px-4 py-2 rounded-full border border-gray-50">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Flexibility</span>
                            </div>
                            <h3 className="text-[32px] font-medium text-[#111] leading-[1.2] tracking-tight">Cleaning That Fits Your Schedule</h3>
                        </div>
                    </motion.div>

                    {/* Column 4: Tech-Enabled & Book Button BELOW */}
                    <div className="flex flex-col justify-between">
                        <motion.div variants={columnVariants} className="space-y-8">
                            <div className="inline-flex items-center gap-2.5 bg-[#FAFAFA] px-4 py-2 rounded-full border border-gray-50">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tech-Enabled Service</span>
                            </div>
                            <h3 className="text-[32px] font-medium text-[#111] leading-[1.2] tracking-tight">Powered by Innovation</h3>
                            <p className="text-[15px] text-gray-400 leading-relaxed">
                                Service tracking, digital checklists, and reporting. Advanced machines ensure faster, deeper results.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                            }}
                            className="pt-20 flex justify-end"
                        >
                            <Link href="/contact" className="group bg-[#E8521A] hover:bg-[#111] text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-5 transition-all shadow-xl">
                                Book
                                <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}

const columnVariants = {
    initial: { opacity: 0, x: -40 },
    animate: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1] as const 
        } 
    }
};

function FeatureColumn({ badge, title, desc, tags }: { badge: string; title: string; desc: string; tags?: string[] }) {
    return (
        <motion.div
            variants={columnVariants}
            className="space-y-8"
        >
            <div className="inline-flex items-center gap-2.5 bg-[#FAFAFA] px-4 py-2 rounded-full border border-gray-50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8521A]" />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{badge}</span>
            </div>
            <h3 className="text-[32px] font-medium text-[#111] leading-[1.2] tracking-tight">{title}</h3>
            <p className="text-[15px] text-gray-400 leading-relaxed">{desc}</p>
            {tags && (
                <div className="flex gap-3 pt-4">
                    {tags.map(tag => (
                        <button key={tag} className="bg-[#EFEFED] text-[#111] px-5 py-3 rounded-[14px] text-[10px] font-bold uppercase tracking-wider">{tag}</button>
                    ))}
                </div>
            )}
        </motion.div>
    );
}