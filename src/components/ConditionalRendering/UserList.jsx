export default function UserList({ users }) {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">User List</h2>
      <ul className="mt-3">
        {users.map((user) => (
          <li key={user.id} className="text-lg">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
