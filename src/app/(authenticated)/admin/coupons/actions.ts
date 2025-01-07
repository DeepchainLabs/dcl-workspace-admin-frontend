"use server";

import { createNewCoupon } from "@/resources/coupons/coupon.service";
import {
  addNewAdmin,
  updateAdmin,
} from "@/resources/settings/employee.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const handleCreateCoupon = createFormHandler(
  z.object({
    code: z.string({ required_error: "Code is required" }),
    discount_type: z.string({ required_error: "Discount type is required" }),
    description: z
      .string({ required_error: "Descripiton is required" })
      .optional(),
    discount_amount: z.string({ required_error: "Username is required" }),
    expire_on: z.string({ required_error: "Expiration date is required" }),
    max_user_limit: z.string({ required_error: "Max user limit is required" }),
    min_purchase_amount: z.string({
      required_error: "Minimum purchase amount is required",
    }),
    discount_capability: z.string({
      required_error: "Discount capability is required",
    }),
  }),

  async ({
    code,
    discount_type,
    description,
    discount_amount,
    expire_on,
    max_user_limit,
    min_purchase_amount,
    discount_capability,
  }) => {
    const res = await createNewCoupon({
      code,
      discount_type,
      description,
      discount_amount: Number(discount_amount),
      expire_on,
      max_user_limit: Number(max_user_limit),
      min_purchase_amount: Number(min_purchase_amount),
      discount_capability,
    }).catch(extractError);
    if (typeof res === "string") {
      return { error: res, success: false };
    } else {
      revalidateTag("coupons");
      return {};
    }
  }
);
