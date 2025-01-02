import Chart from "./Chart";

export default function Performance() {
  return (
    <div className="w-[700px] md:w-[700px] lg:w-[800px] xxl:w-[850px] ">
      <div className="flex items-center pt-[18px]">
        <p className="text-[#292D32] text-[20px] font-[600]">
          Performance Metrics
        </p>
      </div>
      <div className="mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 xxl:grid-cols-3 md:grid-cols-2">
          <div className="w-[250px] h-[200px]  bg-[#F8FAFC]  rounded-[8px] border boarder-[#E5E9EB] col-span-1 p-4 mt-4 xxl:mt-4">
            <div className="text-[#292D32] text-[16px] font-[600]">
              Application Up-Time
            </div>
            <div className="ml-4">
              <Chart value={"77"} main={"#15BD6D"} max={"100"} rate={"%"} />
            </div>
          </div>{" "}
          <div className="w-[250px] h-[200px]  bg-[#F8FAFC]  rounded-[8px] border boarder-[#E5E9EB] col-span-1 p-4 mt-4 xxl:mt-4">
            <div className="text-[#292D32] text-[16px] font-[600]">
              Response Time Latency
            </div>
            <div className="ml-4">
              <Chart value={"350"} main={"#494CF4"} max={"500"} rate={"ms"} />
            </div>
          </div>
          <div className="w-[250px] h-[200px]  bg-[#F8FAFC]  rounded-[8px] border boarder-[#E5E9EB] col-span-1 p-4 mt-4 xxl:mt-4">
            <div className="text-[#292D32] text-[16px] font-[600]">
              Requests Per Second
            </div>
            <div className="ml-4">
              <Chart value={"55"} main={"#2377FC"} max={"100"} rate={""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
