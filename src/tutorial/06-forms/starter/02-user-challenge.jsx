import { data } from "../../../data";
import { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <button type="delete" onClick={() => removeUser(user.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
