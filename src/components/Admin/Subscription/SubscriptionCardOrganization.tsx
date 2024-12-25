import { RocketIcon } from "@/svg/Admin/Subscription/SubscriptionIcons";
import FeatureAvailable from "@/svg/Subscription/FeatureAvailable";
import FeatureUnavailable from "@/svg/Subscription/FeatureUnavailable";
import StarGlow from "@/svg/Subscription/StarGlow";
import React from "react";
import ToggleSwitch from "@/components/Common/ToggleSwitch";
import { DeleteIcon, EditIcon } from "@/svg/Hrms/CommonIcons";

interface Modules {
  id: string;
  moduleName: string;
  isActive?: boolean;
}

interface Features {
  id: string;
  moduleId: string;
  moduleName: string;
  isActive?: boolean;
  featureName: string;
  properties: string | string[] | Record<string, any> | null;
}

interface PlanData {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  freeForOneMonth?: boolean;
  time: string;
  modules: Modules[];
  features: Features[];
}

interface SubscriptionCardProps {
  data: PlanData;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const SubscriptionCardOrganization: React.FC<SubscriptionCardProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  return (
    <div>
      <div
        className={`flex flex-col overflow-hidden border-[2px] w-[300px] border-[#2377FC] rounded-[8.42px] bg-white`}
      >
        <div className="flex flex-col p-4 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <RocketIcon />
            </div>
            <div className="flex gap-3 items-center">
              <div>
                <ToggleSwitch />
              </div>
              <div className="cursor-pointer" onClick={() => onEdit(data.id)}>
                <EditIcon />
              </div>
              <div className="cursor-pointer" onClick={() => onDelete(data.id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-[#292D32] text-[20px] font-[600]">{data.name}</p>
            <p className="text-[#7F899C] text-[14px] font-[500]">
              {data.description}
            </p>
          </div>

          <div className="flex gap-2">
            <div className="text-[#292D32] font-[600] text-[25px] mb-2">
              {data.price === "0" ? (
                <div className="flex gap-2 text-[#2377FC] font-[600] text-[20px]">
                  Free Forever{" "}
                  <div className="my-auto">
                    <StarGlow />
                  </div>
                </div>
              ) : (
                data.price
              )}
            </div>
            <p className="text-[#6F6F6F] text-[12px] font-[500] mb-4 my-auto">
              {data.time.length ? "/" : ""} {data.time}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-[#292D32] font-[600] text-[13px] mb-2">
              Features
            </h4>
            <ul className="text-[#54595E] text-[12px] space-y-2">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {feature.isActive ? (
                    <FeatureAvailable />
                  ) : (
                    <FeatureUnavailable />
                  )}
                  <p className="text-[#828282] font-[500] text-[13px]">
                    {feature.featureName}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCardOrganization;
