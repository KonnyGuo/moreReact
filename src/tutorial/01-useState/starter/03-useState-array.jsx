import { data } from "../../../data";
import { useState } from "react";

// Hooks - Functions that let you "hook into" React features like state and lifecycle methods from function components. Examples: useState, useEffect, useContext, etc.
// hook rules
// Component must be captialized, keyword "use", don't call hooks conditionally, invoke instead function or component body,

// State - Data maintained within a component that can be updated to trigger re-renders when it changes.
// if you are manipulating list then useState is prob needed else if data is not changing useState will not be nesscary tho it is common practice to set it up just in case of potential use

const UseStateArray = () => {
  // const [data, useData] = useState(data);
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      if (person.id !== id) {
        return person;
      }
    });
    setPeople(newPeople);
  };

  const removeAll = () => {
    //make people into empty array
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4> {name} </h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
              type="button"
            >
              {" "}
              remove{" "}
            </button>
          </div>
        );
      })}

      <button onClick={removeAll} type="button" style={{ marginTop: "2rem" }}>
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
