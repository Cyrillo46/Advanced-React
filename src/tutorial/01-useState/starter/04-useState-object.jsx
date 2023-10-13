import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ant",
    age: 28,
    hobby: "Video Games",
  });

  const handlePerson = () =>
    setPerson({ name: "Anthony", age: 29, hobby: "Coding" });

  return (
    <>
      <h2>useState object example</h2>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.hobby}</div>
      <button onClick={handlePerson}>Change Now!</button>
    </>
  );
};

export default UseStateObject;

/* 
- setup three state values
  - name(string)
  - age(number)
  - hobby(string)
- render in the browser
- create a button
  - setup a function
    - update all three state values
- as a result once the user clicks the button,
  new person is displayed in the browser
*/
