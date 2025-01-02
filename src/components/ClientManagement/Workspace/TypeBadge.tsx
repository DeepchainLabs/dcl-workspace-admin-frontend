import React from "react";

export default function TypeBadge({ text }: { text: string }) {
  let bgColor = "bg-[#E4E7EC]";
  let textColor = "text-[#54595E]";
  const status = text.toLowerCase();

  switch (status) {
    case "design":
      textColor = "text-[#155E75]";
      bgColor = "bg-[#CFFAFE]";
      break;
    default:
      bgColor = "bg-[#E4E7EC]";
      textColor = "text-[#54595E]";
  }

  return (
    <span
      className={`${bgColor} ${textColor} capitalize font-[600] px-[12px] pt-[4px] pb-[4px] text-[14px] rounded-[8px]`}
    >
      {text}
    </span>
  );
}
