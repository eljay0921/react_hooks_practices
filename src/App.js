import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const updateEmail = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  return (
    <div>
      Count : {count}
      <br />
      <button onClick={incrementCount}>Increeeeement</button>
      <button onClick={decrementCount}>Decreeeeement</button>
      <br />
      <br />
      {email}
      <br />
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </div>
  );
};
export default App;
