import React from "react";

interface ButtonProps {
  title: string;
  handleClick: () => void; // Define handleClick prop
}

const Button: React.FC<ButtonProps> = ({ title, handleClick }) => {
  return (
    <div className="lg:w-[900px] lg:justify-center items-center lg:mx-auto m-3">
      <button
        className="p-2 rounded-lg w-full bg-red-500 text-white"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
