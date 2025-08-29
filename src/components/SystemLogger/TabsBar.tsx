"use client";
import { useState } from "react";

const tabs = ["Requests", "Errors", "Queries"];

export default function TabsBar() {
  const [active, setActive] = useState("Requests");

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
