"use client";
import { useState } from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import CopyIcon from "@/svg/Note/CopyIcon";
import EyeIconSVG from "@/svg/Admin/SystemLogger/EyeIconSVG";
import StatusBadge from "@/svg/Admin/SystemLogger/StatusBadge";

export interface RowProps {
  rowData: Record<string, any>;
  activeTab: "Requests" | "Errors" | "Queries";
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
}

export default function LogsTableRow({ rowData, activeTab }: RowProps) {
  const [showCode, setShowCode] = useState(false);

  const dummyCode = JSON.stringify(
    rowData.body ?? rowData.stack ?? rowData.filters ?? rowData,
    null,
    2
  );

  return (
    <>
      <tr className="border-b">
        {activeTab === "Requests" && (
          <>
            <td className="p-3">
              {rowData.status_code ? (
                <StatusBadge status_code={rowData.status_code} />
              ) : (
                "no status"
              )}
            </td>
            <td className="p-3">{rowData.path ?? "no path"}</td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
            <td className="p-3">{rowData.execution_time ?? "n/a"}</td>
            <td
              className="p-3 flex items-center gap-2 cursor-pointer"
              onClick={() => setShowCode(!showCode)}
            >
              {rowData.request_id} <CopyIcon />
            </td>
            <td className="p-3">
              <EyeIconSVG />
            </td>
          </>
        )}

        {activeTab === "Errors" && (
          <>
            <td className="p-3">{rowData._id}</td>
            <td className="p-3">
              {rowData?.request_snapshot?.request_id ?? "n/a"}
            </td>
            <td className="p-3">{rowData.error ?? "No error message"}</td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
            <td className="p-3">
              <EyeIconSVG />
            </td>
          </>
        )}

        {activeTab === "Queries" && (
          <>
            <td className="p-3">{rowData._id}</td>
            <td className="p-3">{rowData.operation ?? "n/a"}</td>
            <td className="p-3">{rowData.collection_name ?? "n/a"}</td>
            <td className="p-3">{JSON.stringify(rowData.filters ?? "n/a")}</td>
            <td className="p-3">
              {JSON.stringify(rowData.populations ?? "n/a")}
            </td>
            <td className="p-3">{rowData.execution_time ?? "n/a"}</td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
            <td className="p-3">
              <EyeIconSVG />
            </td>
          </>
        )}
      </tr>

      {showCode && (
        <tr>
          <td
            colSpan={activeTab === "Queries" ? 8 : 7}
            className="p-0 bg-gray-50"
          >
            <div className="overflow-auto p-2" style={{ maxHeight: "300px" }}>
              <CopyBlock
                text={dummyCode}
                language="json"
                showLineNumbers
                theme={atomOneLight}
                codeBlock
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
