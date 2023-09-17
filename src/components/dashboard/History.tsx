export default function History() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col rounded-[15px] w-[622px] p-4">
      <div className="flex justify-between items-center gap-4 px-4">
        <h1 className="text-xl font-semibold">History</h1>
        <button className="border dark:border-gray-600 py-1 px-3 font-semibold text-[10px] rounded-lg dark:bg-[#0D0D0D38] text-[#00000066] dark:text-gray-500 mr-4">
          View All
        </button>
      </div>
      <table className="mt-4 w-full px-4">
        <tr className="border-b border-gray-100">
          <td className=" px-2 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12.4854"
                cy="12"
                r="11.5"
                transform="rotate(180 12.4854 12)"
                fill="#219653"
                fill-opacity="0.2"
              />
              <path
                d="M12.7485 6.51313V16.7354M12.7485 16.7354L17.2207 12.2631M12.7485 16.7354L8.27626 12.2631"
                stroke="#219653"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td className="text-xs font-semibold px-2 py-4">Deposit</td>
          <td className="text-[#219653] text-xs font-semibold px-2 py-4">
            +$23,738
          </td>
          <td className="text-xs font-medium text-right whitespace-nowrap px-2 py-4">
            11:34 PM
          </td>
          <td className="text-center px-2 py-4">
            <span className="bg-[#F2C94C33] text-[10px] py-2 px-3 rounded-lg text-[#F2994A]">
              pending
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100 space-x-2">
          <td className="px-2 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12.4854"
                cy="12"
                r="11.5"
                fill="#EB5757"
                fill-opacity="0.2"
              />
              <path
                d="M12.2222 17.4869L12.2222 7.26465M12.2222 7.26465L7.75 11.7369M12.2222 7.26465L16.6944 11.7369"
                stroke="#EB5757"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td className="px-2 py-4 text-xs font-semibold">SANDUSDT</td>
          <td className="text-[#EB5757] text-xs font-semibold px-2 py-4">
            -$576
          </td>
          <td className="px-2 py-4 text-xs font-medium text-right whitespace-nowrap ">
            06:01 AM
          </td>
          <td className="px-2 py-4 text-center ">
            <span className="bg-[#21965333] text-[10px] py-2 px-6 rounded-lg text-[#219653]">
              done
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-100 space-x-2">
          <td className="px-2 py-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12.4854"
                cy="12"
                r="11.5"
                transform="rotate(180 12.4854 12)"
                fill="#219653"
                fill-opacity="0.2"
              />
              <path
                d="M12.7485 6.51313V16.7354M12.7485 16.7354L17.2207 12.2631M12.7485 16.7354L8.27626 12.2631"
                stroke="#219653"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td className="px-2 py-4 text-xs font-semibold">DOGEUSDT</td>
          <td className="text-[#219653] text-xs font-semibold px-2 py-4">
            +$3500
          </td>
          <td className="px-2 py-4 text-xs font-medium text-right whitespace-nowrap ">
            02:10 AM
          </td>
          <td className="px-2 py-4 text-center ">
            <span className="bg-[#21965333] text-[10px] py-2 px-6 rounded-lg text-[#219653]">
              done
            </span>
          </td>
        </tr>
        <tr className=" space-x-2">
          <td className="px-2 py-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12.4854"
                cy="12"
                r="11.5"
                fill="#EB5757"
                fill-opacity="0.2"
              />
              <path
                d="M12.2222 17.4869L12.2222 7.26465M12.2222 7.26465L7.75 11.7369M12.2222 7.26465L16.6944 11.7369"
                stroke="#EB5757"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </td>
          <td className="px-2 py-4 text-xs font-semibold">FTMUSDT</td>
          <td className="text-[#219653] text-xs font-semibold px-2 py-4">
            +$791
          </td>
          <td className="px-2 py-4 text-xs font-medium text-right whitespace-nowrap ">
            06:45 PM
          </td>
          <td className="px-2 py-4 text-center ">
            <span className="bg-[#21965333] text-[10px] py-2 px-6 rounded-lg text-[#219653] ">
              done
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
}
