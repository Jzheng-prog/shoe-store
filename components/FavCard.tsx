"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context";

const FavCard = () => {
  const context = useContext(GlobalContext);

  // Ensure context is not null
  if (!context) {
    return <p>Loading...{context}</p>;
  }

  const { favoriteList } = context;

  console.log(favoriteList.length);

  return (
    <div className="flex justify-center flex-wrap">
      {favoriteList.length > 0 ? (
        favoriteList.map((item) => (
          <div
            key={item.id}
            className="border border-black m-2 p-4 rounded-lg shadow-lg"
          >
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p>ID: {item.id}</p>
          </div>
        ))
      ) : (
        <p>No favorites to display.</p>
      )}
    </div>
  );
};

export default FavCard;
