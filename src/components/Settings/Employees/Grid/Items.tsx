"use client";
import React, { useEffect } from "react";
import EmployeeDetails from "../EmployeeDetails";
import UpdateEmployee from "../UpdateEmployee";
import Image from "next/image";
import StatusBadge from "@/components/Common/StatusBadge";
import UpdateEmployeModal from "../UpdateEmployee";
import { getEmployeeDetails } from "@/resources/settings/employee.service";

export default function Items({ employees }: { employees: any }) {
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [employeeId, setEmployeeId] = React.useState("");
  const [employeeDetails, setEmployeeDetails] = React.useState<any>();

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
    <div className="flex gap-6 flex-wrap w-full sm:items-start items-center sm:justify-start justify-center">
      {employees.length > 0 &&
        employees?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-[#F8FAFC] border border-[#E5E9EB] rounded-[12px] w-[320px] h-[160px]  py-2 "
          >
            <div className="mt-1 flex justify-between border-b border-[#E9ECF8] pb-4 px-4">
              <div
                onClick={() => {
                  setEmployeeId(item._id);
                  setOpenDetailsModal(true);
                }}
                className="flex gap-2 cursor-pointer"
              >
                <div className="w-[36px] h-[36px] relative my-auto">
                  <Image
                    className="rounded-full"
                    src="/images/dummy_user.png"
                    fill
                    alt="user"
                  />
                </div>
                <div className="space-y-0">
                  <p className="text-[#292D32] text-[18px] font-[500]">
                    {item?.first_name} {item?.last_name}
                  </p>
                  <p className="text-[#6F6F6F] text-[16px] font-[500]">
                    {item?.designation || "N/A"}
                  </p>
                </div>
              </div>
              <div className="mt-1">
                <StatusBadge fontWeight text="active" />
              </div>
            </div>
            <div className="px-4 mt-4">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="my-auto">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.36732 9.96732L6.13399 11.2007C5.87398 11.4607 5.46065 11.4607 5.19398 11.2073C5.12065 11.134 5.04732 11.0673 4.97398 10.994C4.28732 10.3007 3.66732 9.57399 3.11398 8.81398C2.56732 8.05398 2.12732 7.29398 1.80732 6.54065C1.49398 5.78065 1.33398 5.05398 1.33398 4.36065C1.33398 3.90732 1.41398 3.47398 1.57398 3.07398C1.73398 2.66732 1.98732 2.29398 2.34065 1.96065C2.76732 1.54065 3.23398 1.33398 3.72732 1.33398C3.91398 1.33398 4.10065 1.37398 4.26732 1.45398C4.44065 1.53398 4.59398 1.65398 4.71398 1.82732L6.26065 4.00732C6.38065 4.17398 6.46732 4.32732 6.52732 4.47398C6.58732 4.61398 6.62065 4.75398 6.62065 4.88065C6.62065 5.04065 6.57399 5.20065 6.48065 5.35398C6.39399 5.50732 6.26732 5.66732 6.10732 5.82732L5.60065 6.35398C5.52732 6.42732 5.49398 6.51398 5.49398 6.62065C5.49398 6.67398 5.50065 6.72065 5.51399 6.77398C5.53399 6.82732 5.55399 6.86732 5.56732 6.90732C5.68732 7.12732 5.89398 7.41398 6.18732 7.76065C6.48732 8.10732 6.80732 8.46065 7.15398 8.81398C7.22065 8.88065 7.29398 8.94732 7.36065 9.01398C7.62732 9.27398 7.63399 9.70065 7.36732 9.96732Z"
                        fill="#A5B2CA"
                      />
                      <path
                        d="M14.6471 12.2204C14.6471 12.407 14.6137 12.6004 14.5471 12.787C14.5271 12.8404 14.5071 12.8937 14.4804 12.947C14.3671 13.187 14.2204 13.4137 14.0271 13.627C13.7004 13.987 13.3404 14.247 12.9337 14.4137C12.9271 14.4137 12.9204 14.4204 12.9137 14.4204C12.5204 14.5804 12.0937 14.667 11.6337 14.667C10.9537 14.667 10.2271 14.507 9.46039 14.1804C8.69372 13.8537 7.92706 13.4137 7.16706 12.8604C6.90706 12.667 6.64706 12.4737 6.40039 12.267L8.58039 10.087C8.76706 10.227 8.93372 10.3337 9.07372 10.407C9.10706 10.4204 9.14706 10.4404 9.19372 10.4604C9.24706 10.4804 9.30039 10.487 9.36039 10.487C9.47372 10.487 9.56039 10.447 9.63372 10.3737L10.1404 9.87369C10.3071 9.70702 10.4671 9.58035 10.6204 9.50035C10.7737 9.40702 10.9271 9.36035 11.0937 9.36035C11.2204 9.36035 11.3537 9.38702 11.5004 9.44702C11.6471 9.50702 11.8004 9.59369 11.9671 9.70702L14.1737 11.2737C14.3471 11.3937 14.4671 11.5337 14.5404 11.7004C14.6071 11.867 14.6471 12.0337 14.6471 12.2204Z"
                        fill="#A5B2CA"
                      />
                    </svg>
                  </div>
                  <p className="text-[#6F6F6F] text-[16px] font-[500]">
                    {item?.phone || "N/A"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="my-auto">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.333 2.33301H4.66634C2.66634 2.33301 1.33301 3.33301 1.33301 5.66634V10.333C1.33301 12.6663 2.66634 13.6663 4.66634 13.6663H11.333C13.333 13.6663 14.6663 12.6663 14.6663 10.333V5.66634C14.6663 3.33301 13.333 2.33301 11.333 2.33301ZM11.6463 6.39301L9.55967 8.05967C9.11967 8.41301 8.55967 8.58634 7.99967 8.58634C7.43967 8.58634 6.87301 8.41301 6.43967 8.05967L4.35301 6.39301C4.13967 6.21967 4.10634 5.89967 4.27301 5.68634C4.44634 5.47301 4.75967 5.43301 4.97301 5.60634L7.05967 7.27301C7.56634 7.67967 8.42634 7.67967 8.93301 7.27301L11.0197 5.60634C11.233 5.43301 11.553 5.46634 11.7197 5.68634C11.893 5.89967 11.8597 6.21967 11.6463 6.39301Z"
                        fill="#A5B2CA"
                      />
                    </svg>
                  </div>
                  <p className="text-[#6F6F6F] text-[16px] font-[500]">
                    {item?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div>
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
    </div>
  );
}
