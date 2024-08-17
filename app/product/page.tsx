import Heading from "@/components/Heading";
import ItemDetails from "@/components/productComponents/ItemDetails";
import React from "react";

const Product = () => {
  return (
    <div className="bg-slate-200 h-screen w-full">
      <div className="md:ml-[100px]">
        <Heading title="Product Detail" />
        <ItemDetails />
      </div>
    </div>
  );
};

export default Product;
