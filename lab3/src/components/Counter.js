const Counter = ({
  count,
  incrementHandler,
  decrementHandler,
  resetHandler,
}) => {
  return (
    <>
      <div>
        <h1>
          Count:
          <span
            className={
              count > 0 ? "active" : count === 0 ? "normal" : "inactive"
            }
          >
            {count}
          </span>
        </h1>
      </div>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incrementHandler}>Increment</button>
    </>
  );
};

export default Counter;
