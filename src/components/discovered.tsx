import React from "react";
import Image from "next/image";
import background from "@/assets/images/Products.jpeg";
export default function Discovered() {
  return (
    <div className="w-[100%] h-[400px] relative mt-5">
      <Image
        style={{
          objectFit: "cover",
          height: "400px",
          position: "absolute",
          top: "0px",
        }}
        className="rounded-3xl"
        src={background}
        alt=""
      />
      <div className="relative left-4 sm:left-20 md:left-2 xl:left-20 top-20 xl:top-20 w-[250px] sm:w-[337px]">
        <div className="text-[20px] sm:text-[30px] md:text-[24px] xl:text-[34px] text-[#ffffff] font-bold ">
          <p>Discover, collect, and sell extraordinary NFTs</p>
        </div>
        <div className="w-[250px] sm:w-[332px] text-[14px] xl:text-[16px] mt-2 text-[#ffffff]">
          <p>
            Enter in this creative world. Discover now the latest NFTs or start
            creating your own!
          </p>
        </div>
        <div className="flex mt-5">
          <div>
            <button className="font-medium w-[100px] text-[14px] sm:w-[140px] h-[46px]  bg-white rounded-3xl">
              Discover now
            </button>
          </div>
          <div>
            <button className="font-medium w-[140px] h-[46px] text-white rounded-3xl">
              Watch video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
