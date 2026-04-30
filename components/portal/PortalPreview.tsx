"use client";

import { useState } from "react";
import DashboardPreview from "./DashboardPreview";
import ResourceLibraryPreview from "./ResourceLibraryPreview";
import SupportTicketsPreview from "./SupportTicketsPreview";
import AnnouncementsPreview from "./AnnouncementsPreview";

const tabs = [
  { label: "Dashboard", value: "dashboard" },
  { label: "Announcements", value: "announcements" },
  { label: "Resources", value: "resources" },
  { label: "Tickets", value: "tickets" },
];

export default function PortalPreview() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#111111] p-4 shadow-2xl shadow-black/20">
      <div className="mb-4 flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? "bg-[#5EEAD4] text-black"
                  : "border border-zinc-800 bg-[#0B0B0B] text-zinc-400 [&:hover]:border-[#5EEAD4] [&:hover]:bg-[#5EEAD4]/5 [&:hover]:text-[#5EEAD4]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div>
        {activeTab === "dashboard" && <DashboardPreview />}
        {activeTab === "announcements" && <AnnouncementsPreview />}
        {activeTab === "resources" && <ResourceLibraryPreview />}
        {activeTab === "tickets" && <SupportTicketsPreview />}
      </div>
    </div>
  );
}