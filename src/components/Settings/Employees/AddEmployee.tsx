"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import StatusBadge from "@/components/Common/StatusBadge";
import DropDown from "@/components/Common/DropDown";
import { useFormState, useFormStatus } from "react-dom";
// import { handleSubmit } from "@/app/(authenticated)/organization/employees/actions";

export default function AddEmployee({ show, setShow }: any) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [setShow]);

  const modalRef = React.useRef<HTMLDivElement>(null);

  //check if clicked on outside of modalRef
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeMenu]);

  // const [errors, action] = useFormState(handleSubmit, {});

  return (
    <div
      className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 overflow-y-hidden transition-transform duration-500 ease-in-out overflow-x-hidden"
      style={{ zIndex: "2" }}
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
              <p className="text-[#292D32] text-[24px] font-[600]">
                Add New Employee
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

            <form>
              <div className="mt-0">
                <p className="text-[#A5B2CA] text-[16px] font-[600]">
                  General Information
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        First Name
                      </p>
                      <input
                        type="text"
                        name="first_name"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.first_name && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.first_name}
                        </div>
                      )} */}
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Last Name
                      </p>
                      <input
                        type="text"
                        name="last_name"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.last_name && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.last_name}
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Email Address
                      </p>
                      <input
                        type="text"
                        name="email"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.email && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.email}
                        </div>
                      )} */}
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Username
                      </p>
                      <input
                        type="text"
                        name="username"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.username && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.username}
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Discord ID
                      </p>
                      <input
                        type="text"
                        name="discord_id"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Phone Number
                      </p>
                      <input
                        type="text"
                        name="phone"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.phone && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.phone}
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Role
                      </p>
                      <input
                        type="text"
                        name="role"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.role && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.role}
                        </div>
                      )} */}
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Date of Birth
                      </p>
                      <input
                        type="date"
                        name="date_of_birth"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                      {/* {errors.date_of_birth && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.date_of_birth}
                        </div>
                      )} */}
                    </div>
                  </div>
                  <div className="">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Address
                      </p>
                      <textarea
                        rows={3}
                        name="address"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      ></textarea>
                      {/* {errors.address && (
                        <div className="text-red-500 text-[13px] font-[600] mt-1">
                          {errors.address}
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#A5B2CA] text-[16px] font-[600]">
                  Additional Information
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Salary
                      </p>
                      <input
                        type="text"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Type
                      </p>
                      <DropDown
                        options={[
                          { id: "fulltime", name: "Full Time" },
                          { id: "contractual", name: "Contractual" },
                        ]}
                        onChange={() => {}}
                        width="100%"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[#A5B2CA] text-[16px] font-[600]">
                  Bank Information
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Bank Name
                      </p>
                      <input
                        type="text"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Branch Name
                      </p>
                      <input
                        type="text"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between gap-8">
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Account Name
                      </p>
                      <input
                        type="text"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                    <div className="w-full">
                      <p className="text-[#324054] text-[14px] font-[600] mb-2">
                        Account Number
                      </p>
                      <input
                        type="text"
                        className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <div className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer">
                  Cancel
                </div>
                <SubmitButton />
                {/* <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer">
                  Submit
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer"
      disabled={pending}
    >
      <p className="text-[#FFFFFF] font-[600] text-[16px]">
        {" "}
        {pending ? "Loading..." : "Submit"}
      </p>
    </button>
  );
};
