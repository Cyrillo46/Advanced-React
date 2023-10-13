import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((currentCount) => currentCount + 1);
    }, 3000);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <div>{count}</div>
      <button onClick={handleClick}>increment</button>
    </>
  );
};

export default UseStateGotcha;

/*
- setup a state value and the button
- add functionality to increase value by 1
- log a state value, right after setFunction

Keep in mind that the state update function setState does not immediately mutate the state. Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle. Be mindful when you need to set state value based on a different state value.
*/
