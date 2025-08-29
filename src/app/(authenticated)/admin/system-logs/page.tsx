import DateRangePicker from "@/components/SystemLogger/DatesRangePicker";
import FilterButton from "@/components/SystemLogger/FilterButton";
import LogsTable from "@/components/SystemLogger/LogsTable";
import Pagination from "@/components/SystemLogger/Pagination";
import SearchBar from "@/components/SystemLogger/SearchBar";
import StatsGrid from "@/components/SystemLogger/StatsGrid";
import SystemLoggerHeader from "@/components/SystemLogger/SystemLoggerHeader";
import TabsBar from "@/components/SystemLogger/TabsBar";

export default function SystemLoggerPage() {
  return (
    <div className="p-6 space-y-6">
      <SystemLoggerHeader />
      <StatsGrid />
      <div className="flex w-full items-center justify-between">
        <div className="flex  w-1/2 justify-between items-center">
          <div className="self-start">
            <TabsBar />
          </div>
          <DateRangePicker />
        </div>
        <div className="flex gap-2">
          <SearchBar />
          <FilterButton />
        </div>
      </div>
      <LogsTable />
      <Pagination />
    </div>
  );
}
