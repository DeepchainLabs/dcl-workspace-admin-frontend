"use client";
import React, { useState } from "react";
import ToggleMini from "../ClientManagement/TooglelMini";
import RemoveIcon from "@/svg/CloudStorage/RemoveIcon";
import EyeSvg from "@/svg/Admin/EyeSvg";
import EditIconSvg from "@/svg/Admin/EditIconSvg";
import StatusBadge from "@/components/Common/StatusBadge";
import UpdateCouponModal from "./UpdateCouponModal";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";
import {
  deleteCoupon,
  updateCouponStatus,
} from "@/resources/coupons/coupon.service";
import DeleteModal from "@/components/Common/DeleteModal";
import ConfirmDeleteModal from "@/components/Common/ConfirmDeleteModal";
import { hasPermission } from "@/utils/checkPermission";

function CouponTable({ coupons }: { coupons: any[] }) {
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<any>(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

  const handleToggle = async (id: string, toggle: boolean) => {
    try {
      const res = await updateCouponStatus({ id, active: toggle });
      toast.success(res.message);
    } catch (error) {
      toast.error(extractError(error));
    }
  };

  function handleEditClick(coupon: any) {
    setSelectedCoupon(coupon);
    setShowCouponModal(true);
  }

  function handleDeleteClick(coupon: any) {
    setSelectedCoupon(coupon);
    setShowDeleteModal(true);
  }

  async function handleDeleteConfirm() {
    if (!selectedCoupon) return;
    try {
      setShowDeleteModal(false);
      await deleteCoupon(selectedCoupon._id);
      toast.success("Coupon deleted successfully!");
      setShowConfirmDeleteModal(true);
    } catch (error) {
      toast.error(extractError(error));
    }
  }

  function handleCloseConfirmDelete() {
    setShowConfirmDeleteModal(false);
  }

  return (
    <>
      {hasPermission("VIEW_COUPONS") && (
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
                <th className="border-b border-[#EAECF0] p-3 w-[20%] text-left rounded-r-[6px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
              {coupons.map((item: any, index: number) => (
                <tr key={item._id}>
                  <td className="border-b border-[#EAECF0] p-4">{item.code}</td>
                  <td className="border-b border-[#EAECF0] p-4">
                    {item.discount_type}
                  </td>
                  <td className="border-b border-[#EAECF0] p-4">
                    {item.discount_amount}
                  </td>
                  <td className="border-b border-[#EAECF0] p-4">
                    {item.expire_on
                      ? dayjs(item.expire_on).format("DD/MM/YYYY")
                      : "N/A"}
                  </td>
                  <td className="border-b border-[#EAECF0] p-4">
                    {item.use_count || 0}
                  </td>
                  <td className="border-b border-[#EAECF0] p-4">
                    <StatusBadge text={item.active ? "active" : "inactive"} />
                  </td>
                  <td className="border-b border-[#EAECF0] p-4">
                    {hasPermission("MANAGE_COUPONS") && (
                      <div className="flex gap-4 my-auto">
                        <ToggleMini
                          id={item._id}
                          checked={item.active ? true : false}
                          onChange={handleToggle}
                        />
                        <div
                          className="cursor-pointer"
                          onClick={() => handleEditClick(item)}
                        >
                          <EditIconSvg />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => handleDeleteClick(item)}
                        >
                          <RemoveIcon />
                        </div>
                        {/* <div className="cursor-pointer">
                          <EyeSvg />
                        </div> */}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showCouponModal && selectedCoupon && (
        <UpdateCouponModal
          setShow={setShowCouponModal}
          coupon={selectedCoupon}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteConfirm}
        />
      )}
      {showConfirmDeleteModal && (
        <ConfirmDeleteModal
          isOpen={showConfirmDeleteModal}
          onClose={handleCloseConfirmDelete}
          onConfirm={handleCloseConfirmDelete}
        />
      )}
    </>
  );
}

export default CouponTable;
