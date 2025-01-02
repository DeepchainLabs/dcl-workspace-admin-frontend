import Card from "@/components/PlatformManagement/Card";
import List from "@/components/PlatformManagement/List";
import Performance from "@/components/PlatformManagement/Performance";
import Resource from "@/components/PlatformManagement/Resource";

export default function Platformanagement() {
  return (
    <main>
      <div className="border-b border-[#E5E9EB] h-[76px] px-4 lg:px-8">
        <div className="flex items-center pt-[18px]">
          <p className="text-[#292D32] text-[24px] font-[600]">
            Platform Management
          </p>
        </div>
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout pb-20">
        <div className="grid lg:grid-cols-1 xxl:grid-cols-2 md:grid-cols-1">
          <div className="col-span-1 mt-2 lg:mt-4 xxl:mt-6">
            <Card />
          </div>
          <div className="col-span-1 mt-2 lg:mt-4 xxl:mt-6">
            <Resource />
          </div>
        </div>
        <div className="mt-2 lg:mt-4 xxl:mt-6">
          <Performance />
        </div>
        <div className="mt-2 lg:mt-4 xxl:mt-6">
          <List />
        </div>
      </div>
    </main>
  );
}
