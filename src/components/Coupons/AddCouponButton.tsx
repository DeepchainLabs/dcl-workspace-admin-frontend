"use client";
import PlusIcon from "@/svg/Note/PlusIcon";
import React, { useState } from "react";
import AddNewCouponModal from "./AddNewCouponModal";
import { hasPermission } from "@/utils/checkPermission";

function SortAndAddCoupons() {
  const [showNewCouponModal, setShownewCouponModal] = useState(false);
  return (
    <div className="flex gap-4">
      <div className="w-full">
        <input
          type="date"
          className="text-[16px] font-[500] w-full h-[45px] px-3 border border-[#E5E9EB] rounded-[8px] text-[#6F6F6F] focus:outline-none focus:ring-2 focus:ring-[#2377FC] focus:border-[#2377FC]"
        />
      </div>
      {hasPermission("MANAGE_COUPONS") && (
        <button
          onClick={() => setShownewCouponModal(true)}
          className="flex gap-2 bg-[#2377FC] text-[#F0F5FF] w-full  p-3 rounded-[8px] font-[600] text-[14px]"
        >
          <div>
            <PlusIcon />
          </div>
          Add New Coupon
        </button>
      )}
      {showNewCouponModal && (
        <AddNewCouponModal setShow={setShownewCouponModal} />
      )}
    </div>
  );
}

export default SortAndAddCoupons;
