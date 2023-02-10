import React, { useRef, useState } from "react";

const UseRef = () => {
  const luckName = useRef(null);
  const [show, setShow] = useState(false);
  const submit = () => {
    const val = luckName.current.value;
    val === "" ? alert("Enter The Number !!!") : setShow(true);
  };
  if (show) {
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 gap-5">
        <div className="flex justify-around flex-col border-black rounded-md border-4 bg-blue-500 h-[234px] w-[271px]">
          <div className="flex justify-center items-center">
            <input
              type="number"
              placeholder="Enter your Luck Name"
              ref={luckName}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border-4 border-white rounded-2xl bg-white w-40 font-bold"
              onClick={submit}
            >
              Submit !
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col border-black rounded-md border-4 bg-blue-500 h-10 w-52">
          {show ? `Your Lucky Number ${luckName.current.value}` : ""}
        </div>
      </div>
    </>
  );
};

export default UseRef;
