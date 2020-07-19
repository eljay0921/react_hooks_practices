import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => {
    console.log("hello ~");
  };

  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  // 1번째 인자는 실행할 function, 2번째 인자는 dependencies (예 : number state가 바뀔때만 function 실행)
  // 이 예제에서 useEffect는 componentDidMount와 componentDidUpdate 인데, [number] state가 바뀔때만 동작
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div>Hi !</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
export default App;
