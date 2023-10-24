import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div>
        {users.map((user) => (
          <div>
            <img src="{user.avatar}" alt="photo of user" />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FetchData;
