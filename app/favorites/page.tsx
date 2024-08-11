import Heading from "@/components/Heading";
import React, { useContext } from "react";
import GlobalContext from "@/context";

interface GlobalContextType {
  favoriteList: string[];
}

const Favorites: React.FC = () => {
  const favoriteList = [
    {
      id: 1,
      title: "Jordan-1",
      img: "/jordan.svg",
      description: "iiii",
    },
    {
      id: 2,
      title: "Jordan-1",
      img: "/jordan.svg",
      description: "iiii",
    },
    {
      id: 3,
      title: "Jordan-1",
      img: "/jordan.svg",
      description: "iiii",
    },
  ];
  return (
    <div>
      <Heading title={"Favorites"} />

      {favoriteList && favoriteList.length > 0 ? (
        <div>
          {favoriteList.map((item, index) => (
            <div key={index}>{item.id}</div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Favorites;
