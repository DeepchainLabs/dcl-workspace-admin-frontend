"use client";
import DropDown from "@/components/Common/DropDown";
import StatusBadge from "@/components/Common/StatusBadge";
import { clients } from "@/contents/Admin/Workspace";
import { hasPermission } from "@/utils/checkPermission";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ActionMenuForClientManagement from "./ActionMenuForClientManagement";
import TemporaryPasswordModal from "./TemporaryPasswordModal";

function ClientListTable() {
  const actionMenuOptionsForClientListTable = (id: number) => [
    {
      label: "Block",
      onClick: () => console.log("Block"),
    },
    {
      label: "Unblock",
      onClick: () => console.log("Unblock"),
    },
    {
      label: "Send Email",
      onClick: () => console.log("Send Email"),
    },
    {
      label: "Details",
      onClick: () => console.log("Details"),
    },
    {
      label: "Reset Password",
      onClick: () => setShow(true),
    },
  ];
  const router = useRouter();
  const [show, setShow] = useState(false);
  return (
    <>
      {hasPermission("VIEW_WORKSPACES") && (
        <div suppressHydrationWarning>
          <div className="flex justify-between mt-6">
            <p className="text-[20px] font-[700] my-auto">List of Clients</p>
            <div className="flex gap-4 w-auto">
              <div className="flex gap-2 w-[20%]">
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
              <div className="flex gap-2 w-[50%]">
                <div className="w-[25%] my-auto">
                  <p className="text-[14px] text-[#324054] font-[500]">
                    Date Range
                  </p>
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
          </div>

          <div className="mt-4 table-wrp block h-[calc(100vh-40vh)] overflow-y-auto">
            <table className="table-fixed w-full rounded-[16px]">
              <thead className="sticky top-0 bg-[#EDEDED]">
                <tr className="text-[#6F6F6F] text-[12px] font-[500]">
                  <th className="border-b border-[#EAECF0] p-4 w-[15%] text-left rounded-l-[6px]">
                    Customer Name
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[17%] text-left">
                    Email
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
                    Phone
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                    Joining Date
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
                    Package
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                    No of Workspaces
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                    Status
                  </th>
                  <th className="border-b border-[#EAECF0] p-3 w-[8%] text-left rounded-r-[6px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
                {clients.map((item: any, index: number) => (
                  <tr
                    key={index}
                    onClick={() => {
                      router.push(`/admin/client-management/details/${index}`);
                    }}
                    // className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                    className="cursor-pointer"
                  >
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.customerName}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.email}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.phone}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.joiningDate}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.package}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      {item.noOfWorkspaces}
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      <StatusBadge text={item.status} />
                    </td>
                    <td className="border-b border-[#EAECF0] p-4">
                      <div
                        className="my-auto cursor-pointer"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ActionMenuForClientManagement
                          options={actionMenuOptionsForClientListTable(index)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {show && <TemporaryPasswordModal setShow={setShow} />}
        </div>
      )}
    </>
  );
}

export default ClientListTable;
