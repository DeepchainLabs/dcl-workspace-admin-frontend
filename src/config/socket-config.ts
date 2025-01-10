"use client";
import { getSocketOptions } from "@/config/axios-config";
import { io } from "socket.io-client";

export const getSocket = async () => {
  const { tenantId, userId, token, url } = await getSocketOptions();
  const headersArr = [
    [
      "authorization",
      typeof token === "string" ? `Bearer ${token}` : undefined,
    ],
    ["x-tenant-id", tenantId],
    ["x-user-id", userId],
  ].filter(([_, v]) => !!v);

  const headers = Object.fromEntries(headersArr.filter(([_, v]) => !!v));

  return io(url, {
    transports: ["websocket"],
    extraHeaders: headers,
    auth: headers,
  });
};
