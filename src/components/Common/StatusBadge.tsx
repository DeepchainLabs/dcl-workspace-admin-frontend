import React from "react";

export default function StatusBadge({
  text,
  fontWeight,
}: {
  text: string;
  fontWeight?: boolean;
}) {
  let bgColor = "bg-[#E4E7EC]";
  let textColor = "text-[#54595E]";
  let circleColor = "bg-[#54595E]";

  const status = text.toLowerCase();

  switch (status) {
    case "to do":
    case "design":
      textColor = "text-[#155E75]";
      bgColor = "bg-[#CFFAFE]";
      circleColor = "bg-[#0891B2]";
      break;
    case "pending":
      textColor = "text-[#92400E]";
      bgColor = "bg-[#FEF3C7]";
      circleColor = "bg-[#D97706]";
      break;
    case "on-going":
    case "in progress":
      textColor = "text-[#713F12]";
      bgColor = "bg-[#FEF9C3]";
      circleColor = "bg-[#2377FC]";
      break;
    case "on hold":
      textColor = "text-[#317EF3]";
      bgColor = "bg-[#DEEBFF]";
      break;
    case "cancelled":
      textColor = "text-[#FF1616]";
      bgColor = "bg-[#FDECEC]";
      break;
    case "completed":
    case "active":
    case "approved":
    case "enabled":
    case "ACCEPTED":
    case "success":
    case "accepted":
    case "success":
      textColor = "text-[#065F46]";
      bgColor = "bg-[#D1FAE5]";
      circleColor = "bg-[#059669]";
      break;
    case "inactive":
      textColor = "text-[#364254]";
      bgColor = "bg-[#F2F4F7]";
      break;
    case "rejected":
    case "disabled":
      textColor = "text-[#A31616]";
      bgColor = "bg-[#F9E9E9]";
      break;
    case "backlog":
      textColor = "text-[#FF1616]";
      bgColor = "bg-[#FDECEC]";
      break;
    case "paid":
      textColor = "text-[#065F46]";
      bgColor = "bg-[#D1FAE5]";
      break;
    case "unpaid":
      textColor = "text-[#991B1B]";
      bgColor = "bg-[#FEE2E2]";
      break;
    case "full-time":
      textColor = "text-[#2B01D2]";
      bgColor = "bg-[#F5F4FF]";
      break;
    case "internship":
      textColor = "text-[#155E75]";
      bgColor = "bg-[#E6F9FF]";
      break;
    case "part-time":
      textColor = "text-[#00BCEB]";
      bgColor = "bg-[#EAFBFF]";
      break;
    case "contractual":
      textColor = "text-[#2377FC]";
      bgColor = "bg-[#F0F5FF]";
      break;
    default:
      bgColor = "bg-[#E4E7EC]";
      textColor = "text-[#54595E]";
  }

  return (
    <span
      className={`${bgColor} ${textColor} capitalize ${
        fontWeight ? "font-[500]" : "font-[600]"
      } px-[12px] pt-[4px] pb-[4px] text-[14px] rounded-[8px] text-center`}
    >
      {text}
    </span>
  );
}
