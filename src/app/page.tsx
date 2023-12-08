"use client";
import HeroSection from "@/components/heroSection";
// import BackgroudImage from "@/app/assets/images/bg/1.jpg";
import Image from "next/image";
import { Box } from "@mui/material";
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
    </Box>
  );
}
