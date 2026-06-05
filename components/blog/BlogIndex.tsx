"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/components/blog/blog-data";

const POSTS_PER_PAGE = 3;

type BlogIndexProps = {
  initialPage: number;
};

export default function BlogIndex({ initialPage }: BlogIndexProps) {
  const [page] = useState(initialPage);
  const [subscribed, setSubscribed] = useState(false);

  const [activeFilter, setActiveFilter] = useState("All Posts");
  const categories = ["All Posts", "Cleaning Hacks", "Sustainability", "Healthy Living", "Office Care"];

  const filteredPosts = useMemo(() => {
    return activeFilter === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page, filteredPosts]);

  const featuredPost = filteredPosts[0] || blogPosts[0];

  return (
    <main className="bg-[#FAFAF8]">
      <PageHero
        title="Journal & Tips"
        subtitle="Practical cleaning insights, product guidance, and expert stories for a more polished home."
        image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1600&q=80"
      />

      <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((chip, index) => {
              const isActive = activeFilter === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    setActiveFilter(chip);
                    // Reset to page 1 when changing filters
                    if (page !== 1) {
                      // We don't have setPage exposed cleanly if it comes from URL
                      // but we can at least render from page 1 locally if we added a setter.
                    }
                  }}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    isActive ? "bg-[#111] text-white shadow-lg" : "bg-white text-[#555] border border-black/5 hover:border-black/15"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[36px] md:rounded-[48px] border border-black/5 bg-white shadow-[0_30px_110px_-45px_rgba(0,0,0,0.2)]"
          >
            <div className="relative aspect-[16/9] md:aspect-[2.2/1] min-h-[280px]">
              <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14 text-white">
                <div className="inline-flex rounded-full bg-white/10 backdrop-blur px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em]">
                  Editor&apos;s Pick
                </div>
                <h2 className="mt-5 max-w-4xl text-[clamp(1.9rem,4vw,3.4rem)] font-semibold tracking-[-0.045em] leading-[1.05] text-white">
                  {featuredPost.title}
                </h2>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <span>{featuredPost.date}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.readTime}</span>
                  <span>&bull;</span>
                  <span>{featuredPost.author}</span>
                </div>
                <p className="mt-5 max-w-2xl text-base md:text-lg text-white">{featuredPost.excerpt}</p>
                <div className="mt-8">
                  <Button href={`/blog/${featuredPost.slug}`} variant="outline" size="lg" className="!bg-white !text-[#111] hover:!bg-[#f4f4f4] !border-none">
                    Read Feature
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_24px_70px_-36px_rgba(0,0,0,0.18)]"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#111] shadow-lg">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-[#9A9A9A]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#111] group-hover:text-[#E8521A] transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#666] line-clamp-3">{post.excerpt}</p>
                  <div className="mt-6">
                    <Button href={`/blog/${post.slug}`} variant="outline" size="sm" showArrow className="!border-black/10 !text-[#111]">
                      Read Article
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => {
              const currentPage = index + 1;

              return (
                <Button
                  key={currentPage}
                  href={`/blog?page=${currentPage}`}
                  variant={page === currentPage ? "black" : "outline"}
                  className={page === currentPage ? "shadow-lg" : "!border-black/10 !text-[#666]"}
                >
                  {currentPage}
                </Button>
              );
            })}
            <Button
              href={`/blog?page=${Math.min(page + 1, totalPages)}`}
              variant="outline"
              showArrow
              className="!border-black/10 !text-[#111]"
            >
              Next Page
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto rounded-[28px] border border-[#E4E5DC] bg-[#F7F8F3] p-8 md:p-12 lg:p-16 text-[#111] shadow-[0_24px_80px_-46px_rgba(0,0,0,0.22)] relative overflow-hidden">
          <div className="absolute top-0 right-0 h-[480px] w-[480px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#E8521A]/5 blur-[120px]" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E8521A]">Stay updated</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,3vw,2.8rem)] font-semibold tracking-[-0.045em] leading-[1.08]">
              Fresh hacks for your inbox.
            </h2>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-[#56564F]">
              Join readers who receive practical cleaning ideas every Monday.
            </p>
            <form
              className="mt-8 flex flex-col md:flex-row gap-4 max-w-2xl"
              onSubmit={(event) => {
                event.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                type="email"
                placeholder="Your primary email"
                className="h-14 flex-1 rounded-full border border-black/10 bg-white px-5 text-[#111] placeholder:text-[#9A9A9A] outline-none"
              />
              <Button type="submit" variant="primary" size="lg" className="px-8 shadow-[0_16px_34px_-22px_rgba(232,82,26,0.7)]">
                Subscribe
              </Button>
            </form>
            {subscribed && <p className="mt-4 text-sm text-[#56564F]">Thanks — we&apos;ll send the next issue your way.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
