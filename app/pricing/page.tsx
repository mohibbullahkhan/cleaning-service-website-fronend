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
    accent: "from-white via-[#FAFAF7] to-[#F3F1EC]",
  },
  {
    name: "Standard",
    price: 89,
    period: "per visit",
    label: "Most popular for busy homes",
    features: ["All Essentials features", "Inside microwave cleaning", "Deep vacuuming", "Bed making", "Cabinet exterior wiping", "Window sills cleaning"],
    bookingService: "deepCleaning" as const,
    accent: "from-[#111111] via-[#171717] to-[#232323]",
    popular: true,
  },
  {
    name: "Premium",
    price: 159,
    period: "per visit",
    label: "For larger or detailed spaces",
    features: ["All Standard features", "Inside oven cleaning", "Baseboard washing", "Interior window cleaning", "Upholstery vacuuming", "Wall spot cleaning"],
    bookingService: "commercial" as const,
    accent: "from-white via-[#FCFCFA] to-[#F4F3EF]",
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

      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28 -mt-14">
        <div className="max-w-7xl mx-auto grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex h-full flex-col rounded-[28px] border p-5 md:p-6 lg:p-7 shadow-[0_28px_90px_-42px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${
                plan.popular ? "border-white/10 bg-[#111] text-white" : "border-black/5 bg-white text-[#111]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E8521A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white shadow-lg">
                  Most popular
                </div>
              )}

              <div className={`rounded-[22px] bg-gradient-to-br ${plan.accent} p-4 md:p-5`}>
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#8A8A8A]">{plan.label}</p>
                <h3 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.04em]">{plan.name}</h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-4xl font-semibold tracking-[-0.04em]">${plan.price}</span>
                  <span className={`pb-1 text-sm font-medium ${plan.popular ? "text-white/55" : "text-[#777]"}`}>{plan.period}</span>
                </div>
              </div>

              <div className="mt-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                          plan.popular ? "bg-white/10 text-white" : "bg-black text-white"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={`text-sm leading-6 ${plan.popular ? "text-white/74" : "text-[#555]"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-black/5">
                <BookButton
                  service={plan.bookingService}
                  variant={plan.popular ? "outline" : "black"}
                  className={`w-full ${plan.popular ? "!border-white/14 !bg-white/5 !text-white hover:!bg-white hover:!text-[#111]" : ""}`}
                  showArrow
                >
                  Book {plan.name}
                </BookButton>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto rounded-[34px] border border-black/5 bg-[linear-gradient(135deg,#111_0%,#171717_55%,#221c19_100%)] p-7 md:p-10 lg:p-12 text-white shadow-[0_35px_110px_-44px_rgba(0,0,0,0.5)] overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(232,82,26,0.12),transparent_26%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_0.95fr] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Need something custom?</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.04em] leading-[1.1] text-white">
                We can tailor a quote for larger or specialized spaces.
              </h2>
              <p className="font-subtitle mt-5 max-w-2xl text-[15px] md:text-[16px] leading-7 text-white/72">
                Final price may adjust after walkthrough for unusual scope.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Fast review", "Get a tailored reply from our team."],
                ["Clear scope", "We help map unusual rooms or requests."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[22px] border border-white/10 bg-white/6 p-5">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="font-subtitle mt-2 text-sm leading-6 text-white/68">{text}</p>
                </div>
              ))}

              <div className="sm:col-span-2 mt-1 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="outline" size="lg" className="!border-white/14 !bg-white/5 !text-white hover:!bg-white hover:!text-[#111]">
                  Request Custom Quote
                </Button>
                <div className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/72">
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
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A8A]">Premium enhancements</p>
              <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold tracking-[-0.04em] text-[#111]">
                Add-ons designed like polished feature cards
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group rounded-[22px] border border-black/5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFBFA_100%)] p-4 shadow-[0_16px_45px_-28px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/10 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#111] text-white text-base shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)]">
                    {addon.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold leading-6 text-[#111] md:text-[15px]">{addon.name}</h3>
                        <p className="mt-1 text-xs leading-5 text-[#777]">Optional premium add-on</p>
                      </div>
                      <div className="rounded-full bg-[#111] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_10px_24px_-18px_rgba(0,0,0,0.5)]">
                        +${addon.price}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-black/5 pt-3">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#A0A0A0]">Available with booking</p>
                      <span className="text-xs font-semibold text-[#111] transition-transform group-hover:translate-x-1">
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
