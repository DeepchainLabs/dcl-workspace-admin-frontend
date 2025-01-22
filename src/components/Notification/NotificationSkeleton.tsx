"use client";

import React from "react";

interface NotificationSkeletonProps {
  count?: number;
}

export default function NotificationSkeleton({
  count = 5,
}: NotificationSkeletonProps) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse flex items-center gap-3 p-4 rounded-md bg-[#F5F9FF]"
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="w-3/4 h-4 bg-gray-300 rounded" />
            <div className="w-1/2 h-4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
