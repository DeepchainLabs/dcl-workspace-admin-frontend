import React from "react";

export default function TypeBadge({ text,fontWeight }: { text: string; fontWeight?:boolean}) {
  let bgColor = "bg-[#E4E7EC]";
  let textColor = "text-[#54595E]";

  // add switch condition for checking text color
  switch (text) {
    case "sqa":
    case "SQA":
      textColor = "text-[#DB2777]";
      bgColor = "bg-[#FDEDF5]";
      break;
    case "backend":
    case "Backend":
    case "web 3":
    case "Web 3":
      textColor = "text-[#6926D7]";
      bgColor = "bg-[#EFEEFF]";
      break;
    case "hr":
    case "HR":
      textColor = "text-[#FF961C]";
      bgColor = "bg-[#FFF7DB]";
      break;
    case "design":
    case "Design":
    case "web 2":
    case "Web 2":
      textColor = "text-[#317EF3]";
      bgColor = "bg-[#DEEBFF]";
      break;
    case "business analyst":
    case "BA":
      textColor = "text-[#FF1616]";
      bgColor = "bg-[#FDECEC]";
      break;
    case "frontend":
    case "Frontend":
    case "Client":
    case "client":
    case "Project":
      textColor = "text-[#037847]";
      bgColor = "bg-[#ECFDF5]";
      break;
    case "devops":
    case "DevOps":
    case "internal":
    case "Internal":
      textColor = "text-[#A31616]";
      bgColor = "bg-[#F9E9E9]";
      break;
    default:
      textColor = "text-[#364254]";
      bgColor = "bg-[#F2F4F7]";
  }

  return (
    <span
      className={`${bgColor} ${textColor} capitalize ${fontWeight ? "font-[500]" : "font-[600]"} px-[12px] pt-[3px] pb-[4px] text-[14px] rounded-[8px]`}
    >
      {text}
    </span>
  );
}
