import { xNavEle } from "@/data";
import React from "react";

const XNavBar = () => {
  return (
    <div className="border border-t-2 mt-2 fixed bottom-0 left-0 w-full bg-white">
      <ul className="flex p-2 justify-between mx-2">
        {xNavEle.map((item, index) => (
          <li key={index}>
            <div className="m-1 flex items-center justify-center flex-col">
              <img src={item.image} alt="" className="w-5 h-5" />
              <a href="">{item.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XNavBar;
