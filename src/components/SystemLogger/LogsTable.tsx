import LogsTableRow, { RowProps } from "./LogsTableRow";

export default function LogsTable() {
  const rows: RowProps[] = [
    {
      status: "Failed",
      route: "/auth/login",
      timestamp: "2025-12-12 · 12:00 AM",
      requestId: "23etdfbfj55asf",
      description: "Initiating Kazentic Login",
    },
    {
      status: "Warning",
      route: "/auth/login",
      timestamp: "2025-12-12 · 12:00 AM",
      requestId: "23etdfbfj55asf",
      description: "Initiating Kazentic Login",
    },
    {
      status: "Debug",
      route: "/auth/login",
      timestamp: "2025-12-12 · 12:00 AM",
      requestId: "23etdfbfj55asf",
      description: "Initiating Kazentic Login",
    },
    {
      status: "Info",
      route: "/auth/login",
      timestamp: "2025-12-12 · 12:00 AM",
      requestId: "23etdfbfj55asf",
      description: "Initiating Kazentic Login",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border bg-white shadow">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Route</th>
            <th className="p-3 text-left">Timestamp</th>
            <th className="p-3 text-left">Request ID</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <LogsTableRow key={i} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
