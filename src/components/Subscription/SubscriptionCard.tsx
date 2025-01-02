"use client";
import { Plan } from "@/schema/PlanSchema";
import React from "react";

const SubscriptionCard = ({ data }: { data: Plan }) => {
  return (
    <div>
      <div
        className={`flex flex-col overflow-hidden  w-[330px] border-[2px] border-[#2377FC] rounded-[8.42px] ${
          data?.is_recommended ? "bg-[#F8FAFC]" : "bg-[#FFFFFF]"
        } ${data.free_for_first_month ? "shadow-lg" : ""}`}
      >
        <div className="flex flex-col p-4 relative">
          {data?.is_recommended && (
            <div className="absolute top-0 right-0 transform  bg-[#2377FC] text-[#FFFFFF] font-[500] text-[16px] px-5 py-1.5 rounded-bl-[8px]">
              RECOMMENDED
            </div>
          )}

          <div className="mb-2">
            <svg
              className="mb-1"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.789551 9.21039C0.789551 4.55962 4.55975 0.789429 9.21052 0.789429H27.1051C31.7558 0.789429 35.526 4.55962 35.526 9.2104V27.105C35.526 31.7557 31.7558 35.5259 27.1051 35.5259H9.21052C4.55975 35.5259 0.789551 31.7557 0.789551 27.105V9.21039Z"
                fill="#F8F8F8"
              />
              <path
                d="M16.0825 13.3883L13.8518 15.6137C13.4422 16.0225 13.0659 16.3971 12.7685 16.7365C12.5676 16.9605 12.3859 17.2012 12.2255 17.4558L12.2045 17.4339L12.1212 17.3514C11.7331 16.9753 11.2771 16.6764 10.7773 16.4707L10.6694 16.4269L10.337 16.2953C10.2334 16.2545 10.1417 16.1885 10.07 16.1034C9.99837 16.0182 9.94904 15.9166 9.92649 15.8076C9.90395 15.6986 9.9089 15.5857 9.9409 15.4791C9.9729 15.3726 10.0309 15.2756 10.1098 15.1971C11.0922 14.2164 12.272 13.0401 12.8422 12.8041C13.3372 12.5964 13.8793 12.527 14.4106 12.6032C14.8896 12.6743 15.3422 12.9208 16.0825 13.3883ZM19.8921 25.0987C20.072 25.2812 20.1904 25.4101 20.2991 25.5478C20.4413 25.7294 20.5684 25.9224 20.6798 26.125C20.8044 26.3531 20.9018 26.5961 21.0956 27.0829C21.1338 27.1748 21.1941 27.2559 21.2711 27.319C21.3481 27.3821 21.4394 27.4253 21.5371 27.4447C21.6347 27.4641 21.7356 27.4592 21.8309 27.4304C21.9261 27.4015 22.0129 27.3497 22.0833 27.2794L22.157 27.2066C23.1395 26.2268 24.3193 25.0505 24.5561 24.4829C24.7642 23.9899 24.8336 23.4494 24.757 22.9198C24.6859 22.4417 24.4395 21.99 23.9702 21.2514L21.7316 23.483C21.3123 23.9014 20.9281 24.2847 20.5798 24.5847C20.372 24.7654 20.1439 24.9443 19.8921 25.0987Z"
                fill="#2377FC"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8306 22.5233L25.9595 17.4093C26.6981 16.6733 27.0674 16.3049 27.2613 15.8374C27.456 15.3681 27.456 14.8479 27.456 13.8067V13.3093C27.456 11.7076 27.456 10.9067 26.9569 10.4094C26.4578 9.912 25.6551 9.912 24.049 9.912H23.549C22.5052 9.912 21.9832 9.912 21.514 10.1059C21.0438 10.2997 20.6745 10.6681 19.935 11.4041L14.807 16.5181C13.9439 17.3777 13.4088 17.9119 13.2018 18.4268C13.1372 18.5832 13.1038 18.7506 13.1035 18.9198C13.1035 19.6233 13.6711 20.19 14.807 21.3224L14.9596 21.4742L16.7473 19.6593C16.808 19.5977 16.8802 19.5487 16.9598 19.515C17.0394 19.4813 17.1248 19.4637 17.2112 19.463C17.2977 19.4624 17.3834 19.4787 17.4635 19.5112C17.5435 19.5437 17.6165 19.5916 17.678 19.6523C17.7396 19.7129 17.7886 19.7851 17.8223 19.8647C17.856 19.9443 17.8736 20.0297 17.8743 20.1161C17.8749 20.2026 17.8586 20.2883 17.8261 20.3684C17.7936 20.4485 17.7457 20.5214 17.685 20.5829L15.8912 22.4031L16.0114 22.5233C17.1473 23.6548 17.7157 24.2215 18.421 24.2215C18.5771 24.2215 18.7263 24.1943 18.8763 24.1391C19.4052 23.9443 19.9456 23.4057 20.8306 22.5233ZM23.2403 16.5181C22.9203 16.8368 22.4871 17.0158 22.0354 17.0158C21.5838 17.0158 21.1506 16.8368 20.8306 16.5181C20.6725 16.3606 20.547 16.1735 20.4614 15.9674C20.3758 15.7613 20.3317 15.5404 20.3317 15.3172C20.3317 15.0941 20.3758 14.8731 20.4614 14.667C20.547 14.4609 20.6725 14.2738 20.8306 14.1163C21.1506 13.7976 21.5838 13.6186 22.0354 13.6186C22.4871 13.6186 22.9203 13.7976 23.2403 14.1163C23.3984 14.2738 23.5238 14.4609 23.6095 14.667C23.6951 14.8731 23.7391 15.0941 23.7391 15.3172C23.7391 15.5404 23.6951 15.7613 23.6095 15.9674C23.5238 16.1735 23.3984 16.3606 23.2403 16.5181Z"
                fill="#2377FC"
              />
            </svg>

            <p className="text-[#292D32] text-[20px] font-[700]">{data.name}</p>
            <p className="text-[#7F899C] font-[500] text-[16px]">
              {data.description}
            </p>
          </div>

          <div className="flex gap-2">
            <p className="text-[#292D32] font-[600] text-[25px] mb-2">
              ${(data.price || 0) / 100}
            </p>
            <p className="text-[#6F6F6F] font-[500] text-[16px] mb-4 my-auto">
              {"/"}
              {data?.subscription_period === "MONTHLY" ? "month" : "year"}
            </p>
          </div>

          <div className="mt-4 mb-4">
            <h4 className="text-[#292D32] font-[600] text-[13px] mb-2">
              Features
            </h4>
            <ul className="text-[#54595E] text-[12px] space-y-2">
              {data?.project_max && (
                <Feature text={`Manage up to ${data?.project_max} Projects`} />
              )}
              {data?.task_manager && (
                <Feature text={`Task Management Tool with Time Tracker`} />
              )}
              {data?.employee_max && (
                <Feature text={`Add up to ${data?.employee_max} Employees`} />
              )}
              {data?.report_and_analysis && (
                <Feature text={`Weekly Reports and Analytics`} />
              )}
              {data?.email && data?.email?.max_email_per_day > 0 && (
                <Feature
                  text={`Send up to ${data?.email.max_email_per_day} Emails/day`}
                />
              )}
              {data?.cloud_storage?.max_quote_in_gb && (
                <Feature
                  text={`${data?.cloud_storage?.max_quote_in_gb} Shared Cloud Storage`}
                />
              )}
              {data?.calendar?.event_management && (
                <Feature text={`Calendar with Event Management`} />
              )}
              {data?.notes?.ai_powered_intelligence && (
                <Feature text={`Intelligent Notes for Productivity`} />
              )}
              {data?.hrms && (
                <Feature text={`Salary, Leave, Notice Management`} />
              )}
              {data?.crms?.deal_management && data?.crms.lead_management && (
                <Feature text={`CRMS Tool for Lead & Deals Management`} />
              )}
              {data?.communication_hub?.channels?.channel_max && (
                <Feature
                  text={`Communication Tool with up to ${data?.communication_hub?.channels.channel_max} Channels`}
                />
              )}
              {data?.communication_hub?.calling?.hours_per_day_max && (
                <Feature
                  text={`Up to ${data?.communication_hub?.calling?.hours_per_day_max}H/day Audio/Video Calling`}
                />
              )}
              {data?.survey_tools && <Feature text={`Survey Tool`} />}
              {data?.hrms && <Feature text="Employee Performance Tracking" />}
              <Feature text="Includes 24/7 Support" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;

const Feature = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-2">
      <svg
        className="flex-shrink-0    "
        width="19"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.54065 17.4033C13.8827 17.4033 17.4353 13.8507 17.4353 9.50868C17.4353 5.16662 13.8827 1.61403 9.54065 1.61403C5.19859 1.61403 1.646 5.16662 1.646 9.50868C1.646 13.8507 5.19859 17.4033 9.54065 17.4033Z"
          stroke="#15BD6D"
          strokeWidth="1.57893"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.18506 9.50862L8.41925 11.7428L12.8955 7.27443"
          stroke="#15BD6D"
          strokeWidth="1.57893"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[#828282] font-[500] text-[14px]">{text}</p>
    </li>
  );
};
