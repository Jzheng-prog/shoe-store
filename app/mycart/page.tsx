"use client";
import Heading from "@/components/Heading";
import CartItem from "@/components/myCart/CartItem";
import Button from "@/components/Button";
import ShippingInfo from "@/components/myCart/ShippingInfo";
import NavBar from "@/components/NavBar";
import XNavBar from "@/components/XNavBar";
import { navElement } from "@/data";
import React, { useContext } from "react";
import { GlobalContext } from "@/context";

const MyCart = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    return <p>Your Cart is Empty!</p>;
  }

  const { cartItems } = context;

  // const tempProd = [
  //   {
  //     id: 1,
  //     title: "Jordan-1",
  //     quantity: 10,
  //     price: 199.99,
  //     size: [6, 7, 8, 9, 10, 11],
  //     image: "/jordan-1-red.webp",
  //     availability: "In-stock",
  //   },
  //   {
  //     id: 2,
  //     title: "Onxy-Slide",
  //     quantity: 10,
  //     price: 599.99,
  //     size: [6, 7, 8],
  //     image: "/onyx-slide.png",
  //     availability: "out-of-stock",
  //   },
  // ];

  return (
    <div className="h-screen w-full">
      <div className="pb-16 md:p-0">
        <div className="md:ml-[100px]">
          <Heading title={"Shopping Cart"} />
          <CartItem items={cartItems} />
          <ShippingInfo />

          <div className="lg:w-[900px] lg:justify-center items-center mx-auto">
            <p className="p-5 flex justify-between lg:justify-end font-bold">
              total:<span>$0</span>
            </p>
          </div>
          <div className="pb-5 flex justify-center">
            <Button
              dynamicClass="bg-red-500 lg:w-[900px] mx-3"
              title={"CheckOut"}
            />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <XNavBar />
      </div>
      <NavBar navElement={navElement} />
    </div>
  );
};

export default MyCart;
