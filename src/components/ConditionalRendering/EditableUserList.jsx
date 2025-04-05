import React, { useState } from "react";

export default function EditableUserList({ users, updateUser }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Editable User List</h2>
      {users.map((user) => (
        <EditableUser key={user.id} user={user} updateUser={updateUser} />
      ))}
    </div>
  );
}

function EditableUser({ user, updateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleSave = () => {
    updateUser(user.id, newName, newEmail);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 p-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border p-1"
          />

          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border p-1"
          />

          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p>
            {user.name} - {user.email}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
