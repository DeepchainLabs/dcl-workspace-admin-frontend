"use client";
import { getSocket } from "@/config/socket-config";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function useSocket() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  useEffect(() => {
    getSocket().then(setSocket).catch(console.error);
  }, []);

  return socket;
}
