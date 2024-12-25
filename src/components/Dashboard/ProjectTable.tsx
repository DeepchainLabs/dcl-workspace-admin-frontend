import Link from "next/link";
import StatusBadge from "../Common/StatusBadge";

interface TaskDetail {
  id: string;
  name: string;
  estimatedTime: string;
  workedTime: string;
  type: string;
  status: string;
}

interface ProjectTableProps {
  tasks: TaskDetail[];
}

export default function ProjectTable({ tasks }: ProjectTableProps) {
  return (
    <div className="">
      <div className="mt-0 bg-[#F6F6F6] w-full h-[45px] grid grid-cols-7 px-4">
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Task ID</p>
        </div>
        <div className="col-span-2 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Task Name</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Estimated</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Worked</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Type</p>
        </div>
        <div className="col-span-1 my-auto">
          <p className="text-[#6F6F6F] text-[14px] font-[500]">Status</p>
        </div>
      </div>
      {tasks?.map((task) => (
        <Link key={task.id} href={`/task-manager/task/${task.id}`} passHref>
          <div
            key={task.id}
            className="bg-[#FFFFFF] w-full border-b border-[#E5E9EB] py-4 grid grid-cols-7 px-4 rounded-[8px] group cursor-pointer"
          >
            <div className="col-span-1 my-auto">
              <div className="inline-flex items-center bg-[#F8FAFC] rounded-[8px]">
                <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500] px-3 py-1">
                  {task.id}
                </p>
              </div>
            </div>
            <div className="col-span-2 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {task.name}
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {task.estimatedTime}
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                {task.workedTime}
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <p className="text-[#292D32] group-hover:text-[#2377FC] text-[16px] font-[500]">
                <StatusBadge text={task.type} />
              </p>
            </div>
            <div className="col-span-1 my-auto">
              <StatusBadge text={task.status} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
