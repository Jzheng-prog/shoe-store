"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavElement {
  id: number;
  title: string;
  logo?: string;
}

interface NavBarProps {
  navElement: NavElement[];
}

const NavBar: React.FC<NavBarProps> = ({ navElement }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function handleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div
      className={`z-50 left-0 top-0 h-full bg-gray-800 fixed text-white ${
        toggleMenu ? " w-[250px] " : "w-[100px]"
      } hidden md:block`}
    >
      <div className="flex items-center justify-center mt-[50px] mb-3">
        <Link
          href="/"
          className="md:text-2xl md:font-extrabold text-white ml-4"
        >
          {toggleMenu ? "ShoeStore" : "SS"}
        </Link>
        <div className="ml-3">
          <button onClick={handleMenu}>{toggleMenu ? "<" : ">"}</button>
        </div>
      </div>
      <div>
        {navElement.map((item) => (
          <div
            className={`${
              toggleMenu ? "p-3 justify-center text-center" : "p-2"
            }`}
            key={item.id}
          >
            <ul>
              <li>
                <a
                  href=""
                  className="flex text-center items-center justify-center"
                >
                  {toggleMenu ? (
                    <p className="w-full rounded-sm p-1 hover:bg-blue-500">
                      {item.title}
                    </p>
                  ) : (
                    <img
                      src={item.logo}
                      className="items-center justify-center w-12 h-12 bg-white border p-2 hover:scale-110 rounded-full"
                    />
                  )}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Profile Button */}
      <div className="flex justify-center items-center absolute bottom-0 m-3">
        {toggleMenu ? (
          <div className="flex justify-center items-center">
            <a href="" className="flex justify-center items-center p-3">
              <img
                src="/user-logo.png"
                alt="user-logo"
                className="w-12 h-12 bg-white rounded-full p-2 "
              />
              {isLogin ? (
                <a href="" className="pl-3">
                  Profile
                </a>
              ) : (
                <a href="/signup" className="pl-3">
                  Sign-In
                </a>
              )}
            </a>
          </div>
        ) : (
          <div className="pl-4">
            <a href="" className="flex justify-center items-cente">
              <img
                src="/user-logo.png"
                alt="user-logo"
                className="w-12 h-12 bg-white rounded-full p-2 hover:scale-110"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
