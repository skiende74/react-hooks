import React from "react";
import useFullscreen from "../hooks/useFullscreen";

const FullScreenPage = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div ref={element}>
      FullScreen
      <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
};

export default FullScreenPage;
