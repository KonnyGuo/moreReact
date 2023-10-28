import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsloading] = useState(ture);

  if (isLoading) {
    return <h2> is loading...</h2>;
  }

  return (
    <div>
      return <h2> not loading </h2>
    </div>
  );
};
export default MultipleReturnsBasics;
