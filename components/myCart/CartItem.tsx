"use client";
import { GlobalContext } from "@/context";
import React, { useContext, useState } from "react";

interface itemsProp {
  id: number;
  title: string;
  quantity: number;
  price: number;
  size: number[];
  image: string;
  availability: string;
}
interface cartItemProp {
  items: itemsProp[];
}

const CartItem: React.FC<cartItemProp> = ({ items }) => {
  const [quantity, setQuantity] = useState(0);

  const context = useContext(GlobalContext);

  if (!context) {
    return <div>No Context</div>;
  }

  const { updateCartItem } = context;

  function handleQuantity(operation: string) {
    if (operation === "minus") {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else if (operation === "plus") {
      setQuantity(quantity + 1);
    }
  }

  if (items.length === 0) {
    return (
      <div>
        <h1 className="font-extrabold text-center text-lg">
          Your Cart is Empty!
        </h1>
      </div>
    );
  }

  return (
    <div className="lg:w-[900px] lg:justify-center items-center mx-2 lg:mx-auto">
      {items.map((item) => (
        <div
          className="flex flex-col lg:flex-row lg:rounded-xl bg-gray-200 shadow-lg my-3 border-spacing-1"
          key={item.id}
        >
          <div className="ml-2">
            <img className="p-2 lg:p-5" src={item.image} width={500} />

            {/* Quantity */}
            <p className="my-1 p-1 flex items-center">
              <span className="m-1">Quantity: </span>

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
            <p className="my-1 px-2 py-1">{item.title}</p>
            <p className="my-1 p-2">
              Size:
              <select>
                {item.size.map((i, index) => (
                  <option value={i} key={index}>
                    {i}
                  </option>
                ))}
              </select>
            </p>
            <p
              className={`my-1 p-2 ${
                item.availability === "In-stock"
                  ? " text-green-700"
                  : "text-red-700"
              }`}
            >
              {item.availability}
            </p>
            <p className="my-1 p-2 font-extrabold">${item.price}</p>
            <button
              onClick={() => updateCartItem(item)}
              className="border border-black p-2 rounded-lg lg:bottom-0 lg:absolute m-2 right-0 text-xs md:text-lg lg:text-lg bg-white"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
