"use client";
import React, { useState } from "react";
import ToggleMini from "../ClientManagement/TooglelMini";
import { coupons } from "@/contents/Admin/Coupons/Data";
import RemoveIcon from "@/svg/CloudStorage/RemoveIcon";
import EyeSvg from "@/svg/Admin/EyeSvg";
import EditIconSvg from "@/svg/Admin/EditIconSvg";
import StatusBadge from "@/components/Common/StatusBadge";
import UpdateCouponModal from "./UpdateCouponModal";

function CouponTable() {
  const [showCouponModal, setShowCouponModal] = useState(false);
  return (
    <div className="mt-4 table-wrp block h-[calc(100vh-40vh)] overflow-y-auto">
      <table className="table-fixed w-full rounded-[16px]">
        <thead className="sticky top-0 bg-[#EDEDED]">
          <tr className="text-[#6F6F6F] text-[12px] font-[500]">
            <th className="border-b border-[#EAECF0] p-4 w-[10%] text-left rounded-l-[6px]">
              Coupon Code
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
              Discount Type
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[15%] text-left">
              Discount Amount
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left">
              Expiration Date
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
              Time Used
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[10%] text-left">
              Status
            </th>
            <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
          {coupons.map((item: any, index: number) => (
            <tr
              key={index}
              // className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
            >
              <td className="border-b border-[#EAECF0] p-4">
                {item.couponCode}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.discountType}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.discountAmount}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.expirationDate}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.timesUsed}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                <StatusBadge text={item.status} />
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                <div className="flex gap-4 my-auto">
                  <ToggleMini />
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowCouponModal(true)}
                  >
                    {" "}
                    <EditIconSvg />{" "}
                  </div>
                  <div className="cursor-pointer">
                    {" "}
                    <RemoveIcon />{" "}
                  </div>
                  <div className="cursor-pointer">
                    <EyeSvg />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCouponModal && <UpdateCouponModal setShow={setShowCouponModal} />}
    </div>
  );
}

export default CouponTable;
