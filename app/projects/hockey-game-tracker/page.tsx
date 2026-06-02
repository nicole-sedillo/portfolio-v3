import HockeyAppPreview from "@/components/hockey/HockeyAppPreview";

export default function HockeyGameTrackerPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 transition-all duration-200 [&:hover]:border-[#5EEAD4] [&:hover]:text-[#5EEAD4] [&:hover]:bg-[#5EEAD4]/5"
        >
          <span className="transition [&:hover]:-translate-x-0.5">←</span>
          Back to home
        </a>

        <p className="mb-4 text-sm font-medium text-[#5EEAD4]">Case Study</p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Hockey Game Tracker
        </h1>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[#5EEAD4]/10 px-3 py-1 text-[#5EEAD4]">
            In Progress
          </span>
          <span className="text-zinc-500">
            Actively being developed
          </span>
        </div>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A lightweight web app I’m currently building to help users browse hockey
          matchups, filter by league, and quickly identify the most interesting game
          of the night.
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
            Most sports apps present schedules as long lists of games, leaving users to sort through the information themselves. I wanted to explore a different approach by creating an experience that helps users quickly decide what to watch instead of simply displaying every game equally.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Role</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This is an ongoing personal project where I am responsible for product planning, front-end development, API integration, and user experience design.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            The project allows me to explore how data can be transformed into a more intentional and decision-focused experience for sports fans.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I've Built</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                Multi-League Support
              </h3>
              <p className="mt-2 text-zinc-400">
                Integrated live schedule data from NHL and PWHL APIs, allowing users to browse games across multiple leagues.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Game Discovery
              </h3>
              <p className="mt-2 text-zinc-400">
                Implemented league filtering and matchup views to help users quickly navigate available games.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Featured Matchup Experience
              </h3>
              <p className="mt-2 text-zinc-400">
                Developed a "Best Game Tonight" feature that highlights a recommended matchup instead of presenting all games with equal emphasis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Dynamic Data Rendering
              </h3>
              <p className="mt-2 text-zinc-400">
                Built reusable components that dynamically render game information from live API data.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Design Approach</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            My focus has been on reducing visual clutter and prioritizing the information users care about most.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            Rather than displaying raw schedule data, I wanted the interface to help answer a simple question:
          </p>
          <p className="mt-4 text-xl font-semibold text-white">
            "What game should I watch tonight?"
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            This led to a design that emphasizes one featured matchup while keeping the remaining games easy to browse and compare.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I've Learned</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project has helped me think beyond displaying API data and focus more on product thinking and user decision-making.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            As new features are added, I've gained experience balancing technical implementation with usability, information hierarchy, and interface design.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Next Improvements</h2>

          <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
            <li>• Refine the matchup recommendation logic to create more meaningful "Best Game" selections</li>
            <li>• Add favourite teams and personalized viewing preferences</li>
            <li>• Improve loading, error, and empty states for a more resilient user experience</li>
            <li>• Gather feedback from hockey fans to better understand how they discover and choose games</li>
            <li>• Continue iterating on new features and interface improvements based on user needs and real-world usage</li>
          </ul>
        </section>
      </section>
    </main>
  );
}