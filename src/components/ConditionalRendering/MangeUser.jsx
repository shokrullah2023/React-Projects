import React, { useState } from "react";
import EditableUserList from "./EditableUserList";
import UserList from "./UserList";

export default function ManageUser() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (name.length < 3 || !email.includes("@")) return alert("Invalid Input");

    const newUser = { id: Date.now(), name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, newName, newEmail) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: newName, email: newEmail } : user
      )
    );
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Manage Users</h2>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 m-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 m-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={addUser}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      <EditableUserList users={users} updateUser={updateUser} />

      <UserList users={users} />

      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => removeUser(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded m-2"
        >
          Remove {user.name}
        </button>
      ))}
    </div>
  );
}
