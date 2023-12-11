"use client";
import Image from "next/image";
import { Box } from "@mui/material";
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
