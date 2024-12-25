'use client'

import DropDown from "../Common/DropDown";
import PlanPopularityChart from "./PlanPopularityChart";

export default function PlanPopularity(){
    const dataset = {
        data: [70, 20, 10],
        labels: ["Small Business", "Medium Business", "Large Business"],
      };

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Plan Popularity
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
            <div className="mt-10 flex items-center justify-center">
                <PlanPopularityChart datasets={[dataset]}></PlanPopularityChart>
            </div>
        </div>
    )
}