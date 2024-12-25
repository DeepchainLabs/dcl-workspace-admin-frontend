import Image from "next/image";

export default function MeetingCard({ meeting }: { meeting: any }) {
  const { title, date, time, creator, assignees } = meeting;

  return (
    <div className="w-full h-[323px] min-w-[260px] sm:w-auto sm:h-auto sm:min-w-[260px] p-5 bg-[#F8FAFC] hover:bg-[#F0F5FF] rounded-[12px] flex-shrink-0">
      <div>
        <p className="text-[#292D32] text-[20px] font-[600]">{title}</p>
        <p className="text-[16px] text-[#2377FC] font-[600] mt-2">{date}</p>
        <p className="text-[16px] text-[#292D32] font-[500] mt-4">{time}</p>

        <div className="mt-2 flex justify-between items-start gap-3">
          <div>
            <p className="text-[16px] text-[#292D32] font-[500]">Creator</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-[26px] h-[26px] relative">
                <Image
                  src={creator.profilePicture}
                  fill
                  alt={creator.name}
                  className="rounded-full"
                />
              </div>
              <p className="text-[#292D32] text-[14px] font-[600] line-clamp-1">{creator.name}</p>
            </div>
          </div>
          <div>
            <p className="text-[16px] text-[#292D32] font-[500]">Assignee</p>
            <div className="flex items-center gap-2 mt-2">
              {assignees.slice(0, 1).map((assignee: any, index: number) => (
                <div key={index} className="w-[26px] h-[26px] relative">
                  <Image
                    src={assignee.profilePicture}
                    fill
                    alt="assignee"
                    className="rounded-full"
                  />
                </div>
              ))}
              {assignees.length > 1 && (
                <p className="text-[#292D32] text-[14px] font-[600]">
                  +{assignees.length - 1}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-3 flex-wrap">
          <button className="flex items-center justify-center py-2 px-4 bg-[#2377FC] rounded-[8px]">
            <svg
              className="mr-3"
              width="14"
              height="14"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84787 9.27249H3.01618C1.60034 9.27249 1.12988 8.33158 1.12988 7.38619V3.61359C1.12988 2.19775 1.60034 1.72729 3.01618 1.72729H5.84787C7.26371 1.72729 7.73417 2.19775 7.73417 3.61359V7.38619C7.73417 8.80203 7.25923 9.27249 5.84787 9.27249Z"
                stroke="white"
                strokeWidth="0.896104"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.97996 7.78502L7.73438 6.91132V4.08411L8.97996 3.21041C9.58931 2.78476 10.0911 3.04463 10.0911 3.79288V7.20704C10.0911 7.95528 9.58931 8.21515 8.97996 7.78502Z"
                stroke="white"
                strokeWidth="0.896104"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.38643 5.05192C5.75761 5.05192 6.05851 4.75102 6.05851 4.37984C6.05851 4.00866 5.75761 3.70776 5.38643 3.70776C5.01525 3.70776 4.71436 4.00866 4.71436 4.37984C4.71436 4.75102 5.01525 5.05192 5.38643 5.05192Z"
                stroke="white"
                strokeWidth="0.896104"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-white text-[16px] font-[600]">Join</p>
          </button>
          <button className="py-2 px-4 border border-[#2377FC] text-[#2377FC] text-[16px] font-[600] rounded-[8px]">
            Product Delivery
          </button>
        </div>
      </div>
    </div>
  );
}

