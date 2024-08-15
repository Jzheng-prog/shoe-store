"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  image: string;
  availability: string;
}
interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  availability: string;
  size: number[];
  quantity: number;
}
interface GlobalContextType {
  cartItems: CartItem[];
  favoriteList: FavoriteItem[];
  updateListItem: (item: FavoriteItem) => void;
  updateCartItem: (item: CartItem) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [favoriteList, setFavoriteList] = useState<FavoriteItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // useEffect(() => {
  //   console.log(favoriteList);
  // }, [favoriteList]);

  function updateListItem(currItem: FavoriteItem) {
    let copy = [...favoriteList];

    const index = copy.findIndex((item) => item.id === currItem.id);

    if (index === -1) {
      copy.push(currItem);
    } else {
      copy.splice(index, 1); // Correct way to remove the item
    }
    setFavoriteList(copy);
  }

  function updateCartItem(currItem: CartItem) {
    let copy = [...cartItems];
    const index = copy.findIndex((item) => item.id === currItem.id);

    if (index === -1) {
      copy.push(currItem);
    } else {
      copy.splice(index, 1); // Correct way to remove the item
    }
    setCartItems(copy);
  }

  return (
    <GlobalContext.Provider
      value={{ favoriteList, updateListItem, cartItems, updateCartItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
