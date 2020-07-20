import React, { useState, useEffect, useRef } from "react";
import useBeaforeLeave from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Don't leave!");
  useBeaforeLeave(begForLife);

  return (
    <div className="App">
      <div>Hi !</div>
    </div>
  );
};
export default App;
