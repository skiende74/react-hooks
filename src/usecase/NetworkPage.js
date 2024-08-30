import React, { useEffect, useState } from "react";
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    setStatus(navigator.onLine);
    if (typeof onChange !== "function") return;
    onChange(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  });

  return status;
};
const NetworkPage = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "we are online" : "we are offline");
  };
  const status = useNetwork(handleNetworkChange);
  return <div>NetworkPage : {status ? "online" : "offline"}</div>;
};

export default NetworkPage;
