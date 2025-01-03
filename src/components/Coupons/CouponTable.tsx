"use client";
import React, { useState } from "react";
import ToggleMini from "../ClientManagement/TooglelMini";
import RemoveIcon from "@/svg/CloudStorage/RemoveIcon";
import EyeSvg from "@/svg/Admin/EyeSvg";
import EditIconSvg from "@/svg/Admin/EditIconSvg";
import StatusBadge from "@/components/Common/StatusBadge";
import UpdateCouponModal from "./UpdateCouponModal";
import dayjs from "dayjs";
import { updateCouponStatus } from "@/resources/coupons/coupon.service";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";

function CouponTable({ coupons }: any) {
  const [showCouponModal, setShowCouponModal] = useState(false);

  const handleToggle = (id: string, toogle: boolean) => {
    updateCouponStatus({ id, active: toogle })
      .then((res) => {
        toast.success(res.message);
      })
      .catch((error) => {
        toast.error(extractError(error));
      });
  };

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
              <td className="border-b border-[#EAECF0] p-4">{item.code}</td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.discount_type}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.discount_amount}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {dayjs(item.expire_on).format("DD/MM/YYYY") || "N/A"}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                {item.use_count}
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                <StatusBadge text={item.active ? "active" : "inactive"} />
              </td>
              <td className="border-b border-[#EAECF0] p-4">
                <div className="flex gap-4 my-auto">
                  <ToggleMini
                    id={item._id}
                    checked={item.active ? true : false}
                    onChange={handleToggle}
                  />
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
