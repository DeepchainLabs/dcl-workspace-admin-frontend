"use server";
import { getFetch } from "@/config/axios-config";
import { z } from "zod";
import { PlanSchema } from "../../schema/PlanSchema";

enum SubscriptionPeriod {
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export const getSpacePlans = async (type?: string) => {
  const period =
    type === "monthly" ? SubscriptionPeriod.MONTHLY : SubscriptionPeriod.YEARLY;
  const res = await getFetch(
    {
      url: `/subscriptions?subscription_period=${period}&sort=price`,
      method: "get",
    },
    z.array(PlanSchema)
  );
  return res;
};

export const getPersonalPlans = async (type: string) => {
  const period =
    type === "monthly" ? SubscriptionPeriod.MONTHLY : SubscriptionPeriod.YEARLY;
  const res = await getFetch(
    {
      url: `/subscriptions/personal?subscription_period=${period}&sort=price`,
      method: "get",
    },
    z.array(PlanSchema)
  );
  return res;
};
