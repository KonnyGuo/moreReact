import { useState } from "react";

// access latest value at all time using function with states. This is important for some other functions that may rely on needing the latest value from the current function.
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);

    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState);
      return newState;
    });
    // console.log(value);
  };
  return (
    <div>
      <h1> {value} </h1>
      <button type="button" className="btn" onClick={handleClick}>
        {" "}
        click here{" "}
      </button>
    </div>
  );
};

export default UseStateGotcha;
