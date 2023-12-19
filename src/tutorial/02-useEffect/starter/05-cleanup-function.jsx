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
  useEffect(() => {
    const someFunc = () => {
      // any logic
    };
    window.addEventListener("scroll", someFunc);
    // inspect elements event listener to see scroll

    // cleanup function so that scroll event does not keep happening
    return () => window.addEventListener("scroll", someFunc);
  }, []);
  return <h1> hello world </h1>;
};

// const RandomComponent = () => {
//   // in any component we can set up useEffect, 2 arguments function and dependency array
//   // if you are displaying useEffect conditionally then it can render multiple times
//   useEffect(() => {
//     console.log("how many times will this show up");
//     // need to set up an id for clear interval otherwise the setInterval will keep running
//     const intID = setInterval(() => {
//       console.log("from interval");
//     }, 1000);
//     // cleanup function below
//     // ex of subscribing and unsubscribing
//     return () => {
//       clearInterval(intID);
//       console.log("cleanup");
//     };
//   }, []);
//   return <h1> hello world </h1>;
// };

export default CleanupFunction;
