import React, { useContext } from "react";
import { data } from "./A";
const C = () => {
  const thisData = useContext(data);
  console.log(data);
  return <div>Hello I'm {thisData} </div>;
};

export default C;
