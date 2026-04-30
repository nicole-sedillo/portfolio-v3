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

        <div className="mt-6 flex gap-6">
          <a
            href="https://www.inday.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5EEAD4] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#4dd4c4]"
          >
            Visit Live Site →
          </a>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A responsive marketing website focused on clean layout,
          brand presentation, and a polished user experience.
        </p>

        <p className="mt-4 text-sm text-zinc-500">
          Live production website. Some content and layout details may have changed
          since development. Built on Squarespace and customized with JavaScript and CSS to extend
          layout flexibility and improve the overall user experience.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111]">
  <div className="border-b border-zinc-800 px-6 py-4">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-white">Inday</p>

      <div className="flex gap-4 text-xs text-zinc-500">
        <span>Menu</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  </div>

  <div className="grid gap-6 p-6 md:grid-cols-2">
    <div>
      <p className="text-sm font-medium text-[#5EEAD4]">
        Responsive Website
      </p>

      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Customized beyond the default template.
      </h3>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        A Squarespace website extended with custom CSS and JavaScript to improve
        layout flexibility, navigation, and visual polish.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="h-28 rounded-xl bg-zinc-800" />
      <div className="h-28 rounded-xl bg-zinc-700" />
      <div className="h-28 rounded-xl bg-zinc-700" />
      <div className="h-28 rounded-xl bg-zinc-800" />
    </div>
  </div>
</div>

        <div className="mt-10 grid gap-4 border-y border-zinc-800 py-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 text-white">Front-End Developer</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Stack</p>
            <p className="mt-1 text-white">
              Squarespace, Custom CSS, JavaScript
            </p>
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
          <h2 className="text-2xl font-semibold">The Goal</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Many small business or brand websites struggle with cluttered
            layouts and inconsistent design. The challenge was to present
            information clearly while maintaining a cohesive visual style.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Built</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• Customized Squarespace templates using CSS and JavaScript</li>
            <li>• Built responsive layouts for mobile and desktop</li>
            <li>• Improved navigation and content structure</li>
            <li>• Enhanced UI components beyond default platform limitations</li>
          </ul>
        </section>

        <section className="mt-12">
        <h2 className="text-2xl font-semibold">What I Would Improve Next</h2>

        <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
          <li>• Continue refining mobile spacing and page transitions</li>
          <li>• Improve page speed by auditing images and third-party scripts</li>
          <li>• Add stronger SEO metadata for key pages</li>
          <li>• Create more reusable content sections for future updates</li>
        </ul>
      </section>

        <section className="mt-12">
        <h2 className="text-2xl font-semibold">What I learned</h2>

        <p className="mt-4 leading-8 text-zinc-400">
          This project taught me how to work within platform constraints while still
          delivering a polished user experience. By extending Squarespace with custom
          CSS and JavaScript, I was able to move beyond template limitations and build
          more flexible, intentional layouts.
        </p>
      </section>
      </section>
    </main>
  );
}