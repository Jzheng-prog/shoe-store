import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

import {navElement} from '@/data'

export default function Home() {
  
  return (
    <div className="bg-slate-500 h-full w-full">
      <Heading/>
      <NavBar navElement={navElement} />
      <Hero/>
    </div>
  );
}
