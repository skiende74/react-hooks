import React from "react";
import createConfirmHandler from "../utils/createConfirmHandler";

const ConfirmPage = () => {
  const handleDelete = () => console.log("deleting..");
  const handleReject = () => console.log("rejected");
  const confirmDelete = createConfirmHandler("Are you sure?", handleDelete, handleReject);
  return (
    <div>
      ConfirmPage
      <button onClick={confirmDelete}>delete Button</button>
    </div>
  );
};

export default ConfirmPage;
