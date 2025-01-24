import ClientCard from "@/components/ClientManagement/ClientCard";
import ClientListTable from "@/components/ClientManagement/ClientListTable";
import ClientListTableHeader from "@/components/ClientManagement/ClientListTableHeader";
import WorkspaceListTable from "@/components/ClientManagement/WorkspaceListTable";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { clientData } from "@/contents/Admin/Workspace";
import { PageProps } from "@/interfaces/pageProps.interface";
import {
  getAllClients,
  getClientsSummary,
} from "@/resources/client-management/clientManagement.service";
import { extractError } from "@/utils/errors.utils";
import React from "react";

export default async function ClientManagement({ searchParams }: PageProps) {
  const tab = searchParams.tab || "workspace";

  const clients = await getAllClients().catch((error) => {
    return extractError(error);
  });
  if (typeof clients === "string") return <ErrorAllert message={clients} />;

  const summary = await getClientsSummary().catch((error) => {
    return extractError(error);
  });
  if (typeof summary === "string") return <ErrorAllert message={summary} />;

  // console.log("summary", summary);

  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Client Management</p>
        </div>
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="mt-0">
          <ClientListTableHeader active={tab} />
          <div className="flex justify-start flex-wrap gap-4 mt-8">
            <ClientCard name={"Total Clients"} count={summary.total} />
            <ClientCard name={"Active Clients"} count={summary.active} />
            <ClientCard name={"New Clients"} count={summary.new} />
          </div>
          {tab === "personal" && <ClientListTable />}
          {tab === "workspace" && <WorkspaceListTable clients={clients} />}
        </div>
      </div>
    </div>
  );
}
