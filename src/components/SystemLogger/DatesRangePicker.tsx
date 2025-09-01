"use client";
import { useState } from "react";

interface DateRangePickerProps {
  onChange: (range: { from: string; to: string }) => void; // send formatted string
}

function formatDateRange(date: Date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  return {
    from: start.toISOString(),
    to: end.toISOString(),
  };
}

export default function DateRangePicker({ onChange }: DateRangePickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateRange = (date: Date) => {
    setCurrentDate(date);
    const { from, to } = formatDateRange(date);
    onChange({ from, to });
  };

  const handleToday = () => {
    updateRange(new Date());
  };

  const handlePrev = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(prevDay.getDate() - 1);
    updateRange(prevDay);
  };

  const handleNext = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    updateRange(nextDay);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-3 py-2 border rounded-lg text-sm"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <span className="text-sm text-gray-700">
        {currentDate.toLocaleDateString()}
      </span>
      <button
        className="px-3 py-2 border rounded-lg text-sm"
        onClick={handleNext}
      >
        {">"}
      </button>
      <button
        className="ml-2 px-3 py-2 border rounded-lg text-sm"
        onClick={handleToday}
      >
        Today
      </button>
    </div>
  );
}
