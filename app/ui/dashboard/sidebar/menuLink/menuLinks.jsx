import Link from "next/link"

const MenuLinks = ({item, isOpen}) => {
  return (
    <li className="hover:bg-neutral-300 dark:hover:bg-indigo-700 rounded-md pt-2.5 pb-2.5 pl-2">
        <Link href={item.path} className="flex items-center gap-x-3 text-sm font-medium text-black dark:text-[#BFBFBF] hover:text-indigo-500"><span className="text-xl">{item.icon}</span>
        <span className={`${!isOpen && "hidden"} duration-300`}>{item.title}</span></Link>
    </li>
  )
}

export default MenuLinks