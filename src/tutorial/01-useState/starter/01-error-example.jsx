const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
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
