"use server";

import { getFetch } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const createBugReport = async (data: {
  title: string;
  description: string;
  module?: string;
  stepsToReproduce?: string;
  expectedResult?: string;
  actualResult?: string;
  operatingSystem?: string;
  browser?: string;
  screenSize?: string;
  pageLink?: string;
  attachments?: File[];
  reporterEmail?: string;
  reporterName?: string;
}) => {
  const res = await getFetch(
    { url: `/bug-report`, method: "post", data, dataType: "FormData" },
    z.array(z.object({}))
  );
  revalidateTag("reported-bugs");
  return res;
};

export const getRequestLogs = async (data: { page: number; limit: number }) => {
  const res = await getFetch(
    {
      url: `/system-logs/requests?page=${data.page}&limit=${data.limit}&sort=-created_at`,
      method: "get",
      //   tags: ["reported-bugs"],
    },
    z.array(z.object({}))
  );
  return res;
};

export const getQueryLogs = async (data: { page: number; limit: number }) => {
  const res = await getFetch(
    {
      url: `/system-logs/queries?page=${data.page}&limit=${data.limit}&sort=-created_at`,
      method: "get",
      //   tags: ["reported-bugs"],
    },
    z.array(z.object({}))
  );
  return res;
};

export const getErrorLogs = async (data: { page: number; limit: number }) => {
  const res = await getFetch(
    {
      url: `/system-logs/errors?page=${data.page}&limit=${data.limit}&sort=-created_at`,
      method: "get",
      //   tags: ["reported-bugs"],
    },
    z.array(z.object({}))
  );
  return res;
};

export const getAllLogsCounts = async () => {
  const res = await getFetch({
    url: `/system-logs/count-logs`,
    method: "get",
    //   tags: ["reported-bugs"],
  });
  return res;
};

export const getRequestLogsSearch = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const res = await getFetch({
    url: `/system-logs/search-requests?searchTerm=${data.searchTerm}&page=${data.page}&limit=${data.limit}`,
    method: "get",
    //   tags: ["reported-bugs"],
  });
  return res;
};

export const getQueryLogsSearch = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const res = await getFetch({
    url: `/system-logs/search-queries?searchTerm=${data.searchTerm}&page=${data.page}&limit=${data.limit}`,
    method: "get",
    //   tags: ["reported-bugs"],
  });
  return res;
};

export const getErrorLogsSearch = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  const res = await getFetch({
    url: `/system-logs/search-errors?searchTerm=${data.searchTerm}&page=${data.page}&limit=${data.limit}`,
    method: "get",
    //   tags: ["reported-bugs"],
  });
  return res;
};

export const getRequestLogsByDate = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  let url = `/system-logs/requests-by-date?page=${data.page}&limit=${data.limit}`;

  if (data.from) url += `&from=${encodeURIComponent(data.from)}`;
  if (data.to) url += `&to=${encodeURIComponent(data.to)}`;

  const res = await getFetch({
    url,
    method: "get",
  });

  return res;
};

export const getErrorLogsByDate = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  let url = `/system-logs/errors-by-date?page=${data.page}&limit=${data.limit}`;

  if (data.from) url += `&from=${encodeURIComponent(data.from)}`;
  if (data.to) url += `&to=${encodeURIComponent(data.to)}`;

  const res = await getFetch({
    url,
    method: "get",
  });

  return res;
};

export const getQueryLogsByDate = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  let url = `/system-logs/queries-by-date?page=${data.page}&limit=${data.limit}`;

  if (data.from) url += `&from=${encodeURIComponent(data.from)}`;
  if (data.to) url += `&to=${encodeURIComponent(data.to)}`;

  const res = await getFetch({
    url,
    method: "get",
  });

  return res;
};
