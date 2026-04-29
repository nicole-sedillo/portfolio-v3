export default function InternalResourcePlatformPage() {
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
          Case Study
        </p>

        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
          Internal Resource Platform
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A centralized platform designed to help multi-location teams access
          resources, receive announcements, and submit support requests from one
          place.
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

        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            This project was built to replace scattered resources, email-based
            communication, and unclear support workflows with a centralized
            internal platform. The goal was to make important information easier
            to find while supporting different user groups across corporate and
            franchise locations.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            Teams needed a clearer way to access operational resources,
            understand important updates, and submit requests without relying on
            one-off emails or informal communication channels. The platform also
            needed to account for different roles, permissions, and location
            types.
          </p>
        </section>

        <section className="mt-12">
  <h2 className="text-2xl font-semibold">Key Features</h2>

  <div className="mt-6 space-y-6">
    <div>
      <h3 className="font-semibold text-white">
        Resource Library
      </h3>
      <p className="mt-2 text-zinc-400">
        Organized resources into categories and tags, making it easier for
        users to quickly find operational documents without relying on
        scattered files or emails.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-white">
        Announcement System
      </h3>
      <p className="mt-2 text-zinc-400">
        Built a system for publishing targeted updates, allowing different
        user groups to receive relevant information based on their role or
        location.
      </p>
    </div>

    <div>
        <h3 className="font-semibold text-white">
            Support Requests
        </h3>
        <p className="mt-2 text-zinc-400">
            Created a structured way for users to submit and track internal
            requests, replacing informal communication with a more organized
            workflow.
        </p>
        </div>

        <div>
        <h3 className="font-semibold text-white">
            Role-Based Access
        </h3>
        <p className="mt-2 text-zinc-400">
            Designed the interface with different user roles in mind,
            ensuring that content visibility and actions were appropriate
            for each type of user.
        </p>
        </div>
    </div>
    </section>
      </section>
    </main>
  );
}