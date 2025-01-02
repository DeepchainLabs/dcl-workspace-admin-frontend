"use server";

import {
  addNewAdmin,
  updateAdmin,
} from "@/resources/settings/employee.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const handleCreateAdmin = createFormHandler(
  z.object({
    first_name: z
      .string({ required_error: "First name is required" })
      .min(3, "First name is too short"),
    last_name: z
      .string({ required_error: "Last name is required" })
      .min(3, "Last name is too short"),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    username: z.string({ required_error: "Username is required" }),
    phone: z.string({ required_error: "Phone is required" }).optional(),
    designation: z
      .string({ required_error: "Designation is required" })
      .optional(),
    position: z
      .string({ required_error: "Position Password is required" })
      .optional(),
    // client_url: z.string(),
  }),

  async ({
    first_name,
    last_name,
    email,
    username,
    phone,
    designation,
    position,
    // client_url,
  }) => {
    const res = await addNewAdmin({
      first_name,
      last_name,
      email,
      username,
      phone,
      designation,
      position,
      // client_url,
    }).catch(extractError);
    if (typeof res === "string") {
      // if (res === "User already exists with the email") {
      return { error: res, success: false };
    } else {
      revalidateTag("users");
      return {};
    }
  }
);

export const handleUpdateAdmin = createFormHandler(
  z.object({
    first_name: z
      .string({ required_error: "First name is required" })
      .min(3, "First name is too short"),
    last_name: z
      .string({ required_error: "Last name is required" })
      .min(3, "Last name is too short"),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email" }),
    username: z.string({ required_error: "Username is required" }),
    phone: z.string({ required_error: "Phone is required" }).optional(),
    designation: z
      .string({ required_error: "Designation is required" })
      .optional(),
    position: z
      .string({ required_error: "Position Password is required" })
      .optional(),
    id: z.string(),
    // client_url: z.string(),
  }),

  async ({
    first_name,
    last_name,
    email,
    username,
    phone,
    designation,
    position,
    id,
    // client_url,
  }) => {
    const res = await updateAdmin({
      first_name,
      last_name,
      email,
      username,
      phone,
      designation,
      position,
      id,
      // client_url,
    }).catch(extractError);
    if (typeof res === "string") {
      // if (res === "User already exists with the email") {
      return { error: res, success: false };
    } else {
      revalidateTag("users");
      return {};
    }
  }
);
