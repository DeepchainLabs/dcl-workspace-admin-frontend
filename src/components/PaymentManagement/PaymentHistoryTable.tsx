import DownloadIcon from "@/svg/Dashboard/DownloadIcon";
import StatusBadge from "../Common/StatusBadge";
import dayjs from "dayjs";

export default function PaymentHistoryTable({ history }: { history: any }) {
  return (
    <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
      <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-9 px-4">
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">ID</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Date</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Amount</p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Method</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Status</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Invoice</p>
        </div>
      </div>
      {history?.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-9 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
        >
          <div className="col-span-2 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              {item.id.slice(0, 15)}
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
              <p>{dayjs(item.created_at).format("DD MMM YYYY")}</p>
            </p>
          </div>
          <div className="col-span-1 my-auto">
            <p className="text-[#292D32] text-[16px] font-[500]">
              ${item.amount / 100}
            </p>
          </div>
          <div className="col-span-2 group-hover:text-[#2377FC] my-auto uppercase">
            <p className="text-[#292D32] text-[16px] font-[500]">
              {item?.payment_method.brand} **** ***** ****{" "}
              {item?.payment_method.last4}
            </p>
          </div>
          <p className="text-[#292D32] text-[16px] font-[500]">
            <StatusBadge text={item?.paid ? "PAID" : "UNPAID"}></StatusBadge>
          </p>
          <p className="text-[#292D32] text-[16px] font-[500]">
            <DownloadIcon></DownloadIcon>
          </p>
        </div>
      ))}
    </div>
  );
}
