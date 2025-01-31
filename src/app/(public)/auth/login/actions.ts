"use server";

import config from "@/config/app-config";
import {
  login,
  login2FA,
  sendResetPasswordEmail,
} from "@/resources/auth/auth.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const handleLogin = createFormHandler(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password is too short"),
  }),
  async ({ email, password }) => {
    const res = await login({ usernameOrEmail: email, password }).catch(
      extractError,
    );
    if (typeof res === "string") return { error: res };
    if (res.token && !res?.require_2fa) {
      const cookie = await cookies();
      cookie.set(config.AUTH_COOKIE_KEY, res.token, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        sameSite: "strict",
      });
      cookie.set(config.AUTH_USER_KEY, res.user_id, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        sameSite: "strict",
      });
      redirect(`/admin/dashboard`);
    }

    return { data: res };
  },
);

export const handle2FALogin = createFormHandler(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password is too short"),
    code: z.string({ required_error: "Code is required" }),
  }),
  async ({ email, password, code }) => {
    const res = await login2FA({
      usernameOrEmail: email,
      password,
      code_2fa: code,
    }).catch(extractError);
    if (typeof res === "string") return { error: res };
    const cookie = await cookies();
    cookie.set(config.AUTH_COOKIE_KEY, res.token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite: "strict",
    });
    cookie.set(config.AUTH_USER_KEY, res.user_id, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: false,
      sameSite: "strict",
    });

    return { data: res };
  },
);

export const handleSendResetPasswordEmail = createFormHandler(
  z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    client_url: z.string(),
  }),
  async ({ email, client_url }) => {
    const res = await sendResetPasswordEmail({
      usernameOrEmail: email,
      client_url,
    }).catch(extractError);
    if (typeof res === "string") {
      return { error: res };
    } else {
      return {};
    }
  },
);
