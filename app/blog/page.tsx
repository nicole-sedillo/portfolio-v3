import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Nicole Sedillo",
  description: "Thoughts on front-end development, design, and building things on the web.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Nicole Sedillo
        </Link>
        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/#projects" className="transition [&:hover]:text-[#5EEAD4]">Projects</Link>
          <Link href="/#about" className="transition [&:hover]:text-[#5EEAD4]">About</Link>
          <Link href="/blog" className="transition [&:hover]:text-[#5EEAD4]">Blog</Link>
          <Link href="/#contact" className="transition [&:hover]:text-[#5EEAD4]">Contact</Link>
        </div>
      </nav>

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