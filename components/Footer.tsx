"use client";
import { socialsList } from "@/data";
import React from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animation";

const Footer = () => {
  useGSAP(() => {
    animateWithGsap(
      "#socials",
      {
        y: 0,
        opacity: 1,
      },
      {
        start: "top 95%",
      }
    );
  });
  return (
    <div
      className="flex flex-col justify-between items-center mr-3 opacity-0 overflow-x-hidden sm:flex-row"
      id="socials"
    >
      <p className="lg:ml-[300px] md:ml-[100px] sm:mx-auto text-sm p-3">
        All rights reserved © 2024 | Contact 1-800-000-0000 | Support | More{" "}
      </p>

      <div className="flex">
        {socialsList.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 p-2 rounded-xl m-2 bg-white hover:-translate-y-1"
          >
            <img src={item.logo} alt="" className="w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
