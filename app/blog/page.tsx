import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog | Nicole Sedillo",
  description: "Thoughts on front-end development, design, and building things on the web.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen relative bg-[#0B0B0B] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-3 text-sm font-medium text-[#5EEAD4]">Writing</p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">Blog</h1>
        <p className="mb-12 max-w-xl text-lg text-zinc-400">
          Thoughts on front-end development, building things, and learning in public.
        </p>

        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition [&:hover]:border-[#5EEAD4]"
            >
              <p className="mb-1 text-xs text-zinc-500">{post.date}</p>
              <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-zinc-400">{post.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}