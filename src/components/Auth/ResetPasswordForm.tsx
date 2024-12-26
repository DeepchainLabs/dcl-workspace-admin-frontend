"use client";
import { handleReset } from "@/app/(public)/auth/reset-password/actions";
import { redirect } from "next/navigation";
import React, { use, useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function ResetPasswordForm({
  user_id,
  code,
}: {
  user_id: string;
  code: string;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [state, action] = useActionState(handleReset, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Password reset successfully");
      redirect("/auth/login");
    }
  }, [state]);
  return (
    <div className="w-[330px] sm:w-[400px] mt-16">
      <p className="text-[#292D32] text-[20px] font-[600]">Set New Password</p>

      <form action={action}>
        <div className="mt-8 relative">
          <label
            htmlFor="new_password"
            className="text-[#292D32] text-[16px] font-[500]"
          >
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="new_password"
            id="new_password"
            className="w-full h-[40px] text-[#292D32] text-[16px] font-[500] border-[1px] border-[#A1A1AA] outline-none focus:border-[#2377FC] focus:border-2 rounded-[8px] px-2 mt-2"
          />
          <svg
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[44px] right-[16px] cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.68661 6.31334L6.31328 9.68668C5.87995 9.25334 5.61328 8.66001 5.61328 8.00001C5.61328 6.68001 6.67995 5.61334 7.99995 5.61334C8.65995 5.61334 9.25328 5.88001 9.68661 6.31334Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.8799 3.84669C10.7132 2.96669 9.3799 2.48669 7.9999 2.48669C5.64656 2.48669 3.45323 3.87336 1.92656 6.27336C1.32656 7.21336 1.32656 8.79336 1.92656 9.73336C2.45323 10.56 3.06656 11.2734 3.73323 11.8467"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61328 13.02C6.37328 13.34 7.17995 13.5133 7.99995 13.5133C10.3533 13.5133 12.5466 12.1267 14.0733 9.72668C14.6733 8.78668 14.6733 7.20668 14.0733 6.26668C13.8533 5.92002 13.6133 5.59335 13.3666 5.28668"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3409 8.46667C10.1676 9.40667 9.40094 10.1733 8.46094 10.3467"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {!showPassword && (
              <>
                <path
                  d="M6.31398 9.68665L1.33398 14.6666"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6675 1.33331L9.6875 6.31331"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>

          {state.formErrors?.new_password && (
            <div className="text-red-500 text-[14px] font-[500] mt-1">
              {state.formErrors?.new_password}
            </div>
          )}
        </div>

        <div className="mt-6 relative">
          <label
            htmlFor="confirm_password"
            className="text-[#292D32] text-[16px] font-[500]"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            className="pr-10 w-full h-[40px] text-[#292D32] text-[16px] font-[500] border-[1px] border-[#A1A1AA] outline-none focus:border-[#2377FC] focus:border-2 rounded-[8px] px-2 mt-2"
          />
          <svg
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-[44px] right-[16px] cursor-pointer"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.68661 6.31334L6.31328 9.68668C5.87995 9.25334 5.61328 8.66001 5.61328 8.00001C5.61328 6.68001 6.67995 5.61334 7.99995 5.61334C8.65995 5.61334 9.25328 5.88001 9.68661 6.31334Z"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.8799 3.84669C10.7132 2.96669 9.3799 2.48669 7.9999 2.48669C5.64656 2.48669 3.45323 3.87336 1.92656 6.27336C1.32656 7.21336 1.32656 8.79336 1.92656 9.73336C2.45323 10.56 3.06656 11.2734 3.73323 11.8467"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.61328 13.02C6.37328 13.34 7.17995 13.5133 7.99995 13.5133C10.3533 13.5133 12.5466 12.1267 14.0733 9.72668C14.6733 8.78668 14.6733 7.20668 14.0733 6.26668C13.8533 5.92002 13.6133 5.59335 13.3666 5.28668"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3409 8.46667C10.1676 9.40667 9.40094 10.1733 8.46094 10.3467"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {!showPassword && (
              <>
                <path
                  d="M6.31398 9.68665L1.33398 14.6666"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6675 1.33331L9.6875 6.31331"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>

          {state.formErrors?.confirm_password && (
            <div className="text-red-500 text-[14px] font-[500] mt-1">
              {state.formErrors?.confirm_password}
            </div>
          )}
        </div>

        <input type="hidden" name="user_id" value={user_id} />
        <input type="hidden" name="code" value={code} />

        <SubmitButton />
      </form>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`mt-6 bg-[#2377FC] rounded-[8px] w-full h-[42px] ${
        pending ? "opacity-50" : ""
      }`}
      disabled={pending}
    >
      <p className="text-[#FFFFFF] font-[500] text-[16px]">
        {pending ? "Loading..." : "Submit"}
      </p>
    </button>
  );
};
