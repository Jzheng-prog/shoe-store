"use client";
import Heading from "@/components/Heading";
import FavCard from "@/components/FavCard";
import GlobalState from "@/context";

const Favorites = () => {
  return (
    <div>
      <Heading title={"Favorites"} />
      <GlobalState>
        <FavCard />
      </GlobalState>
    </div>
  );
};

export default Favorites;
