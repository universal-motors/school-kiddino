import React from "react";
import Image from "next/image";
import guide from "@/assets/images/faq-1-1.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Owngrade() {
  return (
    <div className="mt-20">
      <div className="flex flex-col lg:flex-row  justify-center items-center gap-10">
        <div>
          <Image
            className="rounded-tl-[260px] ml-5 w-[90%] sm:w-[593px] h-[600px] sm:h-[711px] rounded-bl-[260px] rounded-tr-[260px] rounded-br-[100px]"
            src={guide}
            alt=""
          />
        </div>
        <div className="flex  !items-center sm:!items-start flex-col">
          <div className="text-[14px] sm:text-[16px]  font-extrabold text-[#E8063C]">
            CHOOSE YOUR OWN GRADE LEVEL
          </div>
          <div className="text-[30px] sm:text-[40px] xl:text-[60px] font-bold">
            Guide To Preschool
          </div>
          <div className=" font-semibold group hover:bg-[#490D59]  bg-[#FAF6F0] rounded-tl-[30px] rounded-tr-[50px] rounded-bl-[50px] sm:w-[500px] xl:w-[633px] h-[64px]  items-center flex justify-between pl-3 sm:pl-8 pr-3 sm:pr-8  rounded-br-[30px]">
            <div className="text-[14px] sm:text-[22px] group-hover:text-[#ffffff]">
              First Little Readers (Levels A-C)
            </div>
            <div className="bg-[#FFFFFF] group-hover:text-[#ffffff] group-hover:bg-[#E8063C] w-10 h-10 flex justify-center items-center rounded-full">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className=" font-semibold mt-6 group hover:bg-[#490D59]  bg-[#FAF6F0] rounded-tl-[30px] rounded-tr-[50px] rounded-bl-[50px] sm:w-[500px] xl:w-[633px] h-[64px]  items-center flex justify-between pl-3 sm:pl-8 pr-3 sm:pr-8  rounded-br-[30px]">
            <div className="text-[14px] sm:text-[22px] group-hover:text-[#ffffff]">
              What Age Do Start Preschool?
            </div>
            <div className="bg-[#FFFFFF] group-hover:text-[#ffffff] group-hover:bg-[#E8063C] w-10 h-10 flex justify-center items-center rounded-full">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className=" font-semibold mt-6 group hover:bg-[#490D59]  bg-[#FAF6F0] rounded-tl-[30px] rounded-tr-[50px] rounded-bl-[50px] sm:w-[500px] xl:w-[633px] h-[64px]  items-center flex justify-between pl-3 sm:pl-8 pr-3 sm:pr-8  rounded-br-[30px]">
            <div className="text-[14px] sm:text-[22px] group-hover:text-[#ffffff]">
              Is My Child Ready For Preschool?
            </div>
            <div className="bg-[#FFFFFF] group-hover:text-[#ffffff] group-hover:bg-[#E8063C] w-10 h-10 flex justify-center items-center rounded-full">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className=" font-semibold group mt-6 hover:bg-[#490D59]  bg-[#FAF6F0] rounded-tl-[30px] rounded-tr-[50px] rounded-bl-[50px] sm:w-[500px] xl:w-[633px] h-[64px]  items-center flex justify-between pl-3 sm:pl-8 pr-3 sm:pr-8  rounded-br-[30px]">
            <div className="text-[14px] sm:text-[22px] group-hover:text-[#ffffff]">
              Can Your Child Separate from you?
            </div>
            <div className="bg-[#FFFFFF] group-hover:text-[#ffffff] group-hover:bg-[#E8063C] w-10 h-10 flex justify-center items-center rounded-full">
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className=" font-semibold group mt-6 hover:bg-[#490D59]  bg-[#FAF6F0] rounded-tl-[30px] rounded-tr-[50px] rounded-bl-[50px] sm:w-[500px] xl:w-[633px] h-[64px]  items-center flex justify-between pl-3 sm:pl-8 pr-3 sm:pr-8  rounded-br-[30px]">
            <div className="text-[14px] sm:text-[22px] group-hover:text-[#ffffff]">
              Can Your Child Play With Others?
            </div>
            <div className="bg-[#FFFFFF] group-hover:text-[#ffffff] group-hover:bg-[#E8063C] w-10 h-10 flex justify-center items-center rounded-full">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
