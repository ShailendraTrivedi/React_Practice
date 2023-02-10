import React, { createContext } from "react";
import B from "./B";
const data = createContext();
const A = () => {
  return (
    <div>
      <data.Provider value={"Shailendra Trivedi"}>
        <B />
      </data.Provider>
    </div>
  );
};

export default A;
export { data };
