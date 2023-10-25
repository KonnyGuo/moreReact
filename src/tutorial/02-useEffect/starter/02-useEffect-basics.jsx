import { useState, useEffect } from "react";

// useEffect for subscription, fetching data, messing with dom. Works outside of the component
// 2 parameters that it accepts, callback function and dependency array (optional). Callback function runs after each render by default but no promises can be return (no async await). The dependency array if empty then it only runs on inital render

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  useEffect(() => {
    console.log("hello from use eff");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
