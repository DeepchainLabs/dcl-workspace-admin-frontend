"use client";
import React from "react";
import TicketForwardModal from "./TicketForwardModal";
import AddTicketNote from "./AddNote";
import DropDown from "../Common/DropDown";
import Forward from "@/svg/Support/Forward";
import { changeStatus } from "@/resources/support/customer-support.service";
import { Ticket } from "@/interfaces/Support";
import toast from "react-hot-toast";
import AddNote from "@/svg/Support/AddNote";
import { changeTicketStatus } from "@/app/(authenticated)/admin/customer-support/[id]/action";

function ActionTab({ ticket }: { ticket: Ticket }) {
  const [openNotes, setOpenNotes] = React.useState(false);
  const [openForward, setOpenForward] = React.useState(false);

  const handleStatusChange = (status: string) => {
    const res = changeTicketStatus(ticket._id, status, ticket.tenant._id);
    if (typeof res === "string")  toast.error("Failed to Update");
    else  toast.success("Ticket Status Updated");
  };
  return (
    <div>
      <div className="mt-8 flex justify-between">
        <div className="">
          <div className="flex gap-2">
            <div
              onClick={() => setOpenForward(true)}
              className="bg-[#F0F5FF] rounded-[8px] px-3 py-1.5 flex gap-2 cursor-pointer"
            >
              <div className="my-auto">
                <Forward />
              </div>
              <p className="my-auto text-[#2377FC] text-[16px] font-[500]">
                Forward
              </p>
            </div>
            <div
              onClick={() => setOpenNotes(true)}
              className="bg-[#FFFFFF] border border-[#E5E9EB] rounded-[8px] px-3 py-1.5 flex gap-2 cursor-pointer"
            >
              <AddNote />
              <p className="my-auto text-[#6F6F6F] text-[16px] font-[500]">
                Add a note
              </p>
            </div>
          </div>
        </div>
        <form action="">
          <div className="w-[150px]">
            <DropDown
              selected={ticket.status}
              title={ticket.status}
              options={[
                { id: "Open", name: "Open" },
                { id: "Closed", name: "Closed" },
                { id: "In Progress", name: "In Progress" },
                { id: "Resolved", name: "Resolved" },
              ]}
              onChange={handleStatusChange}
              width="100%"
              height="35px"
            />
          </div>
        </form>
      </div>
      {openNotes && (
        <AddTicketNote show={openNotes} setShow={() => setOpenNotes(false)} ticket={ticket._id} />
      )}
      {openForward && <TicketForwardModal setShow={setOpenForward} />}
    </div>
  );
}

export default ActionTab;
