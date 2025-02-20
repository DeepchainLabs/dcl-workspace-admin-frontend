"use client";
import { getUserDetails } from "@/resources/auth/auth.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProfileImageProps {
  user: string;
}

export default function ProfileImage({ user }: ProfileImageProps) {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    if (user) {
        getUserDetails(user)
        .then((res) => {
          console.log(res);
          if (res.image_url.startsWith("https://")) {
            setImage(res.image_url);
            setIsFetching(false);
            return;
          }
          setImage(null);
          setIsFetching(false);
        })
        .catch((err) => {
          console.log(err);
          setIsFetching(false);
        });
    }
  }, [user]);
  if (isFetching) {
    return (
      <div className="animate-pulse">
        <div className="w-full h-full rounded-full"></div>
      </div>
    );
  }
  return (
    <Image
      src={image || "/images/avatar.png"}
      className="rounded-full"
      alt="Profile Image"
      fill
    />
  );
}
