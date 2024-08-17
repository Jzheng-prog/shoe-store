import Card from "@/components/account/Card";
import Heading from "@/components/Heading";
import { accountCard } from "@/data";
import React from "react";

const Account = () => {
  return (
    <div className="relative pb-16">
      <Heading title="Your Account" />
      <Card data={accountCard} />
    </div>
  );
};

export default Account;
