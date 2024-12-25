import {
  Backend,
  CPU,
  Database,
  Disk,
  Frontend,
  Memory,
  Network,
  Redis,
} from "@/svg/Admin/PlatformManagement/IconSVG";

export default function Resource() {
  return (
    <div>
      <div className="bg-[#F8FAFC] rounded-[8px] w-[500px] h-[200px] border boarder-[#E5E9EB] p-6">
        <div className="text-[#292D32] text-[20px] font-[600]">
          Resource Utilization
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 mt-3 space-y-4">
            <div className="flex gap-3">
              <CPU />
              <div>
                <p className="text-[#2377FC] text-[16px] font-[600]">
                  CPU Usage
                </p>
                <p className="text-[#7F899C] text-[14px] font-[600]">40%</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Network />
              <div>
                <p className="text-[#2377FC] text-[16px] font-[600]">
                  Network I/O
                </p>
                <p className="text-[#7F899C] text-[14px] font-[600]">30 MB/s</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-3 space-y-4">
            <div className="flex gap-3">
              <Memory />
              <div>
                <p className="text-[#2377FC] text-[16px] font-[600]">
                  Memory Usage
                </p>
                <p className="text-[#7F899C] text-[14px] font-[600]">55%</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Disk />
              <div>
                <p className="text-[#2377FC] text-[16px] font-[600]">
                  Disk I/O
                </p>
                <p className="text-[#7F899C] text-[14px] font-[600]">50 MB/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
