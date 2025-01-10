import React, { useEffect, useState } from "react";
import ActionMenuSubscription from "./ActionMenuSubscription";
import EditNote from "@/svg/Support/EditNote";
import DeleteNote from "@/svg/Support/DeleteNote";
import {
  deleteNote,
  getSupportNote,
} from "@/support/customer-support.service";
import ErrorAllert from "../Common/ErrorAllert";
import { extractError } from "@/utils/errors.utils";
import toast from "react-hot-toast";
import SupportNotesSkeleton from "./SupportNotesSkeleton";
import { deleteSupportNote } from "@/app/(authenticated)/admin/customer-support/[id]/action";

function SupportNotes({
  ticket,
  setEditMode,
  noteTextRef,
  setNote,
  revalidate,
  setRevalidate,
}: {
  ticket: string;
  setEditMode: any;
  noteTextRef: any;
  setNote: any;
  revalidate: any;
  setRevalidate: any;
}) {
  const [isNoteFetching, setIsNoteFetching] = useState(true);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchSupportNotes = async () => {
      const notes = await getSupportNote({ ticket }).catch((error) => {
        //console.log(error);
        return extractError(error);
      });
      if (typeof notes === "string") toast.error(notes);
      // console.log(notes);
      setNotes(notes as any);
      setIsNoteFetching(false);
    };
    fetchSupportNotes();
  }, [ticket, revalidate]);

  const actionMenuOptions = (noteId: string, text: string) => [
    {
      label: "Edit",
      onClick: () => {
        if (noteTextRef.current) {
          noteTextRef.current.value = text;
          noteTextRef.current.focus();
        }
        setEditMode(true);
        setNote(noteId);
      },
      icon: <EditNote />,
    },
    {
      label: "Delete",
      onClick: () => {
        const res = deleteSupportNote(noteId);
        if (typeof res === "string") toast.error(res);
        else {
          toast.success("Note Deleted Successfully");
          setRevalidate((prev: any) => !prev);
        };
      },
      icon: <DeleteNote />,
      textColor: "#FF5D5D",
    },
  ];
  return (
    <div>
      <div className="mt-8 border-t border-[#E5E9EB] pt-8">
        <p className="text-[#292D32] text-[20px] font-[600]">Existing Notes</p>

        <div className="mt-4 space-y-4 h-[40vh] overflow-y-auto">
          {isNoteFetching ? (
            <SupportNotesSkeleton />
          ) : notes.length == 0 ? (
            <div className="text-center text-[#292D32] text-[15px] font-[500]">
              No note available. Please create one.
            </div>
          ) : (
            notes?.map((note: any, index: number) => {
              return (
                <div
                  key={index}
                  className="bg-[#F8FAFC] border border-[#E5E9EB] rounded-[8px] px-3 py-2"
                >
                  <div className="flex justify-end px-2">
                    <ActionMenuSubscription
                      options={actionMenuOptions(note._id, note.text)}
                      threeDotVertical={true}
                    />
                  </div>
                  <p className="text-[#6F6F6F] text-[16px] font-[500]">
                    {note.text}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default SupportNotes;
