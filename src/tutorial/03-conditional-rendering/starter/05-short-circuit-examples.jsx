import { useState } from "react";

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
      {text || (
        <div>
          <h2> something returns if text is false </h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitExamples;
