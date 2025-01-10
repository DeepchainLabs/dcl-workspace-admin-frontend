"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AddAttachment from "@/svg/Support/AddAttachment";
import AddFileSvg from "@/svg/Support/AddFileSvg";
import MessageSendSvg from "@/svg/Support/MessageSendSvg";
import { useParams } from "next/navigation";
import { SupportChat, Ticket } from "@/interfaces/Support";
import { createChat, getChatHistory } from "@/support/customer-support.service";
import toast from "react-hot-toast";
import useSocketEvent from "@/hooks/useSocketEvent";
export default function Chating({ ticket }: { ticket: Ticket }) {
  const { user } = useParams();
  // const { workspace } = useParams();
  const [chats, setChat] = useState<SupportChat[]>([]);
  const [message, setMessage] = useState<string>("");
  const scrollableDivRef = useRef<HTMLDivElement>(null);


  const handleSendMessage = async () => {
    if (message === "") {
      toast.error("Type something first");
      return;
    }
    await createChat({ message, ticket: ticket._id, tenant: ticket.tenant });
    setMessage("");
    await getSupportChat();
  };

  const getSupportChat = async () => {
    const chats = await getChatHistory({ ticket: ticket._id });
    console.log(chats);
    setChat(chats as any);
  };

  useEffect(() => {
    getSupportChat();
    // const intervalId = setInterval(() => {
    //   getSupportChat();
    // }, 10000);
    // return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop = scrollableDivRef.current.scrollHeight;
    }
  }, [chats]);

  useSocketEvent("NEW_SUPPORT_MESSAGE", (args) => {
    console.log("New Support Message Event : ", args);
    getSupportChat();
  });

  return (
    <div>
      {" "}
      <div
        className="mt-6 space-y-4 h-[320px] overflow-y-auto pr-4"
        ref={scrollableDivRef}
      >
        {chats.length === 0 || !chats ? (
          <div className="my-auto">
            <p className="text-[#292D32] group-hover:text-[#2377FC] text-[20px] font-[500] text-center py-4 border-b border-[#E5E9EB]">
              {"No chats history found. Send a chat first."}
            </p>
          </div>
        ) : (
          chats.map((chat: SupportChat, index: number) =>
            chat.sender?.username === user ? (
              <div key={index} className="flex justify-end">
                <div className="flex gap-2">
                  <div className="w-[34px] my-auto">
                    <div className="w-[30px] h-[30px] relative">
                      <Image
                        className="rounded-full"
                        src="/images/dummy_user.png"
                        fill
                        alt="user"
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[#6F6F6F] text-[14px] font-[500]">
                      {chat.sender?.username}
                    </p>
                    <div className="mt-1 bg-[#2377FC] p-2 rounded-l-[10px] rounded-br-[10px]">
                      <p className="text-[#FFFFFF] text-[16px] font-[500]">
                        {chat.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="flex gap-2">
                <div className="w-[34px] my-auto">
                  <div className="w-[30px] h-[30px] relative">
                    <Image
                      className="rounded-full"
                      src="/images/dummy_user.png"
                      fill
                      alt="user"
                    />
                  </div>
                </div>
                <div className="">
                  <p className="text-[#6F6F6F] text-[14px] font-[500]">
                    {chat.sender?.username}
                  </p>
                  <div className="mt-1 bg-[#F0F5FF] p-2 rounded-l-[10px] rounded-br-[10px]">
                    <p className="text-[#2377FC] text-[16px] font-[500]">
                      {chat.message}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
      <div className="mt-4">
        <div className="bg-[#F8F8F8] rounded-[7px] border border-[#E5E9EB] min-h-[44px] relative flex items-center">
          <div className="absolute top-[11.5px] left-[10px]">
            <AddFileSvg />
          </div>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none pl-[40px] pr-[40px] text-[16px] font-[500] text-[#4b4b4b] placeholder-gray-500"
            placeholder="Type your message..."
          />

          <div
            onClick={handleSendMessage}
            className="absolute top-[12px] right-[12px] cursor-pointer"
          >
            <MessageSendSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
