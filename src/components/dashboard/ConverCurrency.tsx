import React from "react";

export default function ConverCurrency() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col gap-4 rounded-[15px] w-[366px] p-8">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-xl font-semibold">Convert </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="26"
          viewBox="0 0 35 26"
          fill="none"
        >
          <path
            d="M13.4854 15C13.0875 15 12.706 14.842 12.4247 14.5607C12.1434 14.2794 11.9854 13.8978 11.9854 13.5C11.9854 13.1022 12.1434 12.7206 12.4247 12.4393C12.706 12.158 13.0875 12 13.4854 12C13.8832 12 14.2647 12.158 14.546 12.4393C14.8273 12.7206 14.9854 13.1022 14.9854 13.5C14.9854 13.8978 14.8273 14.2794 14.546 14.5607C14.2647 14.842 13.8832 15 13.4854 15ZM18.4854 15C18.0875 15 17.706 14.842 17.4247 14.5607C17.1434 14.2794 16.9854 13.8978 16.9854 13.5C16.9854 13.1022 17.1434 12.7206 17.4247 12.4393C17.706 12.158 18.0875 12 18.4854 12C18.8832 12 19.2647 12.158 19.546 12.4393C19.8273 12.7206 19.9854 13.1022 19.9854 13.5C19.9854 13.8978 19.8273 14.2794 19.546 14.5607C19.2647 14.842 18.8832 15 18.4854 15ZM23.4854 15C23.0875 15 22.706 14.842 22.4247 14.5607C22.1434 14.2794 21.9854 13.8978 21.9854 13.5C21.9854 13.1022 22.1434 12.7206 22.4247 12.4393C22.706 12.158 23.0875 12 23.4854 12C23.8832 12 24.2647 12.158 24.546 12.4393C24.8273 12.7206 24.9854 13.1022 24.9854 13.5C24.9854 13.8978 24.8273 14.2794 24.546 14.5607C24.2647 14.842 23.8832 15 23.4854 15Z"
            fill="#7F8A9B"
            fill-opacity="0.4"
          />
          <rect
            x="1.13535"
            y="0.15"
            width="33.7"
            height="25.7"
            rx="5.85"
            stroke="#7F8A9B"
            stroke-opacity="0.3"
            stroke-width="0.3"
          />
        </svg>
      </div>
      <div className="bg-[#F9F9FA] dark:bg-[#121212] flex justify-between items-center rounded-md w-[304px]">
        <input
          type="text"
          placeholder="100"
          className="focus:outline-none bg-[#F9F9FA] dark:bg-[#121212] rounded-md p-2 text-[#626D7D] w-2/3"
        />

        <select
          name="amount"
          id="amount"
          className="bg-[#C7E4DB] rounded-md p-1 mr-3  text-[#219653]"
        >
          <option value="USDT">
            <span className="font-semibold text-[10px]">USDT </span>
          </option>
          <option value="BTC">
            <span className="font-semibold text-[10px]">BTC</span>
          </option>
        </select>
      </div>
      <div className="bg-[#F9F9FA] dark:bg-[#121212] flex justify-between items-center rounded-md w-[304px]">
        <input
          type="text"
          placeholder="0.0043"
          className="focus:outline-none bg-[#F9F9FA] dark:bg-[#121212] rounded-md p-2 text-[#626D7D] w-2/3"
        />
        <select
          name="amount"
          id="amount"
          className="bg-[#FCF4DB] dark:bg-[#3C2E05] rounded-lg p-1 mr-3 text-start text-[#FF7C04] "
        >
          <option value="BTC">
            <span className="font-semibold text-[10px] ">BTC</span>
          </option>
          <option value="USDT">
            <span className="font-semibold text-[10px]">USDT </span>
          </option>
        </select>
      </div>

      <button className="p-2 rounded-lg bg-[#3380FF] text-white dark:text-black text-sm font-semibold">
        Convert Now
      </button>
      <p className="text-[8px] font-normal text-[#626D7D]">
        The ultimate price and output is determined by the amount...
      </p>
    </div>
  );
}
