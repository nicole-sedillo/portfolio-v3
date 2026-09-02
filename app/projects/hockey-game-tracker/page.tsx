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

        <div className="mt-6 flex gap-6">
          <a
            href="https://puckbook.nicolesedillo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#5EEAD4] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#4dd4c4]"
          >
            Visit Live Site →
          </a>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-[#5EEAD4]/10 px-3 py-1 text-[#5EEAD4]">
            In Progress
          </span>
          <span className="text-zinc-500">
            V1 is out and live, but I’m continuing to iterate on the design and add new features.
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
            <p className="mt-1 text-white">Full-Stack Developer</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Stack</p>
            <p className="mt-1 text-white">React, Next.js, TypeScript, Supabase, Tailwind CSS</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-1 text-white">API Integration, Authentication, UI/UX, Responsive Design</p>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">The Idea</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Most sports apps present schedules as long lists of games, leaving users to sort through the information themselves. I wanted to explore a different approach by creating an experience that helps users quickly decide what to watch instead of simply displaying every game equally. Puckbook brings NHL and PWHL games into one experience, combining game discovery with features like a recommended matchup and calendar-based browsing.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Role</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This is an ongoing personal project where I am responsible for product planning, full-stack development, API integration, authentication, UI/UX, and deployment.

I built the application with Next.js and React, integrated live hockey data from multiple APIs, implemented authentication and protected functionality with Supabase, and deployed the application to production with Vercel.

The project allows me to explore how live sports data can be transformed into a more intentional and decision-focused experience for fans while continuing to build my experience with production-ready web applications.
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
                Integrated live schedule data from NHL and PWHL APIs, allowing users to browse games across multiple leagues from a unified interface.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Game Discovery
              </h3>
              <p className="mt-2 text-zinc-400">
                Implemented league filtering and matchup views to help users quickly navigate upcoming and recent games.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Featured Matchup Experience
              </h3>
              <p className="mt-2 text-zinc-400">
                Developed a <strong>"Best Game Tonight"</strong> feature that highlights a recommended matchup instead of presenting every game with equal emphasis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Interactive Game Calendar
              </h3>
              <p className="mt-2 text-zinc-400">
                Built a dedicated calendar experience that lets users browse games by date and navigate between months, with dynamic loading and error states for schedule data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Game Details &amp; Results
              </h3>
              <p className="mt-2 text-zinc-400">
                Expanded game views to surface relevant matchup information including <strong>scores, game status, goal scorers, broadcast information, and playoff series context</strong> when available.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                User Authentication
              </h3>
              <p className="mt-2 text-zinc-400">
                Integrated <strong>Supabase Auth</strong> to support account creation, email confirmation, login, logout, and persistent authenticated sessions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Protected User Profiles
              </h3>
              <p className="mt-2 text-zinc-400">
                Implemented authenticated routing for user profile functionality, restricting protected content to signed-in users while redirecting unauthenticated visitors appropriately.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Dynamic Data &amp; Reusable Components
              </h3>
              <p className="mt-2 text-zinc-400">
                Built reusable React components that transform live API responses into consistent game cards and other UI elements across NHL and PWHL data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Responsive Navigation &amp; UI
              </h3>
              <p className="mt-2 text-zinc-400">
                Created responsive navigation and mobile-friendly layouts so core game discovery, calendar, authentication, and profile features remain accessible across screen sizes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Production Deployment
              </h3>
              <p className="mt-2 text-zinc-400">
                Deployed the Next.js application through Vercel with production environment configuration, Supabase authentication redirects, and a custom puckbook.nicolesedillo.com subdomain.
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
            This led to a clear information hierarchy that emphasizes one featured matchup while keeping the full schedule easy to browse and compare. As the project has expanded, I've carried this approach into features like calendar-based browsing, authentication, and responsive navigation to keep the experience focused as functionality grows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What I've Learned</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project has helped me move beyond simply consuming and displaying API data and think more holistically about how a production web application is designed, built, and maintained.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            I've gained hands-on experience integrating multiple external APIs, working with dynamic data and application state, implementing authentication and protected routes with Supabase, and deploying a Next.js application to production.
          </p>
          <p className="mt-4 leading-8 text-zinc-400">
            It has also strengthened my product thinking by requiring me to balance technical implementation with usability, information hierarchy, responsive design, and the needs of the end user.
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