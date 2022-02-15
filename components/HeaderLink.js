import React from "react";

const HeaderLink = ({ Icon, text, avatar, feed, active, hidden }) => {
   return (
      <div
         className={`${
            hidden && "hidden md:inline-flex"
         } cursor-pointer flex flex-col justify-center items-center ${
            feed
               ? "text-black/60 hover:text-black lg:-mb-1.5 space-y-1 dark:text-white/60 dark:hover:text-white"
               : "text-gray-500 hover:text-gray-700"
         } ${active && "!text-black dark:!text-white"}`}
      >
         {avatar ? <Icon className="!w-7 !h-7 lg:!-mb-1" /> : <Icon />}
         <p
            className={`${
               feed && "hidden lg:flex justify-center w-full mx-auto"
            } text-sm`}
         >
            {text}
         </p>
         {active && (
            <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
         )}
      </div>
   );
};

export default HeaderLink;
