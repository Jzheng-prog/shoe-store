"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import { animateWithGsap } from "@/utils/animation";

const Selections = () => {
  useGSAP(() => {
    animateWithGsap("#jordan", {
      y: 0,
      duration: 1.5,
      opacity: 1,
    });
  });

  return (
    <div className="w-full mx-auto overflow-x-hidden">
      {/* help center */}
      <div className="flex justify-center p-3 mt-2 overflow-x-hidden  lg:ml-[75px]">
        {/* container */}
        <div className="container overflow-x-hidden">
          <h1 className="text-3xl font-bold text-gray-900 mx-auto mb-4 p-3 md:ml-[100px]">
            Classic Selections
          </h1>

          {/* jordans */}
          <div
            className="opacity-0 translate-y-20 md:w-[600px] lg:w-[900px] mb-6 pb-4 rounded-xl p-4 shadow-sm bg-gray-100 mx-auto justify-center md:ml-[100px] lg:ml-[20px] xl:mx-auto"
            id="jordan"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mt-3 p-3">
              Jordans
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <p className="m-2 p-1">
                Step into the world of iconic athletic wear with our{" "}
                <span className="font-bold text-lg">exclusive</span> Jordan
                collection. Renowned for revolutionizing the world of sports and
                fashion, Jordan sneakers are not just shoes; they're a symbol of
                performance and style. Born from the legendary partnership
                between Michael Jordan and Nike, each pair of Jordans tells a
                story of excellence and innovation.
              </p>
              <img
                src="/jordan-1-red.webp"
                alt="jordan-1-spiderman"
                className="md:w-[300px] md:h-[150px] lg:w-[500px] lg:h-[250px] mt-4 md:mt-0 md:ml-4"
              />
            </div>
            <div className="flex flex-col md:flex-row m-3 justify-between items-center p-3">
              <button className="bg-gray-800 rounded-md p-3 text-white mb-3 md:mb-0">
                Explore More
              </button>
              <p className="font-bold text-lg text-center md:text-right md:ml-auto">
                Nike Air Jordan 1 Retro High OG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selections;
