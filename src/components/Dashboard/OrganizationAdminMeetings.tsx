import { useState } from "react";
import Calendar from "./Calendar";
import MeetingCard from "./MeetingCard";
import dayjs from "dayjs";
import { meetingData } from "@/contents/Dashboard/MeetingData";

export default function OrganizationAdminMeetings() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const filteredMeetings = meetingData.filter((meeting) =>
    dayjs(meeting.date).isSame(selectedDate, "day")
  );

  return (
    <div className="">
        <p className="text-[#292D32] text-[20px] font-[600]">Schedule</p>
        
        <div className="mt-8 min-w-[200px]">
            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>

        <div className="relative flex justify-center">
            <div className="mt-8 flex flex-col gap-4 max-h-[500px] overflow-y-auto scrollbar-hide pb-20 -mr-8">
                {filteredMeetings.length > 0 ? (
                filteredMeetings.map((meeting, index) => (
                    <div key={index}>
                        <MeetingCard meeting={meeting} />
                    </div>
                ))
                ) : (
                    <div></div>
                )}
            </div>
            {filteredMeetings.length > 0 && (
                <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white via-white to-transparent pointer-events-none z-10"></div>
            )}
        </div>
    </div>
  );
}
