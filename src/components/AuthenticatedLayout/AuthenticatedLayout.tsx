import React from "react";
import NavMenu from "./NavMenu";
import Header from "./Header";
// import { getLoggedInUser } from "@/resources/auth/auth.service";
// import { redirect } from "next/navigation";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getLoggedInUser().catch(() => null);
  // console.log("public", { user });
  // if (!user) return redirect(`/auth/login`);
  return (
    <div className={`bg-[#FFFFFF] h-[calc(100vh)]`}>
      <div className="font-gilroy">
        <Header />
        <div className="flex">
          <NavMenu />
          <div className="w-[calc(100vw)] lg:w-[calc(100vw-240px)] h-[calc(100vh-74px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
