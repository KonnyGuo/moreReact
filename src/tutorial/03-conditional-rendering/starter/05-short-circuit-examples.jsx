import { useState } from "react";

// can use and/or inside elements and control what we want to return
// ! not operator negates boolean

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* try text if not go default */}
      <h2> {text || "default val"} </h2>
      {/* if text if true then return second operand */}
      {text && (
        <div>
          <h2> something returns if text is true </h2>
          <h2>{name}</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitExamples;
