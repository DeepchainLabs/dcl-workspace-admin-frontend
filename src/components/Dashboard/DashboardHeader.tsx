"use client";

import { useRouter } from "next/navigation";
import OrganizationEmployeeIcon from "@/svg/Dashboard/OrganizationEmployeeIcon";
import OrganizationAdminIcon from "@/svg/Dashboard/OrganizationAdminIcon";

export default function DashboardHeader({
  activeWindow,
}: {
  activeWindow: string;
}) {
  const router = useRouter();

  const toggleWindow = () => {
    const newWindow =
      activeWindow === "Organization" ? "Employee" : "Organization";
    router.push(`?activeWindow=${newWindow}`);
  };

  return (
    <div className="flex justify-between pt-[18px]">
      <p className="text-[#292D32] text-[24px] font-[600]">Dashboard</p>
      <div className="flex gap-6 items-center">
        <p className="text-[#6F6F6F] text-[18px] font-[500] hidden sm:block">
          Welcome, Tonmoy Asif
        </p>
        <div onClick={toggleWindow} className="cursor-pointer">
          {activeWindow === "Organization" ? (
            <OrganizationEmployeeIcon />
          ) : (
            <OrganizationAdminIcon />
          )}
        </div>
      </div>
    </div>
  );
}
