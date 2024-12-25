'use client'

import DropDown from "../Common/DropDown";
import SubscriptionCountChart from "./SubscriptionCountChart";

export default function SubscriptionCount(){
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Subscription Count
                </p>
                <div className="flex gap-5">
                <DropDown
                    title="Organization"
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
            <div className="flex items-center justify-center">
                <SubscriptionCountChart></SubscriptionCountChart>
            </div>
        </div>
    )
}