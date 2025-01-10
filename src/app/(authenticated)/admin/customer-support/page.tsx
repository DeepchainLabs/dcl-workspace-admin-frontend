import ErrorAllert from "@/components/Common/ErrorAllert";
import StatusBadge from "@/components/Common/StatusBadge";
import SupportCallTableAdmin from "@/components/Support/admin/SupportCallTableAdmin";
import SupportTicketsTableAdmin from "@/components/Support/admin/SupportTicketsTableAdmin";
import { SupportTicketOverview } from "@/interfaces/Support";
import { getSupportTicketsOverview } from "@/support/customer-support.service";
import { extractError } from "@/utils/errors.utils";
import Link from "next/link";
import React from "react";

export default async function CustomerSupport({params} : {params: Promise<{ user: string; workspace: string }>}) {
  const overview = await getSupportTicketsOverview().catch((error) => {
      console.log(error);
      return extractError(error);
    });
    if (typeof overview === "string") return <ErrorAllert message={overview} />;
    const _overview = overview as unknown as SupportTicketOverview;
  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Customer Support</p>
        </div>
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="mt-6 border-b border-[#E5E9EB] pb-8">
          <p className="text-[#A5B2CA] text-[16px] font-[500]">Overview</p>
          <div className="mt-4 flex gap-6 flex-wrap">
            <div className="bg-[#DBEAFE] rounded-[8px] w-[255px] h-[130px] p-4">
              <div className="flex justify-between">
                <p className="text-[#2377FC] text-[44px] font-[700] leading-5 mt-3">
                  {_overview.total}
                </p>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21.9986" cy="22.2532" r="21.7515" fill="white" />
                  <path
                    d="M32 20.75C32.41 20.75 32.75 20.41 32.75 20V19C32.75 14.59 31.41 13.25 27 13.25H20.75V15.5C20.75 15.91 20.41 16.25 20 16.25C19.59 16.25 19.25 15.91 19.25 15.5V13.25H17C12.59 13.25 11.25 14.59 11.25 19V19.5C11.25 19.91 11.59 20.25 12 20.25C12.96 20.25 13.75 21.04 13.75 22C13.75 22.96 12.96 23.75 12 23.75C11.59 23.75 11.25 24.09 11.25 24.5V25C11.25 29.41 12.59 30.75 17 30.75H19.25V28.5C19.25 28.09 19.59 27.75 20 27.75C20.41 27.75 20.75 28.09 20.75 28.5V30.75H27C31.41 30.75 32.75 29.41 32.75 25C32.75 24.59 32.41 24.25 32 24.25C31.04 24.25 30.25 23.46 30.25 22.5C30.25 21.54 31.04 20.75 32 20.75ZM20.75 24.17C20.75 24.58 20.41 24.92 20 24.92C19.59 24.92 19.25 24.58 19.25 24.17V19.83C19.25 19.42 19.59 19.08 20 19.08C20.41 19.08 20.75 19.42 20.75 19.83V24.17Z"
                    fill="#2377FC"
                  />
                </svg>
              </div>
              <p className="mt-6 text-[#292D32] text-[16px] font-[500]">
                Total Tickets
              </p>
            </div>
            <div className="bg-[#E6DDF8] rounded-[8px] w-[255px] h-[130px] p-4">
              <div className="flex justify-between">
                <p className="text-[#6962FE] text-[44px] font-[700] leading-5 mt-3">
                  {_overview.new}
                </p>
                <svg
                  width="45"
                  height="44"
                  viewBox="0 0 45 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="22.481" cy="22.2532" r="21.7515" fill="white" />
                  <path
                    d="M26.6496 13.8601H19.9096V16.8801C19.9096 17.2701 19.5896 17.5801 19.2096 17.5801C18.8296 17.5801 18.5096 17.2701 18.5096 16.8801V13.8601H17.3496C13.3996 13.8601 12.0996 15.0401 12.0096 18.7301C11.9996 18.9101 12.0796 19.1001 12.2096 19.2301C12.3396 19.3701 12.5096 19.4401 12.7096 19.4401C14.1096 19.4401 15.2596 20.6001 15.2596 22.0001C15.2596 23.4001 14.1096 24.5601 12.7096 24.5601C12.5196 24.5601 12.3396 24.6301 12.2096 24.7701C12.0796 24.9001 11.9996 25.0901 12.0096 25.2701C12.0996 28.9601 13.3996 30.1401 17.3496 30.1401H18.5096V27.1201C18.5096 26.7301 18.8296 26.4201 19.2096 26.4201C19.5896 26.4201 19.9096 26.7301 19.9096 27.1201V30.1401H26.6496C30.7496 30.1401 31.9996 28.8901 31.9996 24.7901V19.2101C31.9996 15.1101 30.7496 13.8601 26.6496 13.8601ZM28.4696 21.9001L27.5396 22.8001C27.4996 22.8301 27.4896 22.8901 27.4996 22.9401L27.7196 24.2101C27.7596 24.4401 27.6696 24.6801 27.4696 24.8201C27.2796 24.9601 27.0296 24.9801 26.8196 24.8701L25.6696 24.2701C25.6296 24.2501 25.5696 24.2501 25.5296 24.2701L24.3796 24.8701C24.2896 24.9201 24.1896 24.9401 24.0896 24.9401C23.9596 24.9401 23.8396 24.9001 23.7296 24.8201C23.5396 24.6801 23.4396 24.4501 23.4796 24.2101L23.6996 22.9401C23.7096 22.8901 23.6896 22.8401 23.6596 22.8001L22.7296 21.9001C22.5596 21.7401 22.4996 21.4901 22.5696 21.2701C22.6396 21.0401 22.8296 20.8801 23.0696 20.8501L24.3496 20.6601C24.3996 20.6501 24.4396 20.6201 24.4696 20.5801L25.0396 19.4201C25.1496 19.2101 25.3596 19.0801 25.5996 19.0801C25.8396 19.0801 26.0496 19.2101 26.1496 19.4201L26.7196 20.5801C26.7396 20.6301 26.7796 20.6601 26.8296 20.6601L28.1096 20.8501C28.3496 20.8801 28.5396 21.0501 28.6096 21.2701C28.6996 21.4901 28.6396 21.7301 28.4696 21.9001Z"
                    fill="#6962FE"
                  />
                </svg>
              </div>
              <p className="mt-6 text-[#292D32] text-[16px] font-[500]">
                New Tickets
              </p>
            </div>
            <div className="bg-[#FEF3C7] rounded-[8px] w-[255px] h-[130px] p-4">
              <div className="flex justify-between">
                <p className="text-[#D97706] text-[44px] font-[700] leading-5 mt-3">
                  {_overview.inProgress}
                </p>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21.9986" cy="22.2527" r="21.7515" fill="white" />
                  <path
                    d="M27.1897 14.96C27.1897 14.97 27.1897 14.97 27.1897 14.98C26.9397 14.97 26.6897 14.96 26.4197 14.96H18.7197L19.7897 13.9C20.7697 12.91 21.8497 12 23.0997 12C24.3597 12 25.4397 12.91 26.4197 13.9L26.9797 14.46C27.1197 14.59 27.1897 14.77 27.1897 14.96Z"
                    fill="#D97706"
                  />
                  <path
                    d="M30.84 23.17C31.23 23.17 31.54 22.85 31.54 22.45V21.57C31.54 17.64 30.34 16.45 26.42 16.45H20.12H17.58C13.66 16.45 12.46 17.65 12.46 21.57V22C12.46 22.4 12.77 22.71 13.16 22.71C14 22.71 14.67 23.39 14.67 24.22C14.67 25.05 14 25.74 13.16 25.74C12.77 25.74 12.46 26.05 12.46 26.45V26.88C12.46 30.81 13.66 32 17.58 32H20.11H26.41C30.33 32 31.53 30.8 31.53 26.88C31.53 26.49 31.22 26.17 30.83 26.17C29.99 26.17 29.32 25.5 29.32 24.67C29.33 23.84 30 23.17 30.84 23.17ZM20.82 28.86C20.82 29.25 20.5 29.57 20.11 29.57C19.72 29.57 19.4 29.25 19.4 28.86V26.18C19.4 25.79 19.72 25.47 20.11 25.47C20.5 25.47 20.82 25.79 20.82 26.18V28.86ZM20.82 22.27C20.82 22.66 20.5 22.98 20.11 22.98C19.72 22.98 19.4 22.66 19.4 22.27V19.59C19.4 19.2 19.72 18.88 20.11 18.88C20.5 18.88 20.82 19.2 20.82 19.59V22.27Z"
                    fill="#D97706"
                  />
                </svg>
              </div>
              <p className="mt-6 text-[#292D32] text-[16px] font-[500]">
                In Progress
              </p>
            </div>
            <div className="bg-[#FEE2E2] rounded-[8px] w-[255px] h-[130px] p-4">
              <div className="flex justify-between">
                <p className="text-[#991B1B] text-[44px] font-[700] leading-5 mt-3">
                  {_overview.closed}
                </p>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="21.9986" cy="22.2527" r="21.7515" fill="white" />
                  <path
                    d="M29.8501 22.9401C29.8501 23.7401 30.5001 24.4001 31.3001 24.4001C31.6801 24.4001 32.0001 24.7101 32.0001 25.0901C32.0001 28.9301 30.8401 30.0901 27.0001 30.0901H21.7501V28.5001C21.7501 28.1101 21.4501 27.7901 21.0701 27.7601C21.0501 27.7501 21.0201 27.7501 21.0001 27.7501C20.5901 27.7501 20.2501 28.0901 20.2501 28.5001V30.0901H18.4901C16.6101 30.0901 15.6401 28.6801 14.7601 26.5501L14.5901 26.1301C14.4501 25.7701 14.6201 25.3601 14.9801 25.2201C15.3501 25.0801 15.6401 24.7901 15.7901 24.4101C15.9501 24.0401 15.9501 23.6301 15.8001 23.2601C15.4801 22.4901 14.6001 22.1201 13.8201 22.4301C13.6501 22.5101 13.4501 22.5101 13.2801 22.4301C13.1101 22.3601 12.9801 22.2201 12.9001 22.0401L12.7501 21.6401C11.2601 18.0201 11.9101 16.4701 15.5301 14.9701L17.9801 13.9601C18.3401 13.8101 18.7501 13.9801 18.8901 14.3401L21.0701 19.0901C20.6601 19.0901 20.2501 19.4201 20.2501 19.8301V24.1701C20.2501 24.5801 20.5901 24.9201 21.0001 24.9201C21.0201 24.9201 21.0501 24.9201 21.0701 24.9101C21.4501 24.8801 21.7501 24.5601 21.7501 24.1701V19.8301C21.7501 19.4401 21.4501 19.1201 21.0701 19.0901V14.9301H27.0001C30.8401 14.9301 32.0001 16.0901 32.0001 19.9301V20.7801C32.0001 21.1701 31.6801 21.4801 31.3001 21.4801C30.5001 21.4801 29.8501 22.1301 29.8501 22.9401Z"
                    fill="#991B1B"
                  />
                </svg>
              </div>
              <p className="mt-6 text-[#292D32] text-[16px] font-[500]">
                Closed Tickets
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-12 flex justify-between">
            <p className="text-[#222425] text-[20px] font-[600]">
              Support Tickets
            </p>
          </div>

          <SupportTicketsTableAdmin params={params}/>
        </div>

        <div>
          <div className="mt-12 flex justify-between">
            <p className="text-[#222425] text-[20px] font-[600]">
              Support Calls
            </p>
          </div>

          <SupportCallTableAdmin />
        </div>
      </div>
    </div>
  );
}
