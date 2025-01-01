"use server";
import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const getEmployess = async (data: object) => {
  const res = await getFetch(
    {
      url: "/tenants/registered-users",
      method: "get",
      data,
      tags: ["employees"],
    },
    z.array(
      z.object({
        _id: z.string(),
        email: z.string(),
        username: z.string(),
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        phone: z.string().optional(),
        email_verified_at: z.date().nullable(),
        bank_informations: z.array(z.any()),
        created_at: z.string(),
        updated_at: z.string(),
        __v: z.number(),
        // name: z.string(),
      })
    )
  );
  return res;
};

export const getEmployee = async (id: string) => {
  const res = await getFetch(
    {
      url: `/user-profiles/${id}?relations=user`,
      method: "get",
    },
    z.object({})
  );
  return res;
};
