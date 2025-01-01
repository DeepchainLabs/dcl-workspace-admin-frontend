import React, { Suspense } from "react";
import TableBody from "./TableBody";
import TableBodySkeleton from "./TableBodySkeleton";
import { extractError, handleError } from "@/utils/errors.utils";
import toast from "react-hot-toast";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { getEmployess } from "@/resources/settings/employee.service";

export default async function ListView({ status }: { status: string }) {
  const employees = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof employees === "string") return <ErrorAllert message={employees} />;
  return (
    <div className="">
      <div className="overflow-x-auto">
        <div
          className={`mt-0 bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-12 px-4`}
        >
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">SL</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">NAME</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">EMAIL</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">PHONE</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">DESIGNATION</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">JOINED DATE</p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">STATUS</p>
          </div>
        </div>
        <Suspense fallback={<TableBodySkeleton />}>
          <TableBody employees={employees} />
        </Suspense>
      </div>
    </div>
  );
}
