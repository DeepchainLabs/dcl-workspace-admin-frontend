'use client'

import { useEffect, useState } from "react";
import DropDown from "../Common/DropDown";
import SubscriptionCountChart from "./SubscriptionCountChart";
import { getStatsBySubscription } from "@/resources/dashboard/dashboard.service";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "../Common/ErrorAllert";

export default function SubscriptionCount(){
    const [organizationStats, setOrganizationStats] = useState<any>(null);  
    const [error, setError] = useState<string | null>(null);   
    const [revalidate, setRevalidate] = useState(false);

    useEffect(() => {
        const fetchOrganizarionStats = async () => {
            try {
                const statsData = await getStatsBySubscription();
                setOrganizationStats(statsData);
            } catch (error) {
                console.log(error);
                setError(extractError(error)); 
            }
        };
        
        fetchOrganizarionStats();
    }, [revalidate]); 

    if (organizationStats === null) {
        return <p>loading</p>;
    }

    if (error) {
        return <ErrorAllert message={error} />;
    }

    const aggregatedData = organizationStats.reduce((acc: any, stat: any) => {
        if (acc[stat.category]) {
            acc[stat.category] += stat.count;
        } else {
            acc[stat.category] = stat.count;
        }
        return acc;
    }, {});

    const categories = Object.keys(aggregatedData);
    const counts = Object.values(aggregatedData);
    const totalCount = counts.reduce((total: any, count: any) => total + count, 0);

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-[#292D32] text-[20px] font-[600]">
                Subscription Count
                </p>
                <div className="flex gap-5">
                    <DropDown
                        title="Organization"
                        options={[
                            { id: 1, name: "Option 1" },
                            { id: 2, name: "Option 2" },
                            { id: 3, name: "Option 3" },
                        ]}
                        onChange={() => {}}
                        width="180px"
                        height="42px"
                        bgColor={false}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <SubscriptionCountChart categories={categories} counts={counts} totalCount={totalCount}/>
            </div>
        </div>
    );
}
