"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [onClick, SetOnClick] = useState(false);
  const router = useRouter();
  return (
    <main className="">
      <HeroSection />
      <Section2 />

      <Section3 />
      <Section4 />
      <Section5 />
      <Section6></Section6>
      <Section7 />
      <Section8 />
    </main>
  );
}
