import React, { useState, useEffect, useRef } from "react";
import useNotification from "./useNotification";

const App = () => {
  const notify = useNotification("Can I love You?", { body: "I Love You" });

  return (
    <div className="App">
      <button onClick={notify}>Hello~!</button>
    </div>
  );
};

export default App;
