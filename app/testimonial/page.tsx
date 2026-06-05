"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import BookButton from "@/components/booking/BookButton";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  loc: string;
  text: string;
  rating: number;
  date: string;
  type: "Home" | "Office" | "Deep Clean";
  img: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    loc: "Jenangan, Ponorogo",
    text: "OmahResik changed my life. I come home to a sanctuary every week. The attention to detail is truly unmatched.",
    rating: 5,
    date: "May 2024",
    type: "Home",
    img: "3",
  },
  {
    id: 2,
    name: "Mike Thompson",
    loc: "Surakarta",
    text: "Best office cleaning we've ever had. Reliable and professional. Our team loves the fresh environment.",
    rating: 5,
    date: "Apr 2024",
    type: "Office",
    img: "12",
  },
  {
    id: 3,
    name: "Emily Davis",
    loc: "Madiun",
    text: "The deep clean was incredibly thorough. Every corner was spotless! I didn't even know some of these spots could be so clean.",
    rating: 5,
    date: "Mar 2024",
    type: "Deep Clean",
    img: "5",
  },
  {
    id: 4,
    name: "David Wilson",
    loc: "Ponorogo",
    text: "Moving is stressful, but OmahResik made the move-out cleaning effortless. Highly recommend!",
    rating: 5,
    date: "Feb 2024",
    type: "Home",
    img: "8",
  },
  {
    id: 5,
    name: "Jessica Alba",
    loc: "Magetan",
    text: "Exceptional service every time. They are always on time and very professional.",
    rating: 4,
    date: "Jan 2024",
    type: "Home",
    img: "15",
  },
  {
    id: 6,
    name: "Chris Evans",
    loc: "Semarang",
    text: "My office has never looked better. Professional team and great communication.",
    rating: 5,
    date: "Dec 2023",
    type: "Office",
    img: "22",
  },
  {
    id: 7,
    name: "Anna Kendrick",
    loc: "Yogyakarta",
    text: "Truly detailed deep clean. Worth every penny. I will definitely book them again.",
    rating: 5,
    date: "Nov 2023",
    type: "Deep Clean",
    img: "33",
  },
  {
    id: 8,
    name: "Robert Downey",
    loc: "Kediri",
    text: "Great service and friendly staff. They did an amazing job with my kitchen.",
    rating: 5,
    date: "Oct 2023",
    type: "Home",
    img: "44",
  },
  {
    id: 9,
    name: "Scarlett Joh",
    loc: "Sidoarjo",
    text: "I'm very picky with cleaning, but they exceeded my expectations. Fantastic!",
    rating: 5,
    date: "Sep 2023",
    type: "Deep Clean",
    img: "48",
  },
];

export default function TestimonialPage() {
  const [filter, setFilter] = useState<"All" | Testimonial["type"]>("All");
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const filteredTestimonials = useMemo(
    () =>
      filter === "All"
        ? testimonials
        : testimonials.filter((item) => item.type === filter),
    [filter],
  );

  const toggleExpanded = (id: number) => {
    setExpandedIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <main className="bg-[#FAFAF8]">
      <PageHero
        title="Client Stories"
        subtitle="Real feedback from families and businesses who trust OmahResik to keep their spaces spotless."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
      />

      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { value: "4.9", label: "Verified rating", icon: "★" },
              { value: "2K+", label: "Happy clients", icon: "✦" },
              { value: "98%", label: "Client loyalty", icon: "◎" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex h-full items-center gap-4 rounded-[24px] border border-black/5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFBFA_100%)] p-5 shadow-[0_20px_60px_-34px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#111] text-white shadow-[0_14px_30px_-18px_rgba(0,0,0,0.45)]">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-none tracking-[-0.04em] text-[#111]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#8A8A8A]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-wrap justify-center gap-3 md:gap-4">
            {(["All", "Home", "Office", "Deep Clean"] as const).map((item) => (
              <Button
                key={item}
                variant={filter === item ? "black" : "outline"}
                size="sm"
                onClick={() => setFilter(item)}
                className={
                  filter === item
                    ? "shadow-[0_14px_30px_-20px_rgba(0,0,0,0.4)]"
                    : "!border-black/10 !text-[#555]"
                }
              >
                {item}
              </Button>
            ))}
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {filteredTestimonials.map((testimonial, index) => {
              const expanded = expandedIds.includes(testimonial.id);

              return (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="flex h-full flex-col rounded-[26px] border border-black/5 bg-white p-5 md:p-6 shadow-[0_20px_55px_-32px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {Array.from({ length: 5 }).map((_, ratingIndex) => (
                        <span
                          key={ratingIndex}
                          className={
                            ratingIndex < testimonial.rating
                              ? "text-[#F59E0B]"
                              : "text-gray-200"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#AAA]">
                      {testimonial.date}
                    </span>
                  </div>

                  <div className="mt-5 flex-1">
                    <p
                      className={`text-[15px] md:text-[16px] leading-7 text-[#111] ${expanded ? "" : "line-clamp-2"}`}
                    >
                      “{testimonial.text}”
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleExpanded(testimonial.id)}
                      className="mt-4 text-sm font-semibold text-[#111] underline decoration-black/20 underline-offset-4 hover:decoration-black"
                    >
                      {expanded ? "Show less" : "See more"}
                    </button>
                  </div>

                  <div className="mt-6 flex items-center gap-4 border-t border-black/5 pt-5">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-black/5 bg-[#F1F1EE]">
                      <Image
                        src={`https://i.pravatar.cc/100?img=${testimonial.img}`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#111]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#8A8A8A]">
                        {testimonial.loc}
                      </p>
                    </div>
                    <div className="ml-auto rounded-full bg-[#F7F7F4] px-3 py-2 text-xs font-semibold text-[#111]">
                      {testimonial.type}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden rounded-[32px] border border-black/5 bg-[#111] shadow-[0_40px_110px_-42px_rgba(0,0,0,0.5)]"
          >
            <div className="relative aspect-[16/7] max-h-[440px] min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&q=80"
                alt="Video testimonial"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/65 to-[#111]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)]">
                  <div className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[15px] border-l-[#E8521A]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
                  Watch our story
                </p>
                <h2 className="mt-4 max-w-2xl text-white font-semibold tracking-[-0.04em] leading-[1.08]">
                  Behind the scenes of every pristine space.
                </h2>
                <p className="font-subtitle mt-4 max-w-2xl text-[15px] leading-7 text-white">
                  A quick look at the care, consistency, and calm process behind
                  each clean.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-5xl mx-auto rounded-[32px] bg-[linear-gradient(135deg,#EEF5E0_0%,#F8F7F2_100%)] p-8 md:p-10 lg:p-12 text-center shadow-[0_30px_90px_-40px_rgba(0,0,0,0.18)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8A8A8A]">
            Ready to book?
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold tracking-[-0.04em] text-[#111]">
            Be our next happy sanctuary.
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] leading-7 text-[#666] max-w-2xl mx-auto">
            Join the community of thousands who have upgraded their living
            standard with OmahResik.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookButton variant="primary" size="lg" showArrow className="px-8">
              Book Your Visit
            </BookButton>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="!border-black/10"
            >
              Submit a Review
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
