import SortAndAddCoupons from "@/components/Coupons/AddCouponButton";
import CouponCard from "@/components/Coupons/CouponCard";
import CouponTable from "@/components/Coupons/CouponTable";
import { couponData } from "@/contents/Admin/Coupons/Data";
import React from "react";

async function Coupons() {
  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Coupons Overview</p>
        </div>
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="flex justify-start flex-wrap gap-4">
          {couponData.map((coupon, index) => {
            return (
              <CouponCard key={index} name={coupon.name} count={coupon.count} />
            );
          })}
        </div>
        <div className="mt-8 flex justify-between">
          <p className="text-[20px] font-[600] my-auto">List of Coupons</p>
          <SortAndAddCoupons />
        </div>
        <CouponTable />
      </div>
    </div>
  );
}

export default Coupons;
