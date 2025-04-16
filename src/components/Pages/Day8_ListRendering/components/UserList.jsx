
export default function UserList({ users }) {
return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {users.map((user) => (
                    <UserCard key={user.id} user={user} />
            ))}
    </div>
)
}