const NoticeCard = ({
  day,
  month,
  year,
  title,
  description,
  postedBy,
  postedDate,
  tags,
  minimize,
}: any) => {
  if (minimize) {
    return (
      <div className="w-full h-auto p-4 bg-[#F8FAFC] hover:bg-[#F0F5FF] rounded-[12px] flex flex-col justify-between space-y-4 sm:space-y-0 sm:h-[183px]">
        <div>
          <p className="text-[#292D32] text-[18px] font-[600] line-clamp-1">
            Holiday due to Shab e-Barat.
          </p>
          <p className="text-[14px] text-[#2377FC] font-[500] mt-3">
            8 March 2024
          </p>
          <div className="text-[14px] text-[#6F6F6F] font-[500] mt-2">
            <span className="text-[#292D32] font-[600]">Posted By: </span>
            Riad Ahsan
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="text-[14px] font-[500] px-3 py-1 rounded-[5px] text-[#6962FE] bg-[#E9ECF8]">
            Discord Notice
          </span>
          <span className="text-[14px] font-[500] px-3 py-1 rounded-[5px] text-[#065F46] bg-[#F0FFF1]">
            Published
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col sm:flex-row border border-[#E5E9EB] rounded-[12px] bg-[#F8FAFC] w-full sm:h-48 overflow-hidden">
      <div className="bg-[#2377FC] py-1.5 gap-1 text-[#FFFFFF] text-[20px] font-[600] flex flex-row sm:flex-col items-center justify-center sm:w-32 w-full sm:rounded-l-[12px] sm:rounded-tr-none rounded-t-[12px]">
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
            <p className="text-[#292D32] text-[20px] font-[600] line-clamp-1 overflow-hidden text-ellipsis">
              {title}
            </p>
            <div className="flex flex-wrap gap-3 mt-2 sm:mt-0">
              {tags?.map((tag: any, index: any) => (
                <span
                  key={index}
                  className={`ml-auto text-[14px] font-[500] px-3 py-1 rounded-[5px] ${tag.textColor} ${tag.bgColor}`}
                >
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[16px] text-[#6F6F6F] font-[500] mt-4 line-clamp-2 overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
        <div className="text-[14px] text-[#6F6F6F] font-[500] mt-4 sm:mt-0">
          <span className="text-[#292D32] font-[600]">Posted By:</span> {postedBy}
          <span className="ml-4 text-[#292D32] font-[600]">Posted Date:</span> {postedDate}
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
