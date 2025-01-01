import { z } from "zod";

export const apiResponseMessageSchema = z.object({ message: z.string() });
