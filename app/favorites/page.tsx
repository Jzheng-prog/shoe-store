"use client";
import Heading from "@/components/Heading";
import FavCard from "@/components/FavCard";
import XNavBar from "@/components/XNavBar";

const Favorites = () => {
  return (
    <div>
      <Heading title={"Favorites"} />
      <FavCard />
      <XNavBar />
    </div>
  );
};

export default Favorites;
