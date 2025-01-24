"use client";
import React, { useState } from "react";
import { CreateIcon } from "@/svg/ManageOrganization/AccessControlIcons";
import AddRoleModal from "../AddRoleModal";
import { hasPermission } from "@/utils/checkPermission";

export default function CreateRole() {
  const [showCreateRoleModal, setShowCreateRoleModal] = useState(false);
  return (
    <>
      {hasPermission("VIEW_ACCESS_CONTROL") &&
        hasPermission("MANAGE_ACCESS_CONTROL") && (
          <div className="flex justify-between">
            <p className="text-[#19192F] text-[20px] font-[600]">Roles</p>
            <div
              onClick={() => setShowCreateRoleModal(true)}
              className="w-[180px] flex justify-center gap-2 rounded-[8px] bg-[#2377FC] h-[40px] cursor-pointer items-center"
            >
              <div>
                <CreateIcon />
              </div>
              <p className="text-[#FFFFFF] text-[16px] font-[500]">
                Create New Role
              </p>
            </div>
            {showCreateRoleModal && (
              <AddRoleModal setShow={setShowCreateRoleModal} />
            )}
          </div>
        )}
    </>
  );
}
