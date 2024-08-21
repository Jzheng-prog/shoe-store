import React from "react";
interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="text-center justify-center text-2xl h-full w-full overflow-x-hidden">
      <h1 className="text-3xl font-bold text-gray-900 my-4 p-3">{title}</h1>
    </div>
  );
};

export default Heading;
