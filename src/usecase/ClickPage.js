import React from "react";
import useClick from "../hooks/useClick";

const ClickPage = () => {
  const onClick = () => {
    console.log("say Hello");
  };
  const title = useClick(onClick);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default ClickPage;
