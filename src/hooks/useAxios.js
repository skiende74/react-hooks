import defaultAxios from "axios";
import { useCallback, useEffect, useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({ isLoading: true, error: null, data: null });
  const [trigger, setTrigger] = useState(Date.now());

  const updater = useCallback(() => {
    if (!options.url) return;
    axiosInstance(options)
      .then((response) => {
        setState((state) => ({ ...state, loading: false, data: response.data }));
      })
      .catch((error) => {
        setState((state) => ({ ...state, loading: false, error }));
      });
  }, [axiosInstance, options.url, trigger]);

  useEffect(() => {
    updater();
    console.log("called");
  }, [updater]);

  const refetch = () => {
    setState((state) => ({ ...state, loading: true }));
    setTrigger(Date.now());
  };
  return { ...state, refetch };
};

export default useAxios;
