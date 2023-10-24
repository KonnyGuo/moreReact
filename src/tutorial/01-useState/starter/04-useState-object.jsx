import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "cycling",
  });

  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("reading");

  const displayPerson = () => {
    setPerson({ ...person, name: "john" });
    // setName("john");
    // setAge(25);
    // setHobby("running");
  };

  return (
    <>
      <h3> {person.name} </h3>
      <h3> {person.age} </h3>
      <h3> Enjoys: {person.hobby} </h3>
      <button className="btn" onClick={displayPerson}>
        {" "}
        show next person
      </button>
    </>
  );
};

export default UseStateObject;
