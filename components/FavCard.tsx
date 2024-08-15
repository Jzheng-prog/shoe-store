"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context";
import Button from "./Button";

const FavCard = () => {
  const context = useContext(GlobalContext);

  // Ensure context is not null
  if (!context) {
    return <p>Loading...</p>;
  }

  const { favoriteList, updateListItem } = context;

  return (
    <div className="flex justify-center flex-wrap">
      {favoriteList.length > 0 ? (
        favoriteList.map((item) => (
          <div
            key={item.id}
            className="bg-white m-2 p-4 rounded-lg shadow-lg items-center lg:w-[400px]"
          >
            <h1 className="text-xl font-extrabold text-center">{item.title}</h1>
            <p className="font-semibold text-center">Price: ${item.price}</p>
            <p className="font-semibold text-center text-green-600">
              {item.availability}
            </p>

            <img src={item.image} alt="" width={200} className="lg:w-full" />

            <Button dynamicClass="bg-blue-500" title="more" />
            <Button
              handleClick={() => updateListItem(item)}
              dynamicClass="bg-red-500 "
              title="delete"
            />
          </div>
        ))
      ) : (
        <p>No favorites to display.</p>
      )}
    </div>
  );
};

export default FavCard;
