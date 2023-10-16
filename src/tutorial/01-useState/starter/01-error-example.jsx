// logic does not work in react because rerender is not getting trigger -> need to set up state value
// use state hook

const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    console.log(count);
    count++;
  };

  return (
    <div>
      <h2> {count} </h2>
      <button className="btn" type="submit" onClick={handleClick}>
        addCount
      </button>
    </div>
  );
};

export default ErrorExample;
