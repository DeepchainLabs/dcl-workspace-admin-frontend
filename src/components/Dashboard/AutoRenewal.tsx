import ToggleSwitch from "../Common/ToggleSwitch";

export default function AutoRenewal(){
    return (
        <div className="hover:bg-[#F0F5FF] bg-[#F8FAFC] rounded-[12px] w-full h-[255px] py-4 px-6">
            <p className="text-[#292D32] text-[20px] font-[600]">
            Auto Renewal
            </p>
            <div className="flex justify-between mt-4">
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Next Renewal Date
                </p>
                <p className="mt-2 text-[#292D32] text-[24px] font-[600]">
                24 Nov 2024
                </p>
            </div>
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Amount
                </p>
                <p className="mt-2 text-[#2377FC] text-[24px] font-[700]">
                $25
                </p>
            </div>
            </div>
            <div className="flex justify-between mt-8">
            <div className="">
                <p className="text-[#6F6F6F] text-[16px] font-[500]">
                Auto Renewal
                </p>
                <div className="flex gap-4 mt-5">
                <p className="text-[#27272A] text-[16px] font-[600] my-auto">
                    Yes
                </p>
                <ToggleSwitch isChecked={true} />
                <p className="text-[#2377FC] text-[16px] font-[600] my-auto">
                    No
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}