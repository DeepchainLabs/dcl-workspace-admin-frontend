"use server";
import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const getAllCoupons = async () => {
  const res = await getFetch(
    {
      url: `/coupons`,
      method: "get",
    },
    z.array(z.object({}))
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
  description: string;
  discount_amount: string;
  expire_on?: string;
  max_user_limit?: string;
  min_purchase_amount?: string;
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
  description: string;
  discount_amount: string;
  expire_on?: string;
  max_user_limit?: string;
  min_purchase_amount?: string;
  discount_capability: string;
}) =>
  await getFetch(
    { url: `/coupons/${data.id}`, method: "patch", data },
    z.object({
      message: z.string(),
    })
  );

export const updateCouponStatus = async (data: {
  id: string;
  status: string;
}) =>
  await getFetch(
    { url: `/coupons/${data.id}`, method: "patch", data },
    z.object({
      message: z.string(),
    })
  );
