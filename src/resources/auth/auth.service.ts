"use server";

import { getFetch } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const login = async (data: {
  usernameOrEmail: string;
  password: string;
}) =>
  await getFetch(
    {
      url: "/admin/auth/login",
      method: "post",
      data,
    },
    z.object({
      token: z.string(),
      user_id: z.string(),
      require_2fa: z.boolean(),
    })
  );

export const login2FA = async (data: {
  usernameOrEmail: string;
  password: string;
  code_2fa: string;
}) =>
  await getFetch(
    {
      url: "/admin/auth/login",
      method: "post",
      data,
    },
    z.object({
      token: z.string(),
      user_id: z.string(),
      require_2fa: z.boolean(),
    })
  );

export const logout = async () =>
  await getFetch(
    {
      url: "/admin/auth",
      method: "delete",
    },
    z.object({
      message: z.string(),
    })
  );

export const resetPassword = async (data: {
  userId: string;
  code: string;
  newPassword: string;
  confirmNewPassword: string;
}) =>
  await getFetch(
    { url: "/admin/auth/reset-password", method: "post", data },
    z.object({
      token: z.string(),
    })
  );

export const sendResetPasswordEmail = async (data: {
  usernameOrEmail: string;
  client_url: string;
}) =>
  await getFetch(
    { url: "/admin/auth/send-password-reset-mail", method: "post", data },
    z.object({
      token: z.string(),
    })
  );

export const getLoggedInUser = async () => {
  const res = await getFetch(
    { url: "/admin/auth/me" },
    z.object({
      id: z.string(),
      username: z.string(),
      email: z.string(),
    })
  );
  return res;
};

export const getUsersMe = async () => {
  const res = await getFetch(
    { url: "/admin/users/me", method: "get", tags: ["users_me"] },
    z.object({
      _id: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      username: z.string(),
      email: z.string(),
      require_2fa_for_login: z.boolean(),
      registered_2fa: z.boolean(),
    })
  );
  return res;
};

export const initiate2FA = async () => {
  const res = await getFetch(
    { url: "/admin/auth/initiate-2fa-registration" },
    z.object({
      secret: z.string(),
      qrCodeUrl: z.string(),
    })
  );
  return res;
};

export const regster2FA = async (data: { secret: string; code: string }) => {
  const res = await getFetch(
    { url: "/admin/auth/register-2fa", method: "post", data },
    z.object({
      message: z.string(),
    })
  );
  revalidateTag("users_me");
  return res;
};

export const toggle2FA = async () => {
  const res = await getFetch(
    { url: "/admin/auth/toggle-require-2fa-for-login", method: "patch" },
    z.object({
      message: z.string(),
    })
  );
  revalidateTag("users_me");
  return res;
};
