import React from "react";
import createNotify from "../utils/createNotify";

const NotificationPage = () => {
  const notify = createNotify("Can I steal your money");
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={notify}>click</button>
    </div>
  );
};

export default NotificationPage;
