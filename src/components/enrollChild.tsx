import React from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ExtensionIcon from "@mui/icons-material/Extension";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import image1 from "@/assets/images/sr-1-1.jpg";
import image2 from "@/assets/images/sr-1-2.jpg";
import image3 from "@/assets/images/sr-1-3.jpg";
import image4 from "@/assets/images/sr-1-4.jpg";
import Image from "next/image";
export default function EnrollChild() {
  return (
    <div className="ml-3 sm:ml-0">
      <div className="ml-4 flex flex-col relative items-center mt-10">
        <div className="absolute w-[20px] h-[20px] rounded-full bg-[#FFD600]"></div>
        <div className="flex absolute mt-4">
          <div className="w-[20px] h-[20px] rounded-full bg-[#490D59] "></div>
          <div className="w-[20px] h-[20px] rounded-full bg-[#E8063C] "></div>
        </div>
      </div>
      <div className="text-[20px] sm:!text-[30px] lg:!text-[48px] font-bold flex justify-center items-center mt-10">
        Enrol Your Child In A Session Now!
      </div>
      <div className="text-[10px] sm:text-[14px] lg:text-[18px] text-[#444444] flex justify-center ">
        Pre-school has an ‘open door policy’ and also offer a free trial session
        to all children.
      </div>
      <div className="flex  justify-center gap-10 mt-10 ">
        <div className="mr-80 group ml-2 sm:ml-0">
          <Image className="rounded-3xl absolute " src={image1} alt="image1" />
          <div className="bg-[#76AD1E] rounded-t-full  absolute w-[300px] mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div className="text-[26px] font-bold">Active Learning</div>
            <div className="text-[16px]">
              We have a very large indoor space <br />
              allowing us to have designated areas <br />
              for different types
            </div>
          </div>
          <div className="absolute ml-28 group-hover:bg-[#FFD600] bg-[#ffffff] px-7 py-7 mt-40 rounded-tr-[60px] rounded-tl-lg rounded-bl-lg rounded-br-lg">
            <ExtensionIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="!hidden md:!flex mr-80 group">
          <Image className="rounded-3xl absolute" src={image2} alt="image2" />
          <div className="bg-[#18C0CB] rounded-t-full rounded-b- absolute w-[300px] mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div className="text-[26px] font-bold">Child Care</div>
            <div className="text-[16px]">
              We have a very large indoor space <br />
              allowing us to have designated areas <br />
              for different types
            </div>
          </div>
          <div className="absolute group-hover:bg-[#FFD600] ml-28  bg-[#ffffff] px-7 py-7 mt-40 rounded-tr-lg rounded-tl-lg rounded-bl-[60px] rounded-br-lg">
            <VolunteerActivismIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="!hidden lg:!flex  mr-80 group">
          <Image className="rounded-3xl absolute" src={image3} alt="image3" />
          <div className="bg-[#490D59] rounded-t-full rounded-b- absolute w-[300px] mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div className="text-[26px] font-bold">Healthy Meals</div>
            <div className="text-[16px]">
              We have a very large indoor space <br />
              allowing us to have designated areas <br />
              for different types
            </div>
          </div>
          <div className="absolute group-hover:bg-[#FFD600] ml-28  bg-[#ffffff] px-7 py-7 mt-40 rounded-tl-[60px] rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <LocalPizzaIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className=" !hidden 2xl:!flex mr-80 group">
          <Image className="rounded-3xl absolute" src={image4} alt="image4" />
          <div className="bg-[#E93500] rounded-bl-lg rounded-t-full rounded-b- absolute w-[300px] mt-56 h-60 text-[#ffffff] flex flex-col justify-center items-center ">
            <div className="text-[26px] font-bold">Secure Enviroment</div>
            <div className="text-[16px]">
              We have a very large indoor space <br />
              allowing us to have designated areas <br />
              for different types
            </div>
          </div>
          <div className="absolute ml-28 group-hover:bg-[#FFD600] bg-[#ffffff] px-7 py-7 mt-40 rounded-tr-[60px] rounded-tl-lg rounded-bl-lg rounded-br-lg">
            <ShieldIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
