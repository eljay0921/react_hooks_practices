import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIdx, setCurrentIdx] = useState(initialTab);
  return {
    currentItem: allTabs[currentIdx],
    changeItem: setCurrentIdx,
  };
};

export default useTabs;
