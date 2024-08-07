"use client";
import React, { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(0);

  function handleQuantity(operation: String) {
    if (operation === "minus") {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else if (operation === "plus") {
      setQuantity(quantity + 1);
    }
  }
  return (
    <div className="lg:w-[900px] lg:justify-center items-center mx-1 lg:mx-auto">
      <div>
        <div className="flex flex-col lg:flex-row lg:rounded-xl bg-gray-100 shadow-md">
          <div className="ml-2">
            <img className="p-2 lg:p-5" src="/jordan-1-red.webp" width={500} />

            {/* Quantity */}
            <p className="m-5 flex items-center">
              <span className="mr-1">Quantity: </span>

              <button
                onClick={() => handleQuantity("minus")}
                className="w-6 m-1 rounded-xl bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-6 custom-number-input text-center"
              />

              <button
                onClick={() => handleQuantity("plus")}
                className="w-6 m-1 rounded-xl bg-gray-200"
              >
                +
              </button>
            </p>
            {/*  */}
          </div>
          <div className="p-2 lg:p-5 relative w-full">
            <p className="my-1 p-2">Jordan-1 Retro</p>
            <p className="my-1 p-2">
              Size:
              <select>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
                <option value="">11</option>
                <option value="">12</option>
              </select>
            </p>
            <p className="my-1 p-2 text-green-700">In-Stock</p>
            <p className="my-1 p-2 font-extrabold">$199.99</p>
            <button className="border border-black p-2 rounded-lg lg:bottom-0 lg:absolute m-2 right-0 text-xs md:text-lg lg:text-lg bg-white">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
