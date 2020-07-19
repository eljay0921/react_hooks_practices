import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => {
    console.log("hello ~");
  };

  useEffect(() => {
    sayHello();
  });

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  return (
    <div className="App">
      <div>Hi !</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
export default App;
