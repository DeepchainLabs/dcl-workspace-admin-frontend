"use server";
import config from "@/config/app-config";
import { iAxios } from "@/interfaces/axios.interface";
import { extractError } from "@/utils/errors.utils";
import axios from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

export const axiosInstance = axios.create({
  baseURL: config.BACKEND_API_BASE_URL, //process.env.BACKEND_API_BASE_URL,
  // baseURL: "http://localhost:5001/api",
});

export const getAxios = async <T extends z.ZodTypeAny>(
  info: iAxios<any | FormData, any>,
  responseSchema: T | null = null
): Promise<z.infer<T>> => {
  const cookie = await cookies();
  const token = cookie.get(config.AUTH_COOKIE_KEY)?.value;
  const userId = cookie.get(config.AUTH_USER_KEY)?.value;
  const tenantId = cookie.get(config.AUTH_TENANT_KEY)?.value;
  // console.log("token", token);
  // console.log("x-user-id", userId);
  // console.log("x-tenant-id", tenantId);
  return new Promise((resolve, reject) => {
    const {
      url,
      params = {},
      data = {},
      method = "get",
      headers: h = {},
    } = info;

    let dataType = "application/json";

    if (data instanceof FormData) {
      dataType = "FormData";
    }
    const headers = {
      "Content-Type":
        dataType === "FormData"
          ? "multipart/form-data"
          : "application/json;charset=UTF-8",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      // "x-tenant-id": "674a0f98b377bc8673c59894",
      ...(userId ? { "x-user-id": userId } : { "x-user-id": "" }),
      ...(tenantId ? { "x-tenant-id": tenantId } : { "x-tenant-id": "" }),
      ...h,
    };

    axiosInstance
      .request({ method, url, data, headers, params })
      .then((response) => {
        resolve(
          // !!responseSchema ? responseSchema.parse(response.data) : response.data
          !!responseSchema ? response.data : response.data
        );
      })
      .catch((error) => {
        reject(extractError(error));
      });
  });
};

export const getFetch = async <T extends z.ZodTypeAny>(
  info: iAxios<any | FormData, any>,
  responseSchema: T | null = null
): Promise<z.infer<T>> => {
  const cookie = await cookies();
  const token = cookie.get(config.AUTH_COOKIE_KEY)?.value;
  const userId = cookie.get(config.AUTH_USER_KEY)?.value;
  const tenantId = cookie.get(config.AUTH_TENANT_KEY)?.value;
  return new Promise(async (resolve, reject) => {
    const {
      url,
      params = {},
      data = {},
      method = "get",
      headers: h = {},
      tags,
      revalidate,
    } = info;

    let { dataType = "application/json" } = info;

    if (data instanceof FormData) dataType = "FormData";

    const headers = {
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      ...(userId ? { "x-user-id": userId } : { "x-user-id": "" }),
      ...(tenantId ? { "x-tenant-id": tenantId } : { "x-tenant-id": "" }),
      ...(dataType === "application/json"
        ? {
            "Content-Type": "application/json;charset=UTF-8",
          }
        : {}),
      ...h,
    };

    // const u = new URL("/api" + url, "http://localhost:5001");
    const u = new URL("/api" + url, config.BACKEND_API_BASE_URL);
    const s = new URLSearchParams(params).toString();

    const fullUrl = s?.length ? u + "?" + s : u;

    const body =
      method !== "get" && method !== "head"
        ? dataType === "FormData"
          ? data instanceof FormData
            ? data
            : getFormData(data)
          : JSON.stringify(data)
        : undefined;

    // console.log("============================", { body, data });

    const res = await fetch(fullUrl, {
      method: method.toUpperCase(),
      headers,
      next: { tags, revalidate },
      body,
    });

    if (res.ok) {
      const resData = await res.json();
      if (responseSchema) {
        const { error } = responseSchema.safeParse(resData);
        if (error)
          console.error(
            `Response Validation Failed at ${method} ${u}: `,
            error
          );
        resolve(resData);
      } else resolve(resData);
    } else {
      reject(await res.json().catch(() => res.text().catch(() => res)));
    }
  });
};

const getFormData = (object: any) =>
  Object.keys(object).reduce((formData, key) => {
    if (typeof object[key] !== "undefined")
      formData.append(
        key,
        typeof object[key] !== "object" || object[key] instanceof File
          ? object[key]
          : JSON.stringify(object[key])
      );
    return formData;
  }, new FormData());

  export const getSocketOptions = async () => {
    const cookie = cookies();
    const token = (await cookie).get(config.AUTH_COOKIE_KEY)?.value;
    const userId = (await cookie).get(config.AUTH_USER_KEY)?.value;
    const tenantId = (await cookie).get(config.AUTH_TENANT_KEY)?.value;
    // const url = config.BACKEND_API_BASE_URL.split("/api").join("");
    const url = config.BACKEND_API_BASE_URL;
  
    return { url, token, userId, tenantId };
  };
  