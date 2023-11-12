import { useState, useEffect } from "react";

// (condition)
// falsly values in js include 0, false, empty string, null, underfine, nan
// truthy values includes objects and arrays

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {

  //   // won't work, cannot place hook inside if condition
  //   const [state, setState] = useState(false);
  // }

  useEffect(() => {});

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail, if we are returning then thats it. In create react app, will be bunch of error. Be careful of returns before useEffect. Always put useEffect before those conditionals
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;
