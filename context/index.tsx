"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
  availability: string;
}
interface GlobalContextType {
  favoriteList: FavoriteItem[];
  addToFav: (item: FavoriteItem) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [favoriteList, setFavoriteList] = useState<FavoriteItem[]>([]);
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log(favoriteList);
  // }, [favoriteList]);

  function addToFav(currItem: FavoriteItem) {
    setToggle(!toggle);
    let copy = [...favoriteList];

    const index = copy.findIndex((item) => item.id === currItem.id);

    if (index === -1) {
      copy.push(currItem);
    } else {
      copy.splice(index, 1); // Correct way to remove the item
    }
    setFavoriteList(copy);
  }

  return (
    <GlobalContext.Provider value={{ favoriteList, addToFav }}>
      {children}
    </GlobalContext.Provider>
  );
}
