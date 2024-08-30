import React, { useEffect, useState } from "react";

const subscribe = (callback) => {
  window.addEventListener("scroll", callback);
  return () => window.removeEventListener("scroll", callback);
};

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const callback = () => setState({ x: window.scrollX, y: window.scrollY });

  useEffect(() => {
    subscribe(callback);
  }, []);

  return state;
};

const ScrollPage = () => {
  const { y } = useScroll();
  return (
    <div>
      <h3>scroll</h3>
      <div style={{ height: "150vh", fontSize: "40px" }}>{y}</div>
    </div>
  );
};

export default ScrollPage;
