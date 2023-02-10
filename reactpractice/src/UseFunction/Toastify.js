import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify = () => {
  const diffToast = () => {
    toast("Login Successfully !!!!", {
      position: "top-right",
      theme: "dark",
      autoClose: 1500,
    });
    // toast.success('🦄 Wow so easy!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400">
        <div className="flex justify-around flex-col border-black rounded-md border-4 bg-blue-500 h-[234px] w-[271px]">
          <div className="flex justify-center items-center">
            <input
              required
              autoComplete="off"
              type="email"
              className="w-52 p-2 rounded-lg"
              placeholder="Enter email"
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              required
              autoComplete="off"
              type="password"
              className="w-52 p-2 rounded-lg"
              placeholder="Enter password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border-4 border-white rounded-2xl bg-white w-40 font-bold"
              onClick={diffToast}
            >
              Login
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toastify;
