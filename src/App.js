import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");

  // {...name} => name 안의 모든 것을 unpacking 한다. (ex. value, onChange, etc...)
  return (
    <div>
      <h1>Hello bro</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;
