import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import Selections from "@/components/Selections";
import { HeroParallax } from "@/components/ui/hero-parallax";

import {navElement, products} from '@/data'

export default function Home() {
  
  return (
    <div className="bg-slate-200 h-full w-full">
      <Heading/>
      <NavBar navElement={navElement} />
      <HeroParallax products={products}/>
      <Selections/>
      <Footer/>
    </div>
  );
}
