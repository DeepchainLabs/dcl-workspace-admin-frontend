import React from "react";
import PermissionAssignmentToRole from "./PermissionAssignmentToRole";

import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import {
  getPermissions,
  getRoles,
} from "@/resources/settings/accessControl.service";
export default async function PermissionToRole() {
  const roles = await getRoles({}).catch((error) => {
    return extractError(error);
  });
  if (typeof roles === "string") return <ErrorAllert message={roles} />;

  const permissions = await getPermissions({}).catch((error) => {
    return extractError(error);
  });
  if (typeof permissions === "string")
    return <ErrorAllert message={permissions} />;

  return (
    <div className="mt-6">
      <p className="text-[#19192F] text-[20px] font-[600] my-auto">
        Assign Permission to Role
      </p>
      <PermissionAssignmentToRole roles={roles} permissions={permissions} />
    </div>
  );
}
