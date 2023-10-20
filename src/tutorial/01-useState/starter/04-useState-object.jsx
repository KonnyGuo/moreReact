import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("reading");

  const displayPerson = () => {
    setName("john");
    setAge(25);
    setHobby("running");
  };

  return (
    <>
      <h3> {name} </h3>
      <h3> {age} </h3>
      <h3> Enjoys: {hobby} </h3>
      <button className="btn" onClick={displayPerson}>
        {" "}
        show next person
      </button>
    </>
  );
};

export default UseStateObject;
