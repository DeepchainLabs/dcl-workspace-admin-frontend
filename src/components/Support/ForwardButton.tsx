"use client";
import Forward from "@/svg/Support/Forward";
import React from "react";
import TicketForwardModal from "./TicketForwardModal";

function ForwardButton() {
  const [openForward, setOpenForward] = React.useState(false);
  return (
    <div>
      <div
        onClick={() => setOpenForward(true)}
        className="bg-[#F0F5FF] rounded-[8px] px-3 py-1.5 flex gap-2 cursor-pointer"
      >
        <div className="my-auto">
          <Forward />
        </div>
        <p className="my-auto text-[#2377FC] text-[16px] font-[500]">Forward</p>
      </div>
      {openForward && <TicketForwardModal setShow={setOpenForward} />}
    </div>
  );
}

export default ForwardButton;
