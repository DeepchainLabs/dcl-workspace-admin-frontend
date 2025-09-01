"use client";
import { useState } from "react";
import TabsBar from "./TabsBar";
import LogsTable from "./LogsTable";
import StatsGrid from "./StatsGrid";
import DateRangePicker from "./DatesRangePicker";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import SystemLoggerHeader from "./SystemLoggerHeader";
import { LogsCounts } from "@/app/(authenticated)/admin/system-logs/page";

export default function SystemLoggerWrapper({
  counts,
}: {
  counts: LogsCounts;
}) {
  const [activeTab, setActiveTab] = useState<"Requests" | "Errors" | "Queries">(
    "Requests"
  );
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">
      <SystemLoggerHeader />
      <StatsGrid counts={counts} />
      <div className="flex w-full items-center justify-between">
        <div className="flex w-1/2 justify-between items-center">
          <TabsBar active={activeTab} setActive={setActiveTab} />
          <DateRangePicker />
        </div>
        <div className="flex gap-2">
          {/* <SearchBar /> */}
          <SearchBar value={search} onChange={(val) => setSearch(val)} />
          <FilterButton />
        </div>
      </div>
      {/* <LogsTable counts={counts} activeTab={activeTab} /> */}
      <LogsTable counts={counts} activeTab={activeTab} search={search} />
    </div>
  );
}
