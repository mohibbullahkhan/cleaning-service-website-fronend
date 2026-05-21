import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookButton from "@/components/booking/BookButton";
import { blogPosts } from "@/components/blog/blog-data";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-[#FAFAF8]">
      <section className="px-6 md:px-12 lg:px-24 pt-8 md:pt-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#666] transition-colors hover:text-[#111]">
            <span className="text-base">&larr;</span>
            Back to blog
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-8 md:py-10">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_340px] items-start">
          <article className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_30px_110px_-45px_rgba(0,0,0,0.2)]">
            <div className="relative aspect-[16/9]">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                <div className="inline-flex rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em]">
                  Editor&apos;s pick
                </div>
                <h1 className="mt-4 max-w-4xl text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.045em] leading-[1.05]">
                  {post.title}
                </h1>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/72">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                  <span>&bull;</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-8 lg:px-10 py-8 md:py-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#111] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white">
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-[#FAFAF7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-subtitle mt-6 max-w-3xl text-[16px] md:text-[17px] leading-8 text-[#666]">
                {post.excerpt}
              </p>

              <div className="mt-8 grid gap-5">
                {post.content.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-[16px] md:text-[17px] leading-8 text-[#444]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-8 space-y-5">
            <div className="rounded-[26px] border border-black/5 bg-white p-5 shadow-[0_20px_70px_-38px_rgba(0,0,0,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A8A]">Article info</p>
              <div className="mt-4 space-y-3 text-sm text-[#555]">
                <div className="flex items-center justify-between gap-4">
                  <span>Author</span>
                  <span className="font-semibold text-[#111]">{post.author}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Category</span>
                  <span className="font-semibold text-[#111]">{post.category}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Reading time</span>
                  <span className="font-semibold text-[#111]">{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-black/5 bg-[linear-gradient(135deg,#111_0%,#171717_60%,#221c19_100%)] p-5 text-white shadow-[0_24px_70px_-36px_rgba(0,0,0,0.35)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/45">Share</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {["X", "In", "Copy"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="rounded-[16px] border border-white/10 bg-white/6 px-3 py-3 text-sm font-semibold text-white/88 transition-colors hover:bg-white hover:text-[#111]"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-[18px] border border-white/10 bg-white/6 p-4 text-sm leading-7 text-white/72">
                Keep reading, then book a premium cleaning visit when you&apos;re ready.
              </div>
              <div className="mt-5">
                <BookButton variant="outline" className="!border-white/14 !bg-white/5 !text-white hover:!bg-white hover:!text-[#111]">
                  Open Booking Flow
                </BookButton>
              </div>
            </div>

            <div className="rounded-[26px] border border-black/5 bg-white p-5 shadow-[0_20px_70px_-38px_rgba(0,0,0,0.18)]">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A8A]">Reading tip</p>
              <p className="mt-4 text-[15px] leading-7 text-[#666]">
                Use the notes in each paragraph as a quick checklist for your own space.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A8A]">Related posts</p>
              <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold tracking-[-0.04em] text-[#111]">
                Keep reading
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-[#111] transition-colors hover:text-[#E8521A]">
              View all posts
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-[0_20px_60px_-34px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8A8A8A]">
                    {relatedPost.category}
                  </span>
                  <h3 className="mt-3 text-lg md:text-xl font-semibold leading-tight tracking-[-0.03em] text-[#111] group-hover:text-[#E8521A] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#666] line-clamp-3">{relatedPost.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
