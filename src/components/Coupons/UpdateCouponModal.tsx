"use client";
import React, { useEffect, useState } from "react";
import Close from "@/svg/Subscription/Close";
import DropDown from "@/components/Common/DropDown";
import { updateCoupon } from "@/resources/coupons/coupon.service";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";

interface UpdateCouponModalProps {
  setShow: (show: boolean) => void;
  coupon: any;
}

export default function UpdateCouponModal({
  setShow,
  coupon,
}: UpdateCouponModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const [code, setCode] = useState(coupon?.code || "");
  const [discountType, setDiscountType] = useState(coupon?.discount_type || "");
  const [description, setDescription] = useState(coupon?.description || "");
  const [discountAmount, setDiscountAmount] = useState(
    String(coupon?.discount_amount || "")
  );
  const [expireOn, setExpireOn] = useState(
    coupon?.expire_on?.split("T")[0] || ""
  );
  const [minPurchaseAmount, setMinPurchaseAmount] = useState(
    String(coupon?.min_purchase_amount || "")
  );
  const [maxUserLimit, setMaxUserLimit] = useState(
    String(coupon?.max_user_limit || "")
  );
  const [discountCapability, setDiscountCapability] = useState(
    coupon?.discount_capability || "ALL"
  );

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await updateCoupon({
        id: coupon._id,
        code,
        discount_type: discountType,
        description,
        discount_amount: Number(discountAmount),
        expire_on: expireOn,
        max_user_limit: Number(maxUserLimit),
        min_purchase_amount: Number(minPurchaseAmount),
        discount_capability: discountCapability,
      });
      toast.success(data.message || "Coupon updated successfully!");
      setShow(false);
    } catch (error) {
      toast.error(extractError(error));
    }
  }

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[580px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="flex justify-between mb-4">
            <p className="text-[#191414] text-[24px] font-[700]">
              Update Coupon
            </p>
            <div
              onClick={() => setShow(false)}
              className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
            >
              <Close />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-between gap-4 pt-4">
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  Coupon Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  Discount Type
                </label>
                <DropDown
                  selected={discountType}
                  options={[
                    { id: "PERCENTAGE", name: "Percentage Based" },
                    { id: "FIXED", name: "Fixed" },
                  ]}
                  onChange={(val: string) => setDiscountType(val)}
                  width="100%"
                  height="42px"
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                Description
              </label>
              <textarea
                placeholder="Description"
                className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px] font-[500]"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  Discount Amount
                </label>
                <input
                  type="text"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  Expiration Date
                </label>
                <input
                  type="date"
                  value={expireOn}
                  onChange={(e) => setExpireOn(e.target.value)}
                  className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                />
              </div>
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  Minimum Purchase Amount
                </label>
                <input
                  type="text"
                  value={minPurchaseAmount}
                  onChange={(e) => setMinPurchaseAmount(e.target.value)}
                  className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                  User Limits
                </label>
                <input
                  type="number"
                  value={maxUserLimit}
                  onChange={(e) => setMaxUserLimit(e.target.value)}
                  className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                />
              </div>
            </div>

            <div className="pt-4">
              <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                Discount Capability
              </label>
              <label className="block text-[#6F6F6F] font-[600] text-[12px] mb-2">
                Please select from below
              </label>
              <div className="flex gap-2 flex-wrap">
                {["ALL", "NEW", "EXISTING"].map((opt) => (
                  <label
                    key={opt}
                    className={`border rounded-[8px] py-2 px-5 text-center text-[14px] font-[500] cursor-pointer ${
                      discountCapability === opt
                        ? "bg-[#2377FC] text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <input
                      type="radio"
                      name="discount_capability"
                      value={opt}
                      className="hidden"
                      checked={discountCapability === opt}
                      onChange={() => setDiscountCapability(opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-6 py-1.5 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-8 py-1.5 rounded-[8px] cursor-pointer"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
