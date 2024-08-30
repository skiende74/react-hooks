import React from "react";
import useBeforeLeave from "../hooks/useBeforeLeave";

const BeforeLeavePage = () => {
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);
  return <div>BeforeLeavePage</div>;
};

export default BeforeLeavePage;
