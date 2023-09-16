import Image from "next/image";
import React from "react";
import ConverCurrency from "./dashboard/ConverCurrency";
import History from "./dashboard/History";
import Markets from "./dashboard/Markets";
import Assets from "./dashboard/Assets";
import Chart1 from "./dashboard/Chart1";

const Dashboard = () => {
  return (
    <div className="overflow-scroll">
      {/* Top card */}
      <div className="grid grid-cols-4 gap-6 w-full p-6">
        {/* Report card 1 */}
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          {/* card top */}
          <div className="flex justify-between items-center gap-2">
            <div className="bg-[#2F80ED33] flex justify-center items-center w-11 h-11 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
              >
                <path
                  d="M25 5.78125V3.09375C25 1.61159 23.7666 0.40625 22.25 0.40625H4.375C2.10075 0.40625 0.25 2.21494 0.25 4.4375V20.5625C0.25 23.5201 2.71675 24.5938 4.375 24.5938H25C26.5166 24.5938 27.75 23.3884 27.75 21.9062V8.46875C27.75 6.98659 26.5166 5.78125 25 5.78125ZM22.25 17.875H19.5V12.5H22.25V17.875ZM4.375 5.78125C4.02097 5.76577 3.68668 5.61744 3.44175 5.36713C3.19683 5.11682 3.06013 4.78383 3.06013 4.4375C3.06013 4.09117 3.19683 3.75818 3.44175 3.50787C3.68668 3.25756 4.02097 3.10923 4.375 3.09375H22.25V5.78125H4.375Z"
                  fill="#3380FF"
                />
              </svg>
            </div>
            <h3 className="font-bold text-lg">Estimated Balance</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                stroke="#5E6E78"
                stroke-opacity="0.37"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#5E6E78"
                stroke-opacity="0.37"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1 className="font-bold text-2xl">$123,987</h1>
          {/* card bottom */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">Monthly Profit</p>
            <span className="text-green-500 text-xs font-bold">+$2560.78</span>
            <span className="bg-green-200 text-xs font-bold p-1.5 rounded-full text-green-500">
              +14.67%
            </span>
          </div>
        </div>

        {/* Report card 2 */}
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          {/* card top */}
          <div className="flex items-center gap-3">
            <div className="bg-[#FF9C0733] flex justify-center items-center w-11 h-11 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="25"
                viewBox="0 0 19 25"
                fill="none"
              >
                <path
                  d="M15.1883 12.1188C16.5287 11.4489 17.3818 10.2579 17.1837 8.27805C16.9247 5.56872 14.6479 4.66065 11.6319 4.40763V0.65625H9.28606V4.30341C8.67674 4.30341 8.05219 4.31829 7.42769 4.33318V0.65625H5.08185V4.40763C4.21937 4.43309 3.21487 4.42067 0.375 4.40763V6.84896C2.22709 6.81693 3.19887 6.70062 3.42152 7.8612V18.1328C3.28013 19.0536 2.52607 18.921 0.847184 18.892L0.375048 21.6162C4.65221 21.6162 5.0819 21.6311 5.0819 21.6311V24.8438H7.42773V21.6758C8.06746 21.6906 8.69201 21.6906 9.28611 21.6906V24.8438H11.6319V21.6311C15.5619 21.4227 18.1891 20.4551 18.5395 16.8377C18.8136 13.9349 17.4122 12.6397 15.1883 12.1188V12.1188ZM7.47342 7.0127C8.79865 7.0127 12.9419 6.61082 12.9419 9.30522C12.9419 11.8806 8.7987 11.5828 7.47342 11.5828V7.0127V7.0127ZM7.47342 18.9069V13.8753C9.05761 13.8753 13.9088 13.4436 13.9088 16.3912C13.9087 19.2344 9.05761 18.9069 7.47342 18.9069Z"
                  fill="#FFB849"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">BTCUSDT</h3>
              <p className="text-sm text-gray-500">Bitcoin</p>
            </div>
          </div>
          <div className="flex justify-between items-end gap-4">
            <h1 className="font-bold text-2xl">$23,738</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="52"
              viewBox="0 0 139 52"
              fill="none"
            >
              <path
                d="M1 28.4459L2.34314 29.0392C3.68627 29.6326 6.37255 30.8192 9.05882 33.0851C11.7451 35.3509 14.4314 38.6958 17.1176 41.4273C19.8039 44.1588 22.4902 46.2769 25.1765 42.8018C27.8627 39.3267 30.549 30.2585 33.2353 31.1485C35.9216 32.0386 38.6078 42.8871 41.2941 47.6589C43.9804 52.4307 46.6667 51.126 49.3529 49.6189C52.0392 48.1119 54.7255 46.4025 57.4118 41.7204C60.098 37.0382 62.7843 29.3833 65.4706 26.3144C68.1569 23.2456 70.8431 24.7628 73.5294 22.0711C76.2157 19.3794 78.902 12.4787 81.5882 9.81683C84.2745 7.15501 86.9608 8.73209 89.6471 12.6043C92.3333 16.4766 95.0196 22.644 97.7059 22.4357C100.392 22.2274 103.078 15.6434 105.765 15.1357C108.451 14.6281 111.137 20.1968 113.824 25.522C116.51 30.8472 119.196 35.929 121.882 32.1767C124.569 28.4244 127.255 15.8379 129.941 9.16949C132.627 2.50103 135.314 1.75051 136.657 1.37526L138 1"
                stroke="#F0C98C"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* card bottom */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">PNL Daily</p>
            <span className="text-orange-700 text-xs font-bold">-$16.78</span>
            <span className="bg-green-200 text-xs font-bold p-1.5 rounded-full text-green-500">
              +14.67%
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          {/* card top */}
          <div className="flex items-center gap-3">
            <div className="bg-[#4D21FF33] flex justify-center items-center w-11 h-11 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="25"
                viewBox="0 0 17 25"
                fill="none"
              >
                <path
                  d="M8.34724 18.7653L0.75 14.3837L8.3426 24.8438L15.9437 14.3837L8.3426 18.7653H8.34724ZM8.46016 0.65625L0.866012 12.9741L8.46016 17.3632L16.0574 12.9786L8.46016 0.65625Z"
                  fill="#9181DB"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">ETHUSDT</h3>
              <p className="text-sm text-gray-500">Ethereum</p>
            </div>
          </div>
          {/* card center */}
          <div className="flex justify-between items-end gap-4">
            <h1 className="font-bold text-2xl">$23,738</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="58"
              viewBox="0 0 135 58"
              fill="none"
            >
              <path
                d="M1 49.4104L3.01515 49.2568C5.0303 49.1033 9.06061 48.7961 13.0909 49.8659C17.1212 50.9358 21.1515 53.3825 25.1818 55.1298C29.2121 56.877 33.2424 57.9247 37.2727 55.8659C41.303 53.807 45.3333 48.6416 49.3636 49.4377C53.3939 50.2338 57.4242 56.9913 61.4546 49.2878C65.4849 41.5843 69.5152 19.4197 73.5455 9.04693C77.5758 -1.3258 81.6061 0.0933569 85.6364 9.85389C89.6667 19.6144 93.697 37.7163 97.7273 37.7393C101.758 37.7623 105.788 19.7064 109.818 15.2313C113.848 10.7562 117.879 19.8619 121.909 19.7535C125.939 19.6451 129.97 10.3226 131.985 5.66128L134 1"
                stroke="#9181DB"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* card bottom */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">Monthly Profit</p>
            <span className="text-green-500 text-xs font-bold">+$189.91</span>
            <span className="bg-green-200 text-xs font-bold p-1.5 rounded-full text-green-500">
              +24.68%
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          {/* card top */}
          <div className="flex items-center gap-3">
            <div className="bg-[#4D21FF33] flex justify-center items-center w-11 h-11 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="25"
                viewBox="0 0 17 25"
                fill="none"
              >
                <path
                  d="M8.34724 18.7653L0.75 14.3837L8.3426 24.8438L15.9437 14.3837L8.3426 18.7653H8.34724ZM8.46016 0.65625L0.866012 12.9741L8.46016 17.3632L16.0574 12.9786L8.46016 0.65625Z"
                  fill="#9181DB"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">SOLUSDT</h3>
              <p className="text-sm text-gray-500">Solana</p>
            </div>
          </div>
          {/* card center */}
          <div className="flex justify-between items-end gap-4">
            <h1 className="font-bold text-2xl">$23,738</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="138"
              height="49"
              viewBox="0 0 138 49"
              fill="none"
            >
              <path
                d="M1 34.9104L3.01515 34.7568C5.0303 34.6033 9.06061 34.2961 13.0909 35.3659C17.1212 36.4358 21.1515 38.8825 25.1818 40.6298C29.2121 42.377 34.4697 32.5588 38.5 30.5C42.5303 28.4412 45.4697 46.2039 49.5 47C53.5303 47.7961 57.4242 42.4913 61.4546 34.7878C65.4849 27.0843 69.5152 20.9197 73.5455 10.5469C77.5758 0.174207 81.6061 1.59337 85.6364 11.3539C89.6667 21.1144 93.697 23.2163 97.7273 23.2393C101.758 23.2623 106.47 32.9751 110.5 28.5C114.53 24.0249 117.879 5.36193 121.909 5.25352C125.939 5.14511 131.5 10 137 1"
                stroke="#F0A0A0"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* card bottom */}
          <div className="flex justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">Monthly Profit</p>
            <span className="text-green-500 text-xs font-bold">+$556.14</span>
            <span className="bg-green-200 text-xs font-bold p-1.5 rounded-full text-green-500">
              +64.11%
            </span>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className="flex gap-6 px-8">
        {/* Chart 1 */}
        <Chart1 />

        {/* Markets */}
        <Markets />
      </div>

      {/* row 3 */}
      <div className="flex gap-6 p-8">
        {/* Assets */}
        <Assets />

        {/* Convert block */}
        <ConverCurrency />

        {/* history */}
        <History />
      </div>
    </div>
  );
};

export default Dashboard;
