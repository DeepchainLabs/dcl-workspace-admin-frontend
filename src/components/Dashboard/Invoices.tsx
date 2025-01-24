'use client'
import { useEffect, useState } from "react";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "../Common/ErrorAllert";
import { getInvoices } from "@/resources/dashboard/dashboard.service";
import dayjs from "dayjs";
import StatusBadge from "../Common/StatusBadge";
import Link from "next/link";
import DownloadIcon from "@/svg/Dashboard/DownloadIcon";

function SkeletonRow() {
  return (
    <div className="w-full border-b border-[#E5E9EB] py-4 grid grid-cols-6 px-4 rounded-[8px] animate-pulse">
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[80%] rounded"></div>
      </div>
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[60%] rounded"></div>
      </div>
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[40%] rounded"></div>
      </div>
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[50%] rounded"></div>
      </div>
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[50%] rounded"></div>
      </div>
      <div className="col-span-1 my-auto">
        <div className="bg-gray-300 h-[16px] w-[20%] rounded"></div>
      </div>
    </div>
  );
}

export default function Invoices() {
    const [invoices, setInvoices] = useState<any>(null);  
    const [error, setError] = useState<string | null>(null);   
    const [revalidate, setRevalidate] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const invoicesData = await getInvoices();
                console.log(invoicesData);
                setInvoices(invoicesData);
                setIsLoading(false); 
            } catch (error) {
                console.log(error);
                setError(extractError(error)); 
                setIsLoading(false); 
            }
        };
        
        fetchInvoices();
    }, [revalidate]); 

    if (error) {
        return <ErrorAllert message={error} />;
    }

    return(
        <div>
            <p className="text-[#292D32] text-[20px] font-[600]">
                Invoices
            </p>
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] grid grid-cols-6 px-4">
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Date</p>
                        </div>
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Invoice ID</p>
                        </div>
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Amount</p>
                        </div>
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Type</p>
                        </div>
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Status</p>
                        </div>
                        <div className="col-span-1 my-auto">
                            <p className="text-[#6F6F6F] text-[14px] font-[500]">Action</p>
                        </div>
                    </div>

                    {/* Display SkeletonLoader when data is loading */}
                    {isLoading ? (
                        Array(5).fill(0).map((_, index) => <SkeletonRow key={index} />)
                    ) : (
                        invoices?.map((invoice: any, index: number) => (
                            <div
                                key={index}
                                className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-6 px-4 rounded-[8px] group cursor-pointer"
                            >
                                <div className="col-span-1 my-auto">
                                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                                        {dayjs.unix(invoice.created).format('DD/MM/YYYY')}
                                    </p>
                                </div>
                                <div className="col-span-1 my-auto">
                                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                                        {invoice.id.slice(0, 6)+'...'}
                                    </p>
                                </div>
                                <div className="col-span-1 my-auto">
                                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                                        ${invoice.amount_due}
                                    </p>
                                </div>
                                <div className="col-span-1 my-auto">
                                    <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                                        {invoice.issuer.type}
                                    </p>
                                </div>
                                <div className="col-span-1 my-auto">
                                    <StatusBadge text={invoice.status}></StatusBadge>
                                </div>
                                <div className="col-span-1 my-auto">
                                    <Link
                                        href={invoice?.hosted_invoice_url}
                                        target="_blank"
                                        className=""
                                    >
                                        <DownloadIcon />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
