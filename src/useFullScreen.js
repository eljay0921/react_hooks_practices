import { useRef } from "react";

const useFullScreen = (callBack) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callBack && typeof callBack === "function") {
      callBack(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitReqeustFullscreen) {
        element.current.webkitReqeustFullscreen();
      } else if (element.current.msReqeustFullscreen) {
        element.current.msReqeustFullscreen();
      }

      runCb(true);
    }
  };

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExtFullscreen) {
      document.webkitExtFullscreen();
    } else if (document.msExitFullscreenen) {
      document.msExitFullscreenen();
    }

    runCb(false);
  };

  return { element, triggerFull, exitFull };
};

export default useFullScreen;
