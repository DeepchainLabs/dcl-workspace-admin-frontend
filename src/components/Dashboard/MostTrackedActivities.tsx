import GrowthIcon from "@/svg/Dashboard/GrowthIcon";
import ProjectIcon from "@/svg/Dashboard/ProjectIcon";
import TaskIcon from "@/svg/Dashboard/TaskIcon";
import TimeIcon from "@/svg/Dashboard/TimeIcon";

export default function MostTrackedActivities() {
  return (
    <div className="bg-white flex flex-col justify-between border rounded-[12px] p-4 md:p-5 pb-8 md:pb-12 h-auto lg:h-[370px]">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <p className="text-[16px] md:text-[20px] font-[600] text-[#2563EB]">
          Most Tracked Activities
        </p>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <span className="text-[12px] md:text-[14px] text-[#292D32] font-[500] mr-2">
              1.3%
            </span>
            <GrowthIcon />
          </div>
          <span className="text-[12px] md:text-[14px] font-[500] text-[#6F6F6F]">
            VS LAST WEEK
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-5 bg-[#F8FAFC] rounded-[8px] items-center p-4 sm:p-6 md:p-8 w-full">
            <TimeIcon />
            <p className="text-[18px] md:text-[20px] font-[600] text-[#2377FC]">
              5H:45M
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] font-[500] text-[#52525B] mt-3 md:mt-5">
            Total Time Worked
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-5 bg-[#F8FAFC] rounded-[8px] items-center p-4 sm:p-6 md:p-8 w-full">
            <ProjectIcon />
            <p className="text-[18px] md:text-[20px] font-[600] text-[#15BD6D]">
              02
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] font-[500] text-[#52525B] mt-3 md:mt-5">
            No. of Projects Involved
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col gap-5 bg-[#F8FAFC] rounded-[8px] items-center p-4 sm:p-6 md:p-8 w-full">
            <TaskIcon />
            <p className="text-[18px] md:text-[20px] font-[600] text-[#6962FE]">
              02
            </p>
          </div>
          <p className="text-[14px] md:text-[16px] font-[500] text-[#52525B] mt-3 md:mt-5">
            Tasks Completed
          </p>
        </div>
      </div>
    </div>
  );
}
