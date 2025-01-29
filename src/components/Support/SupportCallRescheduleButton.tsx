"use client";

import React, { useState } from "react";
// import UpdateScheduleModal from "./UpdateSheduleModal";

function SupportCallRescheduleButton({ call }: { call: any }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShowModal(true)}
        className="bg-[#2377FC] rounded-[8px] text-[16px] text-[#FFFFFF] font-[500] px-2 py-1 cursor-pointer"
      >
        <p className="my-auto">Reschedule</p>
      </div>
      {/* {showModal && <UpdateScheduleModal call={call} setShow={setShowModal} />} */}
    </div>
  );
}

export default SupportCallRescheduleButton;
