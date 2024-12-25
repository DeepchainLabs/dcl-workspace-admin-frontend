import DropDown from "@/components/Common/DropDown";
import Invoices from "@/components/Dashboard/Invoices";
import ModulePopularity from "@/components/Dashboard/ModulePopularity";
import PlanPopularity from "@/components/Dashboard/PlanPopularity";
import RenewalRate from "@/components/Dashboard/RenewalRate";
import StatsCard from "@/components/Dashboard/StatsCard";
import SubscriptionCount from "@/components/Dashboard/SubscriptionCount";
import RevenueIcon from "@/svg/Dashboard/RevenueIcon";
import UserIcon from "@/svg/Dashboard/UserIcon";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex items-center pt-[18px]">
            <p className="text-[#292D32] text-[24px] font-[600]">Dashboard</p>
        </div> 
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout pb-20">
        <div className="-mx-4 lg:-mx-8 w-[calc(100%+2rem)] lg:w-[calc(100%+4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 border-b">
            <div className="grid grid-rows-[auto,1fr,1fr] border-r last:border-r-0">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <p className="text-[#292D32] text-[20px] font-[600]">Active Users</p><p className="text-[#2377FC] text-[20px] font-[600]">25k</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#292D32] text-[16px] font-[600]">Organization</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div><StatsCard number={20} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Small Business"} svg={<UserIcon personal={false}></UserIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={20} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Medium Business"} svg={<UserIcon personal={false}></UserIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={20} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Large Business"} svg={<UserIcon personal={false}></UserIcon>} small={true}></StatsCard></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#292D32] text-[16px] font-[600]">Personal</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div><StatsCard number={20} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Basic (Personal)"} svg={<UserIcon personal={true}></UserIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={20} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Standard (Personal)"} svg={<UserIcon personal={true}></UserIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={20} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Premium (Personal)"} svg={<UserIcon personal={true}></UserIcon>} small={true}></StatsCard></div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[auto,1fr,1fr]">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <p className="text-[#292D32] text-[20px] font-[600]">Total Revenue</p><p className="text-[#2377FC] text-[20px] font-[600]">$15k</p>
                </div>
              </div>
              <div className="p-6">
              <p className="text-[#292D32] text-[16px] font-[600]">Organization</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div><StatsCard number={"$2k"} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Small Business"} svg={<RevenueIcon personal={false}></RevenueIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={"$2k"} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Medium Business"} svg={<RevenueIcon personal={false}></RevenueIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={"$2k"} bgColor={"#F0F5FF"} textColor={"#2377FC"} title={"Large Business"} svg={<RevenueIcon personal={false}></RevenueIcon>} small={true}></StatsCard></div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#292D32] text-[16px] font-[600]">Personal</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div><StatsCard number={"$2k"} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Basic (Personal)"} svg={<RevenueIcon personal={true}></RevenueIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={"$2k"} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Standard (Personal)"} svg={<RevenueIcon personal={true}></RevenueIcon>} small={true}></StatsCard></div>
                  <div><StatsCard number={"$2k"} bgColor={"#F8FAFC"} textColor={"#6F6F6F"} title={"Premium (Personal)"} svg={<RevenueIcon personal={true}></RevenueIcon>} small={true}></StatsCard></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 border-b">
            <div className="border-r last:border-r-0 p-6">
              <SubscriptionCount></SubscriptionCount>
            </div>
            <div className="border-r last:border-r-0 p-6">
              <RenewalRate></RenewalRate>
            </div>
            <div className="p-6">
              <PlanPopularity></PlanPopularity>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-[1.5fr,1fr] border-b">
            <div className="border-r last:border-r-0 p-6">
              <Invoices></Invoices>
            </div>
            <div className="p-6">
              <ModulePopularity></ModulePopularity>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
