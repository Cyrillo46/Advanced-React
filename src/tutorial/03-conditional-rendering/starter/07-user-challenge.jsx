import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser({ name: "Anthony" });
  };

  const logout = (user) => {
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <h4>Hello there, {user.name}!</h4>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please log in</h4>
          <button onClick={login}>Login</button>
        </div>
      )}
    </>
  );
};
/*
- create state value
  - user - default value null
- create two functions
  - login - set's user equal to object with name property
  - logout - set's user equal to null
- in jsx use ? to display two different setups

- h4 with "hello there, user name" and logout button
- h4 with "please login " and login button
*/
export default UserChallenge;
