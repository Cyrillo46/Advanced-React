import { useEffect, useState } from "react";
/*
 practice on setting up state values and data fetching
- create state variable
  - user - default value null
- fetch data from the url (for now just log result)
- if you see user object in the console, continue with the vide
 */
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    };

    FetchData();
  }, []);

  return (
    <>
      <h2>Fetch Data </h2>
      <div>
        <ul>{user && user.login && <li>{user.login}</li>}</ul>
      </div>
    </>
  );
};
export default MultipleReturnsFetchData;
