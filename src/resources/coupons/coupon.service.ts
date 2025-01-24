"use server";
import { getFetch, getAxios } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const getAllCoupons = async () => {
  const res = await getFetch(
    {
      url: `/coupons`,
      method: "get",
      tags: ["coupons"],
    },
    z.array(z.object({}))
  );
  return res;
};

export const getCouponsSummary = async () => {
  const res = await getFetch(
    {
      url: `/coupons/stats`,
      method: "get",
    },
    z.object({
      total: z.number(),
      active: z.number(),
      used: z.number(),
      unused: z.number(),
    })
  );
  return res;
};

export const getCouponDetails = async (id: string) => {
  const res = await getFetch(
    {
      url: `/coupons/${id}`,
      method: "get",
    },
    z.object({})
  );
  return res;
};

export const createNewCoupon = async (data: {
  code: string;
  discount_type: string;
  description?: string;
  discount_amount: number;
  expire_on?: string;
  max_user_limit?: number;
  min_purchase_amount?: number;
  discount_capability: string;
}) =>
  await getFetch(
    { url: "/coupons", method: "post", data },
    z.object({
      message: z.string(),
    })
  );

export const updateCoupon = async (data: {
  id: string;
  code: string;
  discount_type: string;
  description?: string;
  discount_amount: number;
  expire_on?: string;
  max_user_limit?: number;
  min_purchase_amount?: number;
  discount_capability: string;
}) => {
  const res = await getFetch(
    { url: `/coupons/${data.id}`, method: "patch", data },
    z.object({
      message: z.string(),
    })
  );
  revalidateTag("coupons");
  return res;
};

export const updateCouponStatus = async (data: {
  id: string;
  active: boolean;
}) => {
  const res = await getFetch(
    { url: `/coupons/${data.id}`, method: "patch", data },
    z.object({
      message: z.string(),
    })
  );
  revalidateTag("coupons");
  return res;
};

export const deleteCoupon = async (id: string) => {
  const res = await getFetch(
    { url: `/coupons/${id}`, method: "delete" },
    z.object({ message: z.string() })
  );
  revalidateTag("coupons");
  return res;
};
