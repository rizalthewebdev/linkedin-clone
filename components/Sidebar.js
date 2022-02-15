import { BookmarkOutlined, AddRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
   const { data: session } = useSession();

   return (
      <div className="space-y-2 min-w-max max-w-lg">
         <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
            <div className="relative w-full h-14">
               <Image
                  src="/bg-profile-sidebar.jpg"
                  alt="bg-profile-sidebar"
                  layout="fill"
                  priority
               />
            </div>
            <Avatar
               onClick={signOut}
               className="!w-14 !h-14 !absolute !border-2 !top-4 !cursor-pointer"
               src={session?.user?.image}
            />
            <div className="mt-5 py-4 space-x-0.5">
               <h4 className="hover:underline decoration-purple-700 underline-offset-2 cursor-pointer">
                  {session?.user?.name}
               </h4>
               <p className="text-black/60 dark:text-white/75 text-sm">
                  {session?.user?.email}
               </p>
            </div>
            <div className="hidden md:inline text-left dark:text-white/75 text-sm">
               <div className="font-medium sidebarButton space-y-0">
                  <div className="flex justify-between space-x-2">
                     <h4>Who viewed your profile</h4>
                     <span className="text-blue-500">132</span>
                  </div>
                  <div className="flex justify-between space-x-2">
                     <h4>Views of your posts</h4>
                     <span className="text-blue-500">1,364</span>
                  </div>
               </div>

               <div className="sidebarButton">
                  <h4 className="leading-4 text-xs">
                     Access exlusive tools & insight
                  </h4>
                  <h4 className="dark:text-white font-medium">
                     <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
                     Try Premium for free
                  </h4>
               </div>

               <div className="sidebarButton flex items-center space-x-1.5">
                  <BookmarkOutlined className="!-ml-1" />
                  <h4 className="dark:text-white font-medium">My Items</h4>
               </div>
            </div>
         </div>
         <div className="hidden md:flex flex-col bg-white dark:bg-zinc-900 text-black/70 dark:text-white/70 hover:opacity-100 rounded-lg overflow-hidden space-y-2 pt-2.5 sticky top-16 border border-gray-300 dark:border-none">
            <p className="sidebarLink">Groups</p>
            <div className="flex justify-between items-center">
               <p className="sidebarLink">Events</p>
               <AddRounded className="!h-5 cursor-pointer" />
            </div>
            <p className="sidebarLink">Followed Hastags</p>
            <div className="sidebarButton flex justify-center items-center">
               <h4 className="dark:text-white font-medium text-sm">
                  Discover More
               </h4>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
