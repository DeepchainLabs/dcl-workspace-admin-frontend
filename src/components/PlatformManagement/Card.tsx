import {
  Backend,
  Database,
  Frontend,
  Redis,
} from "@/svg/Admin/PlatformManagement/IconSVG";

export default function Card() {
  return (
    <div>
      <div className="bg-[#F8FAFC] rounded-[8px] w-[600px] h-[200px] lg:w-[700px] xxl:w-[700px] border boarder-[#E5E9EB] p-6">
        <div className="text-[#292D32] text-[20px] font-[600]">
          Server Status
        </div>
        <div className="flex justify-between mt-8 mb-8">
          <div className="bg-[#FFFFFF] w-[150px] h-[50px] rounded-[8px] border border-[#E5E9EB] flex justify-center items-center">
            <div className="flex gap-3 items-center">
              <p className="text-[16px] text-[#292D32] font-[600]">Frontend</p>
              <Frontend />
              <hr className="w-[9px] h-[9px] rounded-full bg-[#15BD6D]" />
            </div>
          </div>

          <div className="bg-[#FFFFFF] w-[150px] h-[50px] rounded-[8px] border border-[#E5E9EB] flex justify-center items-center">
            <div className="flex gap-3 items-center">
              <p className="text-[16px] text-[#292D32] font-[600]">Database</p>
              <Database />
              <hr className="w-[9px] h-[9px] rounded-full bg-[#15BD6D]" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-[150px] h-[50px] rounded-[8px] border border-[#E5E9EB] flex justify-center items-center">
            <div className="flex gap-3 items-center">
              <p className="text-[16px] text-[#292D32] font-[600]">Backend</p>
              <Backend />
              <hr className="w-[9px] h-[9px] rounded-full bg-[#15BD6D]" />
            </div>
          </div>
          <div className="bg-[#FFFFFF] w-[150px] h-[50px] rounded-[8px] border border-[#E5E9EB] flex justify-center items-center">
            <div className="flex gap-3 items-center">
              <p className="text-[16px] text-[#292D32] font-[600]">Redis</p>
              <Redis />

              <hr className="w-[9px] h-[9px] rounded-full bg-[#15BD6D]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
