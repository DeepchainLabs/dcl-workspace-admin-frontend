"use server";

import config from "@/config/app-config";
import { logout } from "@/resources/auth/auth.service";
import { createFormHandler } from "@/utils/zod.utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const handleLogOut = createFormHandler(z.object({}), async () => {
  const cookie = await cookies();
  cookie.delete(config.AUTH_COOKIE_KEY);
  cookie.delete(config.AUTH_USER_KEY);
  logout();
  redirect("/auth/login");
});
