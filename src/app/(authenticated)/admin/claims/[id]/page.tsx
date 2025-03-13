import React from "react";
import Image from "next/image";
import CloseIcon from "@/svg/Note/CloseIcon";
import Link from "next/link";
import DropDown from "@/components/Common/DropDown";
import AdminActionPanel from "@/components/Bugs/AdminActionPanel";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { extractError } from "@/utils/errors.utils";
import { getBugById } from "@/resources/bugs/bugs.service";
import { BugReportResponse } from "@/interfaces/Bug.interface";
import { getEmployess } from "@/resources/settings/employee.service";
import AttachmentSvg from "@/svg/Bugs/AttachmentSvg";
import { getClaimById } from "@/resources/claims/claim.service";
import { ClaimResponse } from "@/interfaces/Claim.interface";
import { getTenants } from "@/resources/tenant/tenant.service";
import { TenantResponse } from "@/interfaces/Tenant.interface";
import DefaultTenantPicture from "@/svg/Claim/DefaultTenantPicture";
import ClaimAdminAction from "@/components/Claim/ClaimAdminAction";

async function page({ params }: { params: any }) {
  const { id } = await params;

  const _claim = await getClaimById(id).catch((error) => {
    return extractError(error);
  });
  if (typeof _claim === "string") return <ErrorAllert message={_claim} />;
  const claim: ClaimResponse = _claim as unknown as ClaimResponse;

  const _tenants = await getTenants(claim.spaces).catch((error) => {
    return extractError(error);
  });
  if (typeof _tenants === "string") return <ErrorAllert message={_tenants} />;
  console.log(_tenants);
  const tenants: TenantResponse[] = _tenants as unknown as TenantResponse[];

  return (
    <div>
      <div className="border-b border-[#E5E9EB] h-[76px]  lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <p className="text-[24px] font-[700]">Claim Request Details</p>
        </div>
      </div>
      <div className=" h-[calc(100vh-155px)] overflow-y-auto custom-layout pt-4">
        <div className="flex flex-wrap gap-4 border-b border-[#E5E9EB]">
          <div className="w-full md:w-[64%]">
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">Name</p>
              <div className="w-full  rounded-[8px] text-[#A5B2CA] text-[15px] font-[600]">
                {`${claim.firstName} ${claim.lastName}`}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Description
              </p>
              <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                {claim.description}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Organizatin Email
              </p>
              <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                {claim.organizationEmail}
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-2 mb-2">
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Expected Results
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {bug.expectedResult ?? "Expected result was not provided."}
                </div>
              </div>
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Actual Results
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {bug.actualResult ?? "Actual result was not provided."}
                </div>
              </div>
            </div> */}
            <div className="flex flex-wrap gap-2 mt-4">
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Status
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {claim.status}
                </div>
              </div>
              <div className="w-full md:w-[49%]">
                <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                  Required Action
                </p>
                <div className="w-full  rounded-[8px]   text-[#A5B2CA] text-[15px] font-[600]">
                  {claim.requiredAction}
                </div>
              </div>
            </div>
            <div className="w-full mt-4 mb-10">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Spaces
              </p>
              <div className="flex gap-2 flex-wrap mb-4 mt-2">
                {tenants.map((space: TenantResponse) => (
                  <div
                    key={space.identifier}
                    className="flex items-center gap-2 w-[250px]  mb-2 bg-[#F8FAFC] rounded-[8px] px-2 py-2" // Adjusted py and height
                  >
                    <div className="w-[55px] h-[55px] flex items-center justify-center">
                      {space.logo_url ? (
                        <Image
                          src={space.logo_url}
                          alt="logo"
                          width={55}
                          height={55}
                        />
                      ) : (
                        <DefaultTenantPicture />
                      )}
                    </div>
                    <div>
                      <p className="text-[14px] text-[#324054] font-[500] flex items-center truncate">
                        {space.name}
                      </p>
                      <p className="text-[14px] text-[#324054] font-[500] flex items-center truncate">
                        {space._id.substring(0,20)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[33%] md:block md:border-l md:pl-4">
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Phone
              </p>
              <p className="w-full text-[#A5B2CA] text-[15px] font-[600]">
                {claim.phone}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-[15px] text-[#292D32] font-[600] mb-2">
                Supporting Documents
              </p>
              {claim.supportingDocuments.map((supportingDocumet, index) => (
                <Link
                  href={claim.supportingDocuments_urls[index]}
                  key={index}
                  className="flex justify-between mb-2 bg-[#F8FAFC] rounded-[8px] border border-[#EBEBEB] p-2 cursor-pointer"
                >
                  <div className="flex gap-2">
                    <AttachmentSvg />
                    <p className="text-[#191F38] text-center text-[14px] font-[600] mb-2 mt-2 truncate">
                      {supportingDocumet.split("/")[1]}
                    </p>
                  </div>
                  <div className="my-auto pr-2">
                    <CloseIcon />
                  </div>
                </Link>
              ))}
              {claim.supportingDocuments.length === 0 && (
                <p className="text-[15px] text-[#A5B2CA] font-[600] mb-2">
                  No supporting documents was provided.
                </p>
              )}
            </div>
            <ClaimAdminAction claim={claim} />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-2">
          <Link
            href={"/admin/claims"}
            className="bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] px-4  py-1.5 rounded-[8px] cursor-pointer"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
