'use client'
import { deleteSupportCall } from "@/app/(authenticated)/admin/customer-support/action";
import { revalidateTag } from "next/cache";
import React from "react";
import toast from "react-hot-toast";

function SupportCallDeleteButton({call} : {call: string}) {
    const handleDelete = (id: string) => {
        const res = deleteSupportCall(id);
        if(typeof res === "string") toast.error(res);
        else toast.success("Scheduled call deleted");
      };
  return (
    <div>
      <div
        onClick={() => handleDelete(call)}
        className="bg-[#F0F5FF] rounded-[8px] text-[16px] text-[#2377FC] font-[500] px-2 py-1 cursor-pointer"
      >
        <p className="my-auto">Delete</p>
      </div>
    </div>
  );
}

export default SupportCallDeleteButton;
