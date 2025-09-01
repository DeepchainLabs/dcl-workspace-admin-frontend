"use client";
import { useState } from "react";

interface DateRangePickerProps {
  onChange: (range: { from: string; to: string }) => void;
}

function formatRange(from: Date, to: Date) {
  const start = new Date(from);
  start.setHours(0, 0, 0, 0);

  const end = new Date(to);
  end.setHours(23, 59, 59, 999);

  return {
    from: start.toISOString(),
    to: end.toISOString(),
  };
}

export default function DateRangePicker({ onChange }: DateRangePickerProps) {
  const RANGE_DAYS = 5;

  const [startDate, setStartDate] = useState(new Date());
  const [isTodayActive, setIsTodayActive] = useState(false);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + RANGE_DAYS - 1);

  const updateRange = (from: Date, to: Date) => {
    const { from: f, to: t } = formatRange(from, to);
    onChange({ from: f, to: t });
  };

  const handlePrev = () => {
    const prevStart = new Date(startDate);
    prevStart.setDate(prevStart.getDate() - RANGE_DAYS);
    setIsTodayActive(false);
    setStartDate(prevStart);
    const prevEnd = new Date(prevStart);
    prevEnd.setDate(prevEnd.getDate() + RANGE_DAYS - 1);
    updateRange(prevStart, prevEnd);
  };

  const handleNext = () => {
    const nextStart = new Date(startDate);
    nextStart.setDate(nextStart.getDate() + RANGE_DAYS);
    setIsTodayActive(false);
    setStartDate(nextStart);
    const nextEnd = new Date(nextStart);
    nextEnd.setDate(nextEnd.getDate() + RANGE_DAYS - 1);
    updateRange(nextStart, nextEnd);
  };

  const handleToday = () => {
    if (isTodayActive) {
      setIsTodayActive(false);
      onChange({ from: "", to: "" });
    } else {
      // activate → set today range
      setIsTodayActive(true);
      updateRange(new Date(), new Date());
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex px-3 py-2 gap-2 border rounded-lg">
        <button className=" text-sm" onClick={handlePrev}>
          {"<"}
        </button>
        <span className="text-sm text-gray-700">
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </span>
        <button className=" text-sm" onClick={handleNext}>
          {">"}
        </button>
      </div>
      <button
        className={`ml-2 px-3 py-2 rounded-lg text-sm font-medium ${
          isTodayActive
            ? "bg-blue-50 text-blue-600 border border-blue-200"
            : "text-gray-600 border"
        }`}
        onClick={handleToday}
      >
        Today
      </button>
    </div>
  );
}
