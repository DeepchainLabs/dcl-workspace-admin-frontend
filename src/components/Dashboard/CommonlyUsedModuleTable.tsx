import StatusBadge from "../Common/StatusBadge";

export default function CommonlyUsedModuleTable(){
    return (
        <div className="overflow-x-auto">
            <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] grid grid-cols-5 px-4">
                <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    SL No.
                </p>
                </div>
                <div className="col-span-2 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Module Name
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Usage
                </p>
                </div>
                <div className="col-span-1 my-auto">
                <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    Left
                </p>
                </div>
            </div>
            {[1, 2, 3, 4, 5, 6]?.map((item, index) => (
                <div
                key={index}
                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-5 px-4 rounded-[8px] cursor-pointer"
                >
                <div className="col-span-1 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    {index}.
                    </p>
                </div>
                <div className="col-span-2 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    Email Module
                    </p>
                </div>
                <div className="col-span-1 my-auto">
                    <StatusBadge text="high"></StatusBadge>
                </div>
                <div className="col-span-1 my-auto">
                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                    90/100
                    </p>
                </div>
                </div>
            ))}
        </div>
    )
}