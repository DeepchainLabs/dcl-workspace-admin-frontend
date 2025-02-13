import { getLoggedInUser } from "@/resources/auth/auth.service";
import { redirect } from "next/navigation";
import React from "react";
import { Toaster } from "react-hot-toast";

export const dynamic = "force-dynamic";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getLoggedInUser().catch(() => null);
  if (user) return redirect(`/admin/dashboard`);
  return (
    <div>
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "font-[600] capitalize",
        }}
      />
    </div>
  );
}
