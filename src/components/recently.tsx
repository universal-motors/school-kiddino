import React from "react";
import Image from "next/image";
import image from "@/assets/images/card-2.jpg";
export default function Recently() {
  return (
    <div className="mb-10">
      <div className="mt-7 flex flex-wrap justify-center lg:justify-between items-center pl-5 pr-5">
        <div className="text-[#2B3674] text-[24px] font-bold">
          Recently Added
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="w-[350px] h-[370px] bg-[#ffffff] flex flex-col items-center rounded-3xl pt-4 ">
          <div className="flex  justify-center">
            <Image
              className="w-[300px] h-[200px] rounded-2xl "
              src={image}
              alt=""
            />
          </div>
          <div className="text-[18px] text-[#1B2559] font-bold mt-5">
            Abstract Colors
          </div>
          <div className="text-[#A3AED0]">By Esthera Jackson</div>
          <div className="flex w-full justify-between items-center gap-1 pt-5 pl-5 pr-5">
            <div className="text-[#4318FF] font-bold">
              Current Bid: 0.91 ETH
            </div>
            <div className="bg-[#11047A] text-[12px] sm:text-[14px] text-[#ffffff] px-3 py-1 flex justify-center items-center rounded-3xl">
              Place Bid
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[370px] bg-[#ffffff] flex flex-col items-center rounded-3xl pt-4 ">
          <div className="flex  justify-center">
            <Image
              className="w-[300px] h-[200px] rounded-2xl "
              src={image}
              alt=""
            />
          </div>
          <div className="text-[18px] text-[#1B2559] font-bold mt-5">
            Abstract Colors
          </div>
          <div className="text-[#A3AED0]">By Esthera Jackson</div>
          <div className="flex w-full justify-between items-center gap-1 pt-5 pl-5 pr-5">
            <div className="text-[#4318FF] font-bold">
              Current Bid: 0.91 ETH
            </div>
            <div className="bg-[#11047A] text-[12px] sm:text-[14px] text-[#ffffff] px-3 py-1 flex justify-center items-center rounded-3xl">
              Place Bid
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[370px] bg-[#ffffff] flex flex-col items-center rounded-3xl pt-4 ">
          <div className="flex  justify-center">
            <Image
              className="w-[300px] h-[200px] rounded-2xl "
              src={image}
              alt=""
            />
          </div>
          <div className="text-[18px] text-[#1B2559] font-bold mt-5">
            Abstract Colors
          </div>
          <div className="text-[#A3AED0]">By Esthera Jackson</div>
          <div className="flex w-full justify-between items-center gap-1 pt-5 pl-5 pr-5">
            <div className="text-[#4318FF] font-bold">
              Current Bid: 0.91 ETH
            </div>
            <div className="bg-[#11047A] text-[12px] sm:text-[14px] text-[#ffffff] px-3 py-1 flex justify-center items-center rounded-3xl">
              Place Bid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
