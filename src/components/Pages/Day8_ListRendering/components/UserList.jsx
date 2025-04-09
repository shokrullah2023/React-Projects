import React, { useState } from "react";

const UserList = () => {
const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, gender: "Female"},
    { id: 2, name: "Bob", age: 30, gender: "Male"},
    { id: 3, name: "Chalie", age: 22, gender: "Male"},
    { id:4, name: "Diana", age: 28, gender: "Female"}
]);

const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
}

return (
    <div>
        <button onClick={sortUsers}> Sort Users</button>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} - {user.gender})
                </li>
            ))}
        </ul>
    </div>
)
}

export default UserList;