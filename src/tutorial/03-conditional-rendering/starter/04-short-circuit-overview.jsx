import { useState } from "react";

// (condition)
// falsly values in js include 0, false, empty string, null, underfine, nan
// truthy values includes objects and arrays
// short circuit evaluation using && ||
// using &&, returns first operand if falsy. Return second operand if its falsy and first one is truthy ex: const x = 0, const y = 1. x && y returns 0. y && x returns 0
// using ||, returns first operand if truthy. Return second operand first one is falsy

const ShortCircuitOverview = () => {
  const [condition, setCondition] = useState(true);

  return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
