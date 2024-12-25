export default function EmployeeActivityLogTable(){
    return (
        <div className="overflow-x-auto">
            <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] min-w-[1000px] grid grid-cols-9 px-4">
            <div className="col-span-2 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Employee Name
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Task Assigned
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">To Do</p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                In Progress
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                In Review
                </p>
            </div>
            <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                Completed
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
            </div>
            {[1, 2, 3]?.map((item, index) => (
            <div
                key={index}
                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-9 px-4 rounded-[8px] group min-w-[1000px] cursor-pointer"
            >
                <div className="col-span-2 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    Alif Hasan
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    02 Tasks
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    02 Tasks
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    02 Tasks
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    02 Tasks
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    02 Tasks
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    9H:00M
                </p>
                </div>
                <div className="col-span-1 my-auto">9H:00M</div>
            </div>
            ))}
        </div>
    )
}