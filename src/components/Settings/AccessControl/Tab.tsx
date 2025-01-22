"use client";
import { hasPermission } from "@/utils/checkPermission";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

export default function Tab({ tab }: { tab: string }) {
  const [activeTab, setActiveTab] = React.useState(tab);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleViewTypeChange = (value: any) => {
    setActiveTab(value);
    const queryString = createQueryString("tab", value);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <>
      {hasPermission("VIEW_ACCESS_CONTROL") && (
        <div className="flex justify-between mt-6 mb-4">
          <div className="flex justify-between overflow-auto ">
            <div className="bg-[#EAEEF5] min-h-[40px] flex rounded-[6px] p-1">
              <div
                onClick={() => handleViewTypeChange("roles")}
                className={`text-[#000000] text-[16px] font-[500] px-12 py-1.5 rounded-[4px] cursor-pointer ${
                  activeTab === "roles" ? "bg-[#FFFFFF]" : ""
                }`}
              >
                Roles
              </div>
              <div
                onClick={() => handleViewTypeChange("permissions")}
                className={`text-[#000000] text-[16px] font-[500] px-12 py-1.5 rounded-[4px] cursor-pointer ${
                  activeTab === "permissions" ? "bg-[#FFFFFF]" : ""
                }`}
              >
                Permissions
              </div>
              <div
                onClick={() => handleViewTypeChange("assign-to-role")}
                className={`text-[#000000] text-[16px] font-[500] px-12 py-1.5 rounded-[4px] cursor-pointer whitespace-nowrap ${
                  activeTab === "assign-to-role" ? "bg-[#FFFFFF]" : ""
                }`}
              >
                Assign Permission to Role
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
