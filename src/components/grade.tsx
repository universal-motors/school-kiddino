"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import image1 from "@/assets/images/cl-1-1.jpg";
import image2 from "@/assets/images/cl-1-2.jpg";
import image3 from "@/assets/images/cl-1-3.jpg";
import image4 from "@/assets/images/cl-1-4.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function GradeSlider() {
  return (
    <div className="w-full">
      <div id="classes" className="flex  mt-10">
        <Swiper
          style={{ width: "100%", height: "300px", cursor: "grab" }}
          spaceBetween={50}
          slidesPerView={5}
          breakpoints={{
            1500: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-xl w-[246px]  ml-10 h-[254px] group hover:bg-[#490D59] flex flex-col justify-center items-center rounded-xl">
              <div className="bg-[#E8063C] shadow-2xl text-[white] w-[90px] h-[90px] flex flex-col items-center justify-center rounded-full ">
                <div>
                  <p className="font-bold">GRADE</p>
                </div>
                <div>
                  <p className="text-[30px] font-bold ">1</p>
                </div>
              </div>
              <div>
                <p className="text-[30px] group-hover:text-[white] font-bold mt-5">
                  Grade 1
                </p>
              </div>
              <div>
                <p className="text-[16px] group-hover:text-[white]  text-[#444444] mt-3">
                  ( 4 - 5 years )
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
