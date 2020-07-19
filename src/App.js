import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  // if (typeof onclick !== "function") {
  //   return;
  // }

  const element = useRef();

  useEffect(() => {
    // 첫번째 인자가 componentDidMount 시 호출될 function
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // useEffect에서 return하는 것은 : componentWillUnmount 시 호출되는 function
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    // 두번째 인자(deps)는 dependencies (componentDidUpdate)
  }, []);

  return element;
};

const App = () => {
  const sayHello = () => console.log("Hello bros");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <div>Hi !</div>
      <h1 ref={title}>oh my god</h1>
    </div>
  );
};
export default App;
