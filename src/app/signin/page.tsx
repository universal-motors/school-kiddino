import IconLabelButtons from "@/components/button";
import FullWidthTextField from "@/components/input";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import React from "react";

export default function Signinpage() {
  return (
    <>
      <div className="bg-[#F9FAFC] flex flex-wrap items-center justify-evenly  h-[100vh] ">
        <div className="w-[600px] mr-6">
          <Image
            style={{ width: "100%", objectFit: "cover" }}
            src={Logo}
            alt="logo"
          />
        </div>
        <div className="bg-[#ffffff] rounded-xl shadow-lg  w-[90%] sm:w-[542px] h-[420px] flex flex-col items-center justify-center">
          <div>
            <h1 className="text-[32px] font-bold mb-6">SIGN IN</h1>
          </div>
          <FullWidthTextField />
          <div className="w-full">
            <p className="text-[12px] cursor-pointer  mt-3 pl-5">
              Forgot Password?
            </p>
          </div>
          <IconLabelButtons />
        </div>
      </div>
    </>
  );
}
