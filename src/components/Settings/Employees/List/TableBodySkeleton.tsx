import React from "react";

export default function TableBodySkeleton() {
  return (
    <div>
      {[...Array(5)].map((item, index) => (
        <div
          key={index}
          className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-12 px-4 rounded-[8px] min-w-[1000px]"
        >
          <div className="col-span-1 my-auto">
            <div className="h-4 w-10 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 my-auto">
            <div className="h-4 w-24 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 my-auto">
            <div className="h-4 w-40 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 my-auto">
            <div className="h-4 w-32 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 my-auto">
            <div className="h-4 w-20 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-2 my-auto">
            <div className="h-4 w-28 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
          <div className="col-span-1 my-auto">
            <div className="h-4 w-12 bg-[#F6F6F6] rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
