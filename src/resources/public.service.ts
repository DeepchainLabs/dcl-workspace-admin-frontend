import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const health = () =>
  getFetch(
    {
      url: "/health",
      method: "get",
    },
    z.discriminatedUnion("success", [
      z.object({
        success: z.literal(true),
        data: z.object({ access_token: z.string() }),
      }),
      z.object({
        success: z.literal(false),
        message: z.string().optional(),
      }),
    ]),
  );
