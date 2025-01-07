"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientListTableHeader({ active }: { active: string }) {
  const [activeTab, setActiveTab] = useState(active || "workspace");
  const router = useRouter();
  return (
    <div className="bg-[#EAEEF5] h-[45px] w-full justify-start flex rounded-[6px] p-1">
      <div
        onClick={() => {
          setActiveTab("workspace");
          router.push("/admin/client-management?tab=workspace");
        }}
        className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center w-[20%] h-full rounded-[4px] cursor-pointer ${
          activeTab === "workspace"
            ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
            : ""
        }`}
      >
        Workspace
      </div>
      <div
        onClick={() => {
          setActiveTab("personal");
          router.push("/admin/client-management?tab=personal");
        }}
        className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center w-[20%] h-full rounded-[4px] cursor-pointer ${
          activeTab === "personal"
            ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
            : ""
        }`}
      >
        Personal
      </div>
    </div>
  );
}
