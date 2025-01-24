'use client'

import { useEffect, useState } from "react";
import Filter from "../Common/Filter";
import { FilterIcon } from "@/svg/Crms/CommonIcons";
import RenewalRateChart from "./RenewalRateChart";
import GrowthIcon from "@/svg/Dashboard/GrowthIcon";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "../Common/ErrorAllert";
import { getRenewalRate } from "@/resources/dashboard/dashboard.service";

export default function RenewalRate() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [renewalRate, setRenewalRate] = useState<any>(null);  
  const [error, setError] = useState<string | null>(null);   
  const [revalidate, setRevalidate] = useState(false);

  const filterItems = [
    { label: "Select Plan", options: ["Small Business", "Medium Business", "Large Business"], hasSearch: true },
    { label: "Monthly", options: ["Small Business", "Medium Business", "Large Business"], hasSearch: true },
  ];

  useEffect(() => {
      const fetchRenewalRate = async () => {
          try {
              const renewalRateData = await getRenewalRate();
              setRenewalRate(renewalRateData);
          } catch (error) {
              console.log(error);
              setError(extractError(error)); 
          }
      };
      
      fetchRenewalRate();
  }, [revalidate]); 

  if (renewalRate === null) {
      return <p>loading</p>;
  }

  if (error) {
      return <ErrorAllert message={error} />;
  }
  
  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Renewal Rate
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex gap-2 px-3 py-2 text-[14px] font-[600] bg-[#E9ECF8] shadow-sm rounded-md text-[#2377FC] items-center"
          >
            <FilterIcon />
            Filter
          </button>
          {isFilterOpen && (
            <div className="absolute ">
                <Filter
                    onClose={() => setIsFilterOpen(false)}
                    title="Filter Options"
                    filterItems={filterItems}
                    location="left"
                />
            </div>
        )}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col items-end self-end">
          <div className="flex items-center mb-1">
            <span className="text-[16px] text-[#292D32] font-[500] mr-2">
              1.3%
            </span>
            <GrowthIcon />
          </div>
          <span className="text-[14px] font-[500] text-[#6F6F6F]">
            VS LAST WEEK
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
          <RenewalRateChart percentage={renewalRate.percentage} />
      </div>
    </div>
  );
}
