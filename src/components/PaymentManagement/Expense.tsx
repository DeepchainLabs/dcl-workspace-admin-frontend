'use client'

import UpIcon from "@/svg/PaymentManagement/UpIcon";
import DropDown from "../Common/DropDown";
import ExpenseChart from "./ExpenseChart";

export default function Expense(){
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Expense
                </p>
                <div className="flex gap-5">
                <DropDown
                    title="February"
                    options={[
                        { id: 1, name: "January" },
                        { id: 2, name: "February" },
                        { id: 3, name: "March" },
                        { id: 4, name: "April" },
                        { id: 5, name: "May" },
                        { id: 6, name: "June" },
                        { id: 7, name: "July" },
                        { id: 8, name: "August" },
                        { id: 9, name: "September" },
                        { id: 10, name: "October" },
                        { id: 11, name: "November" },
                        { id: 12, name: "December" },
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
                    <ExpenseChart></ExpenseChart>
                </div>
            </div>
        </div>
    )
}