import React from "react";
import RoleList from "./RoleList";
import RoleAssignment from "./RoleAssignment";
import CreateRole from "./CreateRole";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { getEmployess } from "@/resources/settings/employee.service";
import { getRoles } from "@/resources/settings/accessControl.service";

export default async function RolesPage() {
  const roles = await getRoles({}).catch((error) => {
    return extractError(error);
  });
  if (typeof roles === "string") return <ErrorAllert message={roles} />;

  const employees = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof employees === "string") return <ErrorAllert message={employees} />;

  return (
    <div className="mt-6">
      <CreateRole />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 mt-4">
        <RoleList roles={roles} />
        <RoleAssignment roles={roles} users={employees} />
      </div>
    </div>
  );
}
