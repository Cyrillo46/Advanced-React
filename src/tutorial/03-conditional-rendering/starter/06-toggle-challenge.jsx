import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <>
      <button onClick={handleClick}>Display picture</button>
      <br />
      {value && (
        <img src="" alt="There's supposed to be a picture here, I swear!" />
      )}
    </>
  );
};

export default ToggleChallenge;

/*
- create state value (boolean)
- return a button and a component/element
- when user clicks the button
  - toggle state value
  - conditionally render component/element
*/
