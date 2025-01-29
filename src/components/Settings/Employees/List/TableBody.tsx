"use client";
import StatusBadge from "@/components/Common/StatusBadge";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserProfile } from "../ProfileInterface";
import EmployeeDetails from "../EmployeeDetails";
import UpdateEmployee from "../UpdateEmployee";
import { getEmployeeDetails } from "@/resources/settings/employee.service";
import UpdateEmployeModal from "../UpdateEmployee";
import { hasPermission } from "@/utils/checkPermission";

export default function TableBody({ employees }: { employees: any }) {
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [employeeDetails, setEmployeeDetails] = React.useState<any>();
  const [employeeId, setEmployeeId] = React.useState("");

  const handleUpdate = (details: any) => {
    setOpenDetailsModal(false);
    setOpenUpdateModal(true);
  };
  useEffect(() => {
    getEmployeeDetails(employeeId)
      .then((res) => {
        setEmployeeDetails(res);
      })
      .catch((err) => {});
  }, [employeeId]);

  return (
    <>
      {hasPermission("VIEW_EMPLOYEES") && (
        <div>
          {employees.length > 0 &&
            employees?.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => {
                  setEmployeeId(item._id);
                  setOpenDetailsModal(true);
                }}
                className={`bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-12 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer`}
              >
                <div className="col-span-1 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {index + 1}.
                  </p>
                </div>
                <div className="col-span-2 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {item?.first_name} {item?.last_name}
                  </p>
                </div>
                <div className="col-span-2 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {item?.email}
                  </p>
                </div>
                <div className="col-span-2 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {item?.phone || "N/A"}
                  </p>
                </div>
                <div className="col-span-2 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {item?.designation || "N/A"}
                  </p>
                </div>
                <div className="col-span-2 my-auto">
                  <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {dayjs(item?.created_at).format("DD MMM YYYY") || "N/A"}
                  </p>
                </div>
                <div className="col-span-1 my-auto">
                  <StatusBadge fontWeight text="active" />
                </div>
              </div>
            ))}
          {openDetailsModal && (
            <EmployeeDetails
              show={openDetailsModal}
              setShow={() => setOpenDetailsModal(false)}
              handleUpdate={() => handleUpdate(employeeDetails)}
              employeeDetails={employeeDetails}
            />
          )}
          {openUpdateModal && (
            <UpdateEmployeModal
              show={openUpdateModal}
              setShow={() => setOpenUpdateModal(false)}
              employeeDetails={employeeDetails}
              setEmployeeDetails={setEmployeeDetails}
            />
          )}
        </div>
      )}
    </>
  );
}
