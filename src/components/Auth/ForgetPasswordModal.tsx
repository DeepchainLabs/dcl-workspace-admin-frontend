import { handleSendResetPasswordEmail } from "@/app/(auth)/login/actions";
import React, { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import FormError from "../Common/FormError";
import config from "@/config/app-config";

export default function ForgetPasswordModal({ setShow }: any) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  const [isEmailSend, setIsEmailSend] = React.useState(false);

  const [state, action] = useActionState(handleSendResetPasswordEmail, {});

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success("Email send successful");
      setIsEmailSend(true);
    }
    if (state.formErrors?.client_url) {
      toast.error("Client URL " + state.formErrors?.client_url);
    }
  }, [state]);

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[340px] lg:w-[500px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          {!isEmailSend ? (
            <div className="">
              <div className="flex justify-between top-40 gap-12">
                <p className="text-[#191414] text-[20px] font-[600]">
                  Forgot password?
                </p>
                <div
                  onClick={() => setShow(false)}
                  className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-2 text-[16px] text-[#52525B] font-[500]">
                Provide us your email
              </p>

              <form className="mt-3" action={action}>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full h-[48px] text-[#292D32] text-[16px] font-[500] border-[1px] border-[#A1A1AA] outline-none focus:border-[#2377FC] focus:border-2 rounded-[8px] px-2 mt-2"
                    placeholder="Your email address"
                  />
                  {state.formErrors?.email && (
                    <FormError error={state.formErrors?.email} />
                  )}
                </div>
                <input
                  type="hidden"
                  name="client_url"
                  value={config.FRONTEND_API_BASE_URL + "/auth/reset-password"}
                />
                <hr className="w-full border-[#E4E4E7] mt-6 sm:mt-8" />

                <div className="text-right mt-5">
                  <SubmitButton />
                </div>
              </form>
            </div>
          ) : (
            <div className="">
              <div className="flex justify-between top-40 gap-12">
                <p className="text-[#191414] text-[20px] font-[600]">
                  Hey, check your email!
                </p>
                <div
                  onClick={() => setShow(false)}
                  className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#667085"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-[16px] text-[#52525B] font-[500]">
                We have sent a verification link to your email.
              </p>

              <p className="mt-4 text-[16px] text-[#52525B] font-[500]">
                Please click the link in the email in order to reset your
                password and continue.
              </p>

              <p className="mt-4 text-[16px] text-[#52525B] font-[500]">
                You can close this page now.
              </p>

              <hr className="w-full border-[#E4E4E7] mt-6 sm:mt-8" />

              <div className="flex justify-between mt-5">
                <p className="text-[16px] text-[#52525B] font-[500]">
                  Did not get the email?{" "}
                  <span
                    onClick={() => setIsEmailSend(false)}
                    className="text-[#2377FC] cursor-pointer"
                  >
                    Click here
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#2377FC] py-2 px-3 rounded-[10px] shadow-lg transition text-[#FFFFFF] text-[16px] font-[500]"
    >
      {pending ? "Sending..." : "Send Email"}
    </button>
  );
};
