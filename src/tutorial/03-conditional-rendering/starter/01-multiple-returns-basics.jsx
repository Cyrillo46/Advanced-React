import { useEffect, useState } from "react";
/*
 practice on setting up state values and data fetching
- create state variable
  - user - default value null
- fetch data from the url (for now just log result)
- if you see user object in the console, continue with the videos
*/
const MultipleReturnsBasics = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);

  const url = "https://api.github.com/users/QuincyLarson";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error!</h2>;
  }

  return <h2>{user.login}</h2>;
};
export default MultipleReturnsBasics;
