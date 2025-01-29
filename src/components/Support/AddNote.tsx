"use client";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import SupportNotes from "./SupportNotes";
import { handleCreateNote } from "@/app/(authenticated)/admin/customer-support/[id]/action";

export default function AddTicketNote({ show, setShow, ticket }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, action] = useFormState(handleCreateNote, {});

  const resetNoteInput = () => {
    if (noteTextRef.current) noteTextRef.current.value = "";
    setIsUpdateMode(false);
  };

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("Note Saved Successfuly");
      resetNoteInput();
      setRevalidate((prev) => !prev);
      //setShow(false);
    }
  }, [state, setShow]);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
    }
  }, [show]);

  const closeMenu = React.useCallback(() => {
    setIsOpen(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, [setShow]);

  const modalRef = React.useRef<HTMLDivElement>(null);
  const noteTextRef = React.useRef<HTMLTextAreaElement>(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [note, setNote] = useState("");
  const [revalidate, setRevalidate] = useState(false);

  //check if clicked on outside of modalRef
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeMenu]);

  const handleCloseOrCancel = () => {
      if (isUpdateMode) {
          resetNoteInput();
      } else {
          closeMenu();
      }
  }

  return (
    <div
      className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 overflow-y-hidden transition-transform duration-500 ease-in-out overflow-x-hidden"
      style={{ zIndex: "2" }}
    >
      <div
        className={`absolute top-0 bottom-0 w-screen h-screen transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: "2", right: 0 }}
      >
        <div className="absolute top-0 right-0">
          <div
            ref={modalRef}
            className="w-[350px] md:w-[500px] h-screen bg-[#FFFFFF] px-6 py-4 overflow-y-auto scrollbar-none relative"
            style={{ zIndex: "1" }}
          >
            <div className="flex justify-between">
              <p className="text-[#292D32] text-[20px] font-[600]">
                Add a Note
              </p>
              <svg
                onClick={closeMenu}
                className="my-auto cursor-pointer"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9102 15.9099L26.5168 26.5165"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.91 26.5165L26.5166 15.9099"
                  stroke="#52525B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <form action={action}>
              <input
                type="hidden"
                name="isUpdate"
                value={isUpdateMode.toString()}
              />
              <input type="hidden" name="noteId" value={note} />
              <input type="hidden" name="ticket" value={ticket} />
              <div className="">
                <div className="w-full">
                  <p className="text-[#324054] text-[16px] font-[500] mb-2">
                    Note
                  </p>
                  {isUpdateMode && (
                    <div className="text-yellow-500 text-[14px] font-[500] mt-1 mb-1">
                      You&apos;re currently editing an exisiting note
                    </div>
                  )}
                  <textarea
                    name="text"
                    ref={noteTextRef}
                    rows={6}
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-2 text-[#292D32] text-[16px] font-[600] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                  ></textarea>
                  {state.formErrors?.text && (
                    <div className="text-red-500 text-[14px] font-[500] mt-1">
                      {state.formErrors?.text}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <div
                  onClick={handleCloseOrCancel}
                  className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer"
                >
                  {isUpdateMode ? "Cancel" : "Close"}
                </div>
                <CreateSupportNoteSubmitButton isUpdate={isUpdateMode} />
              </div>
            </form>

            <SupportNotes
              ticket={ticket}
              setEditMode={setIsUpdateMode}
              noteTextRef={noteTextRef}
              setNote={setNote}
              revalidate={revalidate}
              setRevalidate={setRevalidate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const CreateSupportNoteSubmitButton = ({ isUpdate }: { isUpdate: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[600] px-4 py-1.5 rounded-[8px] cursor-pointer"
    >
      {pending
        ? isUpdate
          ? "Updating..."
          : "Saving..."
        : isUpdate
        ? "Update"
        : "Save"}
    </button>
  );
};
