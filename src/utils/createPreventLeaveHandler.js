const createPreventLeaveHandler = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; // for legacy case
  };
  const enablePrevent = () => window.removeEventListener("beforeunload", listener);
  const disablePrevent = () => window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

export default createPreventLeaveHandler;
