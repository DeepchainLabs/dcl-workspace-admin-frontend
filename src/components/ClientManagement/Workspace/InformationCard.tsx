import React from "react";

type InformationCardProp = {
  name: string;
  limit?: number | string;
  used: number | string;
  icon: React.ReactNode;
};

function InformationCard({ name, limit, used, icon }: InformationCardProp) {
  return (
    <div className="p-4 bg-[#F0F5FF] rounded-[13px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between pb-2">
        <p className="my-auto text-[24px] font-[700] text-[#2377FC]">{used}{limit && `/${limit}`}</p>
        <div className="my-auto">
            {icon}
        </div>
      </div>
      <p className="pt-6 text-[16px] font-[600] text-[#292D32]">{name}</p>
    </div>
  );
}

export default InformationCard;
