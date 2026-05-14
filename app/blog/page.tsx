"use client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "10 Tips for Maintaining a Fresh Home Every Day",
    category: "Home Care",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    excerpt: "Discover the simple daily habits that keep your home smelling great and looking spotless between deep cleans."
  },
  {
    title: "Why Eco-Friendly Cleaning is Better for Your Family",
    category: "Health",
    date: "May 08, 2026",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&q=80",
    excerpt: "Explore the benefits of using non-toxic cleaning products and how they impact your indoor air quality."
  },
  {
    title: "The Ultimate Guide to Office Productivity & Cleanliness",
    category: "Workspace",
    date: "May 02, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    excerpt: "A clean desk is a productive desk. Learn how to organize your workspace for maximum efficiency."
  },
  {
    title: "Spring Cleaning Checklist: The Complete Guide",
    category: "Cleaning Tips",
    date: "April 25, 2026",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    excerpt: "Everything you need to know about deep cleaning your home from top to bottom this spring season."
  },
  {
    title: "How to Remove Tough Stains from Your Upholstery",
    category: "DIY",
    date: "April 18, 2026",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    excerpt: "Don't panic! Here's a step-by-step guide to removing common spills and stains from your favorite sofa."
  },
  {
    title: "The Benefits of Hiring Professional Cleaners",
    category: "Lifestyle",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&q=80",
    excerpt: "Reclaim your time and energy by trusting experts to handle your home maintenance needs."
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      <PageHero 
        title="Journal & Tips"
        subtitle="Insights, expert advice, and professional secrets to help you live a cleaner, more organized life."
        image="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1600&q=80"
      />

      {/* Featured Post */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Categories Bar */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
             {['All Posts', 'Cleaning Hacks', 'Sustainability', 'Healthy Living', 'Office Care'].map((cat, i) => (
               <Button 
                 key={i} 
                 variant={i === 0 ? "black" : "outline"} 
                 size="sm"
                 className={i === 0 ? "shadow-xl" : "border-gray-100 !text-gray-500 hover:!border-[#111] hover:!text-[#111]"}
               >
                 {cat}
               </Button>
             ))}
          </div>

          <div className="relative h-[500px] md:h-[700px] rounded-[60px] overflow-hidden group cursor-pointer shadow-3xl mb-24">
            <Image 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80"
              alt="Featured Post"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
            <div className="absolute bottom-16 left-16 right-16 text-white">
              <span className="bg-[#E8521A] text-[10px] font-black tracking-[0.4em] uppercase px-6 py-3 rounded-full mb-8 inline-block shadow-2xl">
                Editor&apos;s Pick
              </span>
              <h2 className="text-5xl md:text-8xl font-black mb-8 max-w-4xl tracking-tighter leading-[0.95]" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                How OmahResik is <br /> <span className="text-[#E8521A]">Revolutionizing</span> <br /> the Industry
              </h2>
              <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white shadow-xl">
                  <Image src="https://i.pravatar.cc/100?img=12" alt="Author" fill className="object-cover" />
                </div>
                <div>
                   <p className="font-black uppercase tracking-widest text-[10px]">Written By</p>
                   <p className="text-xl font-bold">Ronald Chen • 12 min read</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="relative h-[450px] rounded-[48px] overflow-hidden mb-10 shadow-2xl">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/95 backdrop-blur-md text-[#111] text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">{post.date}</p>
                  <h3 className="text-3xl font-black text-[#111] leading-tight group-hover:text-[#E8521A] transition-colors" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-500 font-medium leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4">
                    <Button href={`/blog/${idx}`} variant="outline" size="sm" showArrow className="!border-none !px-0 hover:!translate-x-2">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-32 flex justify-center items-center gap-4">
            <Button variant="black" className="w-16 h-16 !p-0">1</Button>
            <Button variant="outline" className="w-16 h-16 !p-0 !border-gray-100 !text-gray-400 hover:!border-[#111] hover:!text-[#111]">2</Button>
            <Button variant="outline" className="w-16 h-16 !p-0 !border-gray-100 !text-gray-400 hover:!border-[#111] hover:!text-[#111]">3</Button>
            <div className="w-8" />
            <Button variant="outline" showArrow className="px-10 h-16 border-2 !border-[#111]">Next Page</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#111] py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#E8521A] rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(232,82,26,0.3)]">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
              Fresh hacks for <br /> your inbox.
            </h2>
            <p className="text-white/80 text-xl font-medium mb-16 max-w-2xl mx-auto">
              Join 15,000+ readers who receive our curated selection of professional cleaning secrets every Monday.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your primary email" 
                className="flex-1 bg-white border-none rounded-3xl px-8 py-6 text-[#111] placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-bold"
              />
              <Button 
                variant="black" 
                showArrow
                className="px-10 py-6"
                onClick={() => {}}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
