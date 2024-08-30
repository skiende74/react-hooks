import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current === undefined) return;
    const el = element.current;
    el.addEventListener("click", onClick);

    return () => el.removeEventListener("click", onClick);
  }, [onClick]);

  return element;
};

export default useClick;
