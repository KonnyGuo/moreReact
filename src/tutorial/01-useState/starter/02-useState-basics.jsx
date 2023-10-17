import { useState } from "react";
//can also type React.useState
//need to invoke function

// useState (function we get from react) -> array with 2 elements (current state value and func to update state value and in function pass in default value (string num arr etc)), value is perserved in rerender

const UseStateBasics = () => {
  //gets an array [underfine, function], can pass in string, arr, num, anything
  //first param is default value
  // const count = console.log(useState(1)[0]); same as count
  // const func = console.log(useState(1)[1]); same as setCount

  //updates and rerenders using state, previous in 01 value changes but not getting rerender so nothing is seen
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // changes message to hello world instead of count
    // setCount("hello world");
  };

  return (
    <div>
      <h4> you clicked {count} times </h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
};

export default UseStateBasics;
