"use client";
import { handle2FALogin, handleLogin } from "@/app/(public)/auth/login/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import ForgetPasswordModal from "./ForgetPasswordModal";
import OtpInput from "react-otp-input";
import FormError from "../Common/FormError";
import { extractError } from "@/utils/errors.utils";

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showForgetPasswordModal, setShowForgetPasswordModal] =
    React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [state, action, isPending] = useActionState(handleLogin, {});
  const [state2FA, action2FA] = useActionState(handle2FALogin, {});
  const [getStarted, setGetStarted] = React.useState(false);
  const [required2FA, setRequired2FA] = React.useState(false);
  const [pending2FA, setPending2FA] = React.useState(false);
  const [otp, setOtp] = useState("");
  const [error2FA, setError2FA] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    const formData = new FormData(event.target as HTMLFormElement);
    const emailValue = formData.get("email");
    if (emailValue) {
      setEmail(emailValue as string);
    }
    const passwordValue = formData.get("password");
    if (passwordValue) {
      setPassword(passwordValue as string);
    }
    action(formData);
  };
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state?.data?.require_2fa) {
      setRequired2FA(true);
    }
    // if (state?.success) {
    //   toast.success("Login successful");
    // }
    if (state?.data?.token && !state?.data?.require_2fa) {
      redirect(`/${state.data.user_id}/dashboard`);
    }
    setPending(false);
  }, [state]);

  const handleSubmit2FA = () => {
    if (otp.length < 6) {
      setError2FA("Code must be 6 digits");
      return;
    }
    setError2FA("");
    setPending2FA(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("code", otp);
    action2FA(formData);
  };

  useEffect(() => {
    if (state2FA.error) toast.error(state2FA.error);
    if (state2FA?.data?.token && state2FA?.data?.user_id) {
      redirect(`/${state2FA.data.user_id}/dashboard`);
    }
    setPending2FA(false);
  }, [state2FA]);

  return (
    <div>
      {!required2FA ? (
        <div className="grid place-items-center mt-16">
          <div className="w-[330px] sm:w-[450px]">
            <p className="text-[#292D32] text-[30px] lg:text-[34px] xxl:text-[36px] font-[700] pt-20">
              Sign in to your workspace
            </p>
            <p className="text-[#292D32] text-[16px] font-[500]">
              Login with your existing accounts
            </p>
            <form action={action}>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-[#292D32] text-[16px] font-[500]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-[40px] text-[#292D32] text-[16px] font-[500] border-[1px] border-[#A1A1AA] outline-none focus:border-[#2377FC] focus:border-2 rounded-[8px] px-2 mt-2"
                  placeholder="eg. xyz@gmail.com"
                />

                {state.formErrors?.email && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.email}
                  </div>
                )}
              </div>

              <div className="mt-4 relative">
                <label
                  htmlFor="password"
                  className="text-[#292D32] text-[16px] font-[500]"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="pr-10 w-full h-[40px] text-[#292D32] text-[16px] font-[500] border-[1px] border-[#A1A1AA] outline-none focus:border-[#2377FC] focus:border-2 rounded-[8px] px-2 mt-2"
                  placeholder="Enter your password"
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

                {state.formErrors?.password && (
                  <div className="text-red-500 text-[14px] font-[500] mt-1">
                    {state.formErrors?.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`mt-6 bg-[#2377FC] rounded-[8px] w-full h-[42px] ${
                  isPending ? "opacity-50" : ""
                }`}
                disabled={isPending}
              >
                <p className="text-[#FFFFFF] font-[500] text-[16px]">
                  {isPending ? "Login..." : "Login"}
                </p>
              </button>
            </form>

            <div className="flex justify-end mt-4">
              <p
                onClick={() => setShowForgetPasswordModal(true)}
                className="text-[#2377FC] text-[16px] font-[500] cursor-pointer"
              >
                Forget Password?
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center mt-16">
          <div className="w-[330px] sm:w-[450px]">
            <p className="text-[#292D32] text-[30px] lg:text-[34px] xxl:text-[36px] font-[700] pt-20">
              Your personal job space
            </p>
            <p className="text-[#292D32] text-[16px] font-[500]">
              Enter the 6 digit code from authenticator app
            </p>
            <div className="mt-12">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="mx-2">-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  border: "1px solid #E5E9EB",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "16px",
                  color: "#000",
                  fontWeight: "600",
                  caretColor: "blue",
                }}
                shouldAutoFocus={true}
              />
            </div>
            <div className="mt-3">
              {error2FA && <FormError error={error2FA} />}
            </div>

            <button
              className={`mt-16 bg-[#2377FC] rounded-[8px] w-full h-[42px] ${
                pending2FA ? "opacity-50" : ""
              }`}
              disabled={pending2FA}
              onClick={handleSubmit2FA}
            >
              <p className="text-[#FFFFFF] font-[500] text-[16px]">
                {pending2FA ? "Verifying..." : "Verify"}
              </p>
            </button>
          </div>
        </div>
      )}

      {showForgetPasswordModal && (
        <ForgetPasswordModal setShow={setShowForgetPasswordModal} />
      )}
    </div>
  );
}
