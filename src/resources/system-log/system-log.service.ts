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

export const getAllLogsCounts = async () => {
  const res = await getFetch({
    url: `/system-logs/count-logs`,
    method: "get",
    //   tags: ["reported-bugs"],
  });
  return res;
};

export const updateReportedBugs = async (
  id: string,
  data: {
    status?: string;
    priority?: string;
    verified_by?: string;
    assign_to?: string;
    type?: string;
  }
) => {
  console.log(data);
  const res = await getFetch(
    { url: `/bug-report/${id}`, method: "patch", data },
    z.array(z.object({}))
  );
  console.log(res);
  revalidateTag("reported-bugs");
  return res;
};
