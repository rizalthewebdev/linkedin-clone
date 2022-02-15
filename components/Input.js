import React from "react";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
   Article,
   BusinessCenter,
   PhotoSizeSelectActual,
   VideoCameraBack,
} from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";

const Input = () => {
   const { data: session } = useSession();
   const [modalOpen, setModalOpen] = useRecoilState(modalState);
   const [modalType, setModalType] = useRecoilState(modalTypeState);

   return (
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none">
         <div className="flex items-center space-x-2">
            <Avatar
               className="!w-10 !h-10 cursor-pointer"
               src={session?.user?.image}
            />
            <motion.button
               whileHover={{ scale: 1.01 }}
               whileTap={{ scale: 0.99 }}
               className="w-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium text-left rounded-full"
               onClick={() => {
                  setModalOpen(true);
                  setModalType("dropIn");
               }}
            >
               Start a post
            </motion.button>
         </div>
         <div className="flex items-center flex-wrap justify-center gap-4 md:gap-x-10">
            <button className="inputButton group">
               <PhotoSizeSelectActual className="text-blue-400" />
               <h4 className="opacity-75 group-hover:opacity-100">Photo</h4>
            </button>
            <button className="inputButton group">
               <VideoCameraBack className="text-green-400" />
               <h4 className="opacity-75 group-hover:opacity-100">Video</h4>
            </button>
            <button className="inputButton group">
               <BusinessCenter className="text-blue-300" />
               <h4 className="opacity-75 group-hover:opacity-100">Job</h4>
            </button>
            <button className="inputButton group">
               <Article className="text-red-400" />
               <h4 className="opacity-75 group-hover:opacity-100 whitespace-nowrap">
                  Write Article
               </h4>
            </button>
         </div>
      </div>
   );
};

export default Input;
