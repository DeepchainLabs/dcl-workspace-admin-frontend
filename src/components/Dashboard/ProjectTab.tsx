export default function ProjectTab({ activeTab, setActiveTab }: any) {
    return (
        <div className="overflow-x-auto scrollbar-hide">
            <div className="bg-[#EAEEF5] w-full h-[45px] flex rounded-[6px] p-1 min-w-[520px]">
                <div
                onClick={() => setActiveTab("to do")}
                className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center min-w-[25%] h-full rounded-[4px] cursor-pointer ${
                    activeTab === "to do"
                    ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                    : ""
                }`}
                >
                To Do
                </div>
                <div
                onClick={() => setActiveTab("in progress")}
                className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center min-w-[25%] h-full rounded-[4px] cursor-pointer ${
                    activeTab === "in progress"
                    ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                    : ""
                }`}
                >
                In Progress
                </div>
                <div
                onClick={() => setActiveTab("in review")}
                className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center min-w-[25%] h-full rounded-[4px] cursor-pointer ${
                    activeTab === "in review"
                    ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                    : ""
                }`}
                >
                In Review
                </div>
                <div
                onClick={() => setActiveTab("completed")}
                className={`text-[#000000] text-[14px] font-[600] flex items-center justify-center min-w-[25%] h-full rounded-[4px] cursor-pointer ${
                    activeTab === "completed"
                    ? "bg-[#FFFFFF] border-[0.5px] border-[#E5E9EB] shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A]"
                    : ""
                }`}
                >
                Completed
                </div>
            </div>
        </div>
    );
  }
  