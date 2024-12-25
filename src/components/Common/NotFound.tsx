import Image from "next/image";
import React from "react";

export default function NotFound({ title, subTitle }: any) {
  return (
    <div className="w-[300px]">
      <div className="flex justify-center">
        <div className="w-[102px] h-[102px] relative">
          <Image src="/images/not-found.png" fill alt="Not Found" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full mt-5">
        <h1 className="text-[#292D32] text-[18px] font-[700]">{title}</h1>
        <p className="text-[#6F6F6F] text-[14px] font-[500]">{subTitle}</p>
      </div>
    </div>
  );
}
