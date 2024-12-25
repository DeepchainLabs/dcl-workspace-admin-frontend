import AddIcon from "@/svg/PaymentManagement/AddIcon";

export default function AddPaymentGatewayCard(){

    return(
        <div className="h-[245px] w-[417px] flex flex-col items-center gap-5 justify-center rounded-[12px] border border-[#E5E9EB]">
            <AddIcon></AddIcon>
            <p className="text-[#A5B2CA] text-[16px] font-[500]">Add Another Gateway</p>
        </div>
    )
}