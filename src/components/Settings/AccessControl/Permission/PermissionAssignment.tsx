"use client";
import DropDown from "@/components/Common/DropDown";
import UserDropDown from "@/components/Common/UserDropDown";
import React, { useEffect, useState } from "react";
import PermissionsDropDown from "./PermisionsDropDown";
import toast from "react-hot-toast";
import { extractError } from "@/utils/errors.utils";
import { formatPermission } from "@/utils/formatPermisssionsName.utils";
import {
  assignPermissionToUser,
  getModulePermissions,
  getUserPermissions,
} from "@/resources/settings/accessControl.service";
import { hasPermission } from "@/utils/checkPermission";

interface Permissions {
  [category: string]: string[];
}

const getObjectKeys = (obj: Record<string, string[]>): string[] => {
  return Object.keys(obj);
};

export default function PermissionAssignment({
  permissions,
  users,
}: {
  permissions: Permissions;
  users: any[];
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modules, setModules] = useState<string[]>([]);
  const [permissionsList, setPermissionsList] = useState<string[]>([]);
  const [userPermissions, setUserPermissions] = useState<string[]>([]);
  const [userPermissionsList, setUserPermissionsList] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
  };
  const [selectedModule, setSelectedModule] = useState<string>("");

  useEffect(() => {
    const permissionsKeys = getObjectKeys(permissions);
    setModules(permissionsKeys);
  }, [permissions]);

  const handleModuleSelect = (module: string) => {
    // console.log(module);
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

  useEffect(() => {
    if (selectedUser) {
      getUserPermissions({ userId: selectedUser })
        .then((res) => {
          setUserPermissions(res[0]?.permissions || []);
          setUserPermissionsList(res[0]?.permissions || []);
        })
        .catch((error) => {
          toast.error(extractError(error));
        });
    }
  }, [selectedUser]);

  const [permissionsToAdd, setPermissionsToAdd] = useState<string[]>([]);
  const [permissionsToRemove, setPermissionsToRemove] = useState<string[]>([]);

  const handlePermissionSelect = (permission: string) => {
    if (userPermissions.includes(permission)) {
      setPermissionsToRemove([...permissionsToRemove, permission]);
      setUserPermissions(userPermissions.filter((p) => p !== permission));
      setPermissionsToAdd(permissionsToAdd.filter((p) => p !== permission));
    } else {
      setPermissionsToAdd([...permissionsToAdd, permission]);
      setUserPermissions([...userPermissions, permission]);
      setPermissionsToRemove(
        permissionsToRemove.filter((p) => p !== permission)
      );
    }
  };

  const handleConfirm = () => {
    const permissionsToAddFiltered = permissionsToAdd.filter((permission) => {
      return !userPermissionsList.includes(permission);
    });

    const permissionsToRemoveFiltered = permissionsToRemove.filter(
      (permission) => {
        return userPermissionsList.includes(permission);
      }
    );
    setIsLoading(true);
    assignPermissionToUser({
      userId: selectedUser,
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
          <div className="bg-[#FFFFFF] w-full border border-[#E5E9EB] md:h-auto h-[450px] rounded-[10px] py-4 px-6">
            <p className="text-[#19192F] text-[20px] font-[600]">
              Assign Permission to User
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
              <div>
                <p className="text-[#344054] text-[16px] font-[500]">
                  Username
                </p>
                <div className="mt-4">
                  <UserDropDown
                    title="Select User"
                    options={users}
                    onChange={handleUserSelect}
                    width="220px"
                  />
                </div>
              </div>
              <div>
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
            <div className="mt-6 h-[280px] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
                {permissionsList?.map((permission) => (
                  <div key={permission} className="flex items-center gap-4">
                    <input
                      onChange={() => handlePermissionSelect(permission)}
                      type="checkbox"
                      className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                      checked={userPermissions.includes(permission)}
                    />
                    <p className="text-[#333333] text-[16px]  font-[500]">
                      {formatPermission(permission)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" border-[#E5E9EB] pt-5 flex justify-end mt-8">
              <button
                onClick={handleConfirm}
                disabled={isLoading}
                className="bg-[#2377FC] text-white rounded-md px-4 py-2"
                style={{ opacity: isLoading ? 0.5 : 1 }}
              >
                {isLoading ? "Loading..." : "Confirm"}
              </button>
            </div>
          </div>
        )}
    </>
  );
}
