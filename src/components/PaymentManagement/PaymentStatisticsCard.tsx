'use client'

import { useState } from "react";
import StatusBadge from "../Common/StatusBadge";
import ToggleSwitch from "../Common/ToggleSwitch";
import StripeIcon from "@/svg/PaymentManagement/StripeIcon";
import HideIcon from "@/svg/PaymentManagement/HideIcon";

export default function PaymentStatisticsCard(){
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = (newState: any) => {
        setIsChecked(newState);
      };

    return(
        <div className="h-[245px] w-[417px] rounded-[12px] bg-[#F8FAFC] p-6">
            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                    <div>
                        <StripeIcon></StripeIcon>
                    </div>
                    <div className="flex items-center gap-6">
                        <StatusBadge text="active"></StatusBadge>
                        <ToggleSwitch isChecked={true} setIsChecked={handleToggleChange} pairId="uniqueID123"></ToggleSwitch>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <p className="text-[#6F6F6F] text-[14px] font-[500]">API Key</p>
                        <div className="flex items-center gap-4">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">**** **** ****</p>
                            <div className="mb-2">
                                <HideIcon></HideIcon>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#2377FC] text-[32px] font-[700]">456</p>
                        <p className="text-[#2377FC] text-[14px] font-[600]">Transactions</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center gap-4">
                        <div className="rounded-[8px] w-[158px] h-[32px] flex justify-center items-center cursor-pointer">
                            <p className="text-[#2377FC] text-[16px] font-[500] text-center">
                                View Transactions
                            </p>
                        </div>
                        <div className="bg-[#2377FC] rounded-[8px] w-[158px] h-[32px] flex justify-center items-center cursor-pointer">
                            <p className="text-[#FFFFFF] text-[16px] font-[500] text-center">
                                Gateway Settings
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}