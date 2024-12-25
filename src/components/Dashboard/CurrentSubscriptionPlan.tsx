import Link from "next/link";

export default function CurrentSubscriptionPlan(){
    return (
        <div className="hover:bg-[#F0F5FF] bg-[#F8FAFC] rounded-[12px] w-full h-[255px] py-4 px-6">
            <p className="text-[#292D32] text-[20px] font-[600]">
            Current Subscription Plan
            </p>
            <div className="flex justify-between">
            <p className="text-[#2377FC] text-[24px] font-[600]">Pro</p>
            <p className="text-[#2377FC] text-[24px] font-[600]">
                $99/<span className="text-[20px]">Monthly</span>
            </p>
            </div>
            <div className="mt-4">
            <p className="text-[#6F6F6F] text-[16px] font-[600]">
                Plan Details
            </p>
            <p className="mt-2 text-[#292D32] text-[16px] font-[500]">
                Architecto voluptatem maiores. Perspiciatis commodi eos.
                Nam ex ut perspiciatis rerum.{" "}
            </p>
            </div>

            <div className="flex justify-end gap-6 mt-6">
            <p className="text-[#2377FC] text-[15px] font-[600] my-auto cursor-pointer">
                Cancel Plan
            </p>
            <Link
                href={"/subscription/plan-upgrade"}
                className="bg-[#2377FC] text-[#FFFFFF] text-[15px] font-[500] px-3 py-1.5 rounded-[8px] cursor-pointer"
            >
                Change Plan
            </Link>
            </div>
        </div>
    )
}