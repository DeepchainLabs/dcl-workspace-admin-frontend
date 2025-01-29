"use client";
import DropDown from "@/components/Common/DropDown";
import React, { useEffect, useState } from "react";
import PermissionsDropDown from "../Permission/PermisionsDropDown";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";
import { formatPermission } from "@/utils/formatPermisssionsName.utils";
import {
  assignPermissionToRole,
  getModulePermissions,
} from "@/resources/settings/accessControl.service";
import { hasPermission } from "@/utils/checkPermission";

interface Roles {
  _id: string;
  name: string;
  permissions: string[];
}

interface Permissions {
  [category: string]: string[];
}

const getObjectKeys = (obj: Record<string, string[]>): string[] => {
  return Object.keys(obj);
};

export default function PermissionAssignmentToRole({
  roles,
  permissions,
}: {
  roles: Roles[];
  permissions: Permissions;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modules, setModules] = useState<string[]>([]);
  const [assignedPermissions, setAssignedPermissions] = useState<string[]>([]);
  const [assignedRolePermissions, setAssignedRolePermissions] =
    useState<string[]>();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedModule, setSelectedModule] = useState<string>("");
  const [permissionsList, setPermissionsList] = useState<string[]>([]);
  const [permissionsToAdd, setPermissionsToAdd] = useState<string[]>([]);
  const [permissionsToRemove, setPermissionsToRemove] = useState<string[]>([]);

  const handleRoleChange = (role: string) => {
    const rolePermissions = roles.find((r) => r._id === role)?.permissions;
    setSelectedRole(roles.find((r) => r._id === role)?.name || "");
    setAssignedPermissions(rolePermissions || []);
    setAssignedRolePermissions(rolePermissions);
  };

  useEffect(() => {
    const permissionsKeys = getObjectKeys(permissions);
    setModules(permissionsKeys);
  }, [permissions]);

  const handleModuleSelect = (module: string) => {
    setSelectedModule(module);
  };

  useEffect(() => {
    if (selectedModule) {
      getModulePermissions({ name: selectedModule })
        .then((res) => {
          setPermissionsList(res);
        })
        .catch((error) => {
          toast.error(extractError(error));
        });
    }
  }, [selectedModule]);

  const handlePermissionSelect = (permission: string) => {
    if (assignedPermissions.includes(permission)) {
      setPermissionsToRemove((prev) => [...prev, permission]);
      setAssignedPermissions((prev) => prev.filter((p) => p !== permission));
      setPermissionsToAdd((prev) => prev.filter((p) => p !== permission));
    } else {
      setPermissionsToAdd((prev) => [...prev, permission]);
      setAssignedPermissions((prev) => [...prev, permission]);
      setPermissionsToRemove((prev) => prev.filter((p) => p !== permission));
    }
  };

  const handleConfirm = () => {
    const permissionsToAddFiltered = permissionsToAdd.filter((permission) => {
      return !assignedRolePermissions?.includes(permission);
    });

    const permissionsToRemoveFiltered = permissionsToRemove.filter(
      (permission) => {
        return assignedRolePermissions?.includes(permission);
      }
    );

    setIsLoading(true);
    assignPermissionToRole({
      roleName: selectedRole,
      permissionsToAdd: permissionsToAddFiltered,
      permissionsToRemove: permissionsToRemoveFiltered,
    })
      .then((res) => {
        toast.success("Permissions assigned successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(extractError(error));
      });
  };

  return (
    <>
      {hasPermission("VIEW_ACCESS_CONTROL") &&
        hasPermission("MANAGE_ACCESS_CONTROL") && (
          <div>
            <div className="mt-4 bg-[#FFFFFF] w-full h-[550px] border border-[#E5E9EB] rounded-[10px] py-4 px-6">
              <div className="flex gap-8 mt-2">
                <div className="mt-0">
                  <p className="text-[#344054] text-[16px] font-[500]">
                    Role Name
                  </p>
                  <div className="mt-4">
                    <DropDown
                      title="Select Role"
                      options={roles}
                      onChange={handleRoleChange}
                      width="220px"
                    />
                  </div>
                </div>
                <div className="mt-0">
                  <p className="text-[#344054] text-[16px] font-[500]">
                    Module Name
                  </p>
                  <div className="mt-4">
                    <PermissionsDropDown
                      title="Select Module"
                      options={modules}
                      onChange={handleModuleSelect}
                      width="220px"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 h-[300px] overflow-y-auto">
                <div className="flex gap-8 flex-wrap ">
                  {permissionsList?.map((permission) => (
                    <div key={permission} className="flex items-center gap-4">
                      <input
                        onChange={() => handlePermissionSelect(permission)}
                        checked={assignedPermissions.includes(permission)}
                        type="checkbox"
                        className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                      />
                      <p className="text-[#333333] text-[16px] font-[500]">
                        {formatPermission(permission)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E5E9EB] pt-6 flex justify-end gap-4 mt-8 mb-8">
                <button
                  disabled={isLoading}
                  onClick={handleConfirm}
                  className="border border-[#2377FC] bg-[#2377FC] rounded-[6px] w-[140px] h-[38px] flex justify-center cursor-pointer"
                  style={{ opacity: isLoading ? 0.5 : 1 }}
                >
                  <p className="text-[#FFFFFF] text-[16px] font-[500] my-auto">
                    {isLoading ? "Loading..." : "Confirm"}
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}
