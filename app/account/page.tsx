import Card from "@/components/account/Card";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";
import XNavBar from "@/components/XNavBar";
import { accountCard, navElement } from "@/data";
import React from "react";

const Account = () => {
  return (
    <div className="relative pb-16">
      <Heading title="Your Account" />

      <Card data={accountCard} />

      <div className="md:hidden">
        <XNavBar />
      </div>
    </div>
  );
};

export default Account;
