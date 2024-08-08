import React from "react";

interface CardProps {
  data: {
    title: string;
    description: string;
    image: string;
  }[];
}
const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="w-full flex-col md:flex-wrap md:flex-row md:flex">
      {data.map((item, index) => (
        <div className="w-[300px] mx-auto" key={index}>
          <a
            href=""
            className="border border-gray-300 m-3 flex rounded-xl p-3 md:h-[150px] md:items-center"
          >
            <img
              src={item.image}
              alt=""
              className="w-[50px] h-[50px] bg-gray-300 rounded-lg p-2 m-2 items-center flex justify-center object-cover"
            />
            <div>
              <h1 className="text-lg">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
