import React, { useState, useEffect } from "react";
import Content from "./Content";
import Loader from "./Loader";
const Page = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);
  const getUsers = async () => {
    try {
      setLoader(false);
      const response = await fetch([
        "https://jsonplaceholder.typicode.com/photos",
      ]);
      setUsers(await response.json());
      console.log(response);
    } catch (error) {
      console.log(" Error = " + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (loader) {
    <Loader />;
  }
  return (
    <>
      <Content props={users} />
    </>
  );
};

export default Page;
