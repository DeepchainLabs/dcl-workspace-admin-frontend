"use server";

import { resetPassword } from "@/resources/auth/auth.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { z } from "zod";

export const handleReset = createFormHandler(
  z.object({
    user_id: z.string({ required_error: "User ID is required" }),
    code: z.string({ required_error: "Code is required" }),
    new_password: z
      .string({ required_error: "New password is required" })
      .min(6, "New password is too short"),
    confirm_password: z
      .string({ required_error: "Confirm password is required" })
      .min(6, "Confirm password is too short"),
  }),
  async ({ user_id, code, new_password, confirm_password }) => {
    const res = await resetPassword({
      userId: user_id,
      code,
      newPassword: new_password,
      confirmNewPassword: confirm_password,
    }).catch(extractError);
    if (typeof res === "string") return { error: res };
    return {};
  }
);
