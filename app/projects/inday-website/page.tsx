export default function IndayWebsitePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-zinc-400 transition hover:text-[#5EEAD4]"
        >
          ← Back to home
        </a>

        <p className="mb-4 text-sm font-medium text-[#5EEAD4]">
          Project
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Inday Website
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A responsive marketing website focused on clean layout,
          brand presentation, and a polished user experience.
        </p>

        <div className="mt-10 grid gap-4 border-y border-zinc-800 py-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 text-white">Front-End Developer</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Stack</p>
            <p className="mt-1 text-white">HTML, CSS, JavaScript</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-1 text-white">Responsive Design, UI</p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project focused on building a clean and modern website
            that highlights branding and content in a visually engaging
            way. The goal was to create a simple, responsive experience
            that works well across devices.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Many small business or brand websites struggle with cluttered
            layouts and inconsistent design. The challenge was to present
            information clearly while maintaining a cohesive visual style.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Built</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• Responsive layout optimized for mobile and desktop</li>
            <li>• Clean visual hierarchy for readability</li>
            <li>• Consistent spacing, typography, and styling</li>
            <li>• Simple navigation for better user flow</li>
            <li>• Polished UI with attention to detail</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Takeaway</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project strengthened my ability to design and implement
            clean, responsive layouts and reinforced the importance of
            simplicity and consistency in front-end development.
          </p>
        </section>
      </section>
    </main>
  );
}