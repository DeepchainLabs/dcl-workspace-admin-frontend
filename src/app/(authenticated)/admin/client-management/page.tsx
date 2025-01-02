import ClientCard from "@/components/ClientManagement/ClientCard";
import ClientListTable from "@/components/ClientManagement/ClientListTable";
import ClientListTableHeader from "@/components/ClientManagement/ClientListTableHeader";
import WorkspaceListTable from "@/components/ClientManagement/WorkspaceListTable";
import { clientData } from "@/contents/Admin/Workspace";
import { PageProps } from "@/interfaces/pageProps.interface";
import React from "react";

export default async function ClientManagement({ searchParams }: PageProps) {
  const tab = searchParams.tab || "personal";
  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Client Management</p>
        </div>
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="flex justify-start flex-wrap gap-4">
          {clientData.map((card, index) => {
            return (
              <ClientCard key={index} name={card.name} count={card.count} />
            );
          })}
        </div>

        <div className="mt-6">
          <ClientListTableHeader />
          {tab === "personal" && <ClientListTable />}
          {tab === "workspace" && <WorkspaceListTable />}
        </div>
      </div>
    </div>
  );
}
