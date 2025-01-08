"use client";

import { useState } from "react";
import StripeAccountCard from "./StripeAccountCard";
import AccountInfo from "./AccountInfo";

export default function StripeTransaction() {
  const [editAccountInfo, setEditAccountInfo] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Stripe Transactions (Not Integrated)
        </p>
        {!editAccountInfo && (
          <button
            onClick={() => setEditAccountInfo(!editAccountInfo)}
            className="bg-[#2377FC] rounded-[8px] flex justify-center gap-2 w-[180px] h-[42px] cursor-pointer"
          >
            <p className="text-[#FFFFFF] text-[16px] font-[600] text-center my-auto">
              Edit Information
            </p>
            <svg
              className="my-auto"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8144 3.00002L4.9727 10.2417C4.71436 10.5167 4.46436 11.0584 4.41436 11.4334L4.10603 14.1333C3.9977 15.1083 4.6977 15.775 5.66436 15.6084L8.3477 15.15C8.7227 15.0834 9.2477 14.8084 9.50603 14.525L16.3477 7.28335C17.531 6.03335 18.0644 4.60835 16.2227 2.86668C14.3894 1.14168 12.9977 1.75002 11.8144 3.00002Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6729 4.20825C11.0312 6.50825 12.8979 8.26658 15.2145 8.49992"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.2644 18.3333H18.2644"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="mt-6 flex gap-8">
        <StripeAccountCard></StripeAccountCard>
        <AccountInfo
          editAccountInfo={editAccountInfo}
          setEditAccountInfo={setEditAccountInfo}
        ></AccountInfo>
      </div>
    </div>
  );
}
