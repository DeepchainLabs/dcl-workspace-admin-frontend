import DropDown from "@/components/Common/DropDown";
import ErrorAllert from "@/components/Common/ErrorAllert";
import ActionTab from "@/components/Support/ActionTab";
import TicketAdminActions from "@/components/Support/admin/TicketAdminActions.";
import Chating from "@/components/Support/Chating";
import { Ticket } from "@/interfaces/Support";
import { extractError } from "@/utils/errors.utils";
import Image from "next/image";
import React from "react";
import { getTicketById } from "@/support/customer-support.service";
import { getEmployess } from "@/resources/settings/employee.service";
import RevalidateSupportChatEvent from "./RevalidateSupportChatEvent";

export default async function CustomerSupportDetails({
  params,
}: {
  params: any;
}) {
  const { id } = await params;
  const _ticket = await getTicketById({ id }).catch((error) => {
    return extractError(error);
  });
  if (typeof _ticket === "string") return <ErrorAllert message={_ticket} />;
  const ticket = _ticket as unknown as Ticket;

  const users = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof users === "string") return <ErrorAllert message={users} />;

  return (
    <div>
      {/* <RevalidateSupportChatEvent /> */}
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Tickets</p>
        </div>
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="grid grid-cols-4 gap-6 ">
          <div className="col-span-3 py-2">
            <ActionTab ticket={ticket} />

            <div className="mt-4 bg-[#F8FAFC] border border-[#E5E9EB] rounded-[8px] w-full min-h-[270px]">
              <div className="border-b border-[#E5E9EB] flex justify-between p-4">
                <div className="flex gap-3">
                  <div className="w-[40px] h-[40px] relative my-auto">
                    <Image
                      className="rounded-full border border-[#E5E9EB]"
                      src="/images/dummy_user.png"
                      fill
                      alt="user"
                    />
                  </div>
                  <div className="space-y-0">
                    <p className="text-[#292D32] text-[16px] font-[500]">
                      {ticket.createdBy.first_name}
                    </p>
                    <p className="text-[#A5B2CA] text-[16px] font-[500]">
                      Created a ticket | {ticket.category}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#6F6F6F] text-[16px] font-[500]">
                    {new Date(ticket.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}{" "}
                    at{" "}
                    {new Date(ticket.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
              <div className="mt-0 p-4">
                <p className="text-[#292D32] text-[16px] font-[600]">
                  {ticket.subject}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {ticket.description}
                </p>

                <div className="mt-8">
                  <p className="text-[#A5B2CA] text-[16px] font-[500]">
                    Attachments
                  </p>
                  {ticket?.attachment ? (
                    <a
                      href={ticket.attachment as string}
                      download
                      className="text-[#2377FC] text-[16px] font-[500] w-full"
                    >
                      <div className="bg-[#e8e1e1] p-4 rounded-[8px] mt-2 w-[300px]">
                        {ticket.attachment.split("/").pop()?.split("?")[0] ??
                          "Unknown File"}{" "}
                      </div>
                    </a>
                  ) : (
                    <p className="text-[#6F6F6F] text-[14px]">
                      No attachments available
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Chating ticket={ticket} />
          </div>

          <div className="col-span-1 border-l border-[#E5E9EB] py-4 min-h-[calc(100vh-80px)]">
            <div className=" pl-6">
              <p className="text-[#222425] text-[24px] font-[700]">
                Contact Details
              </p>
            </div>
            <div className="flex gap-2 mt-6  pl-6">
              <div className="w-[50px] my-auto">
                <div className="w-[40px] h-[40px] relative">
                  <Image
                    className="rounded-full border border-[#E5E9EB]"
                    src="/images/dummy_user.png"
                    fill
                    alt="user"
                  />
                </div>
              </div>
              <div className="space-y-0">
                <p className="text-[#292D32] text-[16px] font-[500]">
                  {ticket.createdBy.first_name +
                    " " +
                    ticket.createdBy.last_name}
                </p>
                <p className="text-[#A5B2CA] text-[16px] font-[500]">
                  Created a ticket
                </p>
              </div>
            </div>

            <div className="mt-6  pl-6">
              <p className="text-[#6F6F6F] text-[16px] font-[500] mb-0">
                Email
              </p>
              <p className="text-[#292D32] text-[16px] font-[500]">
                {ticket.createdBy.email}
              </p>
            </div>
            <div className="mt-4 border-b border-[#E5E9EB] pb-5  pl-6">
              <p className="text-[#6F6F6F] text-[16px] font-[500] mb-0">
                Phone
              </p>
              <p className="text-[#292D32] text-[16px] font-[500]">
                {ticket.createdBy.phone}
              </p>
            </div>

            <TicketAdminActions ticket={ticket} users={users} />

            {/* <div className="mt-8 flex justify-end gap-4">
            <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[500] px-4 py-1.5 rounded-[8px] cursor-pointer">
              Update
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
