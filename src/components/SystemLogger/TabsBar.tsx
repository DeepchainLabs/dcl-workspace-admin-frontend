"use client";
import { Dispatch, SetStateAction } from "react";

const tabs = ["Requests", "Errors", "Queries"] as const;

export default function TabsBar({
  active,
  setActive,
}: {
  active: (typeof tabs)[number];
  setActive: Dispatch<SetStateAction<(typeof tabs)[number]>>;
}) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            active === tab
              ? "bg-blue-50 text-blue-600 border border-blue-200"
              : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
