import React, { useState } from 'react';
import dayjs from 'dayjs';
import RightIcon from '@/svg/Dashboard/RightIcon';
import LeftIcon from './LeftIcon';

const Calendar = ({ selectedDate, setSelectedDate }: any) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const getCurrentMonthDates = () => {
    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const allDates = [];

    let current = startOfMonth;
    while (current.isBefore(endOfMonth)) {
      allDates.push(current);
      current = current.add(1, 'day');
    }
    return allDates;
  };

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleSelectDate = (date: any) => {
    setSelectedDate(date);
  };

  const dates = getCurrentMonthDates();

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4 font-sans w-full max-w-md">
        <div className="flex justify-between items-center w-full px-2 py-2 bg-[#F8FAFC] rounded-[6px]">
          <button
            onClick={handlePrevMonth}
            className="bg-white px-2 py-1.5 rounded-[4px] shadow-[0px_3px_20px_1px_rgba(0,0,0,0.05)] cursor-pointer mr-2"
          >
            <LeftIcon />
          </button>
          <div className="text-[#292D32] font-semibold"> 
            <span className="cursor-pointer">{currentDate.format('MMMM')}</span>
            <span className="cursor-pointer">, {currentDate.format('YYYY')}</span>
          </div>
          <button
            onClick={handleNextMonth}
            className="bg-white px-2 py-1.5 rounded-[4px] shadow-[0px_3px_20px_1px_rgba(0,0,0,0.05)] cursor-pointer ml-2"
          >
            <RightIcon />
          </button>
        </div>
        <div
          className="flex overflow-x-auto py-4 px-2 scrollbar-hide w-full"
          style={{ whiteSpace: 'nowrap' }}
        >
          {dates.map((date) => (
            <div
              key={date.format('YYYY-MM-DD')}
              className={`flex flex-col items-center justify-center p-2 mx-1 rounded-lg transition-all cursor-pointer 
                ${
                  date.isSame(selectedDate, 'day')
                    ? 'bg-blue-500 text-white'
                    : ''
                } 
                ${date.isSame(dayjs(), 'day') ? 'ring-2 ring-blue-500' : ''}
              `}
              onClick={() => handleSelectDate(date)}
              style={{
                width: '50px',
                height: '57px',
                flex: '0 0 auto',
              }}
            >
              <span className="text-[15px] font-[400]">{date.format('dd')}</span>
              <span className="text-[16px] font-[600]">{date.format('D')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
