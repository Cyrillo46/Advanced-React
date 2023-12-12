import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Controlled Inputs</h4>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledInputs;
