import React, { useState } from "react";
const UseState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const submit = () => {
    if (email && password) {
      const newEntry = { email: email, password: password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill email & password !");
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              required
              autoComplete="off"
              type="password"
              className="w-52 p-2 rounded-lg"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="border-4 border-white rounded-2xl bg-white w-40 font-bold"
              onClick={submit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UseState;
