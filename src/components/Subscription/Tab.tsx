"use client";
import { AddButtonPlusIcon } from "@/svg/Crms/CommonIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Tab() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"organization" | "personal">(
    "organization"
  );
  const handleTabChange = (tab: "organization" | "personal") => {
    setActiveTab(tab);
    router.push(`/admin/subscription/?subscription-type=${tab}`);
  };
  return (
    <div>
      <div className="relative flex flex-col sm:flex-row mt-6 mb-6 justify-between w-full gap-4">
        <div className="bg-[#EAEEF5] w-full sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] min-h-[40px] grid grid-cols-1 sm:grid-cols-2 rounded-[6px] p-1 text-center">
          <div
            onClick={() => handleTabChange("organization")}
            className={`text-[#000000] text-[14px] font-[600] px-4 py-1.5 rounded-[4px] cursor-pointer ${
              activeTab === "organization" ? "bg-[#FFFFFF]" : ""
            }`}
          >
            Organization
          </div>
          <div
            onClick={() => handleTabChange("personal")}
            className={`text-[#000000] text-[14px] font-[600] px-4  py-1.5 rounded-[4px] cursor-pointer ${
              activeTab === "personal" ? "bg-[#FFFFFF]" : ""
            }`}
          >
            Personal
          </div>
        </div>
        <div>
          <Link href={"./subscription/create-plan"}>
            <button className="flex items-center justify-center w-full sm:w-auto px-3 py-2 text-[14px] font-[600] bg-[#2377FC] text-white rounded-[8px] gap-2">
              <AddButtonPlusIcon />
              Add Plan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
