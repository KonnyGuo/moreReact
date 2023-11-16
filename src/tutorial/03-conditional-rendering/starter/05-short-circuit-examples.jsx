import { useState } from "react";

// can use and/or inside elements and control what we want to return
// ! not operator negates boolean
// components must be capitalized do not forget
// review props

const NameComponent = ({ name }) => {
  return <h4>Hello there user {name}</h4>;
};

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      {/* try text if not go default */}
      {/* <h2> {text || "default val"} </h2> */}
      {/* if text if true then return second operand */}
      {/* {text && (
        <div>
          <h2> something returns if text is true </h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {/* since user is truthy, evaluate NameComponent */}
      {user && <NameComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}> Ternary Op</h2>
      <button className="btn">
        {" "}
        {isEditing ? "statement true" : "statement false"}{" "}
      </button>
    </div>
  );
};

export default ShortCircuitExamples;
