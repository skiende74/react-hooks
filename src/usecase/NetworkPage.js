import React from "react";
import useNetwork from "../hooks/useNetwork";

const NetworkPage = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we are online" : "we are offline");
  };
  const status = useNetwork(handleNetworkChange);
  return <div>NetworkPage : {status ? "online" : "offline"}</div>;
};

export default NetworkPage;
