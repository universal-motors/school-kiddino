import React from "react";
import Image from "next/image";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import logo from "@/assets/images/Logo-3.png";
import PlaceIcon from "@mui/icons-material/Place";
import image1 from "@/assets/images/2.jpg";
import image2 from "@/assets/images/ab-1-4.jpg";
import image3 from "@/assets/images/accordionImage.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function Footer() {
  return (
    <div className="bg-[#490D59] flex flex-wrap pl-1 pr-1  justify-evenly items-center pb-10">
      <div className="flex flex-col justify-center">
        <div id="contact">
          <Image className="w-[235px] mt-10" src={logo} alt="" />
        </div>
        <div>
          <p className="text-[30px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
            Giving your child the <br /> best start in life
          </p>
        </div>
        <div className="flex items-center mt-5">
          <div className="text-[#FFD600]">
            <PlaceIcon sx={{ fontSize: { xs: "30px", sm: "50px" } }} />
          </div>
          <div>
            <p className="text-[#ffffff] text-[14px] sm:text-[18px] ">
              First Floor, 10A Chandos Street London <br />
              New Town W1G 9LE
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-10">
          <div>
            <Image
              style={{ width: "130px", height: "97px", objectFit: "cover" }}
              className="rounded-3xl"
              src={image1}
              alt=""
            />
          </div>
          <div>
            <Image
              style={{ width: "130px", height: "97px", objectFit: "cover" }}
              className="rounded-3xl"
              src={image2}
              alt=""
            />
          </div>
          <div>
            <Image
              style={{ width: "130px", height: "97px", objectFit: "cover" }}
              className="rounded-3xl"
              src={image3}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <div className="flex items-center">
          <div className="text-[#FFD600]">
            <FactCheckIcon sx={{ fontSize: { xs: "30px", sm: "50px" } }} />
          </div>
          <div>
            <p className="text-[20px] sm:text-[36px] font-bold text-[#ffffff]">
              Enrol your child in a Session now!
            </p>
          </div>
        </div>
        <div>
          <p className="text-[30px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
            Get In Touch
          </p>
        </div>
        <div>
          <p className="text-[#ffffff] text-[14px] sm:text-[18px] ">
            Monday to Friday: 8.30am – 02.00pm
          </p>
        </div>
        <div>
          <p className="text-[#ffffff] text-[14px] sm:text-[18px] mt-5">
            Saturday, Sunday: <span className="font-bold">Close</span>
          </p>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <div className="bg-[#FFD600] px-2 py-2 rounded-full">
            <EmailIcon />
          </div>
          <div>
            <p className="text-[#ffffff] text-[14px] sm:text-[18px] ">
              Email:{" "}
              <span className="hover:text-[#E8063C] cursor-pointer">
                user@domainname.com
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <div className="bg-[#FFD600] px-2 py-2 rounded-full">
            <PhoneIphoneIcon />
          </div>
          <div>
            <p className="text-[#ffffff] text-[14px] sm:text-[18px] ">
              Phone:{" "}
              <span className="hover:text-[#E8063C] cursor-pointer">
                +44 (0) 207 689 7888
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 xl:mt-0 ">
        <div className="text-[16px] text-[#ffffff] flex justify-center items-center rounded-full bg-[#E8063C] border-[#E8063C] border-4 hover:bg-[#490D59] w-[209px] h-[55px] font-bold">
          <button>Start Registration</button>
        </div>
        <div>
          <p className="text-[20px] sm:text-[36px] font-bold text-[#ffffff] mt-10">
            Useful Services
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <div className="flex gap-2 group cursor-pointer">
              <div className="text-[#FFD600] ">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] group-hover:text-[#E80951] text-[14px] sm:text-[18px]">
                  Volunteer
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600] ">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Advocate
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Partner
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Sponsor
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Advertise
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Join or Renew
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Membership Options
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Families Membership
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-3  group cursor-pointer">
              <div className="text-[#FFD600]">
                <FiberManualRecordIcon style={{ fontSize: "10px" }} />
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] sm:text-[18px] group-hover:text-[#E80951] ">
                  Contact Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
