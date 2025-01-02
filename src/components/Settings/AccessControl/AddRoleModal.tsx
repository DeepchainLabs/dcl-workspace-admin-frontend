import { handleCreateRole } from "@/app/(authenticated)/admin/settings/access-control/actions";
import DropDown from "@/components/Common/DropDown";
import FormError from "@/components/Common/FormError";
import { ModalCrossButton } from "@/svg/Crms/CommonModalIcons";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export default function AddRoleModal({ setShow }: any) {
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

  const [state, action] = useFormState(handleCreateRole, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Role create successful");
      setShow(false);
    }
  }, [state, setShow]);

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[340px] lg:w-[500px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="">
            <div className="flex justify-between top-40 gap-12">
              <p className="text-[#191414] text-[20px] font-[600]">
                Create New Role
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <ModalCrossButton />
              </div>
            </div>
          </div>

          <form action={action}>
            <div className="mt-6 space-y-6 ">
              <div className="w-full">
                <p className="text-[#324054] text-[16px] font-[500] mb-2">
                  Role Name
                </p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                />
                {state.formErrors?.name && (
                  <FormError error={state?.formErrors?.name} />
                )}
              </div>
              <div className="w-full">
                <p className="text-[#324054] text-[16px] font-[500] mb-2">
                  Status
                </p>
                <div className="">
                  <DropDown
                    onChange={() => {}}
                    options={[
                      { id: "active", title: "Active" },
                      { id: "inactive", title: "Inactive" },
                    ]}
                    width="100%"
                    bgColor={false}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <div
                onClick={() => setShow(false)}
                className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[500] px-4 py-2 rounded-[8px] cursor-pointer"
              >
                Cancel
              </div>
              <SubmitButton />
            </div>
          </form>
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
      className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[500] px-4 py-2 rounded-[8px] cursor-pointer"
      style={{ opacity: pending ? 0.5 : 1 }}
    >
      {pending ? "Creating..." : "Create Role"}
    </button>
  );
};
