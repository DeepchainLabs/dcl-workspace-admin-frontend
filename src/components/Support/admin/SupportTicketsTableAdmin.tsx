import Link from "next/link";
import React, { Suspense } from "react";
import {
  getMySupportTickets,
  getSupportTickets,
} from "@/support/customer-support.service";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import StatusBadge from "@/components/Common/StatusBadge";
import TypeBadge from "@/components/Common/TypeBadge";
import { getRoute } from "@/utils/format.util";
import SupportTicketTableSkeleton from "../SupportTicketTableSkeleton";

async function SupportTicketsTableAdmin({params} : {params: Promise<{ user: string; workspace: string }>}) {
  const param = await params;
  const tickets = await getSupportTickets().catch((error) => {
    console.log(error);
    return extractError(error);
  });
  if (typeof tickets === "string") return <ErrorAllert message={tickets} />;
  return (
    <div className="overflow-x-auto mt-6">
      {/* Table Header */}
      <div className="bg-[#F6F6F6] w-full grid grid-cols-[1fr_3fr_2fr_2fr_3fr_2fr_2fr_2fr] p-4">
        {[
          "SL",
          "REQUESTER NAME",
          "SUBJECT",
          "CATEGORY",
          "SERVICE",
          "STATUS",
          "PRIORITY",
          "ASSIGNEE",
        ].map((header, index) => (
          <div className="my-auto" key={index}>
            <p className="text-[#6F6F6F] text-[16px] font-[500]">{header}</p>
          </div>
        ))}
      </div>

      {/* Table Content */}
      <Suspense fallback={<SupportTicketTableSkeleton />}>
        {tickets.length === 0 ? (
          <div className="my-auto">
            <p className="text-[#292D32] text-[20px] font-[500] text-center py-4 border-b border-[#E5E9EB]">
              No ticket yet
            </p>
          </div>
        ) : (
          tickets.map((item: any, index) => (
            <Link
              href={getRoute(
                param.user,
                param.workspace,
                `/admin/customer-support/${item._id}`
              )}
              key={item._id}
              className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-[1fr_3fr_2fr_2fr_3fr_2fr_2fr_2fr] px-4 rounded-[8px] group cursor-pointer"
            >
              <div className="my-auto text-center">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {index + 1}
                </p>
              </div>
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {item.createdBy?.first_name || "-"}
                </p>
              </div>
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {item.subject || "-"}
                </p>
              </div>
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {item.category || "-"}
                </p>
              </div>
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {item.service || "-"}
                </p>
              </div>
              <div className="my-auto">
                <StatusBadge text={item.status || "Pending"} />
              </div>
              <div className="my-auto">
                <TypeBadge text={item.priority || "Normal"} />
              </div>
              <div className="my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {item.assignee?.first_name || "-"}
                </p>
              </div>
            </Link>
          ))
        )}
      </Suspense>
    </div>
  );
}

export default SupportTicketsTableAdmin;
