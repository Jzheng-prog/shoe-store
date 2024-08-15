import React from "react";

interface ButtonProps {
  title: string;
  handleClick?: () => void; // Define handleClick prop
  dynamicClass: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  handleClick,
  dynamicClass,
}) => {
  return (
    <div className="flex lg:justify-center items-center lg:mx-auto my-2 w-full">
      <button
        className={`${dynamicClass} p-2 rounded-lg w-full text-white`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
