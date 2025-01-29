"use client";

import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  acceptRefundAction,
  rejectRefundAction,
} from "@/app/(authenticated)/admin/payment-management/action";
import { getInvoiceByChargeId } from "@/resources/payment/payment.service";
import { ModalCrossButton } from "@/svg/Crms/CommonModalIcons";

interface RefundDetailsModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  refund: any;
}

export default function RefundDetailsModal({
  isOpen,
  setOpen,
  refund,
}: RefundDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [invoice, setInvoice] = useState<any | null>(null);

  useEffect(() => {
    async function fetchInvoice() {
      try {
        if (refund?.charge_id) {
          const result = await getInvoiceByChargeId(refund.charge_id);
          setInvoice(result);
        }
      } catch (error: any) {
        console.error("Failed to fetch invoice:", error);
      }
    }
    if (isOpen && refund?.charge_id) {
      fetchInvoice();
    }
  }, [isOpen, refund?.charge_id]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setOpen]);

  if (!isOpen || !refund) return null;

  async function handleAccept() {
    try {
      const cancelSubscription = true;
      await acceptRefundAction(refund._id, cancelSubscription);
      toast.success("Refund accepted successfully.");
      setOpen(false);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to accept the refund.");
    }
  }

  async function handleReject() {
    try {
      await rejectRefundAction(refund._id);
      toast.success("Refund rejected successfully.");
      setOpen(false);
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Failed to reject the refund.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white w-[649px] rounded-[12px] shadow-lg p-6"
      >
        <div className="border-b-2 border-[#E5E9EB]">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#191414] text-[20px] font-[600]">
              Refund Details
            </h2>
            <div className="flex justify-end gap-6 mb-2">
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ModalCrossButton />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-12 mt-6">
          <h3 className="text-[#6F6F6F] font-[600] text-[18px] mb-4">
            Refund Request Information
          </h3>
          <div className="flex justify-between gap-y-8">
            <div className="space-y-3">
              <p className="text-[#19192F] text-[16px] font-[500]">Refund ID</p>
              <p className="text-[#19192F] text-[16px] font-[500]">Reason</p>
              <p className="text-[#19192F] text-[16px] font-[500]">
                Description
              </p>
              <p className="text-[#19192F] text-[16px] font-[500]">Amount</p>
              <p className="text-[#19192F] text-[16px] font-[500]">
                Date of Request
              </p>
              <p className="text-[#19192F] text-[16px] font-[500]">Status</p>
              <p className="text-[#19192F] text-[16px] font-[500]">Charge ID</p>
            </div>
            <div className="space-y-3 text-right">
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund._id}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund.reason || "-"}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund.description || "-"}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund.amount || "-"}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {dayjs(refund.created_at).format("YYYY-MM-DD")}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund.status}
              </p>
              <p className="text-[#6F6F6F] text-[16px] font-[500]">
                {refund.charge_id || "-"}
              </p>
            </div>
          </div>
        </div>

        {invoice && (
          <div className="mb-12">
            <h3 className="text-[#6F6F6F] text-[18px] font-[600] mb-4 mt-4">
              Related Invoice Information
            </h3>
            <div className="flex justify-between gap-y-8">
              <div className="space-y-3">
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Invoice ID
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">Status</p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Collection Method
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Currency
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Customer Email
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Customer Name
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Customer Phone
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Customer Address
                </p>
                <p className="text-[#19192F] text-[16px] font-[500]">
                  Amount Paid
                </p>
              </div>
              <div className="space-y-3 text-right">
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.id}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.collection_method}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.currency}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.customer_email || "-"}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.customer_name || "-"}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.customer_phone || "-"}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.customer_address?.line1
                    ? invoice.customer_address.line1
                    : "N/A"}
                </p>
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                  {invoice.amount_paid || 0}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-[#F0F5FF] text-[#2377FC] text-[16px] rounded-[8px] font-[500]"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-[#2377FC] text-[#FFFFFF] text-[16px] rounded-[8px] font-[500]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
