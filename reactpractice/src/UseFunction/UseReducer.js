import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
};
const UseReducer = () => {
  //   const [state, setState] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 gap-5">
        <div className="flex justify-around flex-col border-black rounded-md border-4 bg-blue-500 h-[234px] w-[271px]">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center text-center rounded-full bg-white text-5xl w-[60px] h-[60px]">
              {state}
            </div>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <button
              className="flex justify-center border-4 border-white rounded-2xl bg-white w-40 font-bold"
              onClick={() => {
                dispatch({ type: "Increment" });
              }}
            >
              Increment
            </button>
            <button
              className="border-4 border-white rounded-2xl bg-white w-40 font-bold"
              onClick={() => {
                dispatch({ type: "Decrement" });
              }}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
