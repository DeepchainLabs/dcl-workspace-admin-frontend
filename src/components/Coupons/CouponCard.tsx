import CouponSvg from "@/svg/Admin/CouponSvg";
import React from "react";

type CouponCardProp = {
  name: string;
  count: number;
};

function CouponCard({ name, count }: CouponCardProp) {
  return (
    <div className="p-4 bg-[#F0F5FF] rounded-[13px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] w-[256px]">
      <div className="flex justify-between pb-2">
        <p className="my-auto text-[24px] font-[700] text-[#2377FC]">{count}</p>
        <div className="my-auto">
          <CouponSvg />
        </div>
      </div>
      <p className="pt-6 text-[16px] font-[600] text-[#292D32]">{name}</p>
    </div>
  );
}

export default CouponCard;