"use server";
import { getFetch } from "@/config/axios-config";
import { apiResponseMessageSchema } from "@/schema/common";
import { z } from "zod";

export const getRoles = async (data: object) => {
  const res = await getFetch(
    { url: "/roles", method: "get", data },
    z.array(
      z.object({
        _id: z.string(),
        name: z.string(),
        permissions: z.array(z.string()),
      })
    )
  );
  return res;
};

export const getUserRoles = async (data: { userId: string }) => {
  const res = await getFetch(
    {
      url: `/roles/user-role-mappings?select=roles&relations=roles&user=${data.userId}`,
      method: "get",
    },
    z.array(
      z.object({
        _id: z.string(),
        roles: z.array(
          z.object({
            _id: z.string(),
          })
        ),
      })
    )
  );
  return res;
};

export const getUserPermissions = async (data: { userId: string }) => {
  const res = await getFetch(
    {
      url: `/roles/user-role-mappings?select=permissions&relations=permissions&user=${data.userId}`,
      method: "get",
    },
    z.array(
      z.object({
        permissions: z.array(z.string()),
      })
    )
  );
  return res;
};

export const assignRoleToUser = async (data: {
  userId: string;
  roleIdsToAdd: string[];
  roleIdsToRemove: string[];
}) => {
  const res = await getFetch(
    {
      url: `/roles/roles-for-user`,
      method: "patch",
      data,
    },
    apiResponseMessageSchema
  );
  return res;
};

export const assignPermissionToUser = async (data: {
  userId: string;
  permissionsToAdd: string[];
  permissionsToRemove: string[];
}) => {
  const res = await getFetch(
    {
      url: `/roles/permissions-for-user`,
      method: "patch",
      data,
    },
    apiResponseMessageSchema
  );
  return res;
};

export const assignPermissionToRole = async (data: {
  roleName: string;
  permissionsToAdd: string[];
  permissionsToRemove: string[];
}) => {
  const res = await getFetch(
    {
      url: `/roles/permissions-for-role`,
      method: "patch",
      data,
    },
    apiResponseMessageSchema
  );
  return res;
};

export const createRole = (data: { name: string; permissions: [] }) =>
  getFetch(
    {
      url: "/roles",
      method: "post",
      data,
    },
    apiResponseMessageSchema
  );

export const getPermissions = async (data: object) => {
  const res = await getFetch(
    { url: "/roles/permissions", method: "get", data },
    z.object({})
  );
  return res;
};

export const getModulePermissions = async (data: { name: string }) => {
  const res = await getFetch(
    { url: `/roles/permissions?module=${data.name}`, method: "get", data },
    z.array(z.string())
  );
  return res;
};
