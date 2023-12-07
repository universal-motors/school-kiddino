"use client";
// import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import coverImage from "@/assets/images/coverImage.jpg";
export default function Header() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!isOpen);
  };
  return (
    <div>
      <nav className="bg-[#490D59] py-2" id="navbar">
        <div className="flex flex-wrap items-center justify-evenly">
          <div className="!hidden lg:!flex gap-7">
            <div className="text-[#ffffff] hover:text-[#BC0844] cursor-pointer">
              <AccountCircleIcon /> <span>Login & Register</span>
            </div>
            <div className="text-[#ffffff] hover:text-[#BC0844] cursor-pointer">
              <SearchIcon /> <span>Search Keyword</span>
            </div>
          </div>
          <div className=" justify-center text-[12px] sm:text-[16px] sm:justify-normal !flex !flex-wrap gap-1 sm:gap-7">
            <div className="text-[#ffffff]  flex flex-wrap items-center gap-1">
              <div className=" rounded-full h-10 w-10 flex justify-center items-center hover:bg-[#D22457] hover:border-none">
                <EmailIcon />
              </div>
              <div>Email:</div>{" "}
              <span className="hover:text-[#BC0844] cursor-pointer">
                user@example.com
              </span>
            </div>
            <div>
              <div className="text-[#ffffff] flex flex-wrap items-center gap-1">
                <div className=" rounded-full h-10 w-10 flex  justify-center items-center hover:bg-[#D22457] hover:border-none">
                  <PhoneIphoneIcon />
                </div>
                <span>Phone:</span>{" "}
                <span className="hover:text-[#BC0844] cursor-pointer">
                  +44 (0) 207 689 7888
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="ml-1 sm:ml-10 md:ml-20 lg:ml-0 mt-2 flex items-center !justify-between lg:!justify-evenly gap-5">
        <div>
          <img
            className="w-[200px] sm:w-[235px] h-[71px]"
            src="https://html.vecurosoft.com/kiddino/demo/assets/img/logo.svg"
            alt=""
          />
        </div>
        <div className="text-[18px]   font-bold !hidden lg:!flex gap-8">
          <div className="hover:text-[#BC0B54] cursor-pointer">Demo</div>
          <div className="hover:text-[#BC0B54] cursor-pointer">About Us</div>
          <div className="hover:text-[#BC0B54] cursor-pointer">Classes</div>
          <div className="hover:text-[#BC0B54] cursor-pointer">Blog</div>
          <div className="hover:text-[#BC0B54] cursor-pointer">Pages</div>
          <div className="hover:text-[#BC0B54] cursor-pointer">Contact</div>
        </div>
        <div className="flex mr-1 sm:mr-10 md:mr-20 lg:gap-4  items-center">
          <div className="!bg-[#E8063C] lg:!bg-[#ffffff] py-2 px-2 rounded-full text-[#ffffff] lg:text-[black] lg:hover:text-[#E8063C] ">
            <MenuIcon style={{ fontSize: "35px" }} />
          </div>
          <div className="text-[14px] xl:text-[16px] !hidden lg:!flex  bg-[#E8063C] hover:bg-[#4D0D58] border-[#E8063C] border-[3px] px-2 xl:px-6 py-2 xl:py-3 font-semibold text-[#ffffff] rounded-full">
            Apply Today
          </div>
        </div>
      </div>
    </div>
  );
}
