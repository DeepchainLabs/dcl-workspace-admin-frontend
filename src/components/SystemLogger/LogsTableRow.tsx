"use client";
import { useState } from "react";
import { a11yLight, atomOneLight, CopyBlock, dracula } from "react-code-blocks";
import CopyIcon from "@/svg/Note/CopyIcon";
import EyeIconSVG from "@/svg/Admin/SystemLogger/EyeIconSVG";
import StatusBadge from "@/svg/Admin/SystemLogger/StatusBadge";

export interface RowProps {
  // status: "Failed" | "Warning" | "Debug" | "Info";
  status_code: number;
  path: string;
  // timestamp: string;
  created_at: string;
  request_id: string;
  body: any;
  description: string;
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
}

export default function LogsTableRow({
  // status,
  status_code,
  path,
  // timestamp,
  created_at,
  request_id,
  body,
  description = "No Description Available",
}: RowProps) {
  const [showCode, setShowCode] = useState(false);

  const dummyCode = `
  fetch('/api/login')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error('Login failed', err));
  `;

  return (
    <>
      <tr className="border-b">
        <td className="p-3">
          {status_code ? (
            <StatusBadge status_code={status_code} />
          ) : (
            "no status"
          )}
          {/* {status_code ?? "no_code"} */}
        </td>
        <td className="p-3">{path ?? "no path"}</td>
        <td className="p-3">
          {created_at ? formatDate(created_at) : "unknown time"}
        </td>
        <td
          className="p-3 flex items-center gap-2 cursor-pointer"
          onClick={() => setShowCode(!showCode)}
        >
          {request_id} <CopyIcon />
        </td>
        <td className="p-3">{description}</td>
        <td className="p-3">
          <EyeIconSVG />
        </td>
      </tr>

      {showCode && (
        <tr>
          <td colSpan={6} className="p-0 bg-gray-50">
            <div
              style={{ height: showCode ? "200px" : "0px" }}
              className="overflow-hidden transition-all duration-300"
            >
              <CopyBlock
                text={dummyCode}
                language="javascript"
                showLineNumbers
                // wrapLines
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
