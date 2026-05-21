import { blogPosts } from "@/components/blog/blog-data";
import BlogIndex from "@/components/blog/BlogIndex";

const POSTS_PER_PAGE = 3;

type BlogPageProps = {
  searchParams?: {
    page?: string;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const rawPage = Number(searchParams?.page ?? "1");
  const initialPage = Number.isFinite(rawPage) ? Math.min(Math.max(1, rawPage), totalPages) : 1;

  return <BlogIndex initialPage={initialPage} />;
}
