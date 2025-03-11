"use client";
import React, { useActionState, useEffect, useState } from "react";
import DropDown from "../Common/DropDown";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import RemoveIcon from "@/svg/CloudStorage/RemoveIcon";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { getRoute } from "@/utils/format.util";
import { handleBugReportCreate } from "@/app/(authenticated)/admin/bug-report/action";
import {
  BugModules,
  OperatingSystems,
  Browsers,
  ScreenResolutions,
} from "@/interfaces/Bug.interface";
import FileUploadIcon from "@/svg/Bugs/FileUploadIcon";

function BugReportForm({
  loggedInUser,
}: {
  loggedInUser?: {
    id: string;
    username: string;
    email: string;
  };
}) {
  const [isCurrentSize, setIsCurrentSize] = useState(true);
  const [screenSize, setScreenSize] = useState<string>("");
  const [state, action] = useActionState(handleBugReportCreate, {});
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { user, workspace } = useParams();
  const router = useRouter();

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/jpg",
        "image/heic",
        "application/pdf",
        "video/mp4",
        "video/avi",
        "video/mov",
        "video/webm",
        "video/mkv",
      ];

      // Filter only allowed file types
      const validFiles = Array.from(files).filter((file) =>
        allowedTypes.includes(file.type)
      );

      if (validFiles.length > 0) {
        setSelectedFiles((prevFiles: File[]) => [...prevFiles, ...validFiles]); // Append new files
      } else {
        toast.error("Please upload a valid file type");
      }
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // const clearFileInput = () => {
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = "";
  //     setSelectedFiles([]);
  //     toast.success("Attachment removed");
  //   }
  // };

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(`${window.screen.width} x ${window.screen.height}`);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isCurrentSize) {
      setScreenSize(`${window.screen.width} x ${window.screen.height}`);
    }
  }, [isCurrentSize]);

  useEffect(() => {
    console.log(state);
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Bug Reported Successfully");
      router.push("/admin/bugs");
    }
  }, [state]);

  return (
    <>
      <form action={action}>
        <div className="flex flex-wrap gap-4 border-b border-[#E5E9EB]">
          <div className="w-full md:w-[64%]">
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Title <span className="text-red-500 text-[14px] font-[500]">*</span>
              </p>
              <input
                type="text"
                name="title"
                className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              />
              {state.formErrors?.title && (
                <div className="text-red-500 text-[14px] font-[500] mt-1">
                  {state.formErrors?.title}
                </div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Description <span className="text-red-500 text-[14px] font-[500]">*</span>
              </p>
              <textarea
                name="description"
                rows={5}
                className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              ></textarea>
              {state.formErrors?.description && (
                <div className="text-red-500 text-[14px] font-[500] mt-1">
                  {state.formErrors?.description}
                </div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Steps to reproduce
              </p>
              <textarea
                name="stepsToReproduce"
                rows={5}
                className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
              ></textarea>
              {state.formErrors?.stepsToReproduce && (
                <div className="text-red-500 text-[14px] font-[500] mt-1">
                  {state.formErrors?.stepsToReproduce}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-4 mb-2">
              <div className="w-full md:w-[48%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Expected Results
                </p>
                <input
                  type="text"
                  name="expectedResult"
                  className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                />
                {state.formErrors?.expectedResult && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.expectedResult}
                  </div>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Actual Results
                </p>
                <input
                  type="text"
                  name="actualResult"
                  className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                />
                {state.formErrors?.actualResult && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.actualResult}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="w-full md:w-[48%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Module Name <span className="text-red-500 text-[14px] font-[500]">*</span>
                </p>
                <DropDown
                  name="module"
                  onChange={() => {}}
                  options={BugModules}
                  width="100%"
                  height="44px"
                  bgColor={false}
                />
                {state.formErrors?.module && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.module}
                  </div>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Page Link
                </p>
                <input
                  type="text"
                  name="pageLink"
                  className="w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                />
                {state.formErrors?.pageLink && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.pageLink}
                  </div>
                )}
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
                  <DropDown
                    name="operatingSystem"
                    onChange={() => {}}
                    options={OperatingSystems}
                    width="100%"
                    bgColor={false}
                  />
                  {state.formErrors?.operatingSystem && (
                    <div className="text-red-500 text-[14px] font-[500] mt-1">
                      {state.formErrors?.operatingSystem}
                    </div>
                  )}
                </div>
                <div className="w-full md:w-[32%]">
                  <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                    Browser/Platform
                  </p>
                  <DropDown
                    name="browser"
                    onChange={() => {}}
                    options={Browsers}
                    width="100%"
                    bgColor={false}
                  />
                  {state.formErrors?.browser && (
                    <div className="text-red-500 text-[14px] font-[500] mt-1">
                      {state.formErrors?.browser}
                    </div>
                  )}
                </div>
                <div className="w-full md:w-[32%]">
                  <input type="hidden" name="screenSize" value={screenSize} />
                  <div className="flex justify-between">
                    <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                      Screen Size
                    </p>
                    <div className="flex my-auto">
                      <input
                        className="mr-2 rounded-[2px]"
                        type="checkbox"
                        onChange={(e) => setIsCurrentSize(e.target.checked)}
                        checked={isCurrentSize}
                      />
                      <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                        Current
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${
                      isCurrentSize
                        ? "pointer-events-none opacity-50"
                        : "opacity-100"
                    }`}
                  >
                    <DropDown
                      title={screenSize}
                      name="_screenSize"
                      onChange={(currentSize: string) => {
                        setScreenSize(currentSize);
                      }}
                      options={ScreenResolutions}
                      width="100%"
                      bgColor={false}
                    />
                  </div>
                  {state.formErrors?.screenSize && (
                    <div className="text-red-500 text-[14px] font-[500] mt-1">
                      {state.formErrors?.screenSize}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-[33%] md:block md:border-l md:pl-4 ${
              !!loggedInUser ? "pointer-events-none" : ""
            }`}
          >
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Reporter Name
              </p>
              <input
                type="text"
                defaultValue={loggedInUser?.username}
                name="reporterName"
                className={`w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF] ${
                  !!loggedInUser ? "opacity-50" : "opacity-100"
                }`}
              />
              {state.formErrors?.pageLink && (
                <div className="text-red-500 text-[14px] font-[500] mt-1">
                  {state.formErrors?.pageLink}
                </div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Reporter Email <span className="text-red-500 text-[14px] font-[500]">*</span>
              </p>
              <input
                type="text"
                defaultValue={loggedInUser?.email}
                name="reporterEmail"
                className={`w-full border-2 border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[15px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF] ${
                  !!loggedInUser ? "opacity-50" : "opacity-100"
                }`}
              />
              {state.formErrors?.pageLink && (
                <div className="text-red-500 text-[14px] font-[500] mt-1">
                  {state.formErrors?.pageLink}
                </div>
              )}
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Attachments
              </p>
              <div
                onClick={handleFileInputClick}
                className="bg-[#F8FAFC] rounded-[8px] border border-[#EBEBEB] p-2 cursor-pointer"
              >
                {selectedFiles.length !== 0 ? (
                  <div className="flex flex-wrap justify-center gap-4">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-center">
                          <div className="relative">
                            {file.type.startsWith("image/") ? (
                              <Image
                                src={URL.createObjectURL(file)}
                                alt="Selected file"
                                width={100}
                                height={100}
                              />
                            ) : (
                              <p className="text-center text-[#191F38] text-[12px] font-[600]">
                                {file.name}
                              </p>
                            )}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile(index);
                              }}
                              className="absolute -top-1 -right-4 cursor-pointer"
                            >
                              <RemoveIcon />
                            </div>
                          </div>
                        </div>
                        <p className="text-[#191F38] text-center text-[12px] font-[600] mb-2 mt-2">
                          {file.name}
                        </p>
                        {/* <p className="text-[#191414] text-center w-full text-[13px] font-[600]">
                          <span className="text-[#4157FE] cursor-pointer">
                            Click
                          </span>{" "}
                          to change the file
                        </p> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-6">
                    <div className="flex justify-center">
                      <FileUploadIcon />
                    </div>
                    <p className="text-[#191414] text-center w-full text-[12px] font-[600]">
                      Drop your files here or{" "}
                      <span className="text-[#4157FE]">Click to upload</span>{" "}
                    </p>
                    <p className="text-[#6F6F6F] text-center w-full text-[12px] font-[500]">
                      Max. 5MB | Image
                    </p>
                  </div>
                )}
              </div>
              <input
                type="file"
                name="attachments"
                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp, image/heic, application/pdf, video/mp4, video/avi, video/mov, video/webm, video/mkv"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-2">
          <div className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer">
            Cancel
          </div>
          <CreateBugReportSubmitButton />
        </div>
      </form>
    </>
  );
}

export default BugReportForm;

const CreateBugReportSubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Reporting..." : "Report"}
    </button>
  );
};
