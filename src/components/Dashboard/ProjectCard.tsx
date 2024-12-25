import ProjectDetailsIcon from "@/svg/Dashboard/ProjectDetailsIcon";
import ProgressBar from "../Common/LinearProgressBar";
import StatusBadge from "../Common/StatusBadge";
import Image from "next/image";
import Link from "next/link";
import TaskBoardIcon from "@/svg/Dashboard/TaskBoardIcon";
import SprintBoardIcon from "@/svg/Dashboard/SprintBoardIcon";
import NumberOfTaskIcon from "@/svg/Dashboard/NumberOfTaskIcon";

export default function ProjectCard({ project, isSelected }: any) {
  return (
    <div
      className={`w-[256px] h-[360px] rounded-[10px] p-5 hover:shadow-[0px_8px_16px_0px_#00000014,_0px_0px_4px_0px_#0000000A] ${
        isSelected ? "bg-[#E7F6FF]" : "bg-[#F8FAFC]"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <StatusBadge text={project.status} />
        </div>
        <div className="flex gap-3">
          <Link
            href={`/task-manager/projects/${project.id
              .toLowerCase()
              .replace(/ /g, "-")}`}
            passHref
          >
            <div className="cursor-pointer">
              <ProjectDetailsIcon />
            </div>
          </Link>
          <Link
            href={`/task-manager/projects/${project.id
              .toLowerCase()
              .replace(/ /g, "-")}/board`}
            passHref
          >
            <div className="cursor-pointer">
              <TaskBoardIcon />
            </div>
          </Link>
          <Link href="/task-manager/sprint" passHref>
            <div className="cursor-pointer">
              <SprintBoardIcon />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-6 text-[#2377FC] text-[18px] font-[600]">
        {project.name}
      </div>
      <div className="mt-10 flex justify-between">
        <div className="flex flex-col">
          <div className="text-[#6F6F6F] text-[12px] font-[600]">
            Project Manager
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-[26px] h-[26px] relative">
              <Image
                src={project.manager.avatar}
                fill
                alt={project.manager.name}
                className="rounded-full"
              />
            </div>
            <p className="text-[#292D32] text-[12px] font-[600]">
              {project.manager.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#6F6F6F] text-[12px] font-[600]">
            Team Members
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center">
              {project.teamMembers.slice(0, 3).map((member: any, index: number) => (
                <div key={index} className="w-[26px] h-[26px] relative">
                  <Image
                    src={member.avatar}
                    fill
                    alt={member.name}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            {project.teamMembers.length > 3 && (
              <p className="text-[#A5B2CA] text-[12px] font-[600]">
                +{project.teamMembers.length - 3}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <div className="flex flex-col">
          <div className="text-[#6F6F6F] text-[12px] font-[600]">Tasks</div>
          <div className="mt-2 bg-[#FFFFFF] rounded-[8px] px-4 py-1 flex gap-1.5">
            <NumberOfTaskIcon />
            <p className="text-[#2377FC] text-[14px] font-[600] mt-[1px]">
              {project.tasks}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#6F6F6F] text-[12px] font-[600]">Type</div>
          <div className="mt-2 bg-[#3B82F61A] rounded-[8px] px-2 py-1 flex gap-1">
            <p className="text-[#2563EB] text-[14px] font-[600] my-auto">
              {project.type}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-[#6F6F6F] text-[12px] font-[600]">
        Completion
      </div>
      <div className="mt-2 flex justify-between items-center gap-5">
        <ProgressBar progress={project.completionPercentage} />
        <div className="text-[#292D32] text-[12px] font-[600]">
          {project.completionPercentage}%
        </div>
      </div>
    </div>
  );
}
