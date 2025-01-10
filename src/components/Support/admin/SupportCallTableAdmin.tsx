import ErrorAllert from "@/components/Common/ErrorAllert";
import {
    deleteCall,
    getMySupportCalls,
  } from "@/support/customer-support.service";
  import { extractError } from "@/utils/errors.utils";
  import React, { Suspense } from "react";
  import toast from "react-hot-toast";
import SupportCallDeleteButton from "../SupportCallDeleteButton";
  
  async function SupportCallTableAdmin() {
    const calls = await getMySupportCalls().catch((error) => {
      console.log(error);
      return extractError(error);
    });
    if (typeof calls === "string") return <ErrorAllert message={calls} />;
    return (
      <div>
        <div className="overflow-x-auto mt-6">
          <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-12 px-4">
            <div className="col-span-1 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">SL</p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">TITLE</p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">REASON</p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">DATE</p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">TIME</p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">ACTION</p>
            </div>
          </div>
  
          <Suspense fallback={<div>Loading Your Calls...</div>}>
            {calls.length === 0 ? (
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[20px] font-[500] text-center py-4 border-b border-[#E5E9EB]">
                  {"No calls yet"}
                </p>
              </div>
            ) : (
              calls?.map((call: any, index) => (
                <div
                  key={index}
                  // onClick={() => setOpenDetailsModal(true)}
                  className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-12 px-4 rounded-[8px] group min-w-[1000px]"
                >
                  <div className="col-span-1 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                      {index + 1}
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                      {call.title}
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                      {call.reason}
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                      {new Date(call.date)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(" ", ", ")}
                    </p>
                  </div>
                  <div className="col-span-2 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                      {call.time}
                    </p>
                  </div>
  
                  <div className="col-span-2 my-auto">
                    <div className="flex gap-4">
                      <div
                        //   onClick={() => setOpenAddModal(true)}
                        className="bg-[#2377FC] rounded-[8px] text-[16px] text-[#FFFFFF] font-[500] px-3 py-1 cursor-pointer"
                      >
                        <p className="my-auto">Join</p>
                      </div>
                      <SupportCallDeleteButton call = {call._id} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </Suspense>
  
          {}
        </div>
      </div>
    );
  }
  
  export default SupportCallTableAdmin;
  