import { myCapabilities } from "@/resources/auth/auth.service";
import React from "react";
import Header from "./Header";
import NavMenu from "./NavMenu";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // let permissions: any;
  let capabilities: any;
  // const user = await getLoggedInUser().catch(() => null);
  // console.log("public", { user });
  // if (!user) return redirect(`/auth/login`);

  const permissions = await myCapabilities();
  // permissions = [
  //   "VIEW_ACCESS_CONTROL",
  //   "MANAGE_ACCESS_CONTROL",
  //   "VIEW_EMPLOYEES",
  //   "MANAGE_EMPLOYEES",
  //   "VIEW_COUPONS",
  //   "MANAGE_COUPONS",
  //   "VIEW_WORKSPACES",
  // ];
  if (permissions) {
    capabilities = Object.values(permissions).flat();
  }

  return (
    <div className={`bg-[#FFFFFF] h-[calc(100vh)]`}>
      <div className="font-gilroy">
        <Header />
        <div className="flex">
          <NavMenu permissions={capabilities} />
          <div className="w-[calc(100vw)] lg:w-[calc(100vw-240px)] h-[calc(100vh-74px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
