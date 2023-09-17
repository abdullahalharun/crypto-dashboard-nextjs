export default function Markets() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col gap-2 rounded-[15px] w-[478px] p-4">
      <div className="flex items-center gap-2 px-2">
        <h1 className="text-xl font-semibold">Markets</h1>
        <div className="flex gap-2">
          <a
            className="bg-gray-100 dark:bg-dark text-primary rounded-md text-[10px] font-semibold p-1"
            href="#"
          >
            All
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038]  rounded-md text-[10px] dark:text-white font-semibold p-1"
            href="#"
          >
            Metaverse
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038]  rounded-md text-[10px] dark:text-white font-semibold p-1"
            href="#"
          >
            Gaming
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038]  rounded-md text-[10px] dark:text-white font-semibold p-1"
            href="#"
          >
            Defi
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038]  rounded-md text-[10px] dark:text-white font-semibold p-1"
            href="#"
          >
            NFT
          </a>
        </div>
      </div>
      <table className="mt-2 w-full px-4">
        <tr className="border-b border-gray-100">
          <td className="px-2 py-3 text-xs font-semibold">BTCUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Bitcoin
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $23,495
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#21965333] text-[10px] font-semibold py-1 px-2 rounded-full text-[#219653] ">
              +23.4%
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="px-2 py-3 text-xs font-semibold">AXSUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Axie Infinity
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $15.9
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#EB575733] text-[10px] font-semibold py-1 px-2 rounded-full text-[#EB5757] ">
              -7.8%
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="px-2 py-3 text-xs font-semibold">ETHUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Ethereum
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $15,978
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#EB575733] text-[10px] font-semibold py-1 px-2 rounded-full text-[#EB5757] ">
              -0.3%
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="px-2 py-3 text-xs font-semibold">SOLUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Solana
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $495
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#21965333] text-[10px] font-semibold py-1 px-2 rounded-full text-[#219653] ">
              +11.1%
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="px-2 py-3 text-xs font-semibold">BNBUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Binance
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $267
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#21965333] text-[10px] font-semibold py-1 px-2 rounded-full text-[#219653] ">
              +6.7%
            </span>
          </td>
        </tr>
        <tr className=" space-x-2">
          <td className="px-2 py-3 text-xs font-semibold">ADAUSDT</td>
          <td className="px-2 py-3 text-[#5E6E78] text-xs font-semibold">
            Cardano{" "}
          </td>
          <td className="px-2 py-3 text-xs font-medium text-right whitespace-nowrap">
            $0.49
          </td>
          <td className="px-2 py-3 text-center">
            <span className="bg-[#EB575733] text-[10px] font-semibold py-1 px-2 rounded-full text-[#EB5757] ">
              -1.4%
            </span>
          </td>
        </tr>
      </table>
      <div className="flex justify-end px-4">
        <button className="text-[10px] font-semibold border dark:border-gray-6 00 px-3 py-1 rounded-lg text-[#00000066] dark:text-gray-500">
          View All
        </button>
      </div>
    </div>
  );
}
