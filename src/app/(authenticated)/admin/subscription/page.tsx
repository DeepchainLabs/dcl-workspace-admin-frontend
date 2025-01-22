import React from "react";
import Tab from "@/components/Subscription/Tab";
import { PageProps } from "@/interfaces/pageProps.interface";
import { getSpacePlans } from "@/resources/subscription/subscription.service";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import SubscriptionCard from "@/components/Subscription/SubscriptionCard";

export default async function SubscriptionPlans({ searchParams }: PageProps) {
  // const activeTab = searchParams.type || "monthly";

  const plans = await getSpacePlans("monthly").catch((error) => {
    return extractError(error);
  });
  if (typeof plans === "string")
    return (
      <div className="m-4">
        <ErrorAllert message={plans} />
      </div>
    );

  // console.log("plans", plans);

  return (
    <div>
      <div className="border-b border-[#E5E9EB] min-h-[76px]">
        <div className="custom-layout py-4 pb-0">
          <div className="flex justify-between items-center mb-0">
            <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#292D32]">
              Subscription
            </h1>
          </div>
        </div>
      </div>
      <div className="custom-layout h-[calc(100vh-155px)] overflow-y-auto space-y-8 bg-white">
        <Tab />

        <div className="flex gap-6 flex-wrap">
          {plans &&
            plans.length > 0 &&
            plans.map((plan, index) => (
              <SubscriptionCard data={plan} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
