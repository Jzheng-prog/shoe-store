'use client'
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Selections from "@/components/Selections";
import { HeroParallax } from "@/components/ui/hero-parallax";

import {navElement, products} from '@/data'
import { Route, Routes } from "react-router-dom";

export default function Home() {
  
  return (
    <div className="bg-slate-200 h-full w-full">
      <Heading/>
      <NavBar navElement={navElement} />
      <HeroParallax products={products}/>
      <Selections/>
      <Highlights/>
      <Footer/>

      <Routes>
        <Route path="/"/>
      </Routes>
    </div>
  );
}
