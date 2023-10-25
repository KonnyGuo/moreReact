import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello there");
    // setValue(value + 1);
  };
  // this function will run each time CodeExample is rerendered
  // be careful with trigger infinite loop like with comment in function
  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
