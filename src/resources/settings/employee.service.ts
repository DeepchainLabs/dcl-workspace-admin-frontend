"use server";
import { getFetch } from "@/config/axios-config";
import { z } from "zod";

export const getEmployess = async (data: object) => {
  const res = await getFetch(
    {
      url: "/admin/users",
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

export const getEmployeeDetails = async (id: string) => {
  const res = await getFetch(
    {
      url: `/admin/users/${id}`,
      method: "get",
    },
    z.object({})
  );
  return res;
};

export const addNewAdmin = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone?: string;
  designation?: string;
  position?: string;
  // client_url: string;
}) =>
  await getFetch(
    { url: "/admin/users", method: "post", data },
    z.object({
      token: z.string(),
    })
  );

export const updateAdmin = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  phone?: string;
  designation?: string;
  position?: string;
  id: string;
  // client_url: string;
}) =>
  await getFetch(
    { url: `/admin/users/${data.id}`, method: "patch", data },
    z.object({
      token: z.string(),
    })
  );
