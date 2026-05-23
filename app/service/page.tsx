"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import BookButton from "@/components/booking/BookButton";
import Image from "next/image";

const services = [
  {
    title: "Residential Cleaning",
    subtitle: "Perfect for homes",
    desc: "A meticulous cleaning of every room, ensuring your living space stays calm, fresh, and welcoming.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOr9KCLp0o65V0Bx3FrAnQayh1eff2w90ulg&s",
    features: ["Kitchen sanitization", "Dusting & vacuuming", "Floor mopping", "Bathroom scrubbing"],
    price: "$120",
    bookingService: "residential" as const,
  },
  {
    title: "Deep Cleaning",
    subtitle: "Intensive care",
    desc: "Going beyond the surface to remove built-up dust, hidden residue, and stubborn grime.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    features: ["Baseboard wash", "Inside appliances", "Upholstery care", "Sanitized vents"],
    price: "$320",
    bookingService: "deepCleaning" as const,
  },
  {
    title: "Office Cleaning",
    subtitle: "Business freshness",
    desc: "A dependable routine for teams who want a sharper, cleaner, and more focused workspace.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    features: ["Desk wiping", "Trash management", "Common area care", "Floor polishing"],
    price: "$250",
    bookingService: "commercial" as const,
  },
  {
    title: "Move-In/Out",
    subtitle: "New beginnings",
    desc: "A full reset service that makes transitions easier, cleaner, and much less stressful.",
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=800&q=80",
    features: ["Full interior wash", "Cabinet interiors", "Appliance deep clean", "Window polishing"],
    price: "$400",
    bookingService: "moveInOut" as const,
  },
];

export default function ServicePage() {
  return (
    <main className="bg-[#FAFAF8]">
      <PageHero
        title="Premium Services"
        subtitle="A curated set of cleaning solutions designed for modern homes and workspaces."
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80"
      />

      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`grid gap-6 lg:gap-10 items-center rounded-[32px] md:rounded-[40px] border border-black/5 bg-white p-4 md:p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.14)] ${index % 2 === 1 ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"}`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-[28px] md:rounded-[34px] aspect-[4/3] bg-[#EFEFED]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#111]">
                    {service.subtitle}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full bg-black/85 px-4 py-2 text-white text-sm font-semibold">
                    Starting from {service.price}
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} p-2 md:p-4 lg:p-6`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8A8A8A]">
                  {service.subtitle}
                </p>
                <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold text-[#111] tracking-[-0.04em] leading-[1.08]">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 text-[#666]">
                  {service.desc}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-[18px] border border-black/5 bg-[#FCFCFA] px-4 py-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs">✓</span>
                      <span className="text-sm font-medium text-[#222]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-black/5 pt-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A]">Starting from</p>
                    <p className="text-4xl font-semibold text-[#111] mt-2">{service.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <BookButton service={service.bookingService} showArrow>
                      Book Service
                    </BookButton>
                    <Button href="/pricing" variant="outline" className="!border-black/10 !text-[#111]">
                      View Pricing
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[28px] border border-[#E4E5DC] bg-[#F7F8F3] p-7 text-[#111] shadow-[0_24px_80px_-46px_rgba(0,0,0,0.22)] md:p-9 lg:p-12"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="font-subtitle text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8521A]">
                  The OmahResik Guarantee
                </p>
                <h3 className="mt-4 text-[clamp(1.55rem,2.6vw,2.35rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#111]">
                  Clean, careful, and backed by a team you can trust.
                </h3>
                <p className="font-subtitle mt-5 max-w-2xl text-[15px] md:text-[16px] leading-7 text-[#56564F]">
                  If the result needs a touch-up, we make it right. Your satisfaction comes first.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <BookButton variant="primary" className="shadow-[0_16px_34px_-22px_rgba(232,82,26,0.7)]">
                    Book a Visit
                  </BookButton>
                  <Button href="/pricing" variant="outline" className="!border-[#E8521A]/30 !bg-white !text-[#E8521A] hover:!bg-[#E8521A] hover:!text-white">
                    View Pricing
                  </Button>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Flexible scheduling",
                  "Fully insured professionals",
                  "No surprise billing",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-[18px] border border-[#E0E1D9] bg-white px-5 py-4 shadow-[0_14px_40px_-32px_rgba(0,0,0,0.22)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1EA] text-sm font-semibold text-[#E8521A]">
                      0{index + 1}
                    </div>
                    <p className="text-sm font-semibold text-[#222]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
