"use client";
//import { handleUpdateUserInfo } from "@/app/(authenticated)/[user]/[workspace]/organization/employees/actions";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function UpdateEmployee({
  show,
  setShow,
  employeeDetails,
  salaryDetails,
}: any) {
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

  
  // const [state, action] = useFormState(handleUpdateUserInfo, {});

  

  // useEffect(() => {
  //   console.log(state);
  //   if (state.error) toast.error(state.error);
  //   if (state.success) {
  //     toast.success("Team Added Created");
  //     setShow(false);
  //   }
  // }, [state, setShow]);

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
            <form action="">
            <div className="flex justify-between">
              <p className="text-[#292D32] text-[24px] font-[600]">
                Update Employee Information
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
                      defaultValue={employeeDetails.user.first_name}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Last Name
                    </p>
                    <input
                      type="text"
                      name="last_name"
                      defaultValue={employeeDetails.user.last_name}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
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
                      defaultValue={employeeDetails.user.email}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                  {/* <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Username
                    </p>
                    <input
                      type="text"
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div> */}
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Discord ID
                    </p>
                    <input
                      type="text"
                      name="discord_id"
                      defaultValue={employeeDetails.discord_id}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Phone Number
                    </p>
                    <input
                      type="text"
                      defaultValue={employeeDetails.user.phone}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-8">
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Role
                    </p>
                    <input
                      type="text"
                      name="designation"
                      defaultValue={employeeDetails.designation}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Date of Birth
                    </p>
                    <input
                      type="date"
                      name="date_of_birth"
                      defaultValue={dayjs(
                        employeeDetails?.date_of_birth
                      ).format("YYYY-MM-DD")}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
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
                      defaultValue={employeeDetails.address}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    ></textarea>
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
                      name="currentSalary"
                      defaultValue={salaryDetails.currentSalary}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-[#324054] text-[14px] font-[600] mb-2">
                      Type
                    </p>
                    <input
                      type="text"
                      name="position"
                      defaultValue={employeeDetails.position}
                      className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
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
                {employeeDetails?.bank_informations.map(
                  (bankInfo: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between gap-8">
                        <div className="w-full">
                          <p className="text-[#324054] text-[14px] font-[600] mb-2">
                            Bank Name
                          </p>
                          <input
                            type="text"
                            name="bank_name"
                            defaultValue={
                              bankInfo.bank_name
                            }
                            className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                          />
                        </div>
                        <div className="w-full">
                          <p className="text-[#324054] text-[14px] font-[600] mb-2">
                            Branch Name
                          </p>
                          <input
                            type="text"
                            name="branch_name"
                            defaultValue={
                              bankInfo.branch_name
                            }
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
                            name="account_holder_name"
                            defaultValue={bankInfo.account_holder_name}
                            className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                          />
                        </div>
                        <div className="w-full">
                          <p className="text-[#324054] text-[14px] font-[600] mb-2">
                            Account Number
                          </p>
                          <input
                            type="text"
                            name="account_number"
                            defaultValue={bankInfo.account_number}
                            className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <div className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer">
                Cancel
              </div>
              {/* <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer">
                Submit
              </div> */}
              <SubmitButton/>
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
