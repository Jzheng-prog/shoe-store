"use client";
import React, { useState } from "react";
import Sign_up_Form from "@/components/user_auth/Sign_up_Form";
import XNavBar from "@/components/XNavBar";
import NavBar from "@/components/NavBar";
import { navElement } from "@/data";
import Login_Form from "@/components/user_auth/Login_Form";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  function handleForm() {
    setIsLoginPage(!isLoginPage);
  }

  return (
    <div>
      <div className="text-center justify-center text-2xl h-full w-full overflow-x-hidden">
        <h1 className="text-3xl font-bold text-gray-900 my-3 p-3">ShoeStore</h1>
      </div>

      {isLoginPage ? (
        <Login_Form changeForm={handleForm} />
      ) : (
        <Sign_up_Form changeForm={handleForm} />
      )}

      {/* Nav */}
      <div className="lg:hidden md:hidden">
        <XNavBar />
      </div>
      <div>
        <NavBar navElement={navElement} />
      </div>
    </div>
  );
};

export default SignUp;
