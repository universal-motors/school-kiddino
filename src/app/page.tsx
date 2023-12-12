"use client";
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
import HeroSection from "@/components/heroSection";
import Leadlearning from "@/components/leadlearning";
import EnrollChild from "@/components/enrollChild";
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Leadlearning />
      <EnrollChild />
    </Box>
  );
}
