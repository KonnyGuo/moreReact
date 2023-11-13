import { useState } from "react";

// (condition)
// falsly values in js include 0, false, empty string, null, underfine, nan
// truthy values includes objects and arrays
// short circuit evaluation using && ||
// using &&, returns first operand if falsy. Return second operand if its falsy and first one is truthy ex: const x = 0, const y = 1. x && y returns 0. y && x returns 0
// using ||, returns first operand if truthy. Return second operand first one is falsy

const ShortCircuitOverview = () => {
  // falsy
  const [condition, setCondition] = useState("");

  // truthy. Susan as default
  const [name, setName] = useState("susan");

  return (
    <div>
      {/* hello world should get displayed because condition is falsy (empty string)*/}
      <h2> falsy OR : {condition || "hello world"}</h2>
      {/* empty string returned because its falsy */}
      <h2> falsy AND : {condition && "hello world"}</h2>
      {/* name (susan) return because its truthy */}
      <h2> Truthy OR : {name || "hello world"}</h2>
      {/* hello world return because name is truthy */}
      <h2> Truthy AND : {name && "hello world"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
