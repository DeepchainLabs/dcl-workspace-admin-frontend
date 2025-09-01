"use client";
import { useEffect, useState } from "react";
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
  const [resetTodayCounter, setResetTodayCounter] = useState(0);
  const [dateRange, setDateRange] = useState<{
    from: string;
    to: string;
  } | null>(null);

  //   useEffect(() => {
  //     if (search.trim() !== "") {
  //       setResetToday(true);
  //     }
  //   }, [search]);

  useEffect(() => {
    if (search.trim() !== "") {
      setResetTodayCounter((prev) => prev + 1);
    }
  }, [search]);

  return (
    <div className="p-6 space-y-6">
      <SystemLoggerHeader />
      <StatsGrid counts={counts} />
      <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 justify-between items-start sm:items-center gap-2 sm:gap-4">
          <TabsBar active={activeTab} setActive={setActiveTab} />
          <DateRangePicker
            onChange={(range) => setDateRange(range)}
            // onResetHandled={handleResetHandled}
            resetTodayCounter={resetTodayCounter}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <SearchBar value={search} onChange={(val) => setSearch(val)} />
          <FilterButton />
        </div>
      </div>

      {/* <LogsTable counts={counts} activeTab={activeTab} /> */}
      <LogsTable
        counts={counts}
        activeTab={activeTab}
        search={search}
        dateRange={dateRange}
        setSearch={setSearch}
      />
    </div>
  );
}
