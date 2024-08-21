"use client";
import Heading from "@/components/Heading";
import FavCard from "@/components/FavCard";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "@/components/Button";

const Favorites = () => {
  const { status } = useSession();
  console.log(status);

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 border border-red">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-center">
          <Heading title="Unauthenticated. Please sign in" />
        </div>
        <Link
          href="/login"
          className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Sign in
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Heading title={"Favorites"} />
      <FavCard />
    </div>
  );
};

export default Favorites;
