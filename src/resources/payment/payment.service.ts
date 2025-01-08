import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const getRefundRequests = () =>
  getFetch(
    {
      url: "/admin/refund-management?relations=created_by",
      method: "get",
    },
    z.array(z.object({}))
  );

export const updateRefundStatus = () =>
  getFetch(
    {
      url: "/admin/refund-management/accept-or-reject",
      method: "get",
    },
    z.object({
      success: z.boolean(),
      message: z.string().optional(),
    })
  );

export const getTransactionCount = () =>
  getFetch(
    {
      url: "/payment-manage/transaction-count",
      method: "get",
    },
    z.object({
      count: z.number(),
    })
  );

export const getFailedPaymentCount = () =>
  getFetch(
    {
      url: "/payment-manage/failed-payment-count",
      method: "get",
    },
    z.object({
      count: z.number(),
    })
  );

export const getTotalRevenue = () =>
  getFetch(
    {
      url: "/payment-manage/total-revenue",
      method: "get",
    },
    z.object({
      amount: z.number(),
    })
  );

export const getRecurringRevenue = () =>
  getFetch(
    {
      url: "/payment-manage/monthly-recurring-revenue",
      method: "get",
    },
    z.object({
      amount: z.number(),
    })
  );

export const getPaymentHistory = () =>
  getFetch(
    {
      url: "/payment-manage/payment-history",
      method: "get",
    },
    z.array(z.object({}))
  );
