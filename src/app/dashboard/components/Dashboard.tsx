"use client";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Image from "next/image";
import background from "@/assets/images/Products 2.png";
import image from "@/assets/images/card-2.jpg";
import Discovered from "@/components/discovered";
import Topcreators from "@/components/topcreators";
import History from "@/components/history";
import Nfts from "@/components/trending";
import Trending from "@/components/trending";
import Recently from "@/components/recently";
import Info from "@/components/info";
import Night from "@/components/night";
import Notification from "@/components/notification";
import Rectangle from "@/components/rectangle";
import Searchicon from "@/components/searchicon";
import Table from "@/components/table";
import Kanban from "@/components/kanban";
import ProfileIcon from "@/components/profile";
import Signin from "@/components/signin";
const Dashboard = () => {
  return (
    <Box>
      <div className="bg-[#F1F4FB]  flex mt-20">
        <div className="bg-[#ffffff] !hidden lg:!flex w-[290px]  flex-col  ">
          {/* <div className="text-[#2B3674] text-[26px] font-bold flex justify-center">
            HORIZON <span>FREE</span>
          </div> */}
          {/* <hr className="mt-10" /> */}
          <div className="pl-10">
            <div className="flex  gap-5 mt-10">
              <div className="text-[#4318ff]">
                <HomeIcon />
              </div>
              <div className="text-[16px] font-bold text-[#2B3674]">
                Dashboard
              </div>
            </div>
            <div className="flex  gap-5 mt-10">
              <div className="text-[#A3AED0]">
                <LocalGroceryStoreIcon />
              </div>
              <div className="text-[16px] text-[#A3AED0]">NFT Marketplace</div>
            </div>
            <div className="flex  gap-5 mt-10">
              <div className="text-[#A3AED0]">
                <Table />
              </div>
              <div className="text-[16px] text-[#A3AED0]">Tables</div>
            </div>
            <div className="flex  gap-5 mt-10">
              <div className="text-[#A3AED0]">
                <Kanban />
              </div>
              <div className="text-[16px] text-[#A3AED0]">Kanban</div>
            </div>
            <div className="flex  gap-5 mt-10">
              <div className="text-[#A3AED0]">
                <ProfileIcon />
              </div>
              <div className="text-[16px] text-[#A3AED0]">Profile</div>
            </div>
            <div className="flex  gap-5 mt-10">
              <div className="text-[#A3AED0]">
                <Signin />
              </div>
              <div className="text-[16px] mb-10 text-[#A3AED0]">Sign In</div>
            </div>
          </div>
        </div>
        <div className="w-full pl-5 pr-5 pt-5">
          <div className="flex items-center  justify-between">
            <div>
              <p className="!text-[16px] sm:!text-[26px] lg:!text-[34px] font-bold text-[#2B3674]">
                NFT Marketplace
              </p>
            </div>
            <div className="w-[150px] sm:w-[200px] justify-center lg:w-[559px] h-[40px] lg:h-[61px] bg-[#ffffff] flex gap-2 items-center rounded-full">
              <div className="relative !hidden lg:!flex left-8">
                <Searchicon />
              </div>
              <div className="!hidden lg:!flex">
                <input
                  className="w-[223px] h-[41px]  bg-[#F4F7FE] rounded-full pl-10"
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="bg-[#F4F7FE] !hidden lg:!flex gap-2 ml-2 items-center px-3 py-1 rounded-full">
                <div>
                  <Rectangle />
                </div>
                <div>
                  <p className="font-bold text-[#2B3674]">1,924 ETH</p>
                </div>
              </div>
              <Notification />
              <Night />
              <Info />
              <div className="w-[30px] h-[30px] lg:w-[41px] lg:h-[41px] rounded-full bg-black"></div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <Discovered />
              <Trending />
              <Recently />
            </div>
            <div>
              <div>
                <Topcreators />
              </div>
              <div>
                <History />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
