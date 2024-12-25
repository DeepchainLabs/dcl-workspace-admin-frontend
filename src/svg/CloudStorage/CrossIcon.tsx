import React from "react";

function CrossIcon({ width, height }: { width?: number; height?: number }) {
  return (
    <svg
      width={width || "14"}
      height={height || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 12.8318L1.11215 1M12.8878 1.11215L1 13"
        stroke="#54595E"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CrossIcon;
