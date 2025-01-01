"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import ErrorAllert from "@/components/Common/ErrorAllert";
import Image from "next/image";
import dayjs from "dayjs";
import { SalaryDetails, UserProfile } from "./ProfileInterface";
import { getEmployee } from "@/resources/settings/employee.service";

function isSalaryDetails(response: any): response is SalaryDetails {
  return (
    response &&
    typeof response === "object" &&
    "_id" in response &&
    "user" in response &&
    "currentSalary" in response &&
    "salary_history" in response &&
    Array.isArray(response.salary_history)
  );
}

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

async function fetchSalary(id: string): Promise<SalaryDetails | null> {
  try {
    const response = await getEmployeeSalary(id);
    if (isSalaryDetails(response)) {
      return response;
    }

    throw new Error("Invalid SalaryDetails response");
  } catch (error) {
    console.error("Error fetching salary details:", error);
    return null;
  }
}

export default function EmployeeDetails({
  show,
  setShow,
  handleUpdate,
  employeeId,
  employeeDetails,
  salaryDetails,
}: {
  show: boolean;
  setShow: (value: boolean) => void;
  handleUpdate: () => void;
  employeeId: string;
  employeeDetails?: any;
  salaryDetails?: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [salaryInfo, setSalary] = useState<SalaryDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [setShow]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeMenu]);

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

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchSalary(employeeId);
      if (data) {
        setSalary(data);
        setError(null);
      } else {
        setError("Failed to fetch user profile");
      }
      setLoading(false);
    }
    fetchData();
  }, [employeeId]);
  if (error) return <ErrorAllert message={error} />;
  return (
    <div
      className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 overflow-y-hidden transition-transform duration-500 ease-in-out overflow-x-hidden"
      style={{ zIndex: "9999" }}
    >
      <div
        className={`absolute top-0 bottom-0 w-screen h-screen transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: "2", right: 0 }}
      >
        <div className="absolute top-0 right-0">
          <div
            ref={modalRef}
            className="w-[350px] md:w-[600px] h-screen bg-[#FFFFFF] px-6 py-4 overflow-y-auto scrollbar-none relative"
            style={{ zIndex: "1" }}
          >
            <div className="flex justify-between">
              <p className="text-[#292D32] text-[20px] font-[600]">
                Employee Profile
              </p>
              <svg
                onClick={closeMenu}
                className="my-auto cursor-pointer"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9102 15.9099L26.5168 26.5165"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.91 26.5165L26.5166 15.9099"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-0">
              <div className="flex justify-between items-center">
                <p className="text-[#A5B2CA] text-[16px] font-[500]">
                  General Information
                </p>
                <div
                  onClick={() => {
                    salaryDetails(salaryInfo);
                    employeeDetails(userProfile);
                    handleUpdate();
                  }}
                  className="flex gap-1 bg-[#F0F5FF] rounded-[8px] px-2 py-0.5 cursor-pointer"
                >
                  <p className="text-[#2377FC] text-[16px] font-[500]">Edit</p>
                  <svg
                    className="my-auto"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 1.5H4.5C2 1.5 1 2.5 1 5V8C1 10.5 2 11.5 4.5 11.5H7.5C10 11.5 11 10.5 11 8V7"
                      stroke="#2377FC"
                      strokeWidth="1.125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.01994 2.01061L4.07994 5.95061C3.92994 6.10061 3.77994 6.39561 3.74994 6.61061L3.53494 8.11561C3.45494 8.66061 3.83994 9.04061 4.38494 8.96561L5.88994 8.75061C6.09994 8.72061 6.39494 8.57061 6.54994 8.42061L10.4899 4.48061C11.1699 3.80061 11.4899 3.01061 10.4899 2.01061C9.48994 1.01061 8.69994 1.33061 8.01994 2.01061Z"
                      stroke="#2377FC"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.45508 2.5752C7.79008 3.7702 8.72508 4.7052 9.92508 5.0452"
                      stroke="#2377FC"
                      strokeWidth="1.125"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-[100px] h-[100px] relative">
                  <Image
                    className="rounded-full"
                    src="/images/dummy_user.png"
                    fill
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      First Name
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.user.first_name}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Last Name
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.user.last_name}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Email Address
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.user.email}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Username
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.user.username}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Discord ID
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.discord_id || "N/A"}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Phone Number
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.user.phone}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Role
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.designation}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Date of Birth
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {dayjs(userProfile?.date_of_birth).format(
                        "DD MMM YYYY"
                      ) || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Address
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {userProfile?.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E5E9EB] pt-4">
              <p className="text-[#A5B2CA] text-[16px] font-[600]">
                Bank Information
              </p>

              <div className="mt-4 space-y-4">
                {userProfile?.bank_informations.map((bankInfo, index) => (
                  <div key={index}>
                    <div className="flex justify-between gap-8">
                      <div className="w-full">
                        <p className="text-[#324054] text-[16px] font-[500] mb-2">
                          Bank Name
                        </p>
                        <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                          {bankInfo.bank_name}
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="text-[#324054] text-[16px] font-[500] mb-2">
                          Branch Name
                        </p>
                        <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                          {bankInfo.branch_name}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between gap-8">
                      <div className="w-full">
                        <p className="text-[#324054] text-[16px] font-[500] mb-2">
                          Account Name
                        </p>
                        <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                          {bankInfo.account_holder_name}
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="text-[#324054] text-[16px] font-[500] mb-2">
                          Account Number
                        </p>
                        <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                          {bankInfo.account_number}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-[#E5E9EB] pt-4">
              <p className="text-[#A5B2CA] text-[16px] font-[600]">
                Additional Information
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Current Salary
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      {salaryInfo?.currentSalary}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[16px] font-[500] mb-2">
                      Type
                    </p>
                    <p className="text-[#292D32] text-[16px] font-[500] opacity-70">
                      Full Time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E5E9EB] pt-4">
              <p className="text-[#A5B2CA] text-[16px] font-[600]">
                Increments
              </p>
              <div className="mt-4">
                <div className="bg-[#F6F6F6] w-full h-[40px] grid grid-cols-8 px-4">
                  <div className="col-span-2 my-auto">
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">SL</p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#6F6F6F] text-[16px] font-[500] opacity-70">
                      Date
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">
                      Previous Salary
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#6F6F6F] text-[16px] font-[500] opacity-70">
                      New Salary
                    </p>
                  </div>
                </div>

                {salaryInfo?.salary_history.map((record, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-3 grid grid-cols-8 px-4 rounded-[8px]"
                  >
                    <div className="col-span-2 my-auto">
                      <p className="text-[#292D32]  text-[16px] font-[500]">
                        {index + 1}
                      </p>
                    </div>
                    <div className="col-span-2 my-auto">
                      <p className="text-[#292D32] text-[16px]  font-[500] opacity-70">
                        {dayjs(record?.changed_at).format("DD MMM YYYY") ||
                          "N/A"}
                      </p>
                    </div>
                    <div className="col-span-2 my-auto">
                      <p className="text-[#292D32] text-[16px]  font-[500] opacity-70">
                        {record.previousSalary}
                      </p>
                    </div>
                    <div className="col-span-2 my-auto">
                      <p className="text-[#292D32] text-[16px]  font-[500] opacity-70">
                        {salaryInfo.newSalary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function getEmployeeSalary(id: string) {
  throw new Error("Function not implemented.");
}
