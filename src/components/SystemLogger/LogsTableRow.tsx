"use client";
import { useState } from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import CopyIcon from "@/svg/Note/CopyIcon";
import StatusBadge from "@/svg/Admin/SystemLogger/StatusBadge";
import ArrowDownIcon from "@/svg/Admin/SystemLogger/DownArrowSVG";
import toast from "react-hot-toast";

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

  const handleCopy = () => {
    if (rowData?.request_id) {
      navigator.clipboard.writeText(rowData.request_id).then(() => {
        toast.success("Request ID copied to clipboard");
      });
    }
  };

  const row = rowData.data ?? rowData;

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
            <td className="p-3 break-words max-w-[200px]">
              {rowData.path ?? "no path"}
            </td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
            <td className="p-3">{rowData.execution_time ?? "n/a"}</td>
            <td
              className="p-3 flex items-center gap-2 cursor-pointer"
              // onClick={() => setShowCode(!showCode)}
            >
              {/* {rowData.request_id} <CopyIcon /> */}
              <td className="p-3 flex items-center gap-2">
                {rowData.request_id}
                <button
                  onClick={handleCopy}
                  className="cursor-pointer hover:opacity-70"
                  title="Copy Request ID"
                >
                  <CopyIcon />
                </button>
              </td>
            </td>
          </>
        )}

        {activeTab === "Errors" && (
          <>
            <td className="p-3">{rowData._id}</td>
            <td
              className="p-3 flex items-center gap-2 cursor-pointer"
              onClick={() => setShowCode(!showCode)}
            >
              {rowData?.request_snapshot?.request_id ?? "N/A"}
              <ArrowDownIcon
                className={`ml-1 transition-transform duration-300 ${
                  showCode ? "rotate-180" : ""
                }`}
              />
            </td>
            <td className="p-3">{rowData.error ?? "No error message"}</td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
          </>
        )}

        {activeTab === "Queries" && (
          <>
            <td className="p-3">{rowData._id}</td>
            <td className="p-3">{rowData.operation ?? "n/a"}</td>
            <td className="p-3">{rowData.collection_name ?? "n/a"}</td>
            <td
              className="p-3 flex items-center gap-2 cursor-pointer"
              onClick={() => setShowCode(!showCode)}
            >
              {rowData.filters ? "yes" : "n/a"}
              {rowData.filters && (
                <ArrowDownIcon
                  className={`ml-1 transition-transform duration-300 ${
                    showCode ? "rotate-180" : ""
                  }`}
                />
              )}
            </td>
            <td className="p-3">
              {JSON.stringify(rowData.populations ?? "n/a")}
            </td>
            <td className="p-3">{rowData.execution_time ?? "n/a"}</td>
            <td className="p-3">
              {rowData.created_at
                ? formatDate(rowData.created_at)
                : "unknown time"}
            </td>
          </>
        )}
      </tr>

      {showCode && (
        <tr>
          <td
            colSpan={activeTab === "Errors" ? 5 : 8}
            className="p-0 bg-gray-50"
          >
            <div
              className="overflow-auto p-2  bg-gray-50 
             text-sm font-mono leading-relaxed max-w-full"
              style={{
                maxHeight: "600px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              <CopyBlock
                // text={JSON.stringify(rowData?.request_snapshot, null, 2)}
                text={
                  activeTab === "Errors"
                    ? JSON.stringify(rowData?.request_snapshot ?? {}, null, 2)
                    : activeTab === "Queries"
                    ? JSON.stringify(rowData?.filters ?? {}, null, 2)
                    : ""
                }
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
