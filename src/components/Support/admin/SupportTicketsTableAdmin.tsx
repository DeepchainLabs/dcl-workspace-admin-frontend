import Link from "next/link";
import React, { Suspense } from "react";
import {
  getMySupportTickets,
  getSupportTickets,
} from "@/resources/support/customer-support.service";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import StatusBadge from "@/components/Common/StatusBadge";
import TypeBadge from "@/components/Common/TypeBadge";
import { getRoute } from "@/utils/format.util";
import SupportTicketTableSkeleton from "../SupportTicketTableSkeleton";
import { Ticket } from "@/interfaces/Support";

async function SupportTicketsTableAdmin({
  params,
}: {
  params: Promise<{ user: string; workspace: string }>;
}) {
  const param = await params;
  const tickets = await getSupportTickets().catch((error) => {
    console.log(error);
    return extractError(error);
  });
  if (typeof tickets === "string") return <ErrorAllert message={tickets} />;
  const sortedTickets = (tickets as Ticket[]).sort(
    (a: Ticket, b: Ticket) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <div className="overflow-x-auto mt-6">
      <div className="bg-[#F6F6F6] w-full grid grid-cols-[0.5fr_1.5fr_1.5fr_2.5fr_1.5fr_1.5fr_1fr_1fr_1.5fr] p-4">
        {[
          "SL",
          "REQUESTER NAME",
          "TENANT",
          "SUBJECT",
          "CATEGORY",
          "SERVICE",
          "STATUS",
          "PRIORITY",
          "ASSIGNEE",
        ].map((header, index) => (
          <div className="my-auto truncate" key={index}>
            <p className="text-[#6F6F6F] text-[16px] font-[500] truncate">
              {header}
            </p>
          </div>
        ))}
      </div>

      <Suspense fallback={<SupportTicketTableSkeleton />}>
        {tickets.length === 0 ? (
          <div className="my-auto">
            <p className="text-[#292D32] text-[20px] font-[500] text-center py-4 border-b border-[#E5E9EB]">
              No ticket yet
            </p>
          </div>
        ) : (
          sortedTickets.map((item: Ticket, index) => (
            <Link
              href={getRoute(
                param.user,
                param.workspace,
                `/admin/customer-support/${item._id}`
              )}
              key={item._id}
              className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-[0.5fr_1.5fr_1.5fr_2.5fr_1.5fr_1.5fr_1fr_1fr_1.5fr] px-4 rounded-[8px] group cursor-pointer"
            >
              <div className="my-auto text-center truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                  {index + 1}
                </p>
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
                  {item.createdBy?.first_name || "-"}
                </p>
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
                  {item.tenant.name || "-"}
                </p>
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
                  {item.subject || "-"}
                </p>
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
                  {item.category || "-"}
                </p>
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
                  {item.service || "-"}
                </p>
              </div>
              <div className="my-auto">
                <StatusBadge text={item.status || "Pending"} />
              </div>
              <div className="my-auto">
                <TypeBadge text={item.priority || "Normal"} />
              </div>
              <div className="my-auto truncate">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] truncate">
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
