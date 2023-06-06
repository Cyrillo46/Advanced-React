function ErrorExample() {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  };
  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </>
  );
}
export default ErrorExample;
