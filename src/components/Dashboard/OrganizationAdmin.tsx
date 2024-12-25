"use client";

import { useState } from "react";
import DropDown from "../Common/DropDown";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import { notices } from "@/contents/NoticeData";
import NoticeCard from "./NoticeCard";
import ServiceUsageChart from "./ServiceUsageChart";
import NoticeDetailsModal from "./NoticeDetailsModal";
import StatsCard from "./StatsCard";
import TotalEmployeesIcon from "@/svg/Dashboard/TotalEmployeesIcon";
import TodaysPresentIcon from "@/svg/Dashboard/TodaysPresentIcon";
import TodaysAbsentIcon from "@/svg/Dashboard/TodaysAbsentIcon";
import TodaysLeaveIcon from "@/svg/Dashboard/TodaysLeaveIcon";
import EmployeeActivityLogTable from "./EmployeeActivityLogTable";
import NoticeTab from "./NoticeTab";
import InvoicesTable from "./InvoicesTable";
import CommonlyUsedModuleTable from "./CommonlyUsedModuleTable";
import CurrentlyRunningProjects from "./CurrentlyRunningProjects";
import OrganizationAdminMeetings from "./OrganizationAdminMeetings";

export default function OrganizationAdmin() {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNoticeClick = (notice: any) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-items-center items-center">
        <StatsCard
          number={15}
          bgColor="#E8E8FF"
          textColor="#5D5FEF"
          title="Total Employees"
          svg={<TotalEmployeesIcon />}
        />
        <StatsCard
          number={0}
          bgColor="#E4FFF3"
          textColor="#15BD6D"
          title="Today's Presents"
          svg={<TodaysPresentIcon />}
        />
        <StatsCard
          number={0}
          bgColor="#FBF0CF"
          textColor="#F2994A"
          title="Today's Absent"
          svg={<TodaysAbsentIcon />}
        />
        <StatsCard
          number={0}
          bgColor="#E1EDFF"
          textColor="#2377FC"
          title="Today's Leave"
          svg={<TodaysLeaveIcon />}
        />
      </div>
      <div className="mt-16">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Currently Running Projects
        </p>
        <CurrentlyRunningProjects />
      </div>
      <div className="mt-16">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Employee Activity Logs
        </p>
        <div className="mt-8">
          <EmployeeActivityLogTable />
        </div>
      </div>
      <div className="mt-16">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:items-center">
          <p className="text-[#292D32] text-[20px] font-[600] sm:w-auto w-full">
            Performance KPI
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-start gap-5 w-full sm:w-auto">
            <DropDown
              title="Select Employee"
              options={[
                { id: 1, name: "John Doe" },
                { id: 2, name: "John Smith" },
                { id: 3, name: "Jane Doe" },
              ]}
              onChange={() => {}}
              width="180px"
              height="42px"
            />
            <DropDown
              title="Monthly"
              options={[
                { id: 1, name: "Daily" },
                { id: 2, name: "Yearly" },
              ]}
              onChange={() => {}}
              width="180px"
              height="42px"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-12 mt-16">
          <div className="col-span-1 xl:col-span-7 flex justify-center">
            <BarChart />
          </div>
          <div className="col-span-1 xl:col-span-3 flex justify-center">
            <DonutChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 mt-16">
        <div className="col-span-1 xl:col-span-7">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-[#292D32] text-[20px] font-[600]">Notice</p>
            <div className="w-full sm:w-auto mt-6 sm:mt-0">
              <DropDown
                title="November"
                options={[
                  { id: 1, name: "January" },
                  { id: 2, name: "February" },
                  { id: 3, name: "March" },
                  { id: 4, name: "April" },
                  { id: 5, name: "May" },
                  { id: 6, name: "June" },
                  { id: 7, name: "July" },
                  { id: 8, name: "August" },
                  { id: 9, name: "September" },
                  { id: 10, name: "October" },
                  { id: 11, name: "November" },
                  { id: 12, name: "December" },
                ]}
                onChange={() => {}}
                width="180px"
                height="42px"
              />
            </div>
          </div>
          <div className="mt-8">
            <NoticeTab />
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {notices.map((notice, index) => (
              <div key={index} onClick={() => handleNoticeClick(notice)}>
                <NoticeCard {...notice} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3 mt-8 xl:mt-0">
          <OrganizationAdminMeetings />
        </div>
      </div>

      {/* <div className="mt-16">
        <Subscription></Subscription>
      </div> */}
      <div className="mt-16">
        <p className="text-[#292D32] text-[20px] font-[600]">Invoices</p>
        <div className="mt-8">
          <InvoicesTable />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-16">
        <div className="col-span-1 xl:col-span-2">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <p className="text-[#292D32] text-[20px] font-[600]">
              Service Usage
            </p>
            <DropDown
              title="Service Name"
              options={[
                { id: 1, name: "Email" },
                { id: 2, name: "Cloud Storage" },
                { id: 3, name: "Survey Tool" },
                { id: 4, name: "Communication Hub" },
              ]}
              onChange={() => {}}
              width="180px"
              height="42px"
            />
          </div>
          <div className="mt-8">
            <ServiceUsageChart />
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-[#292D32] text-[20px] font-[600]">
            Commonly Used Module
          </p>
          <div className="mt-8">
            <CommonlyUsedModuleTable />
          </div>
        </div>
      </div>
      {isModalOpen && selectedNotice && (
        <NoticeDetailsModal
          notice={selectedNotice}
          onClose={handleCloseModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
}
