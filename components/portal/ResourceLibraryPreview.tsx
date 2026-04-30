const resources = [
  {
    title: "Operations Guide",
    type: "PDF",
    category: "Operations",
  },
  {
    title: "Training Checklist",
    type: "PDF",
    category: "Training",
  },
  {
    title: "Brand Assets",
    type: "ZIP",
    category: "Marketing",
  },
];

export default function ResourceLibraryPreview() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Resource Library</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Browse documents, guides, and operational resources.
          </p>
        </div>

        <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500">
          24 resources
        </span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource.title}
            className="group overflow-hidden rounded-xl border border-zinc-800 bg-[#0B0B0B] transition hover:-translate-y-1 hover:border-[#5EEAD4]"
          >
            <div className="h-28 overflow-hidden border-b border-zinc-800 bg-zinc-900 p-3">
              <div className="flex h-full w-full flex-col justify-between rounded-md bg-white p-3 text-[10px] text-black shadow-sm">
                <div>
                  <p className="font-semibold leading-tight">
                    {resource.title}
                  </p>
                  <p className="mt-1 text-zinc-500">Document preview</p>
                </div>

                <div className="space-y-1">
                  <div className="h-1 w-full rounded bg-zinc-300" />
                  <div className="h-1 w-5/6 rounded bg-zinc-300" />
                  <div className="h-1 w-4/6 rounded bg-zinc-300" />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[9px] text-zinc-400">
                    {resource.type}
                  </p>
                  <div className="h-3 w-8 rounded bg-zinc-200" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#5EEAD4]/10 px-2 py-1 text-xs text-[#5EEAD4]">
                  {resource.category}
                </span>

                <span className="text-xs text-zinc-500">
                  {resource.type}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-white">
                {resource.title}
              </h4>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                Sample resource card with preview, category, and file metadata.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}