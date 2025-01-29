"use client";
import React, { useState } from "react";
import StatusBadge from "@/components/Common/StatusBadge";
import { EditIcon } from "@/svg/Hrms/CommonIcons";
import { formatPermission } from "@/utils/formatPermisssionsName.utils";
import { hasPermission } from "@/utils/checkPermission";

interface Permissions {
  [category: string]: string[];
}

export default function PermissionsList({
  permissions,
}: {
  permissions: Permissions;
}) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
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
    <>
      {hasPermission("VIEW_ACCESS_CONTROL") && (
        <div>
          <div className="hidden md:block">
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
                      Module Name
                    </th>
                    <th className="px-4 py-3 text-[#0F1419] text-[16px] font-[600]">
                      Permission Name
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
                  {Object.entries(permissions)?.map(([category, items]) => (
                    <tr key={category} className={` hover:bg-[#F9FAFB]`}>
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                        />
                      </td>
                      <td className="px-4 py-3 text-[#333333] text-[16px] font-[500]">
                        {category.replace("_", " ").toUpperCase()}
                      </td>
                      <td className="px-4 py-3 text-[#333333] text-[16px] font-[500] space-y-1">
                        {items?.map((item: any, index: number) => (
                          <div key={index} className="flex items-center">
                            <div className="mr-2">{formatPermission(item)}</div>
                          </div>
                        ))}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge fontWeight text={"N/A"} />
                      </td>
                      <td className="px-4 py-3">
                        {hasPermission("MANAGE_ACCESS_CONTROL") && (
                          <div className="cursor-pointer">
                            <EditIcon />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="block md:hidden">
            <div className="bg-[#FFFFFF] w-full rounded-[10px] h-[550px] overflow-y-auto shadow border border-[#EAECF0] p-4">
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(permissions)?.map(([category, items]) => (
                  <div
                    key={category}
                    className="border border-[#EAECF0] rounded-[10px] p-4 bg-white shadow hover:bg-[#e5e5e578] cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[#333333] text-[18px] font-[600]">
                        {category.replace("_", " ").toUpperCase()} Module
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="block text-[#0F1419] font-[600] text-[16px] mb-2">
                        Permission Name
                      </span>
                      {items?.map((item: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-center text-[16px] text-[#333333] font-[500] mb-1"
                        >
                          {formatPermission(item)}
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <span className="block text-[#0F1419] font-[600] text-[16px] mb-2">
                        Status
                      </span>
                      <StatusBadge fontWeight text={"N/A"} />
                    </div>

                    <div>
                      <span className="block text-[#0F1419] font-[600] text-[16px] mb-2">
                        Action
                      </span>
                      {hasPermission("MANAGE_ACCESS_CONTROL") && (
                        <div className="cursor-pointer w-[24px] h-[24px] flex items-center">
                          <EditIcon />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
