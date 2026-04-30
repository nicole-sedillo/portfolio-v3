const games = [
  {
    awayTeam: "VAN",
    homeTeam: "EDM",
    time: "7:00 PM",
    league: "NHL",
    tag: "Best Game",
  },
  {
    awayTeam: "TOR",
    homeTeam: "MTL",
    time: "4:00 PM",
    league: "NHL",
    tag: "Rivalry",
  },
  {
    awayTeam: "MIN",
    homeTeam: "OTT",
    time: "6:30 PM",
    league: "PWHL",
    tag: "Featured",
  },
];

export default function HockeyAppPreview() {
  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#111111] p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-[#5EEAD4]">
            Today’s Matchups
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Hockey Game Tracker
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Browse matchups, filter by league, and find the best game to watch.
          </p>
        </div>

        <div className="flex gap-2 text-xs">
          <button className="rounded-full bg-[#5EEAD4] px-3 py-1.5 font-semibold text-black transition hover:scale-105 hover:opacity-90">
            All
          </button>
          <button className="rounded-full border border-zinc-800 px-3 py-1.5 text-zinc-400 transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]">
            NHL
          </button>
          <button className="rounded-full border border-zinc-800 px-3 py-1.5 text-zinc-400 transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]">
            PWHL
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[#5EEAD4]/40 bg-[#5EEAD4]/5 p-4 transition hover:-translate-y-1 hover:border-[#5EEAD4] hover:bg-[#5EEAD4]/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#5EEAD4]">
              Best Game Tonight
            </p>
            <h4 className="mt-2 text-lg font-semibold text-white">
              VAN vs EDM
            </h4>
            <p className="mt-1 text-sm text-zinc-400">
              Selected based on matchup quality, rivalry context, and game time.
            </p>
          </div>

          <span className="rounded-full bg-[#5EEAD4] px-3 py-1 text-xs font-semibold text-black">
            7:00 PM
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {games.map((game) => (
          <div
            key={`${game.awayTeam}-${game.homeTeam}`}
            className="group flex cursor-pointer items-center justify-between rounded-xl border border-zinc-800 bg-[#0B0B0B] p-4 transition-all duration-300 ease-out [&:hover]:scale-[1.03] [&:hover]:border-[#5EEAD4] [&:hover]:bg-zinc-800 [&:hover]:shadow-xl [&:hover]:shadow-[#5EEAD4]/20"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-zinc-900 px-2 py-1 text-sm font-semibold text-white transition group-[&:hover]:bg-zinc-800">
                  {game.awayTeam}
                </span>

                <span className="text-xs text-zinc-500 transition group-hover:text-zinc-300">
                  vs
                </span>

                <span className="rounded-md bg-zinc-900 px-2 py-1 text-sm font-semibold text-white transition group-[&:hover]:bg-zinc-800">
                  {game.homeTeam}
                </span>
              </div>

              <p className="mt-2 text-xs text-zinc-500 transition group-hover:text-zinc-400">
                {game.league} · {game.time}
              </p>
            </div>

            <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400 transition group-[&:hover]:border-[#5EEAD4]/50 group-[&:hover]:text-[#5EEAD4]">
              {game.tag}
            </span>

        
          </div>
        ))}
      </div>
    </div>
  );
}