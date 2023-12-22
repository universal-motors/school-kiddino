"use client";
import Image from "next/image";
import { Box } from "@mui/material";
import HeroSection from "@/components/heroSection";
import Leadlearning from "@/components/leadlearning";
import EnrollChild from "@/components/enrollChild";
import Childbest from "@/components/childbest";
import Preschool from "@/components/preschool";
import Owngrade from "@/components/owngrade";
import Testimonials from "@/components/testimonials";
import bell from "@/assets/images/bell-1-1.svg";
import Newsletter from "@/components/newsletter";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import logo from "@/assets/images/Logo-3.png";
import PlaceIcon from "@mui/icons-material/Place";
import image1 from "@/assets/images/gal-2-1.jpg";
import image2 from "@/assets/images/gal-2-2.jpg";
import image3 from "@/assets/images/gal-2-3.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Footer from "../components/footer";
import SessionTime from "@/components/sessionTime";
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Leadlearning />
      <EnrollChild />
      <Childbest />
      <SessionTime />
      <Preschool />
      <Owngrade />
      <Testimonials />
      {/* <Footer /> */}

      {/* <Newsletter /> */}
    </Box>
  );
}
