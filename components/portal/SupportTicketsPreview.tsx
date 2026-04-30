const tickets = [
  {
    title: "Login issue",
    category: "Tech Support",
    priority: "High",
    status: "Open",
    location: "Location A",
  },
  {
    title: "Menu update request",
    category: "Operations",
    priority: "Medium",
    status: "In Progress",
    location: "Location B",
  },
  {
    title: "New asset request",
    category: "Marketing",
    priority: "Low",
    status: "Resolved",
    location: "Location C",
  },
];

function getStatusStyles(status: string) {
  if (status === "Resolved") return "bg-green-400/10 text-green-400";
  if (status === "In Progress") return "bg-yellow-400/10 text-yellow-400";
  return "bg-red-400/10 text-red-400";
}

function getPriorityStyles(priority: string) {
  if (priority === "High") return "bg-red-400/10 text-red-400";
  if (priority === "Medium") return "bg-yellow-400/10 text-yellow-400";
  return "bg-zinc-700/60 text-zinc-300";
}

export default function SupportTicketsPreview() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Support Tickets</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Track internal requests, priorities, and ticket status.
          </p>
        </div>

        <button className="rounded-full bg-[#5EEAD4] px-3 py-1.5 text-xs font-semibold text-black">
          New Ticket
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800">
        <div className="grid grid-cols-5 gap-4 border-b border-zinc-800 bg-[#0B0B0B] px-4 py-3 text-xs font-medium text-zinc-500">
          <span>Request</span>
          <span>Category</span>
          <span>Priority</span>
          <span>Status</span>
          <span>Location</span>
        </div>

        {tickets.map((ticket) => (
          <div
            key={ticket.title}
            className="grid grid-cols-5 gap-4 border-b border-zinc-800 px-4 py-4 text-sm last:border-b-0"
          >
            <span className="font-medium text-zinc-200">{ticket.title}</span>
            <span className="text-zinc-400">{ticket.category}</span>

            <span>
              <span
                className={`rounded-full px-2 py-1 text-xs ${getPriorityStyles(
                  ticket.priority
                )}`}
              >
                {ticket.priority}
              </span>
            </span>

            <span>
              <span
                className={`rounded-full px-2 py-1 text-xs ${getStatusStyles(
                  ticket.status
                )}`}
              >
                {ticket.status}
              </span>
            </span>

            <span className="text-zinc-400">{ticket.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}