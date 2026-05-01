const projects = [
  {
    title: "Internal Resource Portal",
    description:
      "A centralized platform for managing resources, announcements, and support workflows across multiple locations.",
    tags: ["Next.js", "React", "Role-Based Access"],
    href: "/projects/internal-resource-portal",
    eyebrow: "Internal Tool",
    type: "portal",
  },
  {
    title: "Hockey Game Tracker",
    description:
      "A lightweight app for browsing hockey matchups, filtering by league, and highlighting the best game of the night.",
    tags: ["React", "API Integration", "UI/UX"],
    href: "/projects/hockey-game-tracker",
    eyebrow: "Product App",
    type: "hockey",
  },
  {
    title: "Inday Website",
    description:
      "A responsive marketing website built on Squarespace and extended with custom JavaScript and CSS.",
    tags: ["Squarespace", "Custom CSS", "JavaScript"],
    href: "/projects/inday-website",
    eyebrow: "Live Website",
    type: "inday",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0B] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Nicole Sedillo
        </a>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="transition [&:hover]:text-[#5EEAD4]">
            Projects
          </a>
          <a href="#about" className="transition [&:hover]:text-[#5EEAD4]">
            About
          </a>
          <a href="#contact" className="transition [&:hover]:text-[#5EEAD4]">
            Contact
          </a>
        </div>
      </nav>

      <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-[#5EEAD4]/10 blur-3xl" />

        <p className="mb-5 text-sm font-medium text-[#5EEAD4]">
          Front-End Developer
        </p>

        <h1 className="relative max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          I build clean, structured interfaces for real-world workflows.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I’m focused on product UI, internal tools, and thoughtful web
          experiences that make complex information easier to use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#5EEAD4] px-5 py-3 text-sm font-semibold text-black transition [&:hover]:scale-[1.03] [&:hover]:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-800 px-5 py-3 text-sm font-semibold text-white transition [&:hover]:border-[#5EEAD4] [&:hover]:text-[#5EEAD4]"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Currently building: Hockey Game Tracker 🏒
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-[#5EEAD4]">
            Selected Work
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Projects that show product thinking, UI detail, and real-world
            constraints.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <a
              href={project.href}
              key={project.title}
              className="group flex min-h-[300px] flex-col rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition-all duration-300 ease-out [&:hover]:-translate-y-1 [&:hover]:border-[#5EEAD4] [&:hover]:shadow-xl [&:hover]:shadow-[#5EEAD4]/10"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {project.eyebrow}
              </p>

               <div className="mb-6 mt-6 h-32 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 relative">

          {/* PORTAL */}
          {project.type === "portal" && (
            <div className="absolute inset-3 grid grid-cols-3 gap-2">
              <div className="rounded bg-zinc-800" />
              <div className="rounded bg-zinc-700" />
              <div className="rounded bg-zinc-800" />
              <div className="col-span-2 rounded bg-zinc-700" />
              <div className="rounded bg-zinc-800" />
            </div>
          )}

          {/* HOCKEY */}
          {project.type === "hockey" && (
            <div className="absolute inset-0 flex items-center justify-center gap-4 text-sm font-semibold">
              <span className="rounded bg-zinc-800 px-3 py-1">VAN</span>
              <span className="text-zinc-500">vs</span>
              <span className="rounded bg-zinc-800 px-3 py-1">EDM</span>
            </div>
          )}

          {/* INDAY */}
          {project.type === "inday" && (
            <div className="absolute inset-4 grid grid-cols-2 gap-2">
              <div className="rounded bg-zinc-800" />
              <div className="rounded bg-zinc-700" />
              <div className="rounded bg-zinc-700" />
              <div className="rounded bg-zinc-800" />
            </div>
          )}

        </div>

              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-auto pt-8 text-sm font-medium text-[#5EEAD4]">
                View case study →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0B0B]">
          <div className="relative min-h-[460px] bg-gradient-to-b from-zinc-900 to-black p-8 md:p-10">
            <div className="pointer-events-none absolute bottom-0 left-0 w-full">
              <svg
                viewBox="0 0 1440 320"
                className="w-full opacity-30"
                preserveAspectRatio="none"
              >
                <path
                  fill="#27272a"
                  d="M0,288L80,250C160,213,320,139,480,128C640,117,800,171,960,192C1120,213,1280,203,1360,197L1440,192V320H0Z"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full">
              <svg
                viewBox="0 0 1440 320"
                className="w-full opacity-60"
                preserveAspectRatio="none"
              >
                <path
                  fill="#18181b"
                  d="M0,320L120,280C240,240,480,160,720,170C960,180,1200,260,1320,290L1440,320V320H0Z"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute bottom-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-[#5EEAD4]/10 blur-3xl" />

            <div className="relative z-10">
              <p className="mb-3 text-sm font-medium text-[#5EEAD4]">About</p>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Product-minded front-end developer with a soft spot for clean
                systems.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
                I like turning messy workflows into simple, useful interfaces.
                My work combines UI detail, real-world constraints, and a focus
                on making tools easier to use.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Career Stats
                  </p>
                  <p className="mt-2 text-3xl font-semibold">2+ yrs</p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Web, product UI, and internal tools
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Build Style
                  </p>
                  <p className="mt-2 text-3xl font-semibold">Clean + Practical UI</p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/40 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Home Base
                  </p>
                  <p className="mt-2 text-3xl font-semibold">Vancouver, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-8 md:p-10">
          <p className="mb-3 text-sm font-medium text-[#5EEAD4]">Contact</p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Let’s build something useful.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-zinc-400">
            I’m open to front-end developer roles, junior opportunities, and
            teams where I can keep growing through real product work.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:nicole.sedillo@gmail.com"
              className="text-[#5EEAD4] [&:hover]:underline"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/nicolesedillo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5EEAD4] [&:hover]:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nicole-sedillo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5EEAD4] [&:hover]:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}