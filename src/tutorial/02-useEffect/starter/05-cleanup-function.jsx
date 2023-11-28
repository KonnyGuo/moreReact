import { useState } from "react";
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
    </div>
  );
};

const RandomComponent = () => {
  return <h1> hello world </h1>;
};

export default CleanupFunction;
