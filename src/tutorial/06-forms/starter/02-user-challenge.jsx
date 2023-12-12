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
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setName("");
  };

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label"></label>
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
        <button type="delete" onClick={deleteUser}></button>
      </form>
      <h3>Users</h3>
      <hr />
      {users.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button
            type="button"
            onClick={() => deleteUser(person.id)}
            className="btn btn-danger">
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
