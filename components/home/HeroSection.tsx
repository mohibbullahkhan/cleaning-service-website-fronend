import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            className="relative w-full bg-[#EFEFED] flex flex-col items-center overflow-hidden min-h-screen"
        >
            <div className="max-w-7xl mx-auto w-full relative">
                <div className="absolute bottom-0 left-0 right-0 h-[460px] z-[1] animate-fade-in">
                    <div className="relative w-full h-full">
                        <Image
                            src="https://i.ibb.co.com/r2swnV1w/Screenshot-2026-05-13-130808.png"
                            alt="Clean modern living room"
                            fill
                            className="object-cover object-center"
                            style={{
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%)",
                                maskImage:
                                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 25%, black 55%)",
                            }}
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                <div className="relative z-[5] text-center pt-[52px] px-6">
                    <h1
                        className="text-[#111111] leading-[1] tracking-[-0.05em] font-bold text-[clamp(68px,14vw,152px)] animate-slide-up"
                        style={{
                            fontFamily: "var(--font-roboto), Roboto, sans-serif",
                            animationDelay: '300ms'
                        }}
                    >
                        OmahResik
                    </h1>
                    <p className="mt-[14px] text-[13.5px] text-[#999999] leading-[1.65] font-normal animate-slide-up" style={{ animationDelay: '500ms' }}>
                        Professional, dependable, and customized
                        <br />
                        cleaning solutions designed for your convenience.
                    </p>
                </div>

                <div className="relative z-[20] w-full mt-[32px] flex flex-col items-center">
                    {/* top 3 cards */}
                    <div className="grid gap-4 w-full max-w-[900px] px-4">
                        <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr_0.95fr] justify-center">
                            <div className="h-[54px] rounded-[18px] border border-white/40 bg-white/45 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-[12px] px-3 py-2 flex items-center justify-between animate-slide-in-left" style={{ animationDelay: '700ms' }}>
                                <div className="flex items-center gap-3">
                                    <span className="w-[28px] h-[28px] rounded-full border border-[#ddd] flex items-center justify-center text-[13px] text-[#888]">
                                        ⊙
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-semibold text-[#999]  ">
                                            Home owner
                                        </p>

                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-[32px] h-[32px] flex rounded-full overflow-hidden bg-[#e8e8e8] relative">
                                        <Image
                                            src="https://i.pravatar.cc/30?img=3"
                                            alt="Renald"
                                            fill
                                            className="object-cover object-center"
                                            unoptimized
                                        />

                                    </div>
                                    <p className="text-[14px] font-semibold text-[#111]">
                                        Renald
                                    </p>
                                </div>

                            </div>

                            <div className="h-[54px] rounded-[18px] border border-white/40 bg-white/45 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-[12px] px-3 py-2 flex items-center justify-between animate-slide-in-left" style={{ animationDelay: '850ms' }}>
                                <div className="flex items-center gap-3">
                                    <span className="w-[28px] h-[28px] rounded-full border border-[#ddd] flex items-center justify-center text-[13px] text-[#888]">
                                        ⊙
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-semibold text-[#999]">
                                            PIC
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-[32px] h-[32px] flex rounded-full overflow-hidden bg-[#e8e8e8] relative">
                                        <Image
                                            src="https://i.pravatar.cc/30?img=12"
                                            alt="Ronald"
                                            fill
                                            className="object-cover object-center"
                                            unoptimized
                                        />
                                    </div>
                                    <p className="text-[14px] font-semibold text-[#111]">
                                        Ronald
                                    </p>
                                </div>
                            </div>

                            <div className="h-[54px] rounded-[18px] border border-white/40 bg-white/45 shadow-[0_24px_60px_rgba(0,0,0,0.08)] backdrop-blur-[12px] px-3 py-2 flex items-center justify-between animate-slide-in-left" style={{ animationDelay: '1000ms' }}>
                                <div className="flex items-center gap-3">
                                    <span className="w-[28px] h-[28px] rounded-full border border-[#ddd] flex items-center justify-center text-[13px] text-[#888]">
                                        ▦
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-semibold text-[#999]">
                                            Today
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-[26px] h-[26px] rounded-[10px] bg-[#E8521A] flex items-center justify-center text-white text-[13px] shadow-sm">
                                        ✓
                                    </div>
                                    <p className="text-[14px] font-semibold text-[#111]">
                                        May 09, 2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* bottom 4 cards */}
                        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.95fr] mt-0.5 pb-8">
                            <div className="grid gap-4 lg:grid-cols-2">

                                <div className="rounded-[20px] border border-white/40 bg-white/45 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-[14px] overflow-hidden max-w-[400px] p-4 max-h-[420px] animate-slide-in-left" style={{ animationDelay: '1200ms' }}>
                                    <p className="text-[11px] uppercase font-semibold text-black mb-3">
                                        Jenangan Ponorogo
                                    </p>

                                    <img
                                        src="https://i.ibb.co.com/WWVkhxkK/Screenshot-2026-05-13-224205.png"
                                        alt="Residential Cleaning"
                                        className="w-full h-[330px] object-cover rounded-[24px]"
                                    />
                                </div>
                                <div className="rounded-[20px] border border-white/40 bg-white/45 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur-[14px] overflow-hidden max-w-[400px] p-4 max-h-[420px] animate-slide-in-left" style={{ animationDelay: '1350ms' }}>
                                    <p className="text-[11px] uppercase font-semibold text-black mb-3">
                                        Cleaning Team                                    </p>

                                    <img
                                        src="https://i.ibb.co.com/Kjrp7q01/Screenshot-2026-05-13-224231.png"
                                        alt="Residential Cleaning"
                                        className="w-full h-[330px] object-cover rounded-[24px]"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4">
                                <div className="rounded-[20px] border border-white/40 bg-white/45 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur-[12px] max-w-[400px] p-5 animate-slide-in-left" style={{ animationDelay: '1500ms' }}>
                                    <p className="text-[20px] font-medium text-black mb-3">
                                        Deep cleaning
                                    </p>

                                    <div className="flex items-end justify-between mb-2">
                                        <div>
                                            <p className="text-[30px] leading-none font-semibold text-black">
                                                186 m²
                                            </p>

                                            <p className="text-[13px] text-[#777] mt-1">Area size</p>
                                        </div>

                                        <p className="text-[15px] text-[#777]">2000 sq</p>
                                    </div>

                                    <div className="bg-black rounded-full px-4 py-2 flex items-center justify-between">
                                        <p className="text-white text-[13px] font-medium">
                                            Total time : Only 4 hours
                                        </p>

                                        <div className="w-7 h-7 rounded-full bg-[#FF7A1A] flex items-center justify-center shadow-lg">
                                            <span className="text-white text-[14px]">✓</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[20px] border border-white/40 bg-white/45 shadow-[0_20px_70px_rgba(0,0,0,0.10)] backdrop-blur-[12px] max-w-[400px] p-5 animate-slide-in-left" style={{ animationDelay: '1650ms' }}>
                                    <p className="text-[16px] font-medium text-black mb-4">
                                        Total cost
                                    </p>

                                    <div className="flex items-end justify-between mb-2">
                                        <div>
                                            <p className="text-[38px] leading-none font-semibold text-black">
                                                $300
                                            </p>

                                            <p className="text-[14px] text-[#777] mt-2">All area</p>
                                        </div>

                                        <p className="text-[15px] text-[#777]">$0.15 per sq</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="flex-1 bg-gradient-to-r from-[#FF6A00] to-[#FF8A1D] rounded-[14px] py-3 text-center">
                                            <span className="text-white text-[13px] font-semibold">
                                                3 Professionals
                                            </span>
                                        </div>

                                        <div className="flex-1 bg-[#FFC800] rounded-[14px] py-3 text-center">
                                            <span className="text-white text-[13px] font-semibold">
                                                Advanced technology
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
