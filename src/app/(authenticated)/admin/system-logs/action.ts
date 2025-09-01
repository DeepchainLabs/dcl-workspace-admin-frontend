"use server";

import {
  getAllLogsCounts,
  getErrorLogs,
  getErrorLogsByDate,
  getErrorLogsSearch,
  getQueryLogs,
  getQueryLogsByDate,
  getQueryLogsSearch,
  getRequestLogs,
  getRequestLogsByDate,
  getRequestLogsSearch,
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

export const getErrorLogsSearchAction = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  try {
    const res = await getErrorLogsSearch(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};

export const getQueryLogsSearchAction = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  try {
    const res = await getQueryLogsSearch(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};

export const getRequestLogsSearchAction = async (data: {
  searchTerm: string;
  page: number;
  limit: number;
}) => {
  try {
    const res = await getRequestLogsSearch(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};

export const getRequestLogsByDateAction = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  try {
    const res = await getRequestLogsByDate(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};

export const getErrorLogsByDateAction = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  try {
    const res = await getErrorLogsByDate(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};

export const getQueryLogsByDateAction = async (data: {
  page: number;
  limit: number;
  from?: string;
  to?: string;
}) => {
  try {
    const res = await getQueryLogsByDate(data);
    return res;
  } catch (err) {
    throw extractError(err);
  }
};
