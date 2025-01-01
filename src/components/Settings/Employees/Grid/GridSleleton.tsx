import React from "react";

export default function GridSleleton() {
  return (
    <div>
      {[...Array(10)].map((index) => (
        <div
          key={index}
          className="bg-[#F8FAFC] border border-[#E5E9EB] rounded-[12px] w-[320px] h-[160px] py-2 animate-pulse"
        >
          {/* Header Section */}
          <div className="mt-1 flex justify-between border-b border-[#E9ECF8] pb-4 px-4">
            <div className="flex gap-2">
              <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-3 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
          </div>

          {/* Content Section */}
          <div className="px-4 mt-4 space-y-3">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="h-4 w-48 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
