import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import logo from "@/assets/images/logo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Anchor } from "@mui/icons-material";
import Link from "next/link";

type Anchor = "right" | "left";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  return (
    <div>
      <div className="!hidden lg:!flex">
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon
                sx={{
                  fontSize: "35px",
                  color: "black",
                  ":hover": { color: "#E8063C" },
                }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div className="!hidden lg:!flex">
                <Box sx={{ width: 500 }}>
                  <div
                    onClick={toggleDrawer(anchor, false)}
                    className="flex items-end justify-end bg-[#E8063C] text-[#ffffff] w-6 rounded-full mt-2 ml-3 cursor-pointer"
                  >
                    <CloseIcon />
                  </div>
                  <div className="pl-14 pt-10">
                    <div>
                      <Image className="w-[150px]" src={logo} alt="" />
                    </div>
                    <div className="text-[black] text-[14px] font-normal mt-5">
                      We are constantly expanding the range of services <br />
                      offered, taking care of children of all ages.
                    </div>
                    <div className="text-[30px] font-bold mt-8">
                      Get In Touch
                    </div>
                    <div className="mt-6">
                      Monday to Friday: <span>8.30am – 02.00pm</span>
                    </div>
                    <div className="mt-3">
                      Saturday, Sunday:{" "}
                      <span className="font-semibold">Close</span>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="rounded-full h-10 w-10 flex justify-center items-center bg-[#FFD600] hover:border-none ">
                        <EmailIcon />
                      </div>
                      <div>
                        Email:{" "}
                        <span className="hover:text-[#EC063C] cursor-pointer">
                          user@domainname.com
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="rounded-full h-10 w-10 flex justify-center items-center bg-[#FFD600] hover:border-none ">
                        <PhoneIphoneIcon />
                      </div>
                      <div>
                        Phone:{" "}
                        <span className="hover:text-[#EC063C] cursor-pointer">
                          +44 (0) 207 689 7888
                        </span>
                      </div>
                    </div>
                    {/* <div className="text-[30px] font-bold mt-8">
                      Latest News
                    </div>
                    <div className="flex items-center mt-6 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>December 3, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          A very warm welcome to our <br />
                          new Treasurer
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>February 15, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          German kinder and garten <br />
                          mean child
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-3 gap-4">
                      <div>
                        <img
                          className="rounded-2xl"
                          src="https://html.vecurosoft.com/kiddino/demo/assets/img/blog/recent-post-1-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex gap-1 text-[#E8063C] hover:text-[black] items-center">
                          <div>
                            <CalendarMonthIcon />
                          </div>
                          <div>Augest 20, 2022</div>
                        </div>
                        <div className="text-[20px] font-bold hover:text-[#E8063C]">
                          English uses term to refer to <br />
                          the earliest
                        </div>
                      </div>
                    </div> */}
                  </div>
                </Box>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="!flex lg:!hidden">
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon
                sx={{
                  fontSize: "35px",
                  color: "black",
                  ":hover": { color: "#E8063C" },
                }}
              />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {/* {list(anchor)} */}
              <div>
                <Box sx={{ width: 300 }}>
                  <div
                    onClick={toggleDrawer(anchor, false)}
                    className="flex items-end justify-end bg-[#E8063C] text-[#ffffff] w-6 rounded-full mt-2 ml-3 cursor-pointer"
                  >
                    <CloseIcon />
                  </div>
                  <div className="text-center">
                    <div>
                      <Image className="w-[150px]" src={logo} alt="" />
                    </div>
                    <div className="mt-10">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          {/* <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div> */}
                          <Link href={"#home"}>
                            <div
                              onClick={toggleDrawer(anchor, false)}
                              className="font-extrabold"
                            >
                              Home
                            </div>
                          </Link>
                        </div>
                        {/* <div className="bg-[#490D59] flex items-center justify-center text-[#ffffff]  w-8 h-8 rounded-full">
                          <AddIcon />
                        </div> */}
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          {/* <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div> */}
                          <Link href={"#aboutUs"}>
                            <div
                              onClick={toggleDrawer(anchor, false)}
                              className="font-extrabold"
                            >
                              About Us
                            </div>
                          </Link>
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          {/* <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div> */}
                          <Link href={"#classes"}>
                            <div
                              onClick={toggleDrawer(anchor, false)}
                              className="font-extrabold"
                            >
                              Classes
                            </div>
                          </Link>
                        </div>
                        {/* <div className="bg-[#490D59] flex items-center justify-center text-[#ffffff]  w-8 h-8 rounded-full">
                          <AddIcon />
                        </div> */}
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    {/* <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div>
                          <div className="font-extrabold">Blogs</div>
                        </div>
                        <div className="bg-[#490D59] flex items-center justify-center text-[#ffffff]  w-8 h-8 rounded-full">
                          <AddIcon />
                        </div>
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div> */}
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          {/* <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div> */}
                          <Link href={"#testimonial"}>
                            <div
                              onClick={toggleDrawer(anchor, false)}
                              className="font-extrabold"
                            >
                              Testimonials
                            </div>
                          </Link>
                        </div>
                        {/* <div className="bg-[#490D59] flex items-center justify-center text-[#ffffff]  w-8 h-8 rounded-full">
                          <AddIcon />
                        </div> */}
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="mt-3">
                      <div className="flex justify-between ml-7 mr-7">
                        <div className="flex gap-2 items-center">
                          {/* <div>
                            <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
                          </div> */}
                          <Link href={"#contact"}>
                            <div
                              onClick={toggleDrawer(anchor, false)}
                              className="font-extrabold"
                            >
                              Contact Us
                            </div>
                          </Link>
                        </div>
                        {/* <div className="bg-[#490D59] flex items-center justify-center text-[#ffffff]  w-8 h-8 rounded-full">
                          <AddIcon />
                        </div> */}
                      </div>
                      <hr className="w-[80%] ml-8 mt-3" />
                    </div>
                    <div className="bg-[#ffffff] w-[290px] flex flex-col ">
                      {/* <div className="text-[#2B3674] text-[26px] font-bold flex justify-center mt-10">
                        HORIZON <span>FREE</span>
                      </div> */}
                      {/* <hr /> */}
                      <div className="pl-10">
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#4318ff]">
                            <HomeIcon />
                          </div>
                          <div className="text-[16px] font-bold text-[#2B3674]">
                            Dashboard
                          </div>
                        </div>
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#A3AED0]">
                            <LocalGroceryStoreIcon />
                          </div>
                          <div className="text-[16px] text-[#A3AED0]">
                            NFT Marketplace
                          </div>
                        </div>
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#A3AED0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_101_10360)">
                                <path
                                  d="M7.46683 10.7333H7.70016C8.5985 10.7333 9.3335 11.4683 9.3335 12.3667V20.5333C9.3335 21.4317 8.5985 22.1667 7.70016 22.1667H7.46683C6.5685 22.1667 5.8335 21.4317 5.8335 20.5333V12.3667C5.8335 11.4683 6.5685 10.7333 7.46683 10.7333ZM14.0002 5.83334C14.8985 5.83334 15.6335 6.56834 15.6335 7.46668V20.5333C15.6335 21.4317 14.8985 22.1667 14.0002 22.1667C13.1018 22.1667 12.3668 21.4317 12.3668 20.5333V7.46668C12.3668 6.56834 13.1018 5.83334 14.0002 5.83334ZM20.5335 15.1667C21.4318 15.1667 22.1668 15.9017 22.1668 16.8V20.5333C22.1668 21.4317 21.4318 22.1667 20.5335 22.1667C19.6352 22.1667 18.9002 21.4317 18.9002 20.5333V16.8C18.9002 15.9017 19.6352 15.1667 20.5335 15.1667Z"
                                  fill="#A3AED0"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_101_10360">
                                  <rect width="28" height="28" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-[16px] text-[#A3AED0]">
                            Tables
                          </div>
                        </div>
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#A3AED0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_101_10356)">
                                <path
                                  d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                                  fill="#A3AED0"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_101_10356">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-[16px] text-[#A3AED0]">
                            Kanban
                          </div>
                        </div>
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#A3AED0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_101_10352)">
                                <path
                                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"
                                  fill="#A3AED0"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_101_10352">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="text-[16px] text-[#A3AED0]">
                            Profile
                          </div>
                        </div>
                        <div className="flex  gap-5 mt-10">
                          <div className="text-[#A3AED0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="21"
                              viewBox="0 0 16 21"
                              fill="none"
                            >
                              <path
                                d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
                                fill="#A3AED0"
                              />
                            </svg>
                          </div>
                          <div className="text-[16px] mb-10 text-[#A3AED0]">
                            Sign In
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
