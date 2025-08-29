// import { Copy, Eye } from "lucide-react";

import CopyIcon from "@/svg/Note/CopyIcon";
import EyeSvg from "@/svg/Admin/EyeSvg";
import EyeIconSVG from "@/svg/Admin/SystemLogger/EyeIconSVG";
import FailedBadge from "@/svg/Admin/SystemLogger/StatusBadge";
import StatusBadge from "@/svg/Admin/SystemLogger/StatusBadge";

export interface RowProps {
  status: "Failed" | "Warning" | "Debug" | "Info";
  route: string;
  timestamp: string;
  requestId: string;
  description: string;
}

export default function LogsTableRow({
  status,
  route,
  timestamp,
  requestId,
  description,
}: RowProps) {
  return (
    <tr className="border-b">
      <td className="p-3">
        {/* <StatusBadge jhuyhy8u76status={status} /> */}
        <StatusBadge text="Debug" />
      </td>
      <td className="p-3">{route}</td>
      <td className="p-3">{timestamp}</td>
      <td className="p-3 flex items-center gap-2">
        {requestId}
        <CopyIcon />
        {/* <Copy className="h-4 w-4 text-gray-400 cursor-pointer" /> */}
      </td>
      <td className="p-3">{description}</td>
      <td className="p-3">
        <EyeIconSVG />
        {/* <Eye className="h-5 w-5 text-gray-600 cursor-pointer" /> */}
      </td>
    </tr>
  );
}
