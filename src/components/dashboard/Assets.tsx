import Image from "next/image";
import React from "react";

export default function Assets() {
  return (
    <div className="bg-white flex flex-col rounded-[15px] w-[315px] p-8">
      <h1 className="text-xl font-bold">Assets</h1>
      <div className="flex justify-center -mt-2">
        <Image
          src={"/images/chart/chart2.png"}
          alt="chart1"
          width={257}
          height={257}
        />
      </div>
    </div>
  );
}
