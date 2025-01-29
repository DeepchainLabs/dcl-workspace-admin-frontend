'use client'
import StatsCard from "./StatsCard";
import { useEffect, useState } from "react";
import { getRevenueStatsBySubscription } from "@/resources/dashboard/dashboard.service";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "../Common/ErrorAllert";
import RevenueIcon from "@/svg/Dashboard/RevenueIcon";

export default function OrganizationRevenueStats(){
    const [organizationStats, setOrganizationStats] = useState<any>(null);  
    const [error, setError] = useState<string | null>(null);   
    const [revalidate, setRevalidate] = useState(false);

    useEffect(() => {
        const fetchOrganizarionStats = async () => {
            try {
                const statsData = await getRevenueStatsBySubscription();
                setOrganizationStats(statsData);
            } catch (error) {
                console.log(error);
                setError(extractError(error)); 
            }
        };
        
        fetchOrganizarionStats();
    }, [revalidate]); 

    if (organizationStats === null) {
        return (
            <p>
                loading
            </p>
        );
    }

    if (error) {
        return <ErrorAllert message={error} />;
    }
    return (
        <>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {organizationStats && organizationStats?.map((stats: any, index: number) => (
            <div key={index}><div><StatsCard number={"$"+stats.revenue} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={stats.subscription.name || "N/A"} svg={<RevenueIcon personal={false}></RevenueIcon>} small={true}></StatsCard></div></div>
        ))}
        </div>
        </>
    )
}