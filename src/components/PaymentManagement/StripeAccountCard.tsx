import BalanceIcon from "@/svg/PaymentManagement/BlanceIcon";
import StripeIcon from "@/svg/PaymentManagement/StripeIcon";

export default function StripeAccountCard(){
    return (
        <div className="h-[225px] w-[370px] rounded-[12px] bg-[#F8FAFC] p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <StripeIcon></StripeIcon>
                <BalanceIcon></BalanceIcon>
            </div>
            <div className="flex flex-col">
                <p className="text-[#2377FC] text-[42px] font-[600]">$12,000</p>
                <p className="text-[#292D32] text-[16px] font-[500]">Current Balance</p>
            </div>
        </div>
    )
}