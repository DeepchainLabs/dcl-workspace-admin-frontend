"use client";

import DropDown from "@/components/Common/DropDown";
import SocialProfileModal from "./SocialProfileModal";
import AddIcon from "@/svg/Settings/AddIcon";
import ProfilePicture from "@/svg/Settings/ProfilePicture";
import Image from "next/image";
import { useState } from "react";
import PaymentHistoryTable from "./Workspace/PaymentHistoryTable";
import { paymentHistory } from "@/contents/Admin/Workspace";
import WorkspaceCard from "./Workspace/WorkspaceCard";

export default function ClientDetails() {
  const [showModal, setShowModal] = useState(false);
  const [editPersonalInformation, setEditPersonalInformation] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex justify-between gap-12">
        <div className="w-[33%]">
          <div className="border border-[#E5E9EB] rounded-[16px] p-3">
            <div className="bg-[#F8FAFC] w-full rounded-[16px] min-h-[276px] p-8">
              <div className="flex justify-between border-b border-[#E5E9EB] pb-4">
                <div className="flex gap-4">
                  <ProfilePicture />
                  <div className="flex flex-col">
                    <p className="text-[#2377FC] text-[20px] font-[600] col-span-2">
                      John Doe
                    </p>
                    <div className="flex gap-2">
                      <div className="text-[#292D32] text-[16px] font-[600]">
                        Email:
                      </div>
                      <div className="text-[#71717A] text-[16px] font-[500]">
                        mail@gmail.com
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="text-[#292D32] text-[16px] font-[600]">
                        Phone:
                      </div>
                      <div className="text-[#71717A] text-[16px] font-[500]">
                        010101010
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[#292D32] text-[16px] font-[600]">
                  Biography:
                </p>
                <p className="text-[#71717A] text-[16px] font-[500] mt-2">
                  Sed est consequatur consequatur adipisci sit dolorum
                  inventore. Inventore enim vitae rerum. Nostrum in ipsum qui
                  quia quia quo ea minus ullam. Ad et eos nulla consequuntur sit
                  officia.
                </p>
              </div>

              <div className="mt-4 flex gap-4">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14.4997"
                    cy="14.5026"
                    r="14.4997"
                    fill="#317EF3"
                  />
                  <path
                    d="M21.4301 10.1166C18.9949 6.34147 14.0081 5.22293 10.1514 7.56489C6.38795 9.90684 5.17619 15.0102 7.61136 18.7737L7.80944 19.0766L6.99383 22.1293L10.0465 21.3137L10.3495 21.5118C11.6661 22.2225 13.0992 22.6303 14.5207 22.6303C16.0471 22.6303 17.5734 22.2225 18.89 21.4069C22.6535 18.9601 23.772 13.9616 21.4301 10.0933V10.1166ZM19.2979 17.9697C18.89 18.5756 18.3774 18.9834 17.6666 19.0883C17.2588 19.0883 16.7462 19.2863 14.7188 18.4824C12.9944 17.6668 11.5612 16.3385 10.5475 14.8121C9.94167 14.1014 9.62708 13.1809 9.53386 12.2605C9.53386 11.4448 9.8368 10.7341 10.3495 10.2214C10.5475 10.0234 10.7573 9.9185 10.9554 9.9185H11.468C11.6661 9.9185 11.8758 9.9185 11.9807 10.3263C12.1788 10.839 12.6914 12.0624 12.6914 12.1672C12.7963 12.2721 12.7497 13.0528 12.2836 13.4955C12.0273 13.7868 11.9807 13.7985 12.0855 14.0082C12.4934 14.6141 13.006 15.2316 13.507 15.7443C14.1129 16.2569 14.7304 16.6647 15.4412 16.9677C15.6393 17.0725 15.849 17.0725 15.9539 16.8628C16.0587 16.6647 16.5597 16.1521 16.7695 15.9423C16.9675 15.7443 17.0724 15.7443 17.2821 15.8375L18.9134 16.6531C19.1114 16.7579 19.3212 16.8512 19.426 16.956C19.5309 17.259 19.5309 17.6668 19.3212 17.9697H19.2979Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14.6774"
                    cy="14.5026"
                    r="14.4997"
                    fill="#317EF3"
                  />
                  <g clipPath="url(#clip0_2511_47311)">
                    <path
                      d="M14.6828 5.55078C9.74064 5.55078 5.73438 9.55705 5.73438 14.4992C5.73438 19.4413 9.74064 23.4475 14.6828 23.4475C19.6249 23.4475 23.6311 19.4413 23.6311 14.4992C23.6311 9.55705 19.6249 5.55078 14.6828 5.55078ZM12.4923 18.2081H10.6802V12.3767H12.4923V18.2081ZM11.5751 11.6608C11.0027 11.6608 10.6327 11.2554 10.6327 10.7539C10.6327 10.2422 11.0139 9.8488 11.5984 9.8488C12.1828 9.8488 12.5407 10.2422 12.5519 10.7539C12.5519 11.2554 12.1828 11.6608 11.5751 11.6608ZM19.1103 18.2081H17.2983V14.9764C17.2983 14.2242 17.0354 13.7134 16.3802 13.7134C15.8796 13.7134 15.5823 14.0592 15.4508 14.392C15.4024 14.5103 15.3902 14.6781 15.3902 14.845V18.2071H13.5773V14.2363C13.5773 13.5083 13.554 12.8996 13.5297 12.3758H15.1041L15.187 13.1858H15.2234C15.462 12.8055 16.0465 12.2444 17.0242 12.2444C18.2164 12.2444 19.1103 13.0432 19.1103 14.7602V18.2081Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2511_47311">
                      <rect
                        width="18.6425"
                        height="18.6425"
                        fill="white"
                        transform="translate(5.36133 5.17773)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.863" cy="14.5026" r="14.4997" fill="#317EF3" />
                  <path
                    d="M22.1883 16.1751C22.2987 15.6575 22.3537 15.1297 22.3522 14.6005C22.3466 13.6333 22.1505 12.6766 21.7749 11.7852C21.3994 10.8938 20.8519 10.0852 20.1637 9.40548C19.4755 8.72579 18.6601 8.18839 17.7641 7.824C16.8681 7.45961 15.9091 7.27537 14.9418 7.28182C14.5186 7.28053 14.0962 7.31718 13.6796 7.39135C13.0328 6.9849 12.2893 6.7581 11.5258 6.73427C10.7623 6.71044 10.0061 6.89044 9.33524 7.25575C8.66434 7.62107 8.10286 8.15851 7.70856 8.8128C7.31426 9.46709 7.10137 10.2146 7.0918 10.9785C7.09214 11.7315 7.2941 12.4707 7.6767 13.1192C7.58168 13.6013 7.53253 14.0913 7.52989 14.5827C7.538 15.5433 7.73683 16.4927 8.11483 17.3759C8.49283 18.259 9.04248 19.0583 9.73188 19.7273C10.4213 20.3963 11.2367 20.9218 12.1308 21.2731C13.0249 21.6245 13.9798 21.7947 14.9403 21.774C15.3948 21.7774 15.8485 21.7342 16.2942 21.6451C16.9093 22.0181 17.6077 22.2322 18.3262 22.268C19.0508 22.2816 19.7667 22.1083 20.405 21.7649C21.0432 21.4215 21.5822 20.9195 21.9701 20.3073C22.358 19.6951 22.5817 18.9933 22.6196 18.2695C22.6576 17.5458 22.5085 16.8245 22.1868 16.1751H22.1883ZM18.3083 17.602C17.9869 18.033 17.5489 18.3631 17.0461 18.5535C16.424 18.8011 15.7579 18.9193 15.0886 18.9007C14.3109 18.9259 13.5387 18.7629 12.8376 18.4254C12.4274 18.2069 12.0757 17.8931 11.8122 17.5103C11.5784 17.1905 11.4449 16.8085 11.4285 16.4127C11.4267 16.3121 11.4471 16.2123 11.4883 16.1204C11.5295 16.0286 11.5905 15.947 11.667 15.8814C11.8314 15.7322 12.0479 15.6535 12.2697 15.6624C12.4493 15.6548 12.6254 15.7134 12.7645 15.8271C12.9172 15.9695 13.0359 16.1444 13.1118 16.3389C13.2057 16.5828 13.3352 16.8113 13.4963 17.0171C13.6438 17.2101 13.8393 17.3612 14.0633 17.4552C14.37 17.5845 14.7007 17.647 15.0335 17.6385C15.5041 17.6643 15.971 17.5429 16.3695 17.2913C16.5234 17.2014 16.6515 17.0733 16.7413 16.9194C16.8311 16.7654 16.8796 16.5909 16.8822 16.4127C16.8874 16.2869 16.8655 16.1614 16.8181 16.0446C16.7706 15.9279 16.6987 15.8228 16.6072 15.7362C16.4056 15.5451 16.1603 15.4064 15.8926 15.3323C15.6005 15.2414 15.1974 15.1497 14.7041 15.0402C14.1367 14.9202 13.5798 14.755 13.0387 14.5462C12.6232 14.3796 12.2577 14.1085 11.9777 13.7593C11.7127 13.4069 11.5769 12.9741 11.5932 12.5336C11.5927 12.0837 11.7407 11.6463 12.0142 11.2892C12.3239 10.903 12.7356 10.6113 13.2026 10.4472C13.796 10.2381 14.4225 10.1391 15.0514 10.1551C15.5467 10.1486 16.0402 10.2162 16.5156 10.3555C16.8852 10.4627 17.2321 10.6364 17.5393 10.8682C17.7844 11.0509 17.99 11.2813 18.1437 11.5455C18.261 11.7516 18.3241 11.9841 18.327 12.2213C18.3274 12.3245 18.3064 12.4266 18.2653 12.5212C18.2243 12.6159 18.1641 12.701 18.0885 12.7712C18.0134 12.85 17.9224 12.9118 17.8216 12.9528C17.7207 12.9938 17.6124 13.0129 17.5036 13.0089C17.3268 13.0193 17.152 12.9674 17.0096 12.8621C16.8627 12.7249 16.7391 12.5646 16.6437 12.3875C16.4981 12.097 16.292 11.8409 16.0394 11.6364C15.701 11.4248 15.3031 11.3285 14.9053 11.3622C14.4946 11.343 14.0873 11.4448 13.7339 11.655C13.607 11.7233 13.4998 11.8233 13.4229 11.9453C13.346 12.0672 13.302 12.207 13.2951 12.351C13.2959 12.5091 13.347 12.6628 13.4411 12.7899C13.5545 12.9258 13.6989 13.0323 13.8621 13.1006C14.029 13.1917 14.2075 13.2597 14.3927 13.3026C14.576 13.3569 14.8688 13.4299 15.289 13.5216C15.8017 13.6319 16.2779 13.7593 16.6989 13.8875C17.08 14.0005 17.4432 14.1668 17.7778 14.3815C18.0627 14.5688 18.3006 14.8191 18.473 15.1132C18.6495 15.4452 18.7377 15.817 18.7294 16.1929C18.7512 16.6966 18.6029 17.1929 18.3083 17.602Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15.0427"
                    cy="14.4997"
                    r="14.4997"
                    fill="#317EF3"
                  />
                  <path
                    d="M20.7049 9.87427C19.7671 9.89076 18.8635 10.2297 18.1462 10.834C17.4289 11.4383 16.9415 12.2712 16.766 13.1926C15.8854 11.8239 15.1955 10.3414 14.7157 8.78613H12.6833V14.1818C12.6833 14.6922 12.4805 15.1817 12.1196 15.5426C11.7587 15.9035 11.2692 16.1063 10.7588 16.1063C10.2484 16.1063 9.75891 15.9035 9.398 15.5426C9.0371 15.1817 8.83434 14.6922 8.83434 14.1818V8.78613L6.79297 8.8311V14.2268C6.79893 15.2762 7.22153 16.2803 7.9678 17.0181C8.71407 17.756 9.72288 18.1671 10.7723 18.1612C11.8217 18.1552 12.8258 17.7326 13.5636 16.9863C14.3015 16.2401 14.7126 15.2313 14.7067 14.1818V13.2825C15.1381 14.1288 15.6342 14.9406 16.1905 15.7106L14.9495 21.6549H17.0358L17.9351 17.3293C18.7685 17.8649 19.7412 18.1433 20.7319 18.1297C21.8218 18.1297 22.8671 17.6967 23.6379 16.926C24.4086 16.1553 24.8416 15.1099 24.8416 14.02C24.8416 12.93 24.4086 11.8847 23.6379 11.1139C22.8671 10.3432 21.8218 9.91024 20.7319 9.91024L20.7049 9.87427ZM20.7049 16.0164C19.8598 15.9891 19.05 15.6715 18.4117 15.1171L18.6185 14.2987V14.2538C18.7624 13.3545 19.2121 11.9156 20.7319 11.9156C20.9983 11.9133 21.2626 11.9636 21.5096 12.0636C21.7566 12.1637 21.9814 12.3115 22.1711 12.4987C22.3607 12.6859 22.5116 12.9087 22.6149 13.1543C22.7183 13.3999 22.7721 13.6636 22.7732 13.93C22.754 14.4696 22.534 14.9825 22.1564 15.3684C21.7789 15.7543 21.2709 15.9853 20.7319 16.0164H20.7049Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15.2243"
                    cy="14.4997"
                    r="14.4997"
                    fill="#317EF3"
                  />
                  <path
                    d="M19.0254 18.4031V11.5448H12.1671V11.1161C12.1671 10.407 12.7439 9.83018 13.453 9.83018H14.739V7.2583H13.453C12.4302 7.25957 11.4497 7.66643 10.7265 8.38963C10.0033 9.11284 9.59647 10.0933 9.5952 11.1161V11.5448H7.88062V14.1166H9.5952V18.4031H7.88062V20.975H13.8817V18.4031H12.1671V14.1166H16.4775V18.4031H14.739V20.975H20.74V18.4031H19.0254Z"
                    fill="white"
                  />
                  <path
                    d="M17.7388 9.83018C18.449 9.83018 19.0248 9.25444 19.0248 8.54424C19.0248 7.83403 18.449 7.2583 17.7388 7.2583C17.0286 7.2583 16.4529 7.83403 16.4529 8.54424C16.4529 9.25444 17.0286 9.83018 17.7388 9.83018Z"
                    fill="white"
                  />
                </svg>
                <div
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer"
                >
                  <AddIcon></AddIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[66%]">
          <div className="flex justify-between mb-6 items-center">
            <p className="text-[#292D32] text-[20px] font-[600]">
              Personal Information
            </p>
            {!editPersonalInformation && (
              <button
                onClick={() =>
                  setEditPersonalInformation(!editPersonalInformation)
                }
                className="bg-[#2377FC] rounded-[8px] flex justify-center gap-2 w-[180px] h-[42px] cursor-pointer"
              >
                <p className="text-[#FFFFFF] text-[16px] font-[600] text-center my-auto">
                  Edit Information
                </p>
                <svg
                  className="my-auto"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8144 3.00002L4.9727 10.2417C4.71436 10.5167 4.46436 11.0584 4.41436 11.4334L4.10603 14.1333C3.9977 15.1083 4.6977 15.775 5.66436 15.6084L8.3477 15.15C8.7227 15.0834 9.2477 14.8084 9.50603 14.525L16.3477 7.28335C17.531 6.03335 18.0644 4.60835 16.2227 2.86668C14.3894 1.14168 12.9977 1.75002 11.8144 3.00002Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6729 4.20825C11.0312 6.50825 12.8979 8.26658 15.2145 8.49992"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.2644 18.3333H18.2644"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="p-6 border border-[#E5E9EB] rounded-[16px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  First Name
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">John</p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="text"
                    defaultValue="John"
                  />
                )}
              </div>
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Last Name
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">Doe</p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="text"
                    defaultValue="Doe"
                  />
                )}
              </div>
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Email
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">
                    john.doe@example.com
                  </p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="email"
                    defaultValue="john.doe@example.com"
                  />
                )}
              </div>
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Phone Number
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">
                    123-456-7890
                  </p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="text"
                    defaultValue="123-456-7890"
                  />
                )}
              </div>
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Date of Birth
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">
                    1990-01-01
                  </p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="date"
                    defaultValue="1990-01-01"
                  />
                )}
              </div>
              <div>
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Gender
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">Male</p>
                ) : (
                  <DropDown
                    title="Male"
                    options={[
                      { id: 1, name: "Male" },
                      { id: 2, name: "Female" },
                      { id: 3, name: "Other" },
                    ]}
                    onChange={() => {}}
                    width="100%"
                    height="42px"
                    bgColor={false}
                  />
                )}
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-[#292D32] text-[16px] font-[600] mb-1">
                  Address
                </label>
                {!editPersonalInformation ? (
                  <p className="text-[#71717A] text-[16px] font-[500]">
                    123 Main St
                  </p>
                ) : (
                  <input
                    className="w-full border border-[#E5E9EB] rounded-[8px] px-4 py-1.5 text-[#292D32] text-[16px] font-[500] focus:outline-none focus:ring-1 ring-[#5D5FEF]"
                    type="text"
                    defaultValue="123 Main St"
                  />
                )}
              </div>
              {editPersonalInformation && (
                <div className="col-span-2 flex justify-end border-t">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      onClick={() =>
                        setEditPersonalInformation(!editPersonalInformation)
                      }
                      className="mt-8 bg-[#F0F5FF] text-[#2377FC] text-[16px] font-[600] w-[140px] h-[38px] pt-1.5 rounded-[8px] cursor-pointer"
                    >
                      <p className="text-center">Cancel</p>
                    </div>
                    <div className="mt-8 bg-[#2377FC] rounded-[8px] w-[140px] h-[38px] pt-1.5 cursor-pointer">
                      <p className="text-[#FFFFFF] text-[16px] font-[600] text-center">
                        Update
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <PaymentHistoryTable paymentHistory={paymentHistory} />
      </div>
      <p className="mt-6 text-[20px] font-[600]">Workspaces</p>
      <div className="flex gap-4 my-4">
        <WorkspaceCard />
        <WorkspaceCard disabled={true} />
      </div>
      {showModal && <SocialProfileModal setShow={setShowModal} />}
    </div>
  );
}
