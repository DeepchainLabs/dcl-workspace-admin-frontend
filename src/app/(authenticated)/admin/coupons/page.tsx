import ErrorAllert from "@/components/Common/ErrorAllert";
import SortAndAddCoupons from "@/components/Coupons/AddCouponButton";
import CouponCard from "@/components/Coupons/CouponCard";
import CouponTable from "@/components/Coupons/CouponTable";
import {
  getAllCoupons,
  getCouponsSummary,
} from "@/resources/coupons/coupon.service";
import { extractError } from "@/utils/errors.utils";
import React from "react";

async function Coupons() {
  const coupons = await getAllCoupons().catch((error) => {
    return extractError(error);
  });
  if (typeof coupons === "string") return <ErrorAllert message={coupons} />;

  const summary = await getCouponsSummary().catch((error) => {
    return extractError(error);
  });
  if (typeof summary === "string") return <ErrorAllert message={summary} />;

  return (
    <div className="">
      <div className="border-b border-[#E5E9EB] h-[70px] px-4 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Coupons Overview</p>
        </div>
      </div>
      <div className="py-6 h-[calc(100vh-155px)] overflow-y-auto custom-layout">
        <div className="flex justify-start flex-wrap gap-4">
          <CouponCard name={"Total Coupon Created"} count={summary?.total} />
          <CouponCard name={"Active Coupons"} count={summary?.active} />
          <CouponCard name={"Used Coupons"} count={summary?.used} />
          <CouponCard name={"Unused Coupons"} count={summary?.unused} />
        </div>
        <div className="mt-8 flex justify-between">
          <p className="text-[20px] font-[600] my-auto">List of Coupons</p>
          <SortAndAddCoupons />
        </div>
        <CouponTable coupons={coupons} />
      </div>
    </div>
  );
}

export default Coupons;
