import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <button onClick={handleClick}> click here </button>
    </div>
  );
};

export default UseStateGotcha;
