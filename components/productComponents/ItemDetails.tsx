"use client";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";

const ItemDetails = () => {
  const dummyData = {
    id: 1,
    title: "Jordan-1",
    quantity: 10,
    price: 199.99,
    size: [6, 7, 8, 9, 10, 11],
    image: "/jordan-1-red.webp",
    availability: "In-stock",
  };
  const { title, price, size } = dummyData;

  const context = useContext(GlobalContext);

  if (!context) {
    return <div>No Context</div>;
  }

  const { updateListItem, updateCartItem } = context;

  return (
    <div>
      <div className="rounded-lg shadow-lg m-3 bg-gray-100 md:w-[600px] md:mx-auto border border-gray-300">
        <img
          src="/jordan-1-red.webp"
          alt=""
          width={500}
          className="p-2 bg-gray-200 w-full"
        />

        <div className="mx-auto w-full p-3 md:p-5">
          <div className="w-full h-full">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="font-semibold">${price}</p>
            <p className="mt-2">Select Size</p>
            <ul className="flex-wrap flex mb-3">
              {size.map((s, index) => (
                <div
                  key={index}
                  className="m-1 border border-gray-400 on hover:border-gray-700"
                >
                  <li className="p-2 flex justify-center items-center">
                    <button>{s}</button>
                  </li>
                </div>
              ))}
            </ul>

            <div className="flex justify-between">
              <button
                className="bg-red-500 p-3 rounded-full m-1 text-xs text-white shadow-md"
                onClick={() => updateListItem(dummyData)}
              >
                Add to Favorite
              </button>
              <button
                className="bg-gray-800 p-3 rounded-full m-1 text-xs text-white shadow-md"
                onClick={() => updateCartItem(dummyData)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
