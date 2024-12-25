import DropDown from "../Common/DropDown";
import MyReportChart from "./MyReportChart";

export default function MyReport(){
    return (
        <div className="bg-white border rounded-[12px] p-6 h-auto lg:h-[370px]">
            <div className="flex flex-wrap justify-between items-center">
                <p className="text-[20px] font-[600] text-[#2563EB]">
                My Report
                </p>
                <div className="w-full sm:w-auto mt-6 sm:mt-0">
                    <DropDown
                    title="November"
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
            <div className="mt-6">
                <MyReportChart></MyReportChart>
            </div>
        </div>
    )
}