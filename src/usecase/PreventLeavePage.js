import React from "react";
import createPreventLeaveHandler from "../utils/createPreventLeaveHandler";

const PreventLeavePage = () => {
  const { disablePrevent: protect, enablePrevent: unprotect } = createPreventLeaveHandler();
  return (
    <div>
      <button onClick={protect}>protect</button>
      <button onClick={unprotect}>unprotect</button>
    </div>
  );
};

export default PreventLeavePage;
