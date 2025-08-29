"use client";
import { getRequestLogsAction } from "@/app/(authenticated)/admin/system-logs/action";
import LogsTableRow, { RowProps } from "./LogsTableRow";
import { useEffect, useState } from "react";
import React from "react";

export default function LogsTable() {
  const [data, setData] = useState<any>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRequestLogsAction({ page, limit: 10 });
        setData(res || []);
      } catch (err) {
        console.error("fetch data failed", err);
        setData([]);
      }
    };
    fetchData();
  }, [page]);

  console.log("data isss", data);

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border bg-white shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Route</th>
                <th className="p-3 text-left">Timestamp</th>
                <th className="p-3 text-left">Request ID</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row: any, i: any) => (
                <LogsTableRow key={i} {...row} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="p-3 text-gray-500">No logs found</p>
      )}
    </div>
  );
}
