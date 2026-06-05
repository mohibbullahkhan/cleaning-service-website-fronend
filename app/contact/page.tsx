"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import BookButton from "@/components/booking/BookButton";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "Residential Cleaning",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const faqs = [
    { q: "How quickly can I get a booking?", a: "We typically respond within 2 business hours and can often schedule same-week service." },
    { q: "Do I need to be home for the cleaning?", a: "Not necessarily. Many clients provide secure access instructions and return to a freshly cleaned space." },
    { q: "What is your cancellation policy?", a: "You can reschedule or cancel up to 24 hours before your appointment without any penalty." },
  ];

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bg-[#FAFAF8]">
      <PageHero
        title="Contact OmahResik"
        subtitle="Send us a quick message or open the booking flow. We'll guide you from there."
        image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80"
      />

      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[0.92fr_1.08fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-[28px] border border-black/5 bg-white p-6 md:p-7 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.16)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8A8A8A]">Let&apos;s talk</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold tracking-[-0.04em] leading-[1.1] text-[#111]">
                A clean home starts with a clear conversation.
              </h2>
              <p className="font-subtitle mt-5 max-w-xl text-[15px] md:text-[16px] leading-7 text-[#666]">
                Whether you need a one-time visit or recurring support, we’ll help you choose the right service.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { label: "Priority hotline", value: "+62 812-3456-7890" },
                { label: "Business email", value: "hello@omahresik.com" },
                { label: "Studio location", value: "Ponorogo, East Java" },
              ].map((item) => (
                <div key={item.label} className="rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_16px_55px_-35px_rgba(0,0,0,0.14)]">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A8A]">{item.label}</p>
                  <p className="mt-3 text-[15px] md:text-[16px] font-semibold text-[#111]">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-[#E4E5DC] bg-[#F7F8F3] p-6 md:p-7 text-[#111] shadow-[0_24px_80px_-46px_rgba(0,0,0,0.22)] overflow-hidden relative">
              <div className="absolute top-0 right-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#E8521A]/5 blur-[80px]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E8521A]">Need something faster?</p>
                <h3 className="mt-4 text-[clamp(1.5rem,2.2vw,2rem)] font-semibold tracking-[-0.03em] leading-[1.15]">
                  Open the booking flow and pick a service instantly.
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BookButton variant="primary" className="shadow-[0_16px_34px_-22px_rgba(232,82,26,0.7)]">
                    Book Now
                  </BookButton>
                  <Button href="/pricing" variant="outline" className="!border-[#E8521A]/30 !bg-white !text-[#E8521A] hover:!bg-[#E8521A] hover:!text-white">
                    View Pricing
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[30px] border border-black/5 bg-white p-5 md:p-6 lg:p-7 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.16)]"
          >
            <div className="relative overflow-hidden rounded-[24px] bg-[#FAFAF8] p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,82,26,0.08),transparent_34%)]" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="relative py-14 text-center"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white text-xl shadow-[0_18px_40px_-20px_rgba(0,0,0,0.45)]">
                      ✓
                    </div>
                    <h2 className="text-2xl md:text-[2rem] font-semibold tracking-[-0.03em] text-[#111]">Thank you</h2>
                    <p className="font-subtitle mt-4 max-w-md mx-auto text-[15px] leading-7 text-[#666]">
                      We&apos;ve received your message and will reach out shortly.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Send Another
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative space-y-4"
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        { label: "Full name", key: "name", type: "text", placeholder: "John Doe" },
                        { label: "Email address", key: "email", type: "email", placeholder: "john@omahresik.com" },
                        { label: "Phone", key: "phone", type: "tel", placeholder: "+62 812..." },
                        { label: "Preferred date", key: "date", type: "date", placeholder: "" },
                      ].map((field) => (
                        <label key={field.key} className="grid gap-2">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">{field.label}</span>
                          <input
                            type={field.type}
                            required
                            value={(formState as Record<string, string>)[field.key]}
                            onChange={(event) => setFormState((current) => ({ ...current, [field.key]: event.target.value }))}
                            placeholder={field.placeholder}
                            className="h-13 rounded-[16px] border border-black/10 bg-white px-4 text-[#111] outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(17,17,17,0.04)]"
                          />
                        </label>
                      ))}
                    </div>

                    <label className="grid gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">Service</span>
                      <select
                        value={formState.service}
                        onChange={(event) => setFormState((current) => ({ ...current, service: event.target.value }))}
                        className="h-13 rounded-[16px] border border-black/10 bg-white px-4 text-[#111] outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(17,17,17,0.04)]"
                      >
                        <option>Residential Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Move In / Move Out</option>
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8A8A8A]">Your message</span>
                      <textarea
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
                        placeholder="Tell us about your space, timing, or special request."
                        className="rounded-[18px] border border-black/10 bg-white px-4 py-4 text-[#111] outline-none transition focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(17,17,17,0.04)] resize-none"
                      />
                    </label>

                    <div className="grid gap-3 rounded-[20px] border border-black/5 bg-[#FCFCFA] p-4 text-sm text-[#666]">
                      <p>Flexible scheduling across the day</p>
                      <p>Fast response from our support team</p>
                      <p>No payment due today. Your card is only collected after the booking is confirmed by our team.</p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button type="submit" variant="primary" showArrow className="flex-1">
                        Request a Quote
                      </Button>
                      <Button href="/booking" variant="outline" className="flex-1 !border-black/10 !text-[#111]">
                        Open Booking
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8A8A8A]">Quick help</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold tracking-[-0.04em] text-[#111]">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const active = activeAccordion === index;

              return (
                <div key={faq.q} className="rounded-[22px] border border-black/5 bg-white px-5 md:px-6 shadow-[0_16px_55px_-36px_rgba(0,0,0,0.18)]">
                  <button
                    type="button"
                    onClick={() => setActiveAccordion(active ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base md:text-[17px] font-semibold text-[#111]">{faq.q}</span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-transform ${
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
                        <p className="pb-5 text-[15px] leading-7 text-[#666]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
