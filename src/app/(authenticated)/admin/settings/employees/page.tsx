import GridView from "@/components/Settings/Employees/Grid/GridView";
import ListView from "@/components/Settings/Employees/List/ListView";
import Tab from "@/components/Settings/Employees/Tab";
import { PageProps } from "@/interfaces/pageProps.interface";
import React from "react";

export default async function Employees({ searchParams }: PageProps) {
  const status = await searchParams.then((sp) => sp.status || "all");
  const viewType = await searchParams.then((sp) => sp.view_type || "list");

  return (
    <div>
      <div className="">
        <Tab status={status} view={viewType} />

        <div className="custom-layout">
          <div className="py-4 h-[calc(100vh-270px)] overflow-y-auto">
            <div className="block md:hidden">
              <GridView status={status} />
            </div>

            <div className="hidden md:block">
              {viewType === "list" && <ListView status={status} />}
              {viewType === "grid" && <GridView status={status} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
