"use client";
import React, { useState } from "react";
import StatusBadge from "@/components/Common/StatusBadge";
import { EditIcon } from "@/svg/Hrms/CommonIcons";

export default function RoleList({
  roles,
}: {
  roles: { _id: string; name: string }[];
}) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const handleSelectAll = () => {
    // if (selectAll) {
    //   setSelectedRows([]);
    // } else {
    //   setSelectedRows(roles.map((role) => role.id));
    // }
    setSelectAll(!selectAll);
  };

  const handleRowSelection = (id: string) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };
  return (
    <div>
      <div className="bg-[#FFFFFF] w-full rounded-[10px] md:h-auto h-[450px] overflow-y-auto shadow border border-[#EAECF0] overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-[#F5F5F5]  text-left">
            <tr>
              <th className="px-4 py-3 text-[#0F1419] text-[16px] font-[600]">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                />
              </th>
              <th className="px-4 py-3 text-[#0F1419] text-[16px] font-[600]">
                Roles
              </th>
              <th className="px-4 py-3 text-[#0F1419] text-[16px] font-[600]">
                Status
              </th>
              <th className="px-4 py-3 text-[#0F1419] text-[16px] font-[600]">
                <div className="md:block hidden">Action</div>
                <div className="md:hidden block"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {roles &&
              roles.length > 0 &&
              roles?.map((role) => (
                <tr
                  key={role._id}
                  className={` hover:bg-[#F9FAFB] ${
                    selectedRows.includes(role._id) ? "bg-[#F0F5FF]" : ""
                  }`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(role._id)}
                      onChange={() => handleRowSelection(role._id)}
                      className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                    />
                  </td>
                  <td className="px-4 py-3 text-[#333333] text-[16px] font-[500] capitalize">
                    {role.name}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge fontWeight text={"N/A"} />
                  </td>
                  <td className="px-4 py-3 ">
                    <div className="cursor-pointer">
                      <EditIcon />
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
