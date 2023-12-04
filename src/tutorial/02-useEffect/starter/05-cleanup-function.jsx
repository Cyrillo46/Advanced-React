import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(null);
  const [name, setName] = useState(null);
  return (
    <>
      <h2>cleanup function</h2>;
      <button onClick={() => setValue(!value)}>Toggle</button>
      <div>
        {value && (
          <div>
            <h3>{name || Toggled}</h3>
            {() => useEffect(setName("Anthony"), [])}
          </div>
        )}
      </div>
    </>
  );
};

export default CleanupFunction;

/*
- create state value
- in jsx return button which toggles state value
- based on condition return second component (simple return)
- inside second component create useEffect and run it only on initial render
*/
