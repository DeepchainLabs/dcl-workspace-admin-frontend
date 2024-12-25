'use client'

import UpIcon from "@/svg/PaymentManagement/UpIcon";
import DropDown from "../Common/DropDown";
import EarningChart from "./EarningChart";

export default function Earning(){
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Earning
                </p>
                <div className="">
                <DropDown
                    title="Monthly"
                    options={[
                    { id: 1, name: "Option 1" },
                    { id: 2, name: "Option 2" },
                    { id: 3, name: "Option 3" },
                    ]}
                    onChange={() => {}}
                    width="180px"
                    height="42px"
                    bgColor={false}
                />
                </div>
            </div>
            <div className="flex justify-between items-center mt-12">
                <div className="flex flex-col">
                    <p className="text-[#292D32] text-[44px] font-[600]">
                        325k
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="text-[#15BD6D] text-[16px] font-[500]">
                            +18.34%
                        </p>
                        <UpIcon></UpIcon>
                    </div>
                </div>
                <div className="w-[70%]">
                    <EarningChart></EarningChart>
                </div>
            </div>
        </div>
    )
}