import HockeyAppPreview from "@/components/hockey/HockeyAppPreview";

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

        <p className="mb-4 text-sm font-medium text-[#5EEAD4]">Case Study</p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Hockey Game Tracker
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A lightweight web app for browsing hockey matchups, filtering by
          league, and quickly identifying the most interesting game of the
          night.
        </p>

        <HockeyAppPreview />

        <p className="mt-4 text-sm text-zinc-500">
          This is a simplified recreation of the app interface using sample
          data.
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
          <h2 className="text-2xl font-semibold">The Idea</h2>

          <p className="mt-4 leading-8 text-zinc-400">
            Most sports apps present schedules as long, cluttered lists without
            helping users decide what to watch. I wanted to create a simpler
            interface that highlights the most relevant matchup instead of just
            displaying everything equally.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• League-based filtering for NHL and PWHL games</li>
            <li>• “Best Game Tonight” highlight logic</li>
            <li>• Clean matchup cards with minimal UI clutter</li>
            <li>• Dynamic rendering based on API data</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Would Improve Next</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• Add stronger matchup scoring logic for the “Best Game” feature</li>
            <li>• Improve empty states when no games are available</li>
            <li>• Add favourite team preferences</li>
            <li>• Add loading and error states for API requests</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I Learned</h2>

          <p className="mt-4 leading-8 text-zinc-400">
            This project helped me think beyond displaying API data and focus on
            how users make decisions. By highlighting one recommended matchup
            and keeping the interface simple, I practiced turning raw schedule
            data into a more useful product experience.
          </p>
        </section>
      </section>
    </main>
  );
}