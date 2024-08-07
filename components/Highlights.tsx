import { popItems } from "@/data";
import React from "react";

const Highlights = () => {
  return (
    <div className="flex justify-center my-3 lg:my-[200px] py-3">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mx-auto mb-2 text-center p-3">
          Popular 2024
        </h1>

        <div className="m-3">
          <ul className="flex flex-col md:flex-row md:flex-wrap justify-center md:ml-[100px]">
            {popItems.map((item) => (
              <li key={item.title} className="px-2">
                <div className="mt-3 w-full h-64 tilt-container">
                  <h1 className="absolute m-3 font-bold">{item.title}</h1>
                  <a href="">
                    <img
                      src={item.image}
                      className="rounded-xl object-cover h-full w-full"
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
