import Image from "next/image";
import React from "react";

export default function Assets() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col rounded-[15px] w-[315px] p-8">
      <h1 className="text-xl font-bold">Assets</h1>
      <div className="flex justify-center -mt-2">
        <Image
          src={"/images/chart/chart2.png"}
          alt="chart1"
          width={257}
          height={257}
        />
      </div>
      <div className="flex justify-center gap-1">
        <div className="flex items-center bg-[#0060FF1A] text-[#2F80ED] text-xs font-normal px-2 py-2 rounded-[5px]">
          <div className="w-3 h-3 p-1 mr-1 rounded-sm bg-[#2F80ED]"></div> BTC
        </div>
        <div className="flex items-center bg-[#0060FF1A] text-[#2F80ED] text-xs font-normal px-2 py-2 rounded-[5px]">
          <div className="w-3 h-3 p-1 mr-1 rounded-sm bg-[#B1D3FF]"></div> ETH
        </div>
        <div className="flex items-center bg-[#0060FF1A] text-[#2F80ED] text-xs font-normal px-2 py-2 rounded-[5px]">
          <div className="w-3 h-3 p-1 mr-1 rounded-sm bg-[#00C4DF]"></div> ADA
        </div>
        <div className="flex items-center bg-[#0060FF1A] text-[#2F80ED] text-xs font-normal px-2 py-2 rounded-[5px]">
          <div className="w-3 h-3 p-1 mr-1 rounded-sm bg-[#155AB6]"></div>{" "}
          Others
        </div>
      </div>
    </div>
  );
}
