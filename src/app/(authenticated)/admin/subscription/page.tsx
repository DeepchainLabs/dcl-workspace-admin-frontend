"use client";
import SubscriptionCardOrganization from "@/components/Admin/Subscription/SubscriptionCardOrganization";
import ConfirmDeleteModal from "@/components/Common/ConfirmDeleteModal";
import DeleteModal from "@/components/Common/DeleteModal";
import { AddButtonPlusIcon } from "@/svg/Crms/CommonIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { plans } from "@/contents/Admin/Subscription/SubscriptionContents";

export default function SubscriptionPlans() {
  const [activeTab, setActiveTab] = useState<"organization" | "personal">(
    "organization"
  );
  const [subscriptions, setSubscriptions] = useState(plans);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState(false);

  const router = useRouter();

  const handleTabChange = (tab: "organization" | "personal") => {
    setActiveTab(tab);
    router.push(`/admin/subscription/?subscription-type=${tab}`);
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/subscription/edit-plan/${id}`);
  };

  const handleDelete = (id: string) => {
    setSelectedPlanId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirmed = () => {
    setIsDeleteModalOpen(false);
    setIsConfirmDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedPlanId) {
      setSubscriptions((prevSubscriptions) => {
        const updatedPlans = { ...prevSubscriptions };
        updatedPlans[activeTab] = updatedPlans[activeTab].filter(
          (plan) => plan.id !== selectedPlanId
        );
        return updatedPlans;
      });
      setIsConfirmDeleteModalOpen(false);
      setSelectedPlanId(null);
    }
  };

  return (
    <div>
      <div className="border-b border-[#E5E9EB] min-h-[76px]">
        <div className="custom-layout py-4 pb-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#292D32]">
              Subscription
            </h1>
          </div>
        </div>
      </div>
      <div className="custom-layout h-[calc(100vh-155px)] overflow-y-auto space-y-8 bg-white">
        <div className="relative flex flex-col sm:flex-row mt-6 mb-6 justify-between w-full gap-4">
          <div className="bg-[#EAEEF5] w-full sm:w-[75%] md:w-[70%] lg:w-[60%] xl:w-[50%] min-h-[40px] grid grid-cols-1 sm:grid-cols-2 rounded-[6px] p-1 text-center">
            <div
              onClick={() => handleTabChange("organization")}
              className={`text-[#000000] text-[14px] font-[600] px-4 py-1.5 rounded-[4px] cursor-pointer ${
                activeTab === "organization" ? "bg-[#FFFFFF]" : ""
              }`}
            >
              Organization
            </div>
            <div
              onClick={() => handleTabChange("personal")}
              className={`text-[#000000] text-[14px] font-[600] px-4  py-1.5 rounded-[4px] cursor-pointer ${
                activeTab === "personal" ? "bg-[#FFFFFF]" : ""
              }`}
            >
              Personal
            </div>
          </div>
          <div>
            <Link href={"./subscription/create-plan"}>
              <button className="flex items-center justify-center w-full sm:w-auto px-3 py-2 text-[14px] font-[600] bg-[#2377FC]               text-white rounded-[8px] gap-2">
                <AddButtonPlusIcon />
                Add Plan
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center xl:justify-start gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {subscriptions[activeTab].map((plan) => (
              <SubscriptionCardOrganization
                data={plan}
                key={plan.id}
                onEdit={() => handleEdit(plan.id)}
                onDelete={() => handleDelete(plan.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDeleteConfirmed}
        />
      )}

      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal
          isOpen={isConfirmDeleteModalOpen}
          onClose={() => setIsConfirmDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
