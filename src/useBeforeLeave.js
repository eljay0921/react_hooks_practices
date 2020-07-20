import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.addEventListener("mouseleave", onBefore);

    // componentWillUnmount
    return () => document.removeEventListener("mouseleave", onBefore);

    // 계속 이벤트가 추가되면 안됨. 한 번만 동작하길 원하므로 초기화 : []
  }, []);
};

export default useBeforeLeave;
