import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef(null);

  const runCallback = (status) => {
    if (typeof callback !== "function") return;
    callback(status);
  };
  const triggerFull = () => {
    if (element.current === null) return;

    if (element.current.requestFullscreen) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullScreen) {
      element.current.webkitRequestFullScreen();
    } else if (element.current.msRequestFullScreen) {
      element.current.msRequestFullScreen();
    }

    runCallback(false);
  };

  const exitFull = () => {
    if (document.exitFullScreen) {
      document.exitFullScreen();
    } else if (document.mozExitFullscreen) {
      document.mozExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    runCallback(false);
  };

  return { element, triggerFull, exitFull };
};

export default useFullscreen;
