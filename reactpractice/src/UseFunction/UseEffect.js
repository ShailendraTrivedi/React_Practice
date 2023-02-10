import React, { useEffect, useState } from "react";
import UseCostomHook from "./UseCostomHook";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  UseCostomHook(count);
  console.log("Hello");
  return (
    <>
      <div className="flex flex-col p-10 ">
        <p className="w-32 h-20 flex justify-center items-center text-4xl ">
          {count}
        </p>
        <button
          className="border-4 border-orange-500 bg-orange-500"
          onClick={(e) => setCount(count + 1)}
        >
          Click
        </button>
      </div>
    </>
  );
};

export default UseEffect;
