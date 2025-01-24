'use server'

import { getFetch } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const getStatsBySubscription = async () => {
  const res = await getFetch(
    {
      url: `/dashboard/saas-admin/organization-stats-by-subscriptions`,
      method: "get"
    },
    z.array(z.object({})),
  );
  return res;
};

export const getRevenueStatsBySubscription = async () => {
    const res = await getFetch(
      {
        url: `/dashboard/saas-admin/earnings-by-subscriptions`,
        method: "get"
      },
      z.array(z.object({})),
    );
    return res;
};

export const getRenewalRate = async () => {
    const res = await getFetch(
      {
        url: `/dashboard/saas-admin/renewal-rate`,
        method: "get"
      },
      z.object({}),
    );
    return res;
};

export const getInvoices = async () => {
    const res = await getFetch(
      {
        url: `/dashboard/saas-admin/invoices`,
        method: "get"
      },
      z.array(z.object({})),
    );
    return res;
};