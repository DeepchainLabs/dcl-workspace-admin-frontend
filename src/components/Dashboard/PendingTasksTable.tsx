import StatusBadge from "../Common/StatusBadge";

export default function PendingTasksTable(){
    return (
        <div className="overflow-x-auto">
            <div className="bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-8 px-4">
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Task ID
                </p>
            </div>
            <div className="col-span-3 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Task Name
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Estimated
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Worked
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Type
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Status
                </p>
            </div>
            </div>
            {[1, 2, 3, 4, 5, 6]?.map((item, index) => (
            <div
                key={index}
                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-8 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
            >
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    #UI007
                </p>
                </div>
                <div className="col-span-3 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    M3: Frontend Design: What is Mix Portfolios
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    4H:00M
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    4H:00M
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <StatusBadge text="Design"></StatusBadge>
                </div>
                <div className="col-span-1 my-auto">
                <StatusBadge text="To Do"></StatusBadge>
                </div>
            </div>
            ))}
        </div>
    )
}