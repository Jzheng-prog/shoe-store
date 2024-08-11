"use client";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";
import FavCard from "../FavCard";

const ItemDetails = () => {
  const dummyData = {
    id: 1,
    title: "Jordan-1",
    quantity: 10,
    price: 199.99,
    size: [6, 7, 8, 9, 10, 11],
  };
  const { title, price, size } = dummyData;

  const { addToFav } = useContext(GlobalContext);

  return (
    <div>
      <div className="rounded-lg shadow-lg m-3 bg-gray-100 p-3 md:w-[600px] md:mx-auto">
        <img src="/jordan-1-red.webp" alt="" width={500} className="p-4" />

        <div className="mx-auto w-full p-2">
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

            <div className="flex">
              <button
                className="border border-black p-2 rounded-full m-1 text-xs"
                onClick={() => addToFav(dummyData)}
              >
                Add to Favorite
              </button>
              <button className="border border-black p-2 rounded-full text-white bg-slate-700 m-1 text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <FavCard />
    </div>
  );
};

export default ItemDetails;