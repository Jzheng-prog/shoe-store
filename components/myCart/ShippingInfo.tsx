import React from "react";

const ShippingInfo = () => {
  return (
    <div className="lg:justify-center items-center lg:mx-auto lg:w-[900px]">
      <div className="flex justify-between my-3 rounded-xl bg-gray-600 mx-3 lg:mx-0">
        <h1 className="p-3 text-white flex items-center">
          Shipping to: 1234 Blank Ter
        </h1>
        <button className=" p-2 rounded-lg m-2 bg-white items-center flex text-xs md:text-lg lg:text-lg">
          change
        </button>
      </div>
    </div>
  );
};

export default ShippingInfo;
