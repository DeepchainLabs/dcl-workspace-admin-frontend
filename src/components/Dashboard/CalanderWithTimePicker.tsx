import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

interface TimeState {
  hours: string;
  minutes: string;
  period: "AM" | "PM";
}

const CalendarWithTimePicker: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [time, setTime] = useState<TimeState>({
    hours: "",
    minutes: "",
    period: "AM",
  });

  useEffect(() => {
    const now = dayjs();
    setCurrentMonth(now.startOf("month"));
    setSelectedDate(now);
    setTime({
      hours: now.format("hh"),
      minutes: now.format("mm"),
      period: now.format("A") as "AM" | "PM",
    });
  }, []);

  const getDatesForMonth = (year: number, month: number): (Dayjs | null)[] => {
    const daysInMonth = dayjs(`${year}-${month + 1}-01`).daysInMonth();
    const firstDayOfMonth = dayjs(`${year}-${month + 1}-01`).day();
    const dates: (Dayjs | null)[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(dayjs(`${year}-${month + 1}-${i}`));
    }

    return dates;
  };

  const handleDateClick = (date: Dayjs | null): void => {
    if (date) setSelectedDate(date);
  };

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "hours" | "minutes"
  ): void => {
    setTime((prev) => ({
      ...prev,
      [type]: e.target.value.padStart(2, "0"),
    }));
  };

  const togglePeriod = (newPeriod: "AM" | "PM"): void => {
    setTime((prev) => ({
      ...prev,
      period: newPeriod,
    }));
  };

  const dates = getDatesForMonth(currentMonth.year(), currentMonth.month());

  return (
    <div className="w-[320px] bg-[#F8FAFC] border border-[#EBEBEB] rounded-[8px] p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
            <div className="text-[14px] font-[600] text-[#2377FC]">
                {currentMonth.format("MMM YYYY")}
            </div>
            <button
                onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
                className="text-[22px] font-[500] text-[#2377FC]"
            >
                &gt;
            </button>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            className="text-[22px] font-[500] text-[#2377FC]"
          >
            &lt;
          </button>
          <button
            onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            className="text-[22px] font-[500] text-[#2377FC]"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-[14px] font-[600] text-[#2377FC] mb-2">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center text-[15px] font-[400]">
        {dates.map((date, idx) => (
          <div
            key={idx}
            onClick={() => handleDateClick(date)}
            className={`flex items-center justify-center w-9 h-9 cursor-pointer transition-all ${
              date
                ? date.isSame(selectedDate, "day")
                  ? "bg-blue-500 text-white rounded-full"
                  : "text-gray-700 hover:bg-blue-100 rounded-full"
                : "text-gray-300"
            }`}
          >
            {date ? date.date() : ""}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-[15px] font-[600] text-[#2377FC]">Time</div>
        <div className="flex items-center gap-1">
          <input
            type="number"
            value={time.hours}
            onChange={(e) => handleTimeChange(e, "hours")}
            min={1}
            max={12}
            className="w-12 text-center border-none rounded-md p-1"
          />
          <span className="text-[#292D32]">:</span>
          <input
            type="number"
            value={time.minutes}
            onChange={(e) => handleTimeChange(e, "minutes")}
            min={0}
            max={59}
            className="w-12 text-center border-none rounded-md p-1"
          />
          <div className="flex gap-1">
            <button
              onClick={() => togglePeriod("AM")}
              className={`px-3 py-1 font-[500] rounded-[5px] ${
                time.period === "AM"
                  ? "bg-[#2377FC] text-white"
                  : "bg-white text-[#292D32]"
              }`}
            >
              AM
            </button>
            <button
              onClick={() => togglePeriod("PM")}
              className={`px-3 py-1 font-[500] rounded-[5px] ${
                time.period === "PM"
                  ? "bg-[#2377FC] text-white"
                  : "bg-white text-[#292D32]"
              }`}
            >
              PM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWithTimePicker;
