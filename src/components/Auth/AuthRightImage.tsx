import React from "react";
import Image from "next/image";
import AuthSVG from "@/svg/Auth/AuthSVG";
export default function AuthRightImage() {
  return (
    <div>
      <div className="bg-[#2377FC] w-full h-[calc(100vh-16px)] rounded-[20px] md:px-10 lg:px-20">
        <div className="w-[500px] pt-18 lg:pt-20 xxl:pt-24">
          <p className="text-[#FFFFFF] text-[34px]  lg:text-[34px] xxl:text-[36px] font-[700] leading-9">
            The simplest way to manage your workspace
          </p>
          <p className="text-[#FFFFFF] text-[16px] font-[500] mt-2">
            Manage your workflow at ease
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center">
          {/* <AuthSVG /> */}
        </div>
      </div>
    </div>
  );
}
