import {FiUsers } from "react-icons/fi";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="my-6 g-neutral-100 trnsparent w-full">
      <h1>Dashboard</h1>
      <div className="flex gap-5">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <FiUsers className="text-2xl text-white"/>
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Patients</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
            <FaCalendarCheck className="text-2xl text-white"/>
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Appointments</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">30</strong>
              <span className="text-sm text-green-500 pl-2">+10</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <FiUsers className="text-2xl text-white"/>
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Revenue</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
            <FaMoneyCheckAlt className="text-2xl text-white"/>
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Revenue</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">$1500.00</strong>
              <span className="text-sm text-green-500 pl-2">+100</span>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </div>
  )
}

export default Dashboard

function BoxWrapper({children}) {
  return <div className="p-4 flex-1 h-max flex bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">{children}</div>
}