import { getFetch } from "@/config/axios-config";
import { z } from "zod";
import { paginationMetaSchema } from "@/schema/common";

export const getRefundRequests = () =>
  getFetch(
    {
      url: "/admin/refund-management?relations=created_by",
      method: "get",
    },
    z.array(z.object({}))
  );

export async function updateRefundStatus(
  refundId: string,
  acceptOrReject: "ACCEPTED" | "REJECTED",
  cancelRunningSubscription: boolean
) {
  const schema = z.object({
    success: z.boolean(),
    message: z.string().optional(),
  });

  return await getFetch(
    {
      url: `/admin/refund-management/accept-or-reject/${refundId}`,
      method: "patch",
      data: {
        acceptOrReject,
        cancelRunningSubscription,
      },
    },
    schema
  );
}

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

export async function getInvoiceByChargeId(chargeId: string) {
  const invoiceSchema = z.array(z.any());

  const allInvoices = await getFetch(
    {
      url: "/dashboard/saas-admin/invoices",
      method: "get",
    },
    invoiceSchema
  );

  return allInvoices.find((inv: any) => inv.charge === chargeId) || null;
}
