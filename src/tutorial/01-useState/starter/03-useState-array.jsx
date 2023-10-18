import { data, people } from "../../../data";
import { useState } from "react";

// hook rules
// Component must be captialized, keyword "use", don't call hooks conditionally, invoke instead function or component body,

const UseStateArray = () => {
  const [data, useData] = useState(data);
  // const [people, usePeople] = useState(people);
  const loopData = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(`${i}: ${data[i].name}`);
    }
  };

  return (
    <div>
      <button type="button" onClick={loopData}>
        click here
      </button>
    </div>
  );
};

export default UseStateArray;
