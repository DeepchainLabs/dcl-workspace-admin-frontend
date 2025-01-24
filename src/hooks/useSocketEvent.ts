"use client";
import useSocket from "@/hooks/useSocket";
import { useEffect } from "react";

export type HandleEventFunc =
  | ((...args: any[]) => void)
  | ((...args: any[]) => Promise<void>);

export default function useSocketEvent(
  event: string,
  handleEvent: HandleEventFunc
) {
  const socket = useSocket();
  useEffect(() => {
    if (socket) {
      socket.on(event, handleEvent);

      return () => {
        socket.off(event, handleEvent);
      };
    }
  }, [socket, event, handleEvent]);
}
