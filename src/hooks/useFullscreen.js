import { useRef } from "react";

const useFullscreen = (onFullScreen) => {
  const element = useRef(null);

  const triggerFull = () => {
    if (element.current === null) return;
    element.current.requestFullscreen();
    if (typeof onFullScreen !== "function") return;
    onFullScreen(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (typeof onFullScreen !== "function") return;
    onFullScreen(false);
  };

  return { element, triggerFull, exitFull };
};

export default useFullscreen;
