import PortalPreview from "@/components/portal/PortalPreview";

export default function InternalResourcePlatformPage() {
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

        <p className="mb-4 text-sm font-medium text-[#5EEAD4]">
          Case Study
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Internal Resource Portal
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A centralized platform designed to help multi-location teams access
          resources, receive announcements, and submit support requests from one
          place.
        </p>

        <p className="mt-10 mb-2 text-xs uppercase tracking-wide text-zinc-500">
          Preview
        </p>

        <PortalPreview />

        <p className="mt-4 text-sm text-zinc-500">
          This preview is a simplified, anonymized representation of the internal tool.
          It recreates the structure and functionality without using real data.
        </p>

        <div className="mt-10 grid gap-4 border-y border-zinc-800 py-6 md:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Role</p>
            <p className="mt-1 text-white">Front-End / Product UI</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Stack</p>
            <p className="mt-1 text-white">Next.js, React, Tailwind</p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Focus</p>
            <p className="mt-1 text-white">Internal tools, RBAC, UX</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Challenge</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Company resources, announcements, and internal requests were spread across multiple systems, including email, shared drives, and informal communication channels. This made it difficult for employees to locate information, stay informed, and submit requests consistently.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">My Role</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            As part of the portal development team, I contributed to front-end development, UX improvements, stakeholder feedback gathering, and workflow design. 
            My work focused on making information easier to find, simplifying user interactions, and helping translate operational processes into intuitive interfaces.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Contributions</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                Resource Library
              </h3>
              <p className="mt-2 text-zinc-400">
                Contributed to the design and implementation of a centralized resource library that organized content using categories, tags, and search functionality.
              </p>
              <p className="mt-2 text-zinc-400">
                This reduced reliance on scattered files and improved access to important company resources.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Announcements
              </h3>
              <p className="mt-2 text-zinc-400">
                Helped create a structured announcement system that allowed updates to be shared consistently across the organization.
              </p>
              <p className="mt-2 text-zinc-400">
                The goal was to reduce dependency on manual communication and improve visibility of important information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Support Requests
              </h3>
              <p className="mt-2 text-zinc-400">
                Contributed to the interface for submitting and tracking internal requests, helping replace informal processes with a more consistent workflow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                User Experience & Navigation
              </h3>
              <p className="mt-2 text-zinc-400">
                Improved navigation patterns, content organization, and information architecture to help users locate resources and complete tasks more efficiently.
              </p>
            </div>
          </div>
          </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">Design Decisions</h2>

              <div className="mt-6 space-y-5 text-zinc-400">
                <p>
                  I kept the interface simple and task-focused so users could quickly find
                  resources, read announcements, and submit requests without needing extra
                  training.
                </p>

                <p>
                  The portal was designed around role-based visibility, meaning different
                  users could access information relevant to their responsibilities.
                </p>

                <p>
                  I used card-based layouts, tags, and clear status labels to make the system
                  easier to scan and navigate.
                </p>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">What I Focused On</h2>

              <p className="mt-4 leading-8 text-zinc-400">
                I focused on simplifying complex workflows and making the interface easy to
                navigate for users with different roles and responsibilities. The goal was
                to reduce friction, improve clarity, and make key actions accessible without
                requiring additional training.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                To support development and testing, I used Docker to run a local database and
                simulate a production-like environment. This helped surface issues early and
                ensured more reliable behavior during development.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                I also created simple onboarding materials to help users understand how to
                navigate the system, reducing friction and improving adoption across teams.
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">What I Would Improve Next</h2>

              <ul className="mt-4 space-y-3 leading-8 text-zinc-400">
                <li>• Improve the resource library UI to make navigation, filtering, and content discovery more intuitive</li>
                <li>• Refine the support ticket interface to improve clarity, reduce friction, and make key actions more intuitive</li>
                <li>• Gather additional user feedback after rollout to identify usability improvements and prioritize future enhancements based on real-world usage.</li>
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">What I Learned</h2>

              <p className="mt-4 leading-8 text-zinc-400">
                This project helped me understand how front-end decisions directly impact
                real operational workflows. Designing for multiple user roles required
                careful consideration of visibility, usability, and structure, especially
                in a system used by both technical and non-technical users.
              </p>
            </section>
      </section>

      
    </main>
  );
}