export default function HockeyGameTrackerPage() {
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
          Hockey Game Tracker
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A web app designed to help users quickly browse hockey games,
          filter matchups, and identify the most interesting game of the night.
        </p>

        <div className="mt-10 grid gap-4 border-y border-zinc-800 py-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 text-white">Front-End Developer</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Stack</p>
            <p className="mt-1 text-white">React, Next.js</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-1 text-white">API, UI/UX, Filtering</p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project was built as a way to explore building a
            user-facing application using real-time sports data. The goal
            was to create a simple, intuitive interface that allows users
            to quickly understand what games are happening and which ones
            are worth watching.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Existing sports apps often feel cluttered or overwhelming,
            making it difficult for users to quickly find relevant games.
            I wanted to design a cleaner experience focused on speed,
            clarity, and usability.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Built</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• Game list with filtering by league and matchup</li>
            <li>• “Best game tonight” feature based on simple logic</li>
            <li>• Separation between NHL and PWHL games</li>
            <li>• Clean, responsive UI for browsing</li>
            <li>• Dynamic rendering based on API data</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Takeaway</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project helped me improve my understanding of managing
            dynamic data, designing user-friendly interfaces, and building
            features that feel useful rather than purely technical.
          </p>
        </section>
      </section>
    </main>
  );
}