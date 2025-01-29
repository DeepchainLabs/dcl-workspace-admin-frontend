"use client";
import { paginationMetaSchema } from "@/schema/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { z } from "zod";

export type IPaginationMeta = z.infer<typeof paginationMetaSchema>;

export default function Pagination({ meta }: { meta: IPaginationMeta }) {
  // console.log(meta);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [optionsShow, setOptionsShow] = useState<boolean>(false);
  const [perPage, setPerPage] = useState<any>(15);
  const dropDownRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setOptionsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (name === "limit") {
        params.set("page", "1");
      }
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (!!meta && meta.currentPage > meta.lastPage) {
      const queryString = createQueryString("page", meta.lastPage.toString());
      router.push(`${pathname}?${queryString}`);
    }
    if (searchParams) {
      if (searchParams.get("limit")) {
        setPerPage(searchParams.get("limit"));
      } else {
        setPerPage(15);
      }
    }
  }, [meta, router, pathname, createQueryString, searchParams]);

  const handleNextPage = () => {
    if (meta.currentPage === meta.lastPage) return;
    if (!meta?.nextPage) return;
    const queryString = createQueryString("page", meta?.nextPage.toString());
    router.push(`${pathname}?${queryString}`);
  };

  const handlePrevPage = () => {
    if (meta.currentPage === 1) return;
    if (!meta?.prevPage) return;
    const queryString = createQueryString("page", meta?.prevPage.toString());
    router.push(`${pathname}?${queryString}`);
  };

  const handleDropdownClick = (item: any) => {
    setOptionsShow(false);
    setPerPage(item);
    const queryString = createQueryString("limit", item);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <div className="">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <p className="text-[#54595E] text-[14px] font-[500] mt-[9px]">
            Per page
          </p>
          <div className="">
            <div
              onClick={() => setOptionsShow(!optionsShow)}
              className="group bg-[#FFFFFF] hover:bg-[#317EF3] w-[60px] h-[35px] cursor-pointer border border-[#317EF3] rounded-[6px] flex justify-center gap-2"
            >
              <p className="mt-[13px] text-[18px] font-[500] leading-3 text-[#317EF3] group-hover:text-[#FFFFFF]">
                {perPage}
              </p>

              {/* arrow icons */}
              {optionsShow ? (
                <svg
                  className="my-auto fill-[#317EF3] group-hover:fill-[#FFFFFF] rotate-90"
                  width="9"
                  height="12"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.93664 0.648389C1.58071 0.29057 1.00186 0.289807 0.644982 0.646685C0.288768 1.0029 0.288768 1.58043 0.644982 1.93665L6.625 7.91667L0.644983 13.8967C0.28877 14.2529 0.288771 14.8304 0.644984 15.1866C1.00186 15.5435 1.58071 15.5428 1.93665 15.1849L8.46514 8.6219C8.85318 8.23181 8.85318 7.60152 8.46514 7.21143L1.93664 0.648389Z" />
                </svg>
              ) : (
                <svg
                  className="my-auto fill-[#317EF3] group-hover:fill-[#FFFFFF] rotate-90"
                  width="9"
                  height="12"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.22986 15.1846C7.5858 15.5424 8.16464 15.5432 8.52152 15.1863C8.87774 14.8301 8.87774 14.2526 8.52152 13.8964L2.5415 7.91634L8.52152 1.93632C8.87774 1.58011 8.87773 1.00257 8.52152 0.64636C8.16464 0.289482 7.58579 0.290245 7.22986 0.648064L0.701362 7.2111C0.313322 7.6012 0.313323 8.23149 0.701363 8.62158L7.22986 15.1846Z" />
                </svg>
              )}
            </div>

            {optionsShow && (
              <div
                ref={dropDownRef}
                className="absolute bottom-[40px] z-50 w-[60px] border border-[#317EF3] rounded-[6px] bg-[#FFFFFF] py-1"
              >
                {[5, 10, 25, 50, 100]?.map((item: any, index: number) => (
                  <div
                    onClick={() => handleDropdownClick(item)}
                    className="text-center font-[500] hover:bg-[#F6F6F6] pt-[3px] cursor-pointer text-[#317EF3]"
                    key={index}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="">
          <p className="text-[#54595E] text-[14px] font-[500] mt-[9px]">
            {meta?.total > 0 ? meta?.from : 0}-
            {meta?.to > meta?.total ? meta?.total : meta?.to} of {meta?.total}
          </p>
        </div>
        <button
          onClick={handlePrevPage}
          disabled={meta?.currentPage === 1 ? true : false}
          className={`group bg-[#FFFFFF] hover:bg-[#317EF3] w-[40px] h-[35px] border border-[#317EF3] rounded-[6px] flex justify-center gap-2 ${
            meta?.currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <svg
            className="my-auto fill-[#317EF3] group-hover:fill-[#FFFFFF]"
            width="9"
            height="15"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.22986 15.1846C7.5858 15.5424 8.16464 15.5432 8.52152 15.1863C8.87774 14.8301 8.87774 14.2526 8.52152 13.8964L2.5415 7.91634L8.52152 1.93632C8.87774 1.58011 8.87773 1.00257 8.52152 0.64636C8.16464 0.289482 7.58579 0.290245 7.22986 0.648064L0.701362 7.2111C0.313322 7.6012 0.313323 8.23149 0.701363 8.62158L7.22986 15.1846Z" />
          </svg>
          {/* <p className='mt-[13px] text-[18px] font-[500] leading-3 text-[#317EF3] group-hover:text-[#FFFFFF]'>Previous</p> */}
        </button>
        <button
          onClick={handleNextPage}
          disabled={meta?.currentPage === meta?.lastPage ? true : false}
          className={`group bg-[#FFFFFF] hover:bg-[#317EF3] w-[40px] h-[35px] border border-[#317EF3] rounded-[6px] flex justify-center gap-2 ${
            meta?.currentPage === meta?.lastPage
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          {/* <p className='mt-[13px] text-[18px] font-[500] leading-3 text-[#317EF3] group-hover:text-[#FFFFFF]'>Next</p> */}
          <svg
            className="my-auto fill-[#317EF3] group-hover:fill-[#FFFFFF]"
            width="9"
            height="15"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.93664 0.648389C1.58071 0.29057 1.00186 0.289807 0.644982 0.646685C0.288768 1.0029 0.288768 1.58043 0.644982 1.93665L6.625 7.91667L0.644983 13.8967C0.28877 14.2529 0.288771 14.8304 0.644984 15.1866C1.00186 15.5435 1.58071 15.5428 1.93665 15.1849L8.46514 8.6219C8.85318 8.23181 8.85318 7.60152 8.46514 7.21143L1.93664 0.648389Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
