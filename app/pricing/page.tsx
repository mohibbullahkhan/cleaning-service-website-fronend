"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import BookButton from "@/components/booking/BookButton";

const pricingPlans = [
  {
    name: "Essentials",
    price: 49,
    period: "per visit",
    label: "Best for regular upkeep",
    features: ["Kitchen surface cleaning", "Bathroom sanitizing", "Dusting common areas", "Floor mopping", "Trash removal"],
    bookingService: "residential" as const,
    accent: "from-white via-[#FAFAF7] to-[#F4F5EF]",
  },
  {
    name: "Standard",
    price: 89,
    period: "per visit",
    label: "Most popular for busy homes",
    features: ["All Essentials features", "Inside microwave cleaning", "Deep vacuuming", "Bed making", "Cabinet exterior wiping", "Window sills cleaning"],
    bookingService: "deepCleaning" as const,
    accent: "from-[#FFF7F2] via-white to-[#F8F4EC]",
    popular: true,
  },
  {
    name: "Premium",
    price: 159,
    period: "per visit",
    label: "For larger or detailed spaces",
    features: ["All Standard features", "Inside oven cleaning", "Baseboard washing", "Interior window cleaning", "Upholstery vacuuming", "Wall spot cleaning"],
    bookingService: "commercial" as const,
    accent: "from-white via-[#FCFCFA] to-[#F1F4EA]",
  },
];

const addons = [
  { name: "Inside Window Detailing", price: 45, icon: "✦" },
  { name: "Professional Pet Hair Removal", price: 30, icon: "◌" },
  { name: "Interior Fridge Sanitization", price: 35, icon: "⌁" },
  { name: "Kitchen Dish Valet", price: 25, icon: "⌘" },
  { name: "Premium Laundry Care", price: 40, icon: "↺" },
  { name: "Balcony & Terrace Scrub", price: 55, icon: "▣" },
];

const faqs = [
  { q: "Are supplies included?", a: "Yes. We bring the cleaning products and tools needed for the selected service." },
  { q: "Can I reschedule?", a: "Absolutely. You can reschedule before your appointment window and our team will help adjust it." },
  { q: "Do you require payment today?", a: "No payment is required today. Your card is only collected after the booking is confirmed by our team." },
  { q: "What if the scope changes?", a: "Final price may adjust after walkthrough for unusual scope or additional work beyond the original booking." },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className="bg-[#FAFAF8]">
      <PageHero
        title="Transparent Pricing"
        subtitle="Simple plans, clear value, and a smoother path to booking."
        image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1600&q=80"
      />

      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 -mt-10">
        <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex h-full flex-col overflow-hidden rounded-[24px] border bg-white p-5 text-[#111] shadow-[0_24px_75px_-42px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-44px_rgba(0,0,0,0.28)] md:p-6 lg:p-7 ${
                plan.popular ? "border-[#E8521A]/35 ring-1 ring-[#E8521A]/15" : "border-[#E2E3DC]"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-[#E8521A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_30px_-18px_rgba(232,82,26,0.65)]">
                  Most popular
                </div>
              )}

              <div className={`rounded-[18px] border ${plan.popular ? "border-[#F2C6B2]" : "border-[#E8E9E1]"} bg-gradient-to-br ${plan.accent} p-4 md:p-5`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7B7B73]">{plan.label}</p>
                <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.02em] text-[#111]">{plan.name}</h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-[-0.02em] text-[#111]">${plan.price}</span>
                  <span className="pb-1 text-sm font-medium text-[#676760]">{plan.period}</span>
                </div>
              </div>

              <div className="mt-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF1EA] text-[10px] font-semibold text-[#E8521A]"
                      >
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-[#4F4F49]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-[#ECEDE6] pt-5">
                <BookButton
                  service={plan.bookingService}
                  variant={plan.popular ? "primary" : "outline"}
                  className={`w-full ${plan.popular ? "shadow-[0_16px_34px_-22px_rgba(232,82,26,0.7)]" : "!border-[#E8521A]/25 !text-[#E8521A] hover:!bg-[#E8521A] hover:!text-white"}`}
                  showArrow
                >
                  Book {plan.name}
                </BookButton>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-[28px] border border-[#E2E3DC] bg-[#F7F8F3] p-7 text-[#111] shadow-[0_26px_85px_-50px_rgba(0,0,0,0.24)] md:p-9 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8521A]">Need something custom?</p>
              <h2 className="mt-4 text-[clamp(1.55rem,2.6vw,2.35rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#111]">
                We can tailor a quote for larger or specialized spaces.
              </h2>
              <p className="font-subtitle mt-5 max-w-2xl text-[15px] md:text-[16px] leading-7 text-[#56564F]">
                Final price may adjust after walkthrough for unusual scope.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Fast review", "Get a tailored reply from our team."],
                ["Clear scope", "We help map unusual rooms or requests."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[18px] border border-[#E0E1D9] bg-white p-5 shadow-[0_14px_40px_-32px_rgba(0,0,0,0.2)]">
                  <p className="text-sm font-semibold text-[#111]">{title}</p>
                  <p className="font-subtitle mt-2 text-sm leading-6 text-[#5C5C55]">{text}</p>
                </div>
              ))}

              <div className="sm:col-span-2 mt-1 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg" className="shadow-[0_16px_34px_-22px_rgba(232,82,26,0.7)]">
                  Request Custom Quote
                </Button>
                <div className="rounded-[18px] border border-[#F0C3AE] bg-white px-4 py-3 text-sm leading-6 text-[#C74713]">
                  We’ll help shape the right scope before you book.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8521A]">Premium enhancements</p>
              <h2 className="mt-4 text-[clamp(1.55rem,2.6vw,2.35rem)] font-semibold tracking-[-0.02em] text-[#111]">
                Add-ons designed like polished feature cards
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative overflow-hidden rounded-[20px] border border-[#E2E3DC] bg-white p-5 shadow-[0_20px_65px_-42px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8521A]/25 hover:shadow-[0_28px_80px_-42px_rgba(0,0,0,0.28)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E8521A] to-[#F3B391]" />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#F0C3AE] bg-[#FFF1EA] text-sm font-semibold text-[#E8521A] shadow-[0_14px_28px_-22px_rgba(232,82,26,0.35)]">
                    0{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[15px] font-semibold leading-6 text-[#111]">{addon.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-[#66665F]">Optional premium add-on</p>
                      </div>
                      <div className="rounded-full bg-[#111] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_12px_26px_-18px_rgba(0,0,0,0.45)]">
                        +${addon.price}
                      </div>
                    </div>
                    <div className="mt-5 rounded-[14px] border border-[#ECEDE6] bg-[#F7F8F3] px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A82]">Available with booking</p>
                      <p className="mt-1 text-sm leading-6 text-[#56564F]">Mention this add-on when requesting your visit.</p>
                      <span className="hidden">
                        Add to visit →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A8A]">FAQ</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold tracking-[-0.04em] text-[#111]">
              Questions we hear most often
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const active = activeFaq === index;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="rounded-[22px] border border-black/5 bg-white px-5 md:px-6 py-4 shadow-[0_16px_40px_-26px_rgba(0,0,0,0.16)]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(active ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="text-base md:text-[17px] font-semibold text-[#111]">{faq.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform ${
                        active ? "rotate-45 bg-[#111] text-white" : "bg-[#FAFAF8] text-[#111]"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-[15px] leading-7 text-[#666]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
