import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import navbar from "@/components/Navbar";
import Navbar from "@/components/Navbar";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} | Nicole Sedillo`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="min-h-screen relative bg-[#0B0B0B] text-white">
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="mb-8 inline-block text-sm text-zinc-500 transition [&:hover]:text-[#5EEAD4]"
        >
          ← Back to Blog
        </Link>

        <p className="mb-2 text-sm text-zinc-500">{post.date}</p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-zinc max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}