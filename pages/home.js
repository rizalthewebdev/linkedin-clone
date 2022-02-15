import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";

const home = ({ providers }) => {
   return (
      <div className="py-2 px-3 mx-auto max-w-6xl">
         <Head>
            <title>LinkedIn: Login or Register</title>
            <meta
               name="description"
               content="LinkedIn clone by Khoerul Rizal"
            />
            <link rel="icon" href="/linkedin.svg" />
         </Head>
         <header className="flex items-center justify-around">
            <div className="relative w-32 h-10">
               <Image
                  src="/linkedinTypo.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
               />
            </div>
            <div className="flex space-x-10 items-center ml-auto">
               <div className="hidden sm:flex space-x-8 pr-4x">
                  <HeaderLink Icon={ExploreIcon} text="Discover" />
                  <HeaderLink Icon={GroupIcon} text="People" />
                  <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
                  <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
               </div>
               {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                     <div className="pl-4">
                        <button
                           className="px-5 py-1.5 text-sm font-semibold hover:ring-1 ring-blue-600 rounded-full border border-blue-600 text-blue-600"
                           onClick={() =>
                              signIn(provider.id, { callbackUrl: "/" })
                           }
                        >
                           Sign In
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </header>
         <main className="flex flex-col lg:flex-row w-full mx-auto pt-28 lg:pt-20 overflow-hidden">
            <div className="space-y-20 md:space-y-14 lg:space-y-10 z-10 mx-auto md:mx-0">
               <h1 className="text-3xl text-center md:text-left md:text-5xl text-orange-900 font-thin max-w-lg leading-snug">
                  Welcome to your professional community
               </h1>
               <div className="space-y-4">
                  <div className="intent">
                     <div className="text-xl">Search for a job</div>
                     <ArrowForwardIosRoundedIcon className="text-gray-700" />
                  </div>
                  <div className="intent">
                     <div className="text-xl">Find a person you know</div>
                     <ArrowForwardIosRoundedIcon className="text-gray-700" />
                  </div>
                  <div className="intent">
                     <div className="text-xl">Learn a new skill</div>
                     <ArrowForwardIosRoundedIcon className="text-gray-700" />
                  </div>
               </div>
            </div>
            <div className="hidden md:inline-block md:absolute lg:-top-1 md:top-32 md:-right-16 lg:right-5 md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[650px] -z-10">
               <Image src="/imageHome.svg" alt="" layout="fill" />
            </div>
         </main>
      </div>
   );
};

export default home;

export const getServerSideProps = async (context) => {
   const providers = await getProviders();

   return {
      props: {
         providers,
      },
   };
};
