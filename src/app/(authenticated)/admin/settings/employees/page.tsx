import GridView from "@/components/Settings/Employees/Grid/GridView";
import ListView from "@/components/Settings/Employees/List/ListView";
import Tab from "@/components/Settings/Employees/Tab";
import { PageProps } from "@/interfaces/pageProps.interface";
import React from "react";

export default async function Employees({ searchParams }: PageProps) {
  const status = searchParams.status || "all";
  const viewType = searchParams.view_type || "list";

  return (
    <div className="custom-layout py-4 h-[calc(100vh-75px)] overflow-y-auto">
      <Tab status={status} view={viewType} />

      <div>
        <div className="block md:hidden">
          <GridView status={status} />
        </div>

        <div className="hidden md:block">
          {viewType === "list" && <ListView status={status} />}
          {viewType === "grid" && <GridView status={status} />}
        </div>
      </div>
    </div>
  );
}
