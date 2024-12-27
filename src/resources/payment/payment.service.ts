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
