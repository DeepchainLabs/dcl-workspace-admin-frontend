import { useState } from "react";

export default function NoticeTab(){
    const [noticeTab, setNoticeTab] = useState("upcoming");
    
    return(
        <div className="bg-[#EAEEF5] h-[45px] w-full justify-between flex rounded-[6px] p-1">
            <div
            onClick={() => setNoticeTab("upcoming")}
            className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center w-[50%] h-full rounded-[4px] cursor-pointer ${
                noticeTab === "upcoming"
                ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                : ""
            }`}
            >
            Upcoming
            </div>
            <div
            onClick={() => setNoticeTab("previous")}
            className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center w-[50%] h-full rounded-[4px] cursor-pointer ${
                noticeTab === "previous"
                ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                : ""
            }`}
            >
            Previous
            </div>
        </div>
    )
}