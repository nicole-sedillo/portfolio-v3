const projects = [
  {
    title: "Internal Resource Platform",
    description:
      "A centralized platform for managing resources, announcements, and support workflows across multiple locations.",
    tags: ["Next.js", "React", "Role-Based Access"],
    href: "/projects/internal-resource-platform",
  },
  {
    title: "Hockey Game Tracker",
    description:
      "An interactive app for browsing games, filtering matchups, and highlighting the best game of the night.",
    tags: ["React", "API Integration", "UI/UX"],
    href: "/projects/hockey-game-tracker",
  },
  {
    title: "Inday Website",
    description:
      "A responsive marketing website focused on clean layout, brand presentation, and a polished user experience.",
    tags: ["Responsive Design", "Web Design", "Front-End"],
    href: "/projects/inday-website",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Nicole Sedillo
        </a>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="transition hover:text-[#5EEAD4]">
            Projects
          </a>
          <a href="#about" className="transition hover:text-[#5EEAD4]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#5EEAD4]">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-5 text-sm font-medium text-[#5EEAD4]">
          Front-End Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          I build clean, user-focused web applications.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I design and develop intuitive interfaces using React and modern
          tools, with a focus on real-world usability and performance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#5EEAD4] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-800 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Currently building: Hockey Game Tracker 🏒
        </p>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium text-[#5EEAD4]">Projects</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Featured work
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              href={project.href}
              key={project.title}
              className="group rounded-2xl border border-zinc-800 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-[#5EEAD4]"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

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
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-3 text-sm font-medium text-[#5EEAD4]">About</p>

        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
          I like turning messy workflows into simple, useful interfaces.
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
          I’m a front-end developer with experience building internal tools and
          user-facing applications. I enjoy simplifying complex workflows and
          creating interfaces that feel intuitive to use.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-8">
          <p className="mb-3 text-sm font-medium text-[#5EEAD4]">Contact</p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Let’s build something useful.
          </h2>

          <p className="mt-4 text-zinc-400">
            I’m open to front-end developer roles, internships, and junior
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:nicole.sedillo@gmail.com"
              className="text-[#5EEAD4] hover:underline"
            >
              Email
            </a>
            <a href="https://www.linkedin.com/in/nicolesedillo/" className="text-[#5EEAD4] hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/nicole-sedillo" className="text-[#5EEAD4] hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}