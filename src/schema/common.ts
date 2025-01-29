import { z } from "zod";

export const apiResponseMessageSchema = z.object({ message: z.string() });

export const paginationMetaSchema = z.object({
  currentPage: z.number(),
  lastPage: z.number(),
  prevPage: z.number().nullable(),
  nextPage: z.number().nullable(),
  total: z.number(),
  from: z.number(),
  to: z.number(),
});
