import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [favoriteList, setFavoriteList] = useState([]);

  async function handleSubmit() {}

  function handleAddToFavorite() {}

  return (
    <GlobalContext.Provider
      value={{ handleSubmit, handleAddToFavorite, favoriteList }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
