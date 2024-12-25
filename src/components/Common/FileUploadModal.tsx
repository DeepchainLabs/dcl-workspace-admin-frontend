import DropDown from "@/components/Common/DropDown";
import React, { useEffect } from "react";

export default function FileUploadModal({ setShow }: any) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShow]);

  return (
    <div className="w-[calc(100vw)] h-[calc(100vh)] bg-[#00000026] backdrop-blur-[2px] fixed top-0 left-0 z-40">
      <div className="grid place-items-center w-[calc(100vw)] h-[calc(100vh)]">
        <div
          ref={modalRef}
          className="w-[340px] lg:w-[500px] max-h-[800px] overflow-y-auto bg-[#FFFFFF] rounded-[12px] p-6 relative"
          style={{ zIndex: "1" }}
        >
          <div className="">
            <div className="flex justify-between top-40 gap-12">
              <p className="text-[#191414] text-[20px] font-[600]">
                Upload File
              </p>
              <div
                onClick={() => setShow(false)}
                className="w-[30px] h-[30px] grid place-items-center rounded-full hover:bg-[#F0F5FF] cursor-pointer my-auto"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#667085"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid place-items-center w-full h-[220px] mt-4">
            <div className="">
              <div className="flex justify-center">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.0996094 64.7831C0.0996094 29.0044 29.104 0 64.8827 0C100.661 0 129.666 29.0044 129.666 64.7831C129.666 100.562 100.661 129.566 64.8827 129.566C29.104 129.566 0.0996094 100.562 0.0996094 64.7831Z"
                    fill="#F4F4F5"
                  />
                  <path
                    d="M64.8817 66.3643L76.3338 77.8163L72.5164 81.6336L67.581 76.7004V91.776H62.1824V76.695L57.2469 81.6336L53.4296 77.8163L64.8817 66.3643ZM64.8817 37.79C74.5814 37.79 82.574 45.0987 83.6529 54.5093C89.9468 56.2304 94.574 61.9909 94.574 68.832C94.574 76.5757 88.6452 82.9347 81.0791 83.6176L81.0799 78.1834C85.6571 77.5275 89.1754 73.5905 89.1754 68.832C89.1754 63.6142 84.9456 59.3844 79.7278 59.3844C79.1642 59.3844 78.6122 59.4338 78.0778 59.5302C78.2745 58.613 78.3782 57.6611 78.3782 56.6851C78.3782 49.2312 72.3356 43.1886 64.8817 43.1886C57.4278 43.1886 51.3852 49.2312 51.3852 56.6851C51.3852 57.6611 51.4888 58.613 51.6877 59.5283C51.1512 59.4338 50.5992 59.3844 50.0356 59.3844C44.8178 59.3844 40.588 63.6142 40.588 68.832C40.588 73.4216 43.8607 77.2467 48.1997 78.1013L48.6861 78.1839L48.687 83.6176C41.1197 82.9363 35.1895 76.5768 35.1895 68.832C35.1895 61.9909 39.8167 56.2304 46.1121 54.5098C47.1895 45.0987 55.1821 37.79 64.8817 37.79Z"
                    fill="#71717A"
                  />
                </svg>
              </div>
              <p className="text-[#292D32] text-[16px] font-[500] mt-4 text-center">
                Drop your files here or{" "}
                <span className="text-[#2377FC] cursor-pointer">
                  Click to upload
                </span>
              </p>
              <p className="text-[#6F6F6F] text-[14px] font-[500] mt-1 text-center">
                Max. 5MB | CSV, PDF
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <div
              onClick={() => setShow(false)}
              className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[500] px-6 py-2 rounded-[8px] cursor-pointer"
            >
              Cancel
            </div>
            <div className="bg-[#2377FC] text-[#FFFFFF] text-[16px] font-[500] px-6 py-2 rounded-[8px] cursor-pointer">
              Upload
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
