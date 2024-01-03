"use client";
import { useState, useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiTestTubeLine } from "react-icons/ri";
import { menus } from "@/app/constants/Navigation";
import MenuLinks from "./menuLink/menuLinks";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div
      className={`bg-neutral-100 dark:bg-light-black h-full p-5 pt-8 ${
        open ? "w-60" : "w-20"
      } relative duration-300`}>
      <BsArrowLeftShort
        className={`bg-indigo-700 text-white text-2xl rounded-full absolute -right-3 top-9 border cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex pl-2">
        <RiTestTubeLine
          className={`bg-indigo-700 text-2xl text-white rounded cursor-pointer block float-left mr-2 duration-300 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-neutral-950 dark:text-neutral-100 origin-left font-semibold fw-bol text-lg duraion-300 ${
            !open && "scale-0"
          }`}
        >
          ULTRA<span className="text-indigo-700">CARE</span>
        </h1>
      </div>

      <div className="mt-6  overflow-y-auto">
        {menus.map ((cat, index) => {
          return (
            <ul className="mt-3" key={index}>
              <span key={index} className={`text-xs font-semibold pl-2 ${!open && "hidden"} duration-300`}>{cat.title}</span>
              {
                cat.menuItems.map (item => (
                  <MenuLinks item={item} key={item.title} isOpen={open} />
                ))
              }
            </ul>
          )
        })}
        </div>
    </div>
  );
};

export default Sidebar;
