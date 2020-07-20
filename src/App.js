import React, { useState, useEffect, useRef } from "react";
import useNetwork from "./useNetwork";

const App = () => {
  const handleNetworkChange = (status) =>
    console.log(status ? "We ON-" : "We off...");
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>Hi u guys</h1>
      <h1>{onLine ? "Oooooon line !" : "OFFline..."}</h1>
    </div>
  );
};
export default App;
