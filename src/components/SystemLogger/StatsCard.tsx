import BugIconSVG from "@/svg/Admin/SystemLogger/BugIconSVG";
import ErrorIconSVG from "@/svg/Admin/SystemLogger/ErrorIconSVG";
import InfoIconSVG from "@/svg/Admin/SystemLogger/InfoIconSVG";
import WarningIconSVG from "@/svg/Admin/SystemLogger/WarningIconSVG";

type IconType = "error" | "info" | "warning" | "bug";

interface StatsCardProps {
  label: string;
  count: number;
  icon?: IconType;
  color: string;
}

const iconMap = {
  error: ErrorIconSVG,
  info: InfoIconSVG,
  warning: WarningIconSVG,
  bug: BugIconSVG,
};

export default function StatsCard({
  label,
  count,
  icon = "error",
  color,
}: StatsCardProps) {
  const Icon = iconMap[icon] || ErrorIconSVG;
  return (
    <div className="flex flex-col justify-between rounded-lg border bg-[#FDFDFD] border-[#EBEBEB]  p-4 ">
      <div className="self-end">
        <div className="flex align-center justify-center ">
          <Icon />
        </div>
      </div>
      <div className="self-start">
        <div className={`text-3xl font-semibold text-[${color}]`}>{count}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}
