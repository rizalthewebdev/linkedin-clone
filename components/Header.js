import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
   AppsOutlined,
   BusinessCenter,
   Chat,
   Groups,
   HomeRounded,
   Notifications,
   SearchRounded,
} from "@mui/icons-material";
import HeaderLink from "./HeaderLink";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
// import { useSession } from "next-auth/react";

const Header = () => {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme, resolvedTheme } = useTheme();

   const spring = {
      type: "spring",
      stiffness: 700,
      damping: 30,
   };
   // const { data: session } = useSession();

   useEffect(() => setMounted(true), []);

   return (
      <header className="sticky top-0 dark:bg-zinc-900 w-screen z-40">
         <nav className="max-w-6xl mx-auto py-1.5 px-3 flex items-center justify-between focus-within:shadow-lg">
            {/* Left */}
            <div className="flex item-center space-x-2 w-full max-w-xs">
               {mounted && (
                  <>
                     {resolvedTheme === "dark" ? (
                        <Image
                           src="/linkedinDark.png"
                           alt="linkedin-icon"
                           width={40}
                           height={40}
                        />
                     ) : (
                        <Image
                           src="/linkedin.svg"
                           alt="linkedin-icon"
                           width={40}
                           height={40}
                        />
                     )}
                  </>
               )}

               <div className="flex items-center space-x-1.5 dark:md:bg-zinc-700 px-2 py-0 rounded w-full cursor-pointer">
                  <SearchRounded className="text-black/70 dark:text-zinc-300" />
                  <input
                     type="text"
                     placeholder="Search"
                     className="hidden md:inline-flex text-sm pl-0.5 bg-transparent focus:outline-none placeholder:text-black/70 dark:placeholder:text-zinc-400"
                  />
               </div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-6 justify-end w-full">
               <HeaderLink Icon={HomeRounded} text="Home" feed active hidden />
               <HeaderLink Icon={Groups} text="My Network" feed hidden />
               <HeaderLink Icon={BusinessCenter} text="Jobs" feed />
               <HeaderLink Icon={Chat} text="Messaging" feed />
               <HeaderLink Icon={Notifications} text="Notifications" feed />
               <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
               <HeaderLink Icon={AppsOutlined} text="Work" feed hidden />

               {/* Dark Mode Toggle */}
               {mounted && (
                  <div
                     className={`relative flex items-center px-0.5 h-6 w-12 rounded-full bg-zinc-600 cursor-pointer flex-shrink-0 ${
                        resolvedTheme === "dark"
                           ? "justify-end"
                           : "justify-start"
                     }`}
                     onClick ={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  >
                     <span className="absolute left-0.5 bottom-[1px]">🌜</span>
                     <motion.div
                        className="w-5 h-5 rounded-full bg-white z-40"
                        layout
                        transition={spring}
                     /> 
                     <span className="absolute right-0.5 bottom-[1px]">🌞</span>
                  </div>
               )}
            </div>
         </nav>
      </header>
   );
};

export default Header;
