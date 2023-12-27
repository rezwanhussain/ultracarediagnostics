"use client";
import {FiMoon,FiSun,} from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
 const [mounted, setMounted] = useState(false);
 const { theme, setTheme } = useTheme();

 useEffect(() => {
    setMounted(true);
 }, []);

 if (!mounted) {
    return null;
 }

 return (
    <button
      className={` p-2 rounded-md mx-3  duration-200 bg-slate-200 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <FiMoon className="text-[22px]"/> : <FiSun className="text-[22px]"/>}     
    </button>
 );
};