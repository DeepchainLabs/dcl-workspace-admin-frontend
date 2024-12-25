export default function AccountInfo({ editAccountInfo, setEditAccountInfo }: any) {
    return (
        <div className="h-[225px] w-[80%] bg-[#F8FAFC] p-6 rounded-[12px] flex flex-col justify-between">
            <div className="flex gap-4">
                <div className="flex flex-wrap gap-x-20 gap-y-5 w-full">
                    <div>
                        <p className="text-[#292D32] font-[600] text-[16px]">
                            Bank Account No.
                        </p>
                        {editAccountInfo ? (
                            <input
                                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF] mt-2"
                                type="text"
                                defaultValue="345868697070"
                            />
                        ) : (
                            <p className="text-[#6F6F6F] font-[500] text-[16px] mt-2">
                                345868697070
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-[#292D32] font-[600] text-[16px]">
                            Bank Name
                        </p>
                        {editAccountInfo ? (
                            <input
                                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF] mt-2"
                                type="text"
                                defaultValue="DBBL"
                            />
                        ) : (
                            <p className="text-[#6F6F6F] font-[500] text-[16px] mt-2">
                                DBBL
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-[#292D32] font-[600] text-[16px]">
                            Routing Number
                        </p>
                        {editAccountInfo ? (
                            <input
                                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF] mt-2"
                                type="text"
                                defaultValue="12234456"
                            />
                        ) : (
                            <p className="text-[#6F6F6F] font-[500] text-[16px] mt-2">
                                12234456
                            </p>
                        )}
                    </div>
                    <div>
                        <p className="text-[#292D32] font-[600] text-[16px]">
                            Swift Code
                        </p>
                        {editAccountInfo ? (
                            <input
                                className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF] mt-2"
                                type="text"
                                defaultValue="1223445D6"
                            />
                        ) : (
                            <p className="text-[#6F6F6F] font-[500] text-[16px] mt-2">
                                1223445D6
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-[#292D32] font-[600] text-[16px]">
                        Account Holder Name
                    </p>
                    {editAccountInfo ? (
                        <input
                            className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF] mt-2"
                            type="text"
                            defaultValue="Tonmoy Asif"
                        />
                    ) : (
                        <p className="text-[#6F6F6F] font-[500] text-[16px] mt-2">
                            Tonmoy Asif
                        </p>
                    )}
                </div>
                {editAccountInfo && (
                    <div className="flex gap-4">
                        <div
                            onClick={() => setEditAccountInfo(!editAccountInfo)}
                            className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] w-[140px] h-[38px] flex items-center justify-center rounded-[8px] cursor-pointer"
                        >
                            Cancel
                        </div>
                        <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] w-[140px] h-[38px] flex items-center justify-center rounded-[8px] cursor-pointer">
                            Update
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
