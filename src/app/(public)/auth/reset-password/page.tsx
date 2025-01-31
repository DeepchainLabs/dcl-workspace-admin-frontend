import AuthRightImage from "@/components/Auth/AuthRightImage";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import { PageProps } from "@/interfaces/pageProps.interface";
import React from "react";

export default async function ResetPasswordPage({ searchParams }: PageProps) {
  const user_id = await searchParams.then((sp) => sp.user_id || "");
  const code = await searchParams.then((sp) => sp.code || "");
  return (
    <div className="bg-[#FEFEFE] w-full grid col-span-1 lg:grid-cols-2 lg:gap-10">
      <div className="col-span-1 px-4 sm:px-10 py-5">
        <div className="flex gap-2">
          <svg
            width="33"
            height="37"
            viewBox="0 0 33 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 3.03109C16.4047 2.94177 16.5953 2.94177 16.75 3.03109L29.7715 10.549C29.9262 10.6384 30.0215 10.8034 30.0215 10.9821V26.018C30.0215 26.1966 29.9262 26.3616 29.7715 26.451L16.75 33.9689C16.5953 34.0582 16.4047 34.0582 16.25 33.9689L3.22853 26.451C3.07383 26.3616 2.97853 26.1966 2.97853 26.018V10.982C2.97853 10.8034 3.07383 10.6384 3.22853 10.549L16.25 3.03109L15 0.866026L16.25 3.03109Z"
              stroke="#2377FC"
              strokeWidth="5"
            />
          </svg>
          <p className="text-[#292D32] text-[24px] font-[500]">
            <span className="font-[700]">DCL</span> Workspace
          </p>
        </div>
        <div className="grid place-items-center mt-6">
          <ResetPasswordForm user_id={user_id} code={code} />
        </div>
      </div>
      <div className="col-span-1 p-2 hidden lg:block">
        <AuthRightImage />
      </div>
    </div>
  );
}
