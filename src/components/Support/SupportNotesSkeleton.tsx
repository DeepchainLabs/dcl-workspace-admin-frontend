import React from "react";

function SupportNotesSkeleton() {
  return (
    <div>
      {Array(5)
        .fill(1)
        .map((_, index) => (
          <div
            key={index}
            className="bg-[#F0F0F0] h-10 w-full mb-4 rounded-[8px] animate-pulse"
          ></div>
        ))}
    </div>
  );
}

export default SupportNotesSkeleton;
