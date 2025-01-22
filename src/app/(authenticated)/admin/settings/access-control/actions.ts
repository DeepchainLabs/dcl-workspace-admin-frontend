"use server";
import { createRole } from "@/resources/settings/accessControl.service";
import { extractError } from "@/utils/errors.utils";
import { createFormHandler } from "@/utils/zod.utils";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getUserRoles = async (data: {
  userId: string;
}): Promise<{ error?: string }> => {
  // console.log("data", data);

  const res = await getUserRoles({ userId: data.userId }).catch(extractError);
  if (typeof res === "string") {
    return { error: res };
  } else {
    return {};
  }
};

export const handleCreateRole = createFormHandler(
  z.object({
    name: z.string({ required_error: "Name is required" }),
  }),
  async ({ name }) => {
    const res = await createRole({ name, permissions: [] }).catch(extractError);
    if (typeof res === "string") return { error: res };
    revalidatePath("/organization/access-control");
    return {};
  }
);
