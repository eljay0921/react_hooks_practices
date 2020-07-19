import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // console.log(event);
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  // 아래와 동일 const maxLen = (value) => { return value.length < 10; };
  const checkMaxLen = (value) => value.length < 10;
  const checkValid = (value) => !value.includes("@");
  const name = useInput("Mr.", checkValid);

  // {...name} => name 안의 모든 것을 unpacking 한다. (ex. value, onChange, etc...)
  return (
    <div>
      <h1>Hello bro</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;
