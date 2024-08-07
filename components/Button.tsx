import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <div className="lg:w-[900px] lg:justify-center items-center lg:mx-auto m-3">
      <button className="p-2 rounded-lg w-full bg-red-500 text-white">
        Checkout
      </button>
    </div>
  );
};

export default Button;
