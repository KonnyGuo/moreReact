import { useState, useEffect } from "react";

// can set up multiple use effect
// useEffect(() => {
//   effect function
// }, [deps]);
// Empty array - []:
// This runs the effect only once on mount and unmount.
// It won't re-run on state changes or re-renders.
// Dependency array - [dep1, dep2]:
// This runs the effect whenever dep1 or dep2 change.
// Great for when you only want to re-run when certain data updates.
// So in summary:

// [] - Runs on mount/unmount only
// [deps] - Runs on mount and when deps change

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value, secondValue]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
