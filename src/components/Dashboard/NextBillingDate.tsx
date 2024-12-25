export default function NextBillingDate(){
    return (
        <div className="hover:bg-[#F0F5FF] bg-[#F8FAFC] rounded-[12px] w-full h-[255px] py-4 px-6">
            <p className="text-[#292D32] text-[20px] font-[600]">
            Next Billing Date
            </p>
            <div className="flex justify-between mt-4">
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Expiry Date
                </p>
                <div className="mt-3 border border-[#E5E9EB] rounded-[7px] w-[170px] h-[36px] flex justify-between px-4">
                <p className="text-[#292D32] text-[16px] font-[500] my-auto">
                    24 Nov 2025
                </p>
                <div className="my-auto">
                    <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6.6696 1.66699V4.16699M13.3363 1.66699V4.16699M2.9196 7.57533H17.0863M17.5029 7.08366V14.167C17.5029 16.667 16.2529 18.3337 13.3363 18.3337H6.6696C3.75293 18.3337 2.50293 16.667 2.50293 14.167V7.08366C2.50293 4.58366 3.75293 2.91699 6.6696 2.91699H13.3363C16.2529 2.91699 17.5029 4.58366 17.5029 7.08366Z"
                        stroke="#989898"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.0806 11.417H13.0881M13.0806 13.917H13.0881M9.99725 11.417H10.0056M9.99725 13.917H10.0056M6.91309 11.417H6.92142M6.91309 13.917H6.92142"
                        stroke="#989898"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>
                </div>
            </div>
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Time Remaining
                </p>
                <p className="mt-3 text-[#292D32] text-[24px] font-[600]">
                75 <span className="text-[20px] font-[600]">Days</span>
                </p>
            </div>
            </div>
            <div className="flex justify-between mt-11">
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Amount
                </p>
                <p className="mt-1 text-[#2377FC] text-[24px] font-[600]">
                $25
                </p>
            </div>
            <div className="mt-5">
                <div
                //onClick={() => setShowExtendModal(true)}
                className="bg-[#2377FC] text-[#FFFFFF] text-[15px] font-[500] px-3 py-1.5 rounded-[8px] cursor-pointer"
                >
                Extend
                </div>
            </div>
            </div>
        </div>
    )
}