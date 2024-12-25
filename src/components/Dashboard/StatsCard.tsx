export default function StatsCard({ 
    number, 
    svg, 
    title, 
    bgColor, 
    textColor, 
    small = false 
  }: any) {
    const height = small ? "124px" : "170px";
    const numberFontSize = small ? "30px" : "46px";
    const numberFontWeight = small ? "600" : "700";
  
    return (
      <div
      className={`max-w-[500px] min-w-[155px] w-full rounded-[15px] flex flex-col justify-between pb-5 px-7 ${
        small ? "hover:shadow-[0px_8px_16px_0px_#00000014,_0px_0px_4px_0px_#0000000A]" : ""
      }`}
        style={{ backgroundColor: bgColor, height: height }}
      >
        <div className="flex justify-between items-center">
          <p 
          className="mt-3"
            style={{ color: textColor, fontSize: numberFontSize, fontWeight: numberFontWeight }}
          >
            {number}
          </p>
          {svg && <div>{svg}</div>}
        </div>
        <div className="text-[#292D32] text-[20px] font-[600]">{title}</div>
      </div>
    );
  }
  