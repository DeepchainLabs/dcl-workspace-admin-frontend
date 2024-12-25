import DownloadIcon from "@/svg/Dashboard/DownloadIcon";
import StatusBadge from "../Common/StatusBadge";

export default function PaymentHistoryTable(){
    return (
        <div className="overflow-x-auto">
            <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-10 px-4">
            <div className="col-span-2 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Customer
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Date
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Transaction ID
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Type
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Amount
                </p>
            </div>
            <div className="col-span-2 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Gateway
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Status
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Invoice
                </p>
            </div>
            </div>
            {[1, 2, 3]?.map((item, index) => (
            <div
                key={index}
                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-10 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
            >
                <div className="col-span-2 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    Fahim Wayez
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    12/12/2024
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    1724v875b2359
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] text-[16px] font-[500]">
                    <StatusBadge text="Design"></StatusBadge>
                </p>
                </div>
                <div className="col-span-1 group-hover:text-[#2377FC] my-auto">
                    $45500
                </div>
                <div className="col-span-2 group-hover:text-[#2377FC] my-auto">
                    Visa **** ***** **** 2342
                </div>
                <p className="text-[#292D32] text-[16px] font-[500]">
                    <StatusBadge text="Success"></StatusBadge>
                </p>
                <p className="text-[#292D32] text-[16px] font-[500]">
                    <DownloadIcon></DownloadIcon>
                </p>
            </div>
            ))}
        </div>
    )
}