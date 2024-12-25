'use client'

import RevenueReportChart from "./RevenueReportChart"


export default function RevenueReport(){
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Revenue Report
                </p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#C893FD] rounded-full"></div>
                        <span className="text-[#292D32] text-[14px] font-[500]">Earning</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#2377FC] rounded-full"></div>
                        <span className="text-[#292D32] text-[14px] font-[500]">Expense</span>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <RevenueReportChart></RevenueReportChart>
            </div>
        </div>
    )
}