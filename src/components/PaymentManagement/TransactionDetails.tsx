'use client'
import React, { useEffect, useRef } from "react";

const TransactionDetails = ({ isOpen }: any) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          isOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [modalRef, isOpen]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div  ref={modalRef} className="bg-white w-[649px] rounded-[12px] shadow-lg p-6">
        <div className="border-b-2 border-[#E5E9EB]">
            <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#191414] text-[20px] font-[600]">
            Transaction Details
          </h2>
          <div className="flex justify-end gap-6 mb-2">
            <div className="bg-[#F0F5FF] rounded-[8px] w-[168px] h-[28px] flex items-center justify-center gap-3">
              <p className="text-[#2377FC] text-[14px] font-[600]">
                Transaction ID :
              </p>
              <p className="text-[#7F899C] text-[14px] font-[500]">123456</p>
            </div>
            <button
              onClick={() => {
                isOpen(false);
              }}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              &#x2715;
            </button>
          </div>
            </div>
        </div>
        <div className="mb-12 mt-6">
            <h3 className="text-[#6F6F6F] font-[600] text-[18px] mb-4">
                Transaction Information
            </h3>
            <div className="flex justify-between gap-y-8">
                <div className="space-y-3">
                    <p className="text-[#19192F] text-[16px] font-[500]">Bank Account Number</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Bank Account Type</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Bank Account Name</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Currency</p>
                </div>
                <div className="space-y-3 text-right">
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">Outlet 1</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">10123123123</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">Agrabad</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">BDT</p>
                </div>
            </div>
        </div>
        <div className="mb-12">
            <h3 className="text-[#6F6F6F] text-[18px] font-[600] mb-4 mt-4">
                Other Information
            </h3>
            <div className="flex justify-between gap-y-8">
                <div className="space-y-3">
                    <p className="text-[#19192F] text-[16px] font-[500]">Date</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Type</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Description</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Credit</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Debit</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Charge/Fee</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">Running Balance</p>
                </div>
                <div className="space-y-3 text-right">
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">04-11-2024</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">Payment</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">TO_NUMBER-TRXID</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">2,000.00</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">0.00</p>
                    <p className="text-[#6F6F6F] text-[16px] font-[500]">0.00</p>
                    <p className="text-[#19192F] text-[16px] font-[500]">40,0842.09</p>
                </div>
            </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => {
              isOpen(false);
            }}
            className="px-4 py-2 bg-[#F0F5FF] text-[#2377FC] text-[16px] rounded-[8px] font-[500]"
          >
                Close
          </button>
          <button className="px-4 py-2 bg-[#2377FC] text-[#FFFFFF] text-[16px] rounded-[8px] font-[500]">
                Send as Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
