"use client";
import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { getAllLogsCountsAction } from "@/app/(authenticated)/admin/system-logs/action";

type LogsCounts = {
  queryLogs: number;
  requestLogs: number;
  errorLogs: number;
  warnings?: number; // optional if your API later includes it
};

export default function StatsGrid() {
  const [counts, setCounts] = useState<LogsCounts>({
    queryLogs: 0,
    requestLogs: 0,
    errorLogs: 0,
    warnings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getAllLogsCountsAction();
        if (!mounted) return;
        setCounts({
          queryLogs: res?.queryLogs ?? 0,
          requestLogs: res?.requestLogs ?? 0,
          errorLogs: res?.errorLogs ?? 0,
          warnings: res?.warnings ?? 0,
        });
      } catch (err) {
        if (mounted)
          setCounts({
            queryLogs: 0,
            requestLogs: 0,
            errorLogs: 0,
            warnings: 0,
          });
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
      {loading ? (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-lg bg-gray-100 animate-pulse"
            />
          ))}
        </>
      ) : (
        <>
          <StatsCard
            label="Queries"
            count={counts.queryLogs}
            icon="bug"
            color="rgba(65, 87, 254, 1)"
          />
          <StatsCard
            label="Requests"
            count={counts.requestLogs}
            icon="info"
            color="rgba(18, 113, 162, 1)"
          />
          <StatsCard
            label="Warnings"
            count={counts.warnings ?? 0}
            icon="warning"
            color="rgba(146, 64, 14, 1)"
          />
          <StatsCard
            label="Errors"
            count={counts.errorLogs}
            icon="error"
            color="rgba(220, 38, 38, 1)"
          />
        </>
      )}
    </div>
  );
}
