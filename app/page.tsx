"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Selections from "@/components/Selections";
import { HeroParallax } from "@/components/ui/hero-parallax";
import XNavBar from "@/components/XNavBar";

import { navElement, products } from "@/data";

export default function Home() {
  return (
    <div className="bg-slate-200 h-full w-full">
      <Heading title={"ShoeStore"} />
      <HeroParallax products={products} />
      <Selections />
      <Highlights />
      <div className="hidden md:block lg:block ">
        <Footer />
      </div>
      <div className="md:hidden">
        <XNavBar />
      </div>
      <NavBar navElement={navElement} />
    </div>
  );
}
