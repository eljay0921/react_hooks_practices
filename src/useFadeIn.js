import { useEffect, useRef } from "react";

const useFadeIn = (transitionSec = 1, delay = 0) => {
  if (typeof transitionSec !== "number" || typeof delay !== "number") {
    return;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${transitionSec}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
