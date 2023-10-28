import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

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
