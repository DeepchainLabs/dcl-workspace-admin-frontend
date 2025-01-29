"use server";
import { getAxios, getFetch } from "@/config/axios-config";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export const getMySupportTickets = async () => {
  const res = await getFetch(
    {
      url: "/admin-support/ticket/mytickets?relations=assignee",
      method: "get",
      tags: ["my_support_tickets"],
    },
    z.array(z.object({})),
  );
  // console.log(res);
  return res;
};

export const getSupportTickets = async () => {
  const res = await getFetch(
    {
      url: "/admin-support/ticket?relations=assignee,createdBy",
      method: "get",
    },
    z.array(z.object({})),
  );
  // console.log(res);
  return res;
};
export const getSupportTicketsOverview = async () => {
  const res = await getFetch(
    { url: "/admin-support/ticket/overview", method: "get" },
    z.array(z.object({})),
  );
  // console.log(res);
  return res;
};

export const createTicket = async (data: {
  subject: string;
  category: string;
  service: string;
  description: string;
  attachment: File[]
}) => {
  console.log(data)
  const res = await getFetch(
    { url: "/admin-support/ticket", method: "post", data, dataType: "FormData" },
    z.array(z.object({})),
  );
  console.log(res);
  return res;
};

export const getTicketById = async (data: { id: string }) => {
  const { id } = data;
  const res = await getFetch(
    {
      url: `/admin-support/ticket/${id}?relations=assignee,createdBy`,
      method: "get",
      data,
    },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const changeStatus = async (data: { id: string; status: string, tenant: string }) => {
  const { id } = data;
  const res = await getFetch(
    { url: `/admin-support/ticket/status/${id}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};
export const changeService = async (data: { id: string; service: string, tenant: string }) => {
  const { id } = data;
  const res = await getFetch(
    { url: `/admin-support/ticket/service/${id}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};
export const changePriority = async (data: {
  id: string;
  priority: string,
  tenant: string
}) => {
  const { id } = data;
  const res = await getFetch(
    { url: `/admin-support/ticket/priority/${id}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};
export const changeAssignee = async (data: { id: string; user: string, tenant: string }) => {
  // console.log("change assignee", data);
  const { id } = data;
  const res = await getFetch(
    { url: `/admin-support/ticket/assignee/${id}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const createSupportNote = async (data: {
  text: string;
  ticket: string;
}) => {
  const res = await getFetch(
    { url: `/admin-support/note`, method: "post", data },
    z.array(z.object({})),
  );
  return res;
};

export const getSupportNote = async (data: { ticket: string }) => {
  const { ticket } = data;
  const res = await getFetch(
    { url: `/admin-support/note/${ticket}`, method: "get", tags: ["support_notes"] },
    z.array(z.object({})),
  );
  console.log(res);
  return res;
};

export const deleteNote = async (data: { noteId: string }) => {
  const { noteId } = data;
  const res = await getFetch(
    { url: `/admin-support/note/${noteId}`, method: "delete", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const updateNote = async (data: { noteId: string; text: string }) => {
  const { noteId } = data;
  const res = await getFetch(
    { url: `/admin-support/note/${noteId}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const getMySupportCalls = async () => {
  const res = await getFetch(
    { url: "/admin-support/call", method: "get", tags: ["my_support_calls"] },
    z.array(z.object({})),
  );
  // console.log(res);
  return res;
};

export const createCall = async (data: {
  title: string;
  time: string;
  reason: string;
  date: string;
}) => {
  const res = await getFetch(
    { url: "/admin-support/call", method: "post", data },
    z.array(z.object({})),
  );
  //console.log(res);
  revalidateTag("available_slots");
  return res;
};

export const updateCall = async (data: {
  id: string;
  title: string;
  time: string;
  reason: string;
  date: string;
}) => {
  const res = await getFetch(
    { url: `/admin-support/call/${data.id}`, method: "patch", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const deleteCall = async (data: { callId: string }) => {
  const { callId } = data;
  const res = await getFetch(
    { url: `/admin-support/call/${callId}`, method: "delete", data },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const getAvailableSlots = async (data: {
  date: string;
  day: string;
}) => {
  const res = await getFetch(
    {
      url: `/admin-support/call/availabletimes?date=${data.date}&day=${data.day}`,
      method: "get",
      tags: ["available_slots"],
    },
    z.array(z.object({})),
  );
  // console.log(res);
  return res;
};

export const getChatHistory = async (data: { ticket: string }) => {
  console.log(data);
  const res = await getFetch(
    {
      url: `/admin-support/chat?ticket=${data.ticket}&relations=sender`,
      method: "get",
      tags: ["get_support_chat"],
    },
    z.array(z.object({})),
  );
  //console.log(res);
  return res;
};

export const createChat = async (data: { message: string; ticket: string, tenant: string }) => {
  const res = await getFetch(
    { url: "/admin-support/chat", method: "post", data },
    z.array(z.object({})),
  );
  // console.log(res);
  revalidateTag("get_support_chat");
  return res;
};

export const revalidateSupportChats = async () => {
  revalidateTag("get_support_chat");
  console.log("============================================================Revalidate Support Chats");
};

