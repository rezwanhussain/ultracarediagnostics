import Image from "next/image";
import { FiSearch, FiBell, FiSettings, FiUser } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import userImage from '@/public/img/user.png'
import Rezwan from '@/public/img/Rezwan.JPG'
import { ThemeSwitcher } from "../../theme/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="bg-neutral-100 dark:bg-[#1F1F1F] w-full h-14 flex items-center rounded-md gap-2">
      <div className="flex items-center text-black rounded-md px-4 py-2 border-[1px] flex-1 ml-3 w-2/5">
        <FiSearch className="mr-2 text-base dark:text-[#BFBFBF]" />
        <input type={"search"} placeholder="Search" className="text-sm bg-transparent f-full focus:outline-none" />
      </div>
      <div className="flex items-center w-3/5 justify-end mr-6">
        <IoMailOutline className="text-[22px] text-black mx-3 dark:text-white" />
        <FiBell className="text-[22px] text-black mx-3 dark:text-white" />
        <ThemeSwitcher/>
        <FiSettings className="text-[22px] text-black mx-3 mr-7 dark:text-white" />
        <div className="flex items-center">
          <Image src={userImage} width={35} height={35} alt="Profile Picture" className="mr-3 rounded-full" />
          <span className="dark:text-white">Rezwan Hussain</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar