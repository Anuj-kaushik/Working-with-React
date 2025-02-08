import  { useState } from "react";

const BgChanger = () => {
  const [bg, setBg] = useState("bg-zinc-900");

  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    white: "bg-white",
  };

  const handleClick = (e) => {
    const getId = e.target.id;
    if (colorMap[getId]) setBg(colorMap[getId]);
  };

  return (
    <div className={bg}>
      <div className="min-h-screen flex flex-col justify-between items-center p-5">
        <h1 className="text-6xl font-bold text-zinc-800">
          Background Color Changer
        </h1>
        <div className=" bg-zinc-800 flex justify-between gap-3 px-3 py-2 rounded-lg font-semibold ">
          <button
            id="red"
            onClick={handleClick}
            className="bg-rose-500 px-4 py-2 rounded-lg"
          >
            Red
          </button>
          <button
            id="blue"
            onClick={handleClick}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            Blue
          </button>
          <button
            id="green"
            onClick={handleClick}
            className="bg-green-500 px-4 py-2 rounded-lg"
          >
            Green
          </button>
          <button
            id="yellow"
            onClick={handleClick}
            className="bg-yellow-500 px-4 py-2 rounded-lg"
          >
            Yellow
          </button>
          <button
            id="white"
            onClick={handleClick}
            className="bg-white px-4 py-2 rounded-lg"
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
