"use client";
import Link from "next/link";
import dayjs from "dayjs";
import { BugReportResponse, BugStatuses } from "@/interfaces/Bug.interface";
import DropDown from "../Common/DropDown";
import StatusBadge from "../Common/StatusBadge";
import { updateReportedBugs } from "@/resources/bugs/bugs.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ClaimResponse, ClaimStatusList } from "@/interfaces/Claim.interface";
import { updateClaim } from "@/resources/claims/claim.service";

const ClaimListTable = ({ claims }: { claims: ClaimResponse[] }) => {
  const router = useRouter();
  const handleStatusChange = async (id: string, status: string) => {
    await updateClaim(id, { status })
      .then((res) => toast.success("Status updated"))
      .catch((err) => toast.error("Failed to update status"));
  };

  if (!claims) {
    return (
      <div className="flex justify-center items-center py-4">
        <p className="text-gray-500">Loading claims...</p>
      </div>
    );
  }

  return (
    <div>
      <table className="table-fixed w-full rounded-[16px]">
        <thead className="sticky top-0 bg-[#EDEDED]">
          <tr className="text-[#6F6F6F] text-[13px] font-[500]">
            <th className="p-4 w-[6%] text-left rounded-l-[6px]">Sl. No</th>
            <th className="p-3 w-[13%] text-left">Name</th>
            <th className="p-3 w-[18%] text-left">Email</th>
            <th className="p-3 w-[12%] text-left">Phone</th>
            <th className="p-3 w-[15%] text-left">Status</th>
            <th className="p-3 w-[16%] text-left">Required Action</th>
            <th className="p-3 w-[12%] text-left">Submitted Date</th>
            <th className="p-3 w-[10%] text-left rounded-r-[6px]">
              Space Count
            </th>
          </tr>
        </thead>
        <tbody className="text-[#292D32] bg-[#FFFFFF] text-[14px] font-[500]">
          {claims.map((item: ClaimResponse, index: number) => (
            <tr
              onClick={() => {
                router.push(`claims/${item._id}`);
              }}
              key={item._id}
              className="cursor-pointer hover:bg-gray-100 text-[#292D32] font-[500] text-[15px]"
            >
              <td className="border-b border-[#EAECF0] p-4">{index + 1}</td>
              <td className="border-b border-[#EAECF0] p-4 truncate">
                {`${item.firstName} ${item.lastName}`}
              </td>
              <td className="border-b border-[#EAECF0] p-4 truncate">
                {item.organizationEmail}
              </td>
              <td className="border-b border-[#EAECF0] p-4">{item.phone}</td>
              <td
                className="border-b border-[#EAECF0] p-4"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <DropDown
                  name="operatingSystem"
                  onChange={(status: string) =>
                    handleStatusChange(item._id, status)
                  }
                  selected={item.status}
                  options={ClaimStatusList}
                  width="100%"
                  height="32px"
                  fontWeight={false}
                  bgColor={false}
                />
              </td>
              <td className="border-b border-[#EAECF0] p-4 truncate">
                {item.requiredAction}
              </td>
              <td className="border-b border-[#EAECF0] p-4 truncate">
                {dayjs(item.created_at).format("DD/MM/YYYY")}
              </td>
              <td className="border-b border-[#EAECF0] p-4 truncate">
                {item.spaces.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimListTable;
