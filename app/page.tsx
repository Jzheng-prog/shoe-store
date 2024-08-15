"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Selections from "@/components/Selections";
import { HeroParallax } from "@/components/ui/hero-parallax";
import XNavBar from "@/components/XNavBar";

import { navElement, products } from "@/data";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="border border-solid border-black rounded"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Sign Out
        </button>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Link
          href="/login"
          className="border border-solid border-black rounded"
        >
          Sign In
        </Link>
      );
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Home</h1>
      {showSession()}
    </main>
  );

  // return (
  //   <div className="bg-slate-200 h-full w-full">
  //     <Heading title={"ShoeStore"} />
  //     <HeroParallax products={products} />
  //     <Selections />
  //     <Highlights />
  //     <div className="hidden md:block lg:block ">
  //       <Footer />
  //     </div>
  //     <div className="md:hidden">
  //       <XNavBar />
  //     </div>
  //     <NavBar navElement={navElement} />
  //   </div>
  // );
}
