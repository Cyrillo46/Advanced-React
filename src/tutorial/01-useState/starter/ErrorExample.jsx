import { useState } from "react";

function ErrorExample() {
  let count = 0;

  const handleClick = () => {
    count++;
    console.log("clicked");
  };
  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </>
  );
}
export default ErrorExample;
