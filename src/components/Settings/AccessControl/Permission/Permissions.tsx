import React from "react";
import PermissionsList from "./PermissionsList";
import PermissionAssignment from "./PermissionAssignment";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { getPermissions } from "@/resources/settings/accessControl.service";
import { getEmployess } from "@/resources/settings/employee.service";

export default async function Permissions() {
  const permissions = await getPermissions({}).catch((error) => {
    return extractError(error);
  });
  if (typeof permissions === "string")
    return <ErrorAllert message={permissions} />;

  const employees = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof employees === "string") return <ErrorAllert message={employees} />;

  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-[#19192F] text-[20px] font-[600]">Permissions</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-4">
        <PermissionsList permissions={permissions} />
        <PermissionAssignment permissions={permissions} users={employees} />
      </div>
    </div>
  );
}
