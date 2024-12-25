import DownloadIcon from "@/svg/Dashboard/DownloadIcon";
import StatusBadge from "../Common/StatusBadge";

export default function InvoicesTable(){
    return (
        <div className="overflow-x-auto">
            <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] grid grid-cols-6 px-4">
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">Date</p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Invoice ID
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Amount
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">Type</p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Status
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Action
                </p>
            </div>
            </div>
            {[1, 2, 3]?.map((item, index) => (
            <div
                key={index}
                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-6 px-4 rounded-[8px] group cursor-pointer"
            >
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    03/04/2024
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    1234
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    $1234
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    Small Team
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <StatusBadge text="Pending"></StatusBadge>
                </div>
                <div className="col-span-1 my-auto">
                    <DownloadIcon></DownloadIcon>
                </div>
            </div>
            ))}
        </div>
    )
}