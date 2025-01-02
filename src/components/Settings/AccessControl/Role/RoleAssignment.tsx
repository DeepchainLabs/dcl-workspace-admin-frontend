"use client";
import UserDropDown from "@/components/Common/UserDropDown";
import {
  assignRoleToUser,
  getUserRoles,
} from "@/resources/settings/accessControl.service";
import { extractError } from "@/utils/errors.utils";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function RoleAssignment({
  roles,
  users,
}: {
  roles: { _id: string; name: string }[];
  users: any[];
}) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<string>("");
  const [assignedRoles, setAssignedRoles] = React.useState<
    Record<string, any>[]
  >([]);
  const [rolesAssigned, setRolesAssigned] = React.useState<
    Record<string, any>[]
  >([]);
  const [rolesToAdd, setRolesToAdd] = React.useState<string[]>([]);
  const [rolesToRemove, setRolesToRemove] = React.useState<string[]>([]);

  const handleUserSelect = (user: any) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (selectedUser) {
      getUserRoles({ userId: selectedUser })
        .then((res) => {
          setAssignedRoles(res[0]?.roles || []);
          setRolesAssigned(res[0]?.roles || []);
        })
        .catch((error) => {
          console.log(error);
          toast.error(extractError(error));
        });
    }
  }, [selectedUser]);

  const handleRoleChange = (role: string) => {
    if (
      assignedRoles.find((r) => {
        return r?._id === role;
      })
    ) {
      setRolesToRemove([...rolesToRemove, role]);
      setAssignedRoles(assignedRoles.filter((r) => r?._id !== role));
      setRolesToAdd(rolesToAdd.filter((r) => r !== role));
    } else {
      setRolesToAdd([...rolesToAdd, role]);
      setAssignedRoles([...assignedRoles, { _id: role }]);
      setRolesToRemove(rolesToRemove.filter((r) => r !== role));
    }
  };

  const handleConfirm = () => {
    const rolesToAddFiltered = rolesToAdd.filter((role) => {
      return !rolesAssigned.find((r) => r?._id === role);
    });

    const rolesToRemoveFiltered = rolesToRemove.filter((role) => {
      return rolesAssigned.find((r) => r?._id === role);
    });

    setIsLoading(true);
    assignRoleToUser({
      userId: selectedUser,
      roleIdsToAdd: rolesToAddFiltered,
      roleIdsToRemove: rolesToRemoveFiltered,
    })
      .then((res) => {
        toast.success("Roles assigned successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(extractError(error));
      });
  };

  return (
    <div>
      <div className="bg-[#FFFFFF] w-full md:h-auto h-[450px] border border-[#E5E9EB] rounded-[10px] py-4 px-6">
        <p className="text-[#19192F] text-[20px] font-[600]">
          Assign Role to User
        </p>
        <div className="mt-4">
          <p className="text-[#344054] text-[16px] font-[500]">Username</p>
          <div className="mt-4">
            <UserDropDown
              title="Select User"
              options={users}
              onChange={handleUserSelect}
              width="220px"
            />
          </div>
        </div>
        <div className="mt-8 h-[280px] overflow-y-auto">
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
            {roles?.map((role, index) => (
              <div key={role._id} className="flex gap-4 items-center">
                <input
                  checked={
                    assignedRoles.find((r) => r?._id === role._id)
                      ? true
                      : false
                  }
                  onChange={() => handleRoleChange(role._id)}
                  type="checkbox"
                  className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                />
                <p className="text-[#333333] text-[16px] font-[500] capitalize">
                  {role.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" border-[#E5E9EB] pt-5 flex justify-end gap-4 mt-8 mb-8">
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
    </div>
  );
}
