import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [deleteId, setDeleteId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email) {
      alert("Please fill the form");
      return;
    }

    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);

    setName("");
    setEmail("");
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (!deleteId) {
      alert("Please enter the id of the user to delete");
      return;
    }

    const idToDelete = parseInt(deleteId);
    const userExists = users.find((user) => user.id === idToDelete);
    const userMessage = "User Doesn't exist";

    if (!userExists) {
      alert("User with the given id does not exist");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete user ${
        userExists.id ? userExists.name : userMessage
      }`
    );
    if (!confirmDelete) {
      return;
    }

    const newUsers = users.filter((user) => user.id !== idToDelete);
    setUsers(newUsers);

    setDeleteId("");
  };

  return (
    <div>
      <h2>Add a new User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter a name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Enter an email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="Submit">Add User</button>
      </form>
      <br />
      <form onSubmit={handleDelete}>
        <h2>Delete Users</h2>
        <input
          type="number"
          placeholder="Enter the id of the user to delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
        />
        <button type="Submit">Delete User</button>
      </form>

      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} : {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserForm;
