"use server";

import { createFormHandler } from "@/utils/zod.utils";
import { z } from "zod";

export const handleIncrement = createFormHandler(
  z.object({
    counter: z.coerce.number(),
    extra: z.string(),
    somethingElse: z.string(),
  }),
  async ({ counter, extra, somethingElse }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // console.log({ extra, somethingElse });
    return { data: { counter: counter + 1 } };
  }
);
