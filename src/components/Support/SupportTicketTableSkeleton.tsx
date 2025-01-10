import React from "react";

function SupportTicketTableSkeleton() {
  return (
    <div>
      <div className="my-auto animate-pulse">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-[1fr_4fr_2fr_3fr_2fr_3fr_2fr] px-4 rounded-[8px] group"
            >
              <div className="my-auto">
                <div className="w-8 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-48 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-40 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
              </div>
              <div className="my-auto">
                <div className="w-32 h-4 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SupportTicketTableSkeleton;
