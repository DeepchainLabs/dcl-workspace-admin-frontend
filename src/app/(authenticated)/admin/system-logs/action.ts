"use server";

import {
  getAllLogsCounts,
  getErrorLogs,
  getQueryLogs,
  getRequestLogs,
} from "@/resources/system-log/system-log.service";
import { extractError } from "@/utils/errors.utils";

export const getRequestLogsAction = async (data: {
  page: number;
  limit: number;
}) => {
  try {
    const res = await getRequestLogs(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};
export const getQueryLogsAction = async (data: {
  page: number;
  limit: number;
}) => {
  try {
    const res = await getQueryLogs(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};
export const getErrorLogsAction = async (data: {
  page: number;
  limit: number;
}) => {
  try {
    const res = await getErrorLogs(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};
export const getAllLogsCountsAction = async () => {
  try {
    const res = await getAllLogsCounts();
    return res;
  } catch (err) {
    throw extractError(err);
  }
};
