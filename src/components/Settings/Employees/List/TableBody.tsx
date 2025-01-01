"use client";
import StatusBadge from "@/components/Common/StatusBadge";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserProfile } from "../ProfileInterface";
import { getEmployee } from "@/resources/settings/employee.service";
import EmployeeDetails from "../EmployeeDetails";
import UpdateEmployee from "../UpdateEmployee";

async function fetchEmployee(id: string): Promise<UserProfile | null> {
  try {
    const response = await getEmployee(id);
    if (response && typeof response === "object" && "_id" in response) {
      return response as UserProfile;
    }
    throw new Error("Invalid user profile response");
  } catch (error) {
    console.error("Error fetching employee:", error);
    return null;
  }
}

export default function TableBody({ employees }: { employees: any }) {
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [employeeDetails, setEmployeeDetails] = React.useState();
  const [employeeSalaryDetails, setEmployeeSalaryDetails] = React.useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [employeeId, setEmployeeId] = React.useState("");
  const handleUpdate = () => {
    setOpenDetailsModal(false);
    setOpenUpdateModal(true);
  };
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchEmployee(employeeId);
      if (data) {
        setUserProfile(data);
        setError(null);
      } else {
        setError("Failed to fetch user profile");
      }
      setLoading(false);
    }
    fetchData();
  }, [employeeId]);

  return (
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
          employeeId={employeeId}
          show={openDetailsModal}
          setShow={() => setOpenDetailsModal(false)}
          handleUpdate={handleUpdate}
          employeeDetails={setEmployeeDetails}
          salaryDetails={setEmployeeSalaryDetails}
        />
      )}
      {openUpdateModal && (
        <UpdateEmployee
          salaryDetails={employeeSalaryDetails}
          employeeDetails={employeeDetails}
          show={openUpdateModal}
          setShow={() => setOpenUpdateModal(false)}
        />
      )}
    </div>
  );
}
