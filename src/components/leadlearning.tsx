import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/ab-1-1.jpg";
import image2 from "@/assets/images/ab-1-2.jpg";
import image3 from "@/assets/images/ab-1-3.jpg";
import image4 from "@/assets/images/ab-1-4.jpg";
import ChaletIcon from "@mui/icons-material/Chalet";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
export default function Leadlearning() {
  return (
    <div className="flex m-auto w-[90%] sm:w-[100%] flex-col lg:flex-row  items-center justify-center xl:justify-center mt-8">
      <div>
        <div className="flex gap-8">
          <div>
            <Image
              className="rounded-tl-[110px] rounded-bl-[50px] rounded-tr-[50px]"
              src={image1}
              alt="image1"
            />
          </div>
          <div>
            <Image
              className="rounded-tr-[110px] rounded-br-[50px] rounded-tl-[50px]"
              src={image2}
              alt="image2"
            />
          </div>
        </div>
        <div className="flex gap-8 mt-8">
          <div>
            <Image
              className="rounded-bl-[110px] rounded-br-[50px] rounded-tl-[50px]"
              src={image3}
              alt="image3"
            />
          </div>
          <div>
            <Image
              className="rounded-br-[110px] rounded-bl-[50px] rounded-tr-[50px]"
              src={image4}
              alt="image4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 lg:mt-0 ml-3 sm:ml-20">
        <div className="font-bold text-[16px] text-[#E8063C]">
          PART OF THE FAMILY SINCE 2001,
        </div>
        <div className="text-[40px] xl:text-[60px] font-semibold">
          Your Child Will Take <br />
          The Lead Learning
        </div>
        <div className="text-[16px] xl:text-[18px]">
          We are constantly expanding the range of services offered, taking care
          of <br />
          children of all ages. Our goal is to carefully educate and develop
          children <br />
          in a fun way. We strive to turn the learning process into a bright
          event so <br />
          that children study with pleasure.
        </div>
        <div className="flex  items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F6FA] rounded-full flex justify-center items-center hover:bg-[#E8063C]  hover:text-[#ffffff] w-16 xl:w-20 h-16 xl:h-20">
              <ChaletIcon sx={{ fontSize: { sm: "40px", md: "56px" } }} />
            </div>
            <div>
              <div className="text-[30px] sm:text-[40px] xl:text-[60px] font-semibold text-[#E8063C] ">
                75
              </div>
              <div className="text-[14px] sm:text-[16px] xl:text-[18px]  font-semibold">
                Outdoor Activities
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#F0F6FA] rounded-full flex justify-center items-center hover:bg-[#E8063C]  hover:text-[#ffffff] w-12 sm:w-16  xl:w-20 h-12 sm:h-16 xl:h-20">
              <AssignmentIndIcon
                sx={{ fontSize: { sm: "22px", md: "40px" } }}
              />
            </div>
            <div>
              <div className="text-[30px] sm:text-[40px] xl:text-[60px] font-semibold text-[#E8063C] ">
                23
              </div>
              <div className="text-[14px] sm:text-[16px] xl:text-[18px]  font-semibold">
                Loving Teachers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}