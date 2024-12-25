"use client";
import React from "react";
import DropDown from "@/components/Common/DropDown";
import { clients, workspaces } from "@/contents/Admin/Workspace";
import StatusBadge from "@/components/Common/StatusBadge";
import ActionMenuForClientManagement from "./ActionMenuForClientManagement";
import EyeSvg from "@/svg/Admin/EyeSvg";
import WorkspaceToggle from "./Workspace/WorkspaceToggle";
import ToggleMini from "./TooglelMini";
import { useRouter } from "next/navigation";

function WorkspaceListTable() {
  const router = useRouter();
  return (
    <div>
      <div className="flex gap-4 mt-6">
        <div className="flex gap-2 w-[30%]">
          <p className="text-[14px] text-[#324054] font-[500] my-auto">
            Status
          </p>
          <div className="w-full">
            <DropDown
              selected={1}
              options={[
                { id: 1, name: "Status" },
                { id: 2, name: "Close" },
              ]}
              onChange={() => {}}
              width="100%"
              height="45px"
            />
          </div>
        </div>
        <div className="flex gap-2 w-[30%]">
          <p className="text-[14px] text-[#324054] font-[500] my-auto">
            Package
          </p>
          <div className="w-full">
            <DropDown
              selected={1}
              options={[
                { id: 1, name: "Package" },
                { id: 2, name: "Close" },
              ]}
              onChange={() => {}}
              width="100%"
              height="45px"
            />
          </div>
        </div>
        <div className="flex gap-2 w-[60%]">
          <div className="w-[200px] my-auto">
            <p className="text-[14px] text-[#324054] font-[500]">Date Range</p>
          </div>
          <div className="w-full">
            <input
              type="date"
              className="w-full h-[45px] px-3 border border-[#F6F6F6] rounded-md text-[#6F6F6F] focus:outline-none focus:ring-2 focus:ring-[#2377FC] focus:border-[#2377FC]"
            />
          </div>
          <div className="w-full">
            <input
              type="date"
              className="w-full h-[45px] px-3 border border-[#F6F6F6] rounded-md text-[#6F6F6F] focus:outline-none focus:ring-2 focus:ring-[#2377FC] focus:border-[#2377FC]"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 table-wrp block h-[calc(100vh-40vh)] overflow-y-auto">
        <table className="table-fixed w-full rounded-[16px]">
          <thead className="sticky top-0 bg-[#EDEDED]">
            <tr className="text-[#6F6F6F] text-[12px] font-[500]">
              <th className="border-b border-[#EAECF0] p-4 w-[5%] text-left rounded-l-[6px]">
                ID
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
                Workspace Name
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
                Owner Name
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left">
                Package
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                Projects
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                Storage Used
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                Employees
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
                Last Payment Date
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left rounded-r-[6px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
            {workspaces.map((item: any, index: number) => (
              <tr
                key={index}
                // className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
              >
                <td className="border-b border-[#EAECF0] p-4">
                  {item.workspaceId}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.workspaceName}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.ownerName}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.package}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.projects}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.storageUsed}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.employees}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.lastPaymentDate}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  <div className="flex gap-2 my-auto">
                    <ToggleMini />
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        router.push("/admin/client-management/workspace/1");
                      }}
                    >
                      <EyeSvg />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkspaceListTable;
