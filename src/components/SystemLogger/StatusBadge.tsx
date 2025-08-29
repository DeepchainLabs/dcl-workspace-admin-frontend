interface StatusBadgeProps {
  status: "Failed" | "Warning" | "Debug" | "Info";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Failed: "bg-red-100 text-red-600",
    Warning: "bg-yellow-100 text-yellow-700",
    Debug: "bg-blue-100 text-blue-600",
    Info: "bg-cyan-100 text-cyan-600",
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
