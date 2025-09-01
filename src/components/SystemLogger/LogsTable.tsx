"use client";
import {
  getErrorLogsAction,
  getQueryLogsAction,
  getRequestLogsAction,
} from "@/app/(authenticated)/admin/system-logs/action";
import LogsTableRow from "./LogsTableRow";
import { useEffect, useState } from "react";
import { LogsCounts } from "@/app/(authenticated)/admin/system-logs/page";

function getPageNumbers(current: number, totalPages: number) {
  const delta = 2;
  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= current - delta && i <= current + delta)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }
  return pages;
}

type Column = { label: string; key: string };

const columnsMap: Record<"Requests" | "Errors" | "Queries", Column[]> = {
  Requests: [
    { label: "Status", key: "status" },
    { label: "Route", key: "route" },
    { label: "Timestamp", key: "timestamp" },
    { label: "Execution Time (ms)", key: "execution_time" },
    { label: "Request ID", key: "request_id" },
    { label: "Action", key: "action" },
  ],
  Errors: [
    { label: "Error ID", key: "_id" },
    { label: "Request ID", key: "request_id" },
    { label: "Error", key: "error" },
    { label: "Timestamp", key: "timestamp" },
    { label: "Action", key: "action" },
  ],
  Queries: [
    { label: "Query ID", key: "_id" },
    { label: "Operation", key: "operation" },
    { label: "Collection", key: "collection_name" },
    { label: "Filters", key: "filters" },
    { label: "Populations", key: "populations" },
    { label: "Execution Time (ms)", key: "execution_time" },
    { label: "Timestamp", key: "timestamp" },
    { label: "Action", key: "action" },
  ],
};

export default function LogsTable({
  counts,
  activeTab,
}: {
  counts: LogsCounts;
  activeTab: "Requests" | "Errors" | "Queries";
}) {
  const limit = 10;
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalLogs =
    activeTab === "Requests"
      ? counts.requestLogs
      : activeTab === "Errors"
      ? counts.errorLogs
      : counts.queryLogs;
  const totalPages = Math.ceil(totalLogs / limit);

  const fetchLogs = async (pageNumber: number) => {
    setLoading(true);
    try {
      let res;
      if (activeTab === "Requests")
        res = await getRequestLogsAction({ page: pageNumber, limit });
      if (activeTab === "Errors")
        res = await getErrorLogsAction({ page: pageNumber, limit });
      if (activeTab === "Queries")
        res = await getQueryLogsAction({ page: pageNumber, limit });

      setData(res || []);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    setData([]);
    fetchLogs(1);
  }, [activeTab]);

  useEffect(() => {
    fetchLogs(page);
  }, [page]);

  const columns = columnsMap[activeTab];

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border bg-white min-h-[300px]">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="p-3 text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: limit }).map((_, i) => (
                <tr key={i}>
                  <td colSpan={columns.length} className="p-3">
                    <div className="flex flex-col gap-2">
                      {columns.map((_, j) => (
                        <div
                          key={j}
                          className="h-6 bg-gray-200 rounded-md animate-pulse w-full"
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            ) : data.length > 0 ? (
              data.map((row: any, i: number) => (
                <LogsTableRow key={i} rowData={row} activeTab={activeTab} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center p-20 text-gray-500"
                >
                  No logs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {data.length > 0 && (
        <div className="flex justify-between items-center py-3 px-4 border mt-2">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-3 py-1 border rounded-md text-sm ${
              page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {getPageNumbers(page, totalPages).map((p, i) =>
              p === "..." ? (
                <span key={i} className="px-3 py-1 text-sm">
                  …
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setPage(p as number)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    page === p
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
