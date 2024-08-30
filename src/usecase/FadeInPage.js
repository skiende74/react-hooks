import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current === undefined) return;
    const { current } = element;
    const styleBefore = { ...current.style };
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
    return () => {
      current.style = styleBefore;
    };
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const FadeInPage = () => {
  const fadeInH1 = useFadeIn();
  const fadeInP = useFadeIn(5, 5);

  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Hello</p>
    </div>
  );
};

export default FadeInPage;
