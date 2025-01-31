import ClientDetails from "@/components/ClientManagement/ClientDetails";

export default function Details() {
  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Client Details</p>
        </div>
      </div>
      <div className="h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <ClientDetails />
      </div>
    </div>
  );
}
