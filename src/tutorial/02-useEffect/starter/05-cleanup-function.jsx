import { useEffect } from "react";
import { useState } from "react";
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {/* if toggle is true in jsx, then return random component */}
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  // in any component we can set up useEffect, 2 arguments function and dependency array
  // if you are displaying useEffect conditionally then it can render multiple times
  useEffect(() => {
    console.log("how many times will this show up");
  }, []);
  return <h1> hello world </h1>;
};

export default CleanupFunction;
