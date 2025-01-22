"use server";

import { z } from "zod";
import { getFetch } from "@/config/axios-config";

const notificationSchema = z.object({
  _id: z.string(),
  user: z.string(),
  message: z.string(),
  type: z.string(),
  payload: z.record(z.any()).optional(),
  tenant: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number().optional(),
});

export async function fetchNotifications(limit = 10) {
  const params = new URLSearchParams({
    limit: limit.toString(),
    sort: "-createdAt",
  }).toString();

  return getFetch(
    {
      url: `/notifications/saas-admin/notifications?${params}`,
      method: "get",
      tags: ["notifications"],
    },
    z.array(notificationSchema)
  );
}
