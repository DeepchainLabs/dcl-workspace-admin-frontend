"use client";
import React from "react";
import CloudStorageTableTab from "./CloudStorageTableTab";
import { files } from "@/contents/Admin/Workspace";
import EditIcon from "@/svg/CloudStorage/EditIcon";
import RemoveIcon from "@/svg/CloudStorage/RemoveIcon";

function CloudStorageTable() {
  return (
    <div>
      <CloudStorageTableTab />
      <div className="mt-4 table-wrp block max-h-[calc(100vh-70vh)] overflow-y-auto">
        <table className="table-fixed w-full rounded-[16px]">
          <thead className="sticky top-0 bg-[#EDEDED]">
            <tr className="text-[#6F6F6F] text-[12px] font-[500]">
              <th className="border-b border-[#EAECF0] p-4 w-[20%] text-left rounded-l-[6px]">
                DATE CREATED
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[30%] text-left">
                FILE NAME
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left">
                ROUTE
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
                SIZE
              </th>
              <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left rounded-r-[6px]">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
            {files.map((item: any, index: number) => (
              <tr
                key={index}
                // className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
              >
                <td className="border-b border-[#EAECF0] p-4">
                  {item.dateCreated}
                </td>
                <td className="border-b border-[#EAECF0] p-4">
                  {item.fileName}
                </td>
                <td className="border-b border-[#EAECF0] p-4">{item.route}</td>
                <td className="border-b border-[#EAECF0] p-4">{item.size}</td>
                <td className="border-b border-[#EAECF0] p-4">
                  <div className="flex gap-2">
                    <div className="cursor-pointer">
                      <EditIcon />
                    </div>
                    <div className="cursor-pointer">
                      <RemoveIcon />
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

export default CloudStorageTable;
