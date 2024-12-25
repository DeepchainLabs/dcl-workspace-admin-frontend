"use client";

import { useEffect, useState } from "react";
import DropDown from "../Common/DropDown";
import NoticeCard from "./NoticeCard";
import BarChart from "./BarChart";
import DonutChart from "./DonutChart";
import { notices } from "@/contents/NoticeData";
import NoticeDetailsModal from "./NoticeDetailsModal";
// import TrackerMenu from "./TrackerMenu";
import MostTrackedActivities from "./MostTrackedActivities";
import MyReport from "./MyReport";
import NoticeTab from "./NoticeTab";
import WelcomeModal from "./WelcomeModal";
import InvolvedProjects from "./InvolvedProjects";
import OrganizationEmployeeMeetings from "./OrganizationEmployeeMeetings";

export default function OrganizationEmployee() {
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [welcome, setWelcome] = useState(false);

  const handleNoticeClick = (notice: any) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  useEffect(() => {
    setWelcome(true);
  }, []);

  return (
    <div>
      <div className="mt-6">{/* <TrackerMenu></TrackerMenu> */}</div>
      <div className="flex mt-12">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Your Activities This Week
        </p>
      </div>
      <div className="mt-8 grid gap-8 grid-cols-1 xl:grid-cols-[2fr_3fr]">
        <div>
          <MostTrackedActivities />
        </div>
        <div>
          <MyReport />
        </div>
      </div>

      <InvolvedProjects></InvolvedProjects>
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
          <OrganizationEmployeeMeetings />
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
            <DonutChart personal={true} />
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
      {welcome && <WelcomeModal setShow={setWelcome} />}
    </div>
  );
}
