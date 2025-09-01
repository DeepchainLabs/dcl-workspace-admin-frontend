import DateRangePicker from "@/components/SystemLogger/DatesRangePicker";
import FilterButton from "@/components/SystemLogger/FilterButton";
import LogsTable from "@/components/SystemLogger/LogsTable";
import Pagination from "@/components/SystemLogger/Pagination";
import SearchBar from "@/components/SystemLogger/SearchBar";
import StatsGrid from "@/components/SystemLogger/StatsGrid";
import SystemLoggerHeader from "@/components/SystemLogger/SystemLoggerHeader";
import TabsBar from "@/components/SystemLogger/TabsBar";
import { getAllLogsCountsAction } from "./action";
import SystemLoggerWrapper from "@/components/SystemLogger/SystemLoggerWrapper";

export type LogsCounts = {
  queryLogs: number;
  requestLogs: number;
  errorLogs: number;
  warnings?: number;
};

export default async function SystemLoggerPage() {
  const counts = await getAllLogsCountsAction();
  return <SystemLoggerWrapper counts={counts} />;
}
