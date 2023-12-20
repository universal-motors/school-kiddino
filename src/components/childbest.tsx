import React from "react";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image from "@/assets/images/round.jpeg";
import GradeSlider from "./grade";
export default function Childbest() {
  return (
    <div className="">
      <div className="flex ml-1 mr-1 sm:ml-0 sm:mr-0 flex-col xl:flex-row justify-center xl:justify-evenly items-center">
        <div className="flex flex-col">
          <div className="text-[40px] sm:text-[60px] font-bold">
            Your Child's Best <br />
            Start In Life
          </div>
          <div className="text-[16px] sm:text-[18px] text-[#444444]">
            We are constantly expanding the range of services offered, taking{" "}
            <br />
            children of all ages. Our goal is to carefully educate and develop{" "}
            <br />a fun way. We strive to turn the learning process.
          </div>
          <div className="text-[16px ] text-[#444444] mt-10 ">
            <div className="flex gap-2 items-center">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div>Comprehensive reporting on individual achievement</div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">
                Educational field trips and school presentations
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">
                Individual attention in a small-class setting
              </div>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <div className="text-[#EC3C66]">
                <TaskAltIcon />
              </div>
              <div className="">Learning program with after-school care</div>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          <Image
            className="rounded-full h-[330px] sm:h-[618px] w-[330px] sm:w-[618px]"
            style={{
              objectFit: "cover",
            }}
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-center  sm:justify-around items-center mt-28">
        <div>
          <div className="font-bold ml-10 text-[16px] text-[#E8063C]">
            CHOOSE YOUR OWN GRADE LEVEL
          </div>
          <div className="text-[40px] ml-10 sm:text-[60px] font-bold">
            Smarty Programs
          </div>
        </div>
        {/* <div className="flex gap-4">
          <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
            <ArrowBackIcon style={{ fontSize: "40px" }} />
          </div>
          <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
            <ArrowForwardIcon style={{ fontSize: "40px" }} />
          </div>
        </div> */}
      </div>
      <GradeSlider />
    </div>
  );
}
