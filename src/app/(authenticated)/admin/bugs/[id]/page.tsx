import React from "react";
import Image from "next/image";
import CloseIcon from "@/svg/Note/CloseIcon";
import Link from "next/link";
import DropDown from "@/components/Common/DropDown";
import AdminActionPanel from "@/components/Bugs/AdminActionPanel";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { extractError } from "@/utils/errors.utils";
import { getBugById } from "@/resources/bugs/bugs.service";
import { BugReportResponse } from "@/interfaces/Bug.interface";
import { getEmployess } from "@/resources/settings/employee.service";
import AttachmentSvg from "@/svg/Bugs/AttachmentSvg";

async function page({ params }: { params: any }) {
  const { id } = await params;

  const _bug = await getBugById(id).catch((error) => {
    return extractError(error);
  });
  if (typeof _bug === "string") return <ErrorAllert message={_bug} />;
  const bug: BugReportResponse = _bug as unknown as BugReportResponse;

  const admins = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof admins === "string") return <ErrorAllert message={admins} />;

  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px]  lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Bug Report Details</p>
        </div>
      </div>
      <div className=" h-[calc(100vh-155px)] overflow-y-auto custom-layout pt-4">
        <div className="flex flex-wrap gap-4 border-b border-[#E5E9EB]">
          <div className="w-full md:w-[64%]">
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Bug Title
              </p>
              <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                {bug.title}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Description
              </p>
              <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                {bug.description}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Steps to reproduce
              </p>
              <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                {bug.stepsToReproduce ??
                  "Steps to reproduce were not provided."}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Expected Results
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {bug.expectedResult ?? "Expected result was not provided."}
                </div>
              </div>
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Actual Results
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {bug.actualResult ?? "Actual result was not provided."}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 mt-4">
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Module
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {bug.module ?? "Module was not provided."}
                </div>
              </div>
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Page Link
                </p>
                <Link
                  href={bug.pageLink ?? ""}
                  className="w-full  rounded-[8px]   text-[#2377FC] text-[15px] font-[600] line-clamp-2"
                >
                  {bug.pageLink ?? "Page link was not provided."}
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-[15px] text-[#2377FC] font-[600] mb-2">
                Environment Details
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                <div className="w-full md:w-[32%]">
                  <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                    OS
                  </p>
                  <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                    {bug.operatingSystem ?? "OS was not provided."}
                  </div>
                </div>
                <div className="w-full md:w-[32%]">
                  <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                    Browser/Platform
                  </p>
                  <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                    {bug.browser ?? "Plartform was not provided."}
                  </div>
                </div>
                <div className="w-full md:w-[32%]">
                  <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                    Screen Size
                  </p>
                  <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                    {bug.screenSize ?? "Screen size was not provided."}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[33%] md:block md:border-l md:pl-4">
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Reporter Name
              </p>
              <p className="w-full text-[#A5B2CA] text-[15px] font-[600]">
                {bug.reporterName ?? "Reporter name was not provided."}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Reporter Email
              </p>
              <p className="w-full text-[#A5B2CA] text-[15px] font-[600]">
                {bug.reporterEmail ?? "Reporter email was not provided."}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Attachments
              </p>
              {bug.attachments.map((attachment, index) => (
                <Link
                  href={bug.attachments_urls[index]}
                  key={index}
                  className="flex justify-between mb-2 bg-[#F8FAFC] rounded-[8px] border border-[#EBEBEB] p-2 cursor-pointer"
                >
                  <div className="flex gap-2">
                    <AttachmentSvg />
                    <p className="text-[#191F38] text-center text-[14px] font-[600] mb-2 mt-2 truncate">
                      {attachment.split("/")[1]}
                    </p>
                  </div>
                  <div className="my-auto pr-2">
                    <CloseIcon />
                  </div>
                </Link>
              ))}
              {bug.attachments.length === 0 && (
                <p className="text-[15px] text-[#A5B2CA] font-[600] mb-2">
                  No attachments was provided.
                </p>
              )}
            </div>
            <AdminActionPanel bug={bug} admins={admins} />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-2">
          <Link
            href={"/admin/bugs"}
            className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4  py-1.5 rounded-[8px] cursor-pointer"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
