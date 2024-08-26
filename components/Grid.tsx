import React from "react";

const Grid = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12">
      <div className=" mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4">
        <div className="col-span-2 bg-blue-300 p-4">1</div>
        <div className="col-span-2 row-span-2 bg-red-300 p-4">2</div>
        <div className="col-span-2 bg-green-300 p-4">3</div>{" "}
        <div className="col-span-2 bg-purple-300 p-4">4</div>
        <div className="col-span-2 bg-yellow-300 p-4">5</div>
        <div className="col-span-2 bg-gray-300 p-4">6</div>
        <div className="col-span-2 bg-orange-300 p-4">7</div>
        <div className="col-span-2 bg-red-300 p-4">8</div>
        <div className="col-span-2 bg-blue-800 p-4">9</div>{" "}
        <div className="col-span-2 bg-red-900 p-4">10</div>
        <div className="col-span-2 bg-green-600 p-4">11</div>
        <div className="col-span-2 bg-yellow-600 p-4">12</div>
      </div>
    </div>
  );
};

export default Grid;
