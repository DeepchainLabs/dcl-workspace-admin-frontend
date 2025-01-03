import React, { useActionState, useEffect, useState } from "react";
import Close from "@/svg/Subscription/Close";
import DropDown from "@/components/Common/DropDown";
import { useFormStatus } from "react-dom";
import { handleCreateCoupon } from "@/app/(authenticated)/admin/coupons/actions";
import FormError from "../Common/FormError";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";

export default function AddNewCouponModal({ setShow }: any) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [selectedUsers, setSelectedUsers] = useState<string[]>(["New Users"]);

  const toggleUsers = (moduleName: string) => {
    setSelectedUsers((prev) =>
      prev.includes(moduleName)
        ? prev.filter((m) => m !== moduleName)
        : [...prev, moduleName]
    );
  };

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

  const [selected, setSelected] = useState("ALL");

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelected(event.target.value);
  };

  const [state, action, pending] = useActionState(handleCreateCoupon, {});

  useEffect(() => {
    if (state?.success) {
      toast.success("Coupon created successfully");
      setShow(false);
    }
    if (state?.error) {
      toast.error(extractError(state.error));
    }
    console.log(state);
  }, [state, setShow]);

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[580px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div>
            <div className="flex justify-between">
              <p className="text-[#191414] text-[24px] font-[700]">
                Create Coupon
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <Close />
              </div>
            </div>
          </div>

          <form action={action}>
            <div>
              <div className="flex justify-between gap-4 pt-4">
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                    name="code"
                  />
                  {state?.formErrors?.code && (
                    <FormError error={state.formErrors.code} />
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    Discount Type
                  </label>
                  <DropDown
                    selected={1}
                    options={[
                      { id: "PERCENTAGE", name: "Parcentage Based" },
                      { id: "CLOSE", name: "Close" },
                    ]}
                    onChange={() => {}}
                    width="100%"
                    height="42px"
                    name="discount_type"
                  />
                  {state?.formErrors?.discount_type && (
                    <FormError error={state.formErrors.discount_type} />
                  )}
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
                  name="description"
                ></textarea>
                {state?.formErrors?.description && (
                  <FormError error={state.formErrors.description} />
                )}
              </div>
              <div className="flex justify-between gap-4 pt-4">
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    Discount Amount
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                    name="discount_amount"
                  />
                  {state?.formErrors?.discount_amount && (
                    <FormError error={state.formErrors.discount_amount} />
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                    name="expire_on"
                  />
                  {state?.formErrors?.expire_on && (
                    <FormError error={state.formErrors.expire_on} />
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-4 pt-4">
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    Minimum Purchase Amount
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                    name="min_purchase_amount"
                  />
                  {state?.formErrors?.min_purchase_amount && (
                    <FormError error={state.formErrors.min_purchase_amount} />
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                    User Limits
                  </label>
                  <input
                    type="number"
                    placeholder=""
                    className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
                    name="max_user_limit"
                  />
                  {state?.formErrors?.max_user_limit && (
                    <FormError error={state.formErrors.max_user_limit} />
                  )}
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
                  {["ALL", "New Users", "Existing Users"].map((item) => (
                    <label
                      key={item}
                      className={`border rounded-[8px] py-2 px-5 text-center text-[14px] font-[500] cursor-pointer ${
                        selected === item
                          ? "bg-[#2377FC] text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <input
                        type="radio"
                        name="discount_capability"
                        value={item}
                        checked={selected === item}
                        onChange={handleSelectionChange}
                        className="hidden"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-end gap-4">
              <button
                onClick={() => setShow(false)}
                className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-6 py-1.5 rounded-[8px] cursor-pointer"
              >
                Cancel
              </button>
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-8 py-1.5 rounded-[8px] cursor-pointer"
      disabled={pending}
      style={{ opacity: pending ? 0.5 : 1 }}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};
