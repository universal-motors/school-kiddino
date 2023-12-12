"use client";
import HeroSection from "@/components/heroSection";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Image from "next/image";
import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image1 from "@/assets/images/ab-1-1.jpg";
import image2 from "@/assets/images/ab-1-2.jpg";
import image3 from "@/assets/images/ab-1-3.jpg";
import image4 from "@/assets/images/ab-1-4.jpg";
import ChaletIcon from "@mui/icons-material/Chalet";
import Leadlearning from "@/components/leadlearning";
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Leadlearning />
      <div>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col">
            <div className="text-[60px] font-bold">
              Your Child's Best <br />
              Start In Life
            </div>
            <div className="text-[18px] text-[#444444]">
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
          <div>
            <img
              className="rounded-full"
              src="https://html.vecurosoft.com/kiddino/demo/assets/img/about/ab-2-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-around items-center mt-28">
          <div>
            <div className="font-bold text-[16px] text-[#E8063C]">
              CHOOSE YOUR OWN GRADE LEVEL
            </div>
            <div className="text-[60px] font-bold">Smarty Programs</div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
              <ArrowBackIcon style={{ fontSize: "40px" }} />
            </div>
            <div className="bg-[#E8063C] text-[#ffffff] hover:text-[#E8063C] hover:bg-white border-2 border-[#E8063C] w-14 h-14  flex items-center justify-center rounded-full">
              <ArrowForwardIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <div className="shadow-xl w-[246px] h-[254px] flex flex-col justify-center items-center rounded-xl">
            <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
              <div className="font-bold">GRADE</div>
              <div className="text-[30px] font-bold ">1</div>
            </div>
            <div className="text-[30px] font-bold mt-5">Grade 1</div>
            <div className="text-[16px] text-[#444444] mt-3">
              ( 4 - 5 years )
            </div>
          </div>
          <div className="shadow-xl w-[246px] h-[254px] flex flex-col justify-center items-center rounded-xl">
            <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
              <div className="font-bold">GRADE</div>
              <div className="text-[30px] font-bold ">1</div>
            </div>
            <div className="text-[30px] font-bold mt-5">Grade 1</div>
            <div className="text-[16px] text-[#444444] mt-3">
              ( 4 - 5 years )
            </div>
          </div>
          <div className="shadow-xl w-[246px] h-[254px] flex flex-col justify-center items-center rounded-xl">
            <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
              <div className="font-bold">GRADE</div>
              <div className="text-[30px] font-bold ">1</div>
            </div>
            <div className="text-[30px] font-bold mt-5">Grade 1</div>
            <div className="text-[16px] text-[#444444] mt-3">
              ( 4 - 5 years )
            </div>
          </div>
          <div className="shadow-xl w-[246px] h-[254px] flex flex-col justify-center items-center rounded-xl">
            <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
              <div className="font-bold">GRADE</div>
              <div className="text-[30px] font-bold ">1</div>
            </div>
            <div className="text-[30px] font-bold mt-5">Grade 1</div>
            <div className="text-[16px] text-[#444444] mt-3">
              ( 4 - 5 years )
            </div>
          </div>
          <div className="shadow-xl w-[246px] h-[254px] flex flex-col justify-center items-center rounded-xl">
            <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
              <div className="font-bold">GRADE</div>
              <div className="text-[30px] font-bold ">1</div>
            </div>
            <div className="text-[30px] font-bold mt-5">Grade 1</div>
            <div className="text-[16px] text-[#444444] mt-3">
              ( 4 - 5 years )
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
