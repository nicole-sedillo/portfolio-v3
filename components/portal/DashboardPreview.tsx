export default function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      <h3 className="text-lg font-semibold">Dashboard</h3>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-sm text-zinc-400">Number of Logins Per Week</p>
          <p className="mt-2 text-2xl font-semibold">24</p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-sm text-zinc-400">Announcements</p>
          <p className="mt-2 text-2xl font-semibold">5</p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-sm text-zinc-400">Open Tickets</p>
          <p className="mt-2 text-2xl font-semibold">3</p>
        </div>

        <div className="rounded-xl border border-zinc-800 p-4">
          <p className="text-sm text-zinc-400">Resolved</p>
          <p className="mt-2 text-2xl font-semibold">12</p>
        </div>
      </div>
    </div>
  );
}