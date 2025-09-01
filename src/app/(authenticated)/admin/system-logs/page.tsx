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
