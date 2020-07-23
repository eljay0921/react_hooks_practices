import React, { useState, useEffect, useRef } from "react";
import useFullScreen from "./useFullScreen";

const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small..");
  };

  const { element, triggerFull, exitFull } = useFullScreen(onFullScreen);

  return (
    <div className="App">
      <div ref={element}>
        <img
          alt="kdb"
          src="https://pds.joins.com//news/component/htmlphoto_mmdata/201711/10/76c8c10e-a523-4b0f-96fe-1cf982ca9d78.jpg"
        ></img>
        <button onClick={exitFull}>Exit Fulllllllll!!</button>
      </div>
      <button onClick={triggerFull}>Make Fulllllllll!!</button>
    </div>
  );
};

export default App;
