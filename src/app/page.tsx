"use client";
import Image from "next/image";
import { Box } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChaletIcon from "@mui/icons-material/Chalet";
import HeroSection from "@/components/heroSection";
import Leadlearning from "@/components/leadlearning";
import EnrollChild from "@/components/enrollChild";
import Childbest from "@/components/childbest";
export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <Leadlearning />
      <EnrollChild />
      <Childbest />
    </Box>
  );
}
