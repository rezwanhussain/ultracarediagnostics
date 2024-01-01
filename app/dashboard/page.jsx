import {FiUsers } from "react-icons/fi";
import { FaCalendarCheck } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import Chart from "../ui/dashboard/chart/Chart";
import BuyerProfilePieChart from "../ui/dashboard/pieChart/BuyerProfilePieChart";
import RecentAppointments from "../ui/dashboard/recentAppointments/RecentAppointments";
import AppointmentCallender from "../ui/dashboard/appointmentCallender/AppointmentCallender";



const Dashboard = () => {
  return (
    <div className="my-6 trnsparent w-full">
      <h1>Dashboard</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 sm:gap-3">
        <div className="flex p-4 bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <FiUsers className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">Total Patients </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </div>

        <div className="flex p-4 bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
            <FaCalendarCheck className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">Total Appointments </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </div>

        <div className="flex p-4 bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
            <FiUsers className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">Total Tests </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-semibold">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </div>

        <div className="flex p-4 bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
            <FaMoneyCheckAlt className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-normal">Total Sales </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 dark:text-white font-medium">500</strong>
              <span className="text-sm text-green-500 pl-2">+124</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
      <Chart />
      <BuyerProfilePieChart/>
      </div>
      <div className="w-full grid grid-cols-3 gap-4">
      <RecentAppointments/>
      <AppointmentCallender/>
      </div>
    </div>
  )
}

export default Dashboard

// function BoxWrapper({children}) {
//   return <div className="p-4 flex-1 h-max flex bg-neutral-100 dark:bg-light-black rounded border-2 border-zinc-200 dark:border-neutral-800 dark:text-[#BFBFBF]">{children}</div>
// }