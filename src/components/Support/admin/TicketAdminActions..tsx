"use client";
import {
  changeTicketService,
  changeTicketPriority,
  changeTicketAssignee,
  changeTicketStatus,
} from "@/app/(authenticated)/admin/customer-support/[id]/action";
import DropDown from "@/components/Common/DropDown";
import { Ticket } from "@/interfaces/Support";
import React from "react";
import toast from "react-hot-toast";

function TicketAdminActions({ ticket, users }: { ticket: Ticket; users: any }) {
  // console.log(ticket, users);
  const handleServiceChange = (service: string) => {
    const res = changeTicketService(ticket._id, service, ticket.tenant);
    if (typeof res === "string") toast.error("Failed to Update");
    else toast.success("Ticket Service Updated");
  };

  const handlePriorityChange = (priority: string) => {
    const res = changeTicketPriority(ticket._id, priority, ticket.tenant);
    if (typeof res === "string") toast.error("Failed to Update");
    else toast.success("Ticket Priority Updated");
  };

  const handleAssigneeChange = (user: string) => {
    const res = changeTicketAssignee(ticket._id, user, ticket.tenant);
    if (typeof res === "string") toast.error("Failed to Update");
    else toast.success("Ticket Assignee Updated");
  };

  const handleStatusChange = (status: string) => {
    console.log(ticket);
    const res = changeTicketStatus(ticket._id, status, ticket.tenant);
    if (typeof res === "string") toast.error("Failed to Update");
    else toast.success("Ticket Status Updated");
  };

  return (
    <div>
      <div className="mt-4">
        <div className=" pl-6">
          <p className="text-[#222425] text-[20px] font-[700]">Properties</p>

          <div className="mt-4">
            <p className="text-[#6F6F6F] text-[16px] font-[500]">Service</p>
            <div className="mt-2">
              <DropDown
                title={ticket.service}
                options={[
                  { id: "Service1", title: "Service 1" },
                  { id: "Service2", title: "Service 2" },
                ]}
                onChange={handleServiceChange}
                width="100%"
                bgColor={false}
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#6F6F6F] text-[16px] font-[500]">Status</p>
            <div className="mt-2">
              <DropDown
                title={ticket.status}
                options={[
                  { id: "Open", name: "Open" },
                  { id: "Closed", name: "Closed" },
                  { id: "In Progress", name: "In Progress" },
                  { id: "Resolved", name: "Resolved" },
                ]}
                onChange={handleStatusChange}
                width="100%"
                bgColor={false}
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#6F6F6F] text-[16px] font-[500]">Priority</p>
            <div className="mt-2">
              <DropDown
                title={ticket.priority}
                options={[
                  { id: "High", name: "High" },
                  { id: "Low", name: "Low" },
                ]}
                onChange={handlePriorityChange}
                width="100%"
                bgColor={false}
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[#6F6F6F] text-[16px] font-[500]">Assigned To</p>
            <div className="mt-2">
              <DropDown
                title={ticket.assignee?.first_name}
                options={users}
                onChange={handleAssigneeChange}
                width="100%"
                bgColor={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketAdminActions;
