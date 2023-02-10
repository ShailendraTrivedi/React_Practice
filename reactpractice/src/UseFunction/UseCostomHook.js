import React, { useEffect } from "react";
const UseCostomHook = (count) => {
  const useEffect = () => {
    useEffect(() => {
      document.title = count > 0 ? `Chats(${count})` : `Chats`;
    }, [count]);
  };
};

export default UseCostomHook;
