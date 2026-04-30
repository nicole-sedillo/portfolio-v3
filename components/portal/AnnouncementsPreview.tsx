export default function AnnouncementsPreview() {
   return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      <h3 className="text-lg font-semibold text-white">
        Announcements
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        Stay informed with the latest updates and important information.
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-zinc-800 p-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-yellow-200 px-2 py-1 text-black">
              Pinned
            </span>
            <span className="rounded-full bg-blue-200 px-2 py-1 text-black">
              New
            </span>
          </div>

          <h4 className="mt-3 font-semibold text-white">
            System Update: New Security Guidelines
          </h4>


        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-yellow-200 px-2 py-1 text-black">
              Pinned
            </span>
          </div>

          <h4 className="mt-3 font-semibold text-white">
            Feedback Form
          </h4>

          <p className="mt-2 text-sm text-zinc-400">
            Help us improve the platform by submitting feedback through
            this sample form.
          </p>
        </div>
      </div>
    </div>
  );
}