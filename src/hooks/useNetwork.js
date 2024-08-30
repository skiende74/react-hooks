import { useSyncExternalStore } from "react";

const subscribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const useNetwork = () =>
  useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

export default useNetwork;
