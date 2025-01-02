import PermissionToRole from "@/components/Settings/AccessControl/PermissionToRole/PermissionToRole";
import Roles from "@/components/Settings/AccessControl/Role/Roles";
import Tab from "@/components/Settings/AccessControl/Tab";
import React from "react";
import Permissions from "@/components/Settings/AccessControl/Permission/Permissions";
import { PageProps } from "@/interfaces/pageProps.interface";

export default function AccessControl({ searchParams }: PageProps) {
  const activeTab = searchParams.tab || "roles";
  return (
    <main className="">
      <div className="border-b border-[#E5E9EB] min-h-[76px]">
        <div className="custom-layout">
          <div className="flex justify-between pt-4">
            <p className="text-[#222425] text-[24px] font-[700] ">
              Access Control
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] custom-layout py-4 h-[calc(100vh-155px)] overflow-y-auto">
        <Tab tab={activeTab} />
        {activeTab === "roles" && <Roles />}
        {activeTab === "permissions" && <Permissions />}
        {activeTab === "assign-to-role" && <PermissionToRole />}
      </div>
    </main>
  );
}
