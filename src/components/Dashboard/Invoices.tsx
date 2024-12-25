import InvoicesTable from "./InvoicesTable";

export default function Invoices(){
    return(
        <div>
            <p className="text-[#292D32] text-[20px] font-[600]">
                Invoices
            </p>
            <div className="mt-6">
                <InvoicesTable></InvoicesTable>
            </div>
        </div>
    )
}