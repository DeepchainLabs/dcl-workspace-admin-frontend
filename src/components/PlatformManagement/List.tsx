import StatusBadge from "@/components/Common/StatusBadge";

export default function List() {
  return (
    <div>
      <div className="mt-4 mb-4">
        <p className="text-[#292D32] text-[20px] font-[600]">List of APIs</p>
      </div>
      <div className="overflow-y-visible mt-2">
        <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-12 px-4">
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">API Name</p>
          </div>
          <div className="col-span-4 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">API Key</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">
              Total API Calls
            </p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">Start Form</p>
          </div>
          <div className="col-span-2 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">Status</p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#6F6F6F] text-[14px] font-[600]">Action</p>
          </div>
        </div>
        {[1, 2, 3]?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-12 px-4 rounded-[8px] group min-w-[1000px]"
          >
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32]  text-[16px] font-[600]">
                Stripe
              </p>
            </div>
            <div className="col-span-4 my-auto">
              <p className="text-[#292D32]  text-[16px] font-[600]">
                **** **** ****
              </p>
            </div>
            <div className="col-span-2 my-auto flex gap-2">
              <div className="mt-1">
                <p className="text-[#292D32]  text-[16px] font-[600] ">
                  1234
                </p>
              </div>
            </div>

            <div className="col-span-2 my-auto">
              <p className="text-[#292D32]  text-[16px] font-[600]">
                30 Nov, 2024
              </p>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#292D32]  text-[16px] font-[600]">
                <StatusBadge text={"Active"} />
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="w-[75px] h-[24px] bg-[#2377FC] rounded-[8px] text-[#FFFFFF] text-[14px] font-[600] px-2 ">
                Manage
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
