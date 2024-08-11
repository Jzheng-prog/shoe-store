import NavBar from "@/components/NavBar";
import ItemDetails from "@/components/productCom/ItemDetails";
import XNavBar from "@/components/XNavBar";
import GlobalState from "@/context";
import { navElement } from "@/data";
import React from "react";

const Product = () => {
  return (
    <div className="bg-slate-200 h-screen w-full">
      <div className="md:ml-[100px]">
        <h1 className="pt-5 flex items-center justify-center font-extrabold text-2xl">
          Product Details
        </h1>
        <GlobalState>
          <ItemDetails />
        </GlobalState>
      </div>

      {/* Nav */}
      <div className="lg:hidden md:hidden">
        <XNavBar />
      </div>
      <div>
        <NavBar navElement={navElement} />
      </div>
    </div>
  );
};

export default Product;
